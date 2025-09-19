import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const revenueData = [
  { month: "Jan", subscriptions: 45000, campaigns: 12000 },
  { month: "Feb", subscriptions: 52000, campaigns: 15000 },
  { month: "Mar", subscriptions: 48000, campaigns: 18000 },
  { month: "Apr", subscriptions: 61000, campaigns: 22000 },
  { month: "May", subscriptions: 55000, campaigns: 25000 },
  { month: "Jun", subscriptions: 67000, campaigns: 30000 },
];

const userDistributionData = [
  { name: "Brand Owners", value: 1250, color: "hsl(var(--primary))" },
  { name: "Wholesalers", value: 3200, color: "hsl(var(--primary-light))" },
  { name: "Retailers", value: 8500, color: "hsl(var(--success))" },
  { name: "End Customers", value: 15600, color: "hsl(var(--warning))" },
];

const regionalData = [
  { region: "North", dealers: 245 },
  { region: "South", dealers: 320 },
  { region: "East", dealers: 180 },
  { region: "West", dealers: 290 },
  { region: "Central", dealers: 156 },
];

export function RevenueChart() {
  const chartConfig = {
    subscriptions: {
      label: "Subscriptions",
      color: "hsl(var(--primary))",
    },
    campaigns: {
      label: "Campaigns",
      color: "hsl(var(--success))",
    },
  };

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <LineChart data={revenueData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="subscriptions"
          stroke="var(--color-subscriptions)"
          strokeWidth={2}
          dot={{ fill: "var(--color-subscriptions)" }}
        />
        <Line
          type="monotone"
          dataKey="campaigns"
          stroke="var(--color-campaigns)"
          strokeWidth={2}
          dot={{ fill: "var(--color-campaigns)" }}
        />
      </LineChart>
    </ChartContainer>
  );
}

export function UserDistributionChart() {
  const chartConfig = {
    users: {
      label: "Users",
    },
  };

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <PieChart>
        <Pie
          data={userDistributionData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
        >
          {userDistributionData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
      </PieChart>
    </ChartContainer>
  );
}

export function RegionalChart() {
  const chartConfig = {
    dealers: {
      label: "Dealers",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <BarChart data={regionalData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="region" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="dealers" fill="var(--color-dealers)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}