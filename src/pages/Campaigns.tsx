import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Eye, 
  Check, 
  X, 
  DollarSign,
  TrendingUp,
  Users,
  Target,
  Megaphone,
  MessageSquare
} from "lucide-react";

const campaignsData = [
  { 
    id: "CMP001", 
    owner: "Maruti Suzuki", 
    type: "Brand", 
    title: "New Swift Launch", 
    targetRegion: "North India", 
    dealersReached: 245, 
    status: "Pending", 
    spend: "₹2,50,000",
    reach: "12,500",
    startDate: "2024-01-15"
  },
  { 
    id: "CMP002", 
    owner: "Auto Parts Hub", 
    type: "Wholesaler", 
    title: "Premium Accessories", 
    targetRegion: "All Regions", 
    dealersReached: 1200, 
    status: "Active", 
    spend: "₹1,80,000",
    reach: "25,600",
    startDate: "2024-01-10"
  },
  { 
    id: "CMP003", 
    owner: "Hyundai Motors", 
    type: "Brand", 
    title: "Creta Facelift", 
    targetRegion: "South India", 
    dealersReached: 180, 
    status: "Rejected", 
    spend: "₹3,20,000",
    reach: "8,900",
    startDate: "2024-01-20"
  },
  { 
    id: "CMP004", 
    owner: "Premium Auto", 
    type: "Wholesaler", 
    title: "Winter Collection", 
    targetRegion: "North India", 
    dealersReached: 320, 
    status: "Completed", 
    spend: "₹95,000",
    reach: "18,400",
    startDate: "2024-01-05"
  },
  { 
    id: "CMP005", 
    owner: "Tata Motors", 
    type: "Brand", 
    title: "Electric Vehicle Push", 
    targetRegion: "West India", 
    dealersReached: 156, 
    status: "Pending", 
    spend: "₹4,50,000",
    reach: "15,200",
    startDate: "2024-01-25"
  },
];

function CampaignsTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="status-active">Active</Badge>;
      case "Pending":
        return <Badge className="status-pending">Pending</Badge>;
      case "Rejected":
        return <Badge className="status-inactive">Rejected</Badge>;
      case "Completed":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Completed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    return type === "Brand" ? 
      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Brand</Badge> :
      <Badge className="bg-orange-100 text-orange-800 border-orange-200">Wholesaler</Badge>;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search campaigns..." className="pl-10 w-80" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Status
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Type
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="admin-button-primary" size="sm">
            <Check className="w-4 h-4 mr-2" />
            Bulk Approve
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Campaign ID</th>
                <th>Owner</th>
                <th>Type</th>
                <th>Title</th>
                <th>Region</th>
                <th>Reach</th>
                <th>Spend</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaignsData.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-muted/50">
                  <td>
                    <div className="font-mono text-sm">{campaign.id}</div>
                  </td>
                  <td>
                    <div className="font-medium">{campaign.owner}</div>
                  </td>
                  <td>{getTypeBadge(campaign.type)}</td>
                  <td>
                    <div className="font-medium">{campaign.title}</div>
                    <div className="text-xs text-muted-foreground">Started: {campaign.startDate}</div>
                  </td>
                  <td>{campaign.targetRegion}</td>
                  <td>
                    <div className="text-sm">
                      <div className="font-medium">{campaign.reach} users</div>
                      <div className="text-muted-foreground">{campaign.dealersReached} dealers</div>
                    </div>
                  </td>
                  <td>
                    <div className="font-medium">{campaign.spend}</div>
                  </td>
                  <td>{getStatusBadge(campaign.status)}</td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {campaign.status === "Pending" && (
                        <>
                          <Button variant="ghost" size="sm" className="text-success hover:text-success">
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            <X className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Campaigns() {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Campaign & Promotion Management</h1>
              <p className="text-muted-foreground">Review and manage marketing campaigns from brands and wholesalers</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Campaign Analytics
              </Button>
              <Button className="admin-button-primary" size="sm">
                <Check className="w-4 h-4 mr-2" />
                Review Queue (12)
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Campaigns</CardTitle>
                <Megaphone className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145</div>
                <p className="text-xs text-muted-foreground">+8 this week</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approval</CardTitle>
                <Users className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Awaiting review</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Reach</CardTitle>
                <Target className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.8M</div>
                <p className="text-xs text-muted-foreground">Users reached this month</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Spend</CardTitle>
                <DollarSign className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹28.5L</div>
                <p className="text-xs text-muted-foreground">Campaign spending this month</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Campaigns for Approval */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Pending Campaigns</CardTitle>
                <CardDescription>Campaigns requiring immediate review</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {campaignsData.filter(c => c.status === "Pending").slice(0, 3).map((campaign) => (
                  <div key={campaign.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{campaign.title}</h4>
                        <Badge className="bg-purple-100 text-purple-800 border-purple-200">{campaign.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{campaign.owner} • {campaign.targetRegion}</p>
                      <p className="text-sm">Budget: {campaign.spend} • Reach: {campaign.reach} users</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="text-success border-success hover:bg-success hover:text-success-foreground">
                        <Check className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                        <X className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Insights</CardTitle>
                <CardDescription>Performance overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Brand Campaigns</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Wholesaler Campaigns</span>
                    <span className="font-medium">32%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: "32%" }}></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground">Avg. Approval Time</div>
                  <div className="text-2xl font-bold">2.4 days</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All Campaigns Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Campaigns</CardTitle>
              <CardDescription>Complete campaign management and approval system</CardDescription>
            </CardHeader>
            <CardContent>
              <CampaignsTable />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}