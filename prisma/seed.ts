import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { PrismaClient, UserRole, OrderStatus } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";

const envFiles = [".env.local", ".env"];

for (const envFile of envFiles) {
  const envPath = resolve(process.cwd(), envFile);

  if (existsSync(envPath)) {
    process.loadEnvFile(envPath);
  }
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString || !connectionString.includes("://")) {
  throw new Error("DATABASE_URL is not set in your environment.");
}

neonConfig.webSocketConstructor = ws;

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.book.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  const adminUser = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@bookstore.com",
      password: "hashed-password-placeholder",
      role: UserRole.ADMIN,
    },
  });

  const customerUser = await prisma.user.create({
    data: {
      name: "John Customer",
      email: "customer@bookstore.com",
      password: "hashed-password-placeholder",
      role: UserRole.CUSTOMER,
    },
  });

  const fictionCategory = await prisma.category.create({
    data: {
      name: "Fiction",
      slug: "fiction",
    },
  });

  const businessCategory = await prisma.category.create({
    data: {
      name: "Business",
      slug: "business",
    },
  });

  const technologyCategory = await prisma.category.create({
    data: {
      name: "Technology",
      slug: "technology",
    },
  });

  const atomicHabits = await prisma.book.create({
    data: {
      title: "Atomic Habits",
      slug: "atomic-habits",
      description:
        "A practical guide to building good habits and breaking bad ones.",
      author: "James Clear",
      price: "19.99",
      stock: 25,
      imageUrl: "/images/books/atomic-habits.jpg",
      isFeatured: true,
      isPublished: true,
      categoryId: businessCategory.id,
    },
  });

  const cleanCode = await prisma.book.create({
    data: {
      title: "Clean Code",
      slug: "clean-code",
      description: "A handbook of agile software craftsmanship.",
      author: "Robert C. Martin",
      price: "29.99",
      stock: 12,
      imageUrl: "/images/books/clean-code.jpg",
      isFeatured: true,
      isPublished: true,
      categoryId: technologyCategory.id,
    },
  });

  const alchemist = await prisma.book.create({
    data: {
      title: "The Alchemist",
      slug: "the-alchemist",
      description: "A philosophical novel about following your dreams.",
      author: "Paulo Coelho",
      price: "17.99",
      stock: 30,
      imageUrl: "/images/books/the-alchemist.jpg",
      isFeatured: false,
      isPublished: true,
      categoryId: fictionCategory.id,
    },
  });

  const sampleOrder = await prisma.order.create({
    data: {
      userId: customerUser.id,
      totalAmount: "67.97",
      status: OrderStatus.PAID,
    },
  });

  await prisma.orderItem.createMany({
    data: [
      {
        orderId: sampleOrder.id,
        bookId: atomicHabits.id,
        quantity: 1,
        price: "19.99",
      },
      {
        orderId: sampleOrder.id,
        bookId: cleanCode.id,
        quantity: 1,
        price: "29.99",
      },
      {
        orderId: sampleOrder.id,
        bookId: alchemist.id,
        quantity: 1,
        price: "17.99",
      },
    ],
  });

  console.log("Database seeded successfully.");
  console.log("Admin:", adminUser.email);
  console.log("Customer:", customerUser.email);
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
