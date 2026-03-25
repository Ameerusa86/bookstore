import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: "available" | "out-of-stock" | "new";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const map = {
    available: "default",
    "out-of-stock": "destructive",
    new: "secondary",
  } as const;

  return <Badge variant={map[status]}>{status.replace("-", " ")}</Badge>;
}
