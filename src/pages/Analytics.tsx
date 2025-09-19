import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RevenueChart, UserDistributionChart, RegionalChart } from "@/components/charts/DashboardCharts";
import { 
  TrendingUp, 
  Download, 
  Calendar,
  Users,
  DollarSign,
  Target,
  BarChart3
} from "lucide-react";

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Analytics & Reports</h1>
              <p className="text-muted-foreground">Comprehensive platform analytics and business intelligence</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
              <Button className="admin-button-primary" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Analytics Content */}
        <div className="p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹97.2L</div>
                <p className="text-xs text-muted-foreground">+22% from last month</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Platform Growth</CardTitle>
                <TrendingUp className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+15.8%</div>
                <p className="text-xs text-muted-foreground">Monthly active users</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
                <Target className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.4%</div>
                <p className="text-xs text-muted-foreground">Lead to customer</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Customer Retention</CardTitle>
                <Users className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92.3%</div>
                <p className="text-xs text-muted-foreground">12-month retention</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>Subscription and campaign revenue trends</CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueChart />
              </CardContent>
            </Card>

            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>User Segmentation</CardTitle>
                <CardDescription>Distribution of users by role type</CardDescription>
              </CardHeader>
              <CardContent>
                <UserDistributionChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="dashboard-card lg:col-span-2">
              <CardHeader>
                <CardTitle>Regional Performance</CardTitle>
                <CardDescription>Dealer distribution and market penetration</CardDescription>
              </CardHeader>
              <CardContent>
                <RegionalChart />
              </CardContent>
            </Card>

            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Top Performing Metrics</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Brand Engagement</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "94%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Campaign Success Rate</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>User Satisfaction</span>
                    <span className="font-medium">91%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: "91%" }}></div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full" size="sm">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Detailed Reports
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Report Generation */}
          <Card>
            <CardHeader>
              <CardTitle>Report Generation</CardTitle>
              <CardDescription>Generate and export custom reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <h3 className="font-semibold mb-1">User Reports</h3>
                    <p className="text-sm text-muted-foreground">Growth, registration, activity trends</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <h3 className="font-semibold mb-1">Revenue Reports</h3>
                    <p className="text-sm text-muted-foreground">Financial performance and trends</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Target className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <h3 className="font-semibold mb-1">Campaign Reports</h3>
                    <p className="text-sm text-muted-foreground">Marketing performance analytics</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}