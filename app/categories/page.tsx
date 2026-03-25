import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  "Fiction",
  "Programming",
  "Productivity",
  "Self Development",
  "Business",
  "History",
];

export default function CategoriesPage() {
  return (
    <main className="py-12">
      <Container>
        <div className="space-y-8">
          <SectionHeading
            title="Categories"
            description="Browse books by category."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category} className="rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
