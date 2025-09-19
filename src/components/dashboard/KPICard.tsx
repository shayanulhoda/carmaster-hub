import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  color?: "primary" | "success" | "warning" | "destructive";
}

export function KPICard({ title, value, subtitle, icon: Icon, trend, color = "primary" }: KPICardProps) {
  const getColorClasses = () => {
    switch (color) {
      case "success":
        return "text-success bg-success/5 border-success/20";
      case "warning":
        return "text-warning bg-warning/5 border-warning/20";
      case "destructive":
        return "text-destructive bg-destructive/5 border-destructive/20";
      default:
        return "text-primary bg-primary/5 border-primary/20";
    }
  };

  const getTrendColor = () => {
    if (!trend) return "";
    return trend.value > 0 ? "text-success" : trend.value < 0 ? "text-destructive" : "text-muted-foreground";
  };

  return (
    <Card className="dashboard-kpi-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className={`p-2 rounded-lg border ${getColorClasses()}`}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
        {trend && (
          <div className="flex items-center mt-2">
            <span className={`text-xs font-medium ${getTrendColor()}`}>
              {trend.value > 0 ? "+" : ""}{trend.value}%
            </span>
            <span className="text-xs text-muted-foreground ml-2">{trend.label}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}