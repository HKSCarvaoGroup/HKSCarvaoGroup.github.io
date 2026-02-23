import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PolicyCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const PolicyCard = ({ title, description, icon: Icon, color }: PolicyCardProps) => {
  return (
    <Card className="transition-all hover:shadow-lg border-2">
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
