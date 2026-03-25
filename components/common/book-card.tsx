import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface BookCardProps {
  title: string;
  author: string;
  price: number;
}

export function BookCard({ title, author, price }: BookCardProps) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-semibold">${price}</p>
      </CardContent>
    </Card>
  );
}
