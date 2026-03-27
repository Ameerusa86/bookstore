import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

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
    <main className="animate-gentle-fade py-10 md:py-14">
      <Container>
        <div className="space-y-8">
          <SectionHeading
            title="Categories"
            description="Browse focus areas designed for practical learning and deep thinking."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card
                key={category}
                className="group rounded-3xl border-border/70 bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="flex items-center justify-between p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {category}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
