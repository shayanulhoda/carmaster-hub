import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { RevenueChart, UserDistributionChart, RegionalChart } from "@/components/charts/DashboardCharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Car, 
  Package, 
  DollarSign, 
  Megaphone, 
  Wallet,
  UserCheck,
  Eye,
  AlertTriangle
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
              <p className="text-muted-foreground">Monitor your platform's performance and key metrics</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                Export Report
              </Button>
              <Button className="admin-button-primary" size="sm">
                View Details
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPICard
              title="Total Users"
              value="28,547"
              subtitle="Active platform users"
              icon={Users}
              trend={{ value: 12.5, label: "from last month" }}
              color="primary"
            />
            <KPICard
              title="Total Cars"
              value="15,234"
              subtitle="Brands & Models listed"
              icon={Car}
              trend={{ value: 8.2, label: "from last month" }}
              color="success"
            />
            <KPICard
              title="Accessories"
              value="89,512"
              subtitle="Categories mapped"
              icon={Package}
              trend={{ value: 15.3, label: "from last month" }}
              color="warning"
            />
            <KPICard
              title="Revenue"
              value="₹12.8L"
              subtitle="This month"
              icon={DollarSign}
              trend={{ value: 22.1, label: "from last month" }}
              color="primary"
            />
          </div>

          {/* Secondary KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KPICard
              title="Active Campaigns"
              value="145"
              subtitle="12 pending approval"
              icon={Megaphone}
              color="warning"
            />
            <KPICard
              title="Wallet Balance"
              value="₹4.2L"
              subtitle="Total platform balance"
              icon={Wallet}
              color="success"
            />
            <KPICard
              title="KYC Pending"
              value="28"
              subtitle="Requires review"
              icon={UserCheck}
              color="destructive"
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>Subscription and campaign revenue over time</CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueChart />
              </CardContent>
            </Card>

            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>User Distribution</CardTitle>
                <CardDescription>Platform users by role</CardDescription>
              </CardHeader>
              <CardContent>
                <UserDistributionChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="dashboard-card lg:col-span-2">
              <CardHeader>
                <CardTitle>Regional Distribution</CardTitle>
                <CardDescription>Dealer distribution across regions</CardDescription>
              </CardHeader>
              <CardContent>
                <RegionalChart />
              </CardContent>
            </Card>

            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <UserCheck className="w-4 h-4 mr-2" />
                  Approve KYC (28 pending)
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Megaphone className="w-4 h-4 mr-2" />
                  Review Campaigns (12 pending)
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Moderate Content (5 flagged)
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  System Alerts (2 active)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
