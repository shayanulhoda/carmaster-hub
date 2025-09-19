import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Eye, 
  Edit3,
  CreditCard,
  Wallet,
  Calendar,
  TrendingUp,
  Users,
  RefreshCw
} from "lucide-react";

const subscriptionPackages = [
  { id: 1, duration: "3 Months", price: "₹2,999", status: "Active", subscribers: 1250, description: "Basic plan with core features" },
  { id: 2, duration: "6 Months", price: "₹5,499", status: "Active", subscribers: 2340, description: "Popular plan with premium features" },
  { id: 3, duration: "12 Months", price: "₹9,999", status: "Active", subscribers: 3890, description: "Annual plan with all features" },
  { id: 4, duration: "24 Months", price: "₹18,999", status: "Disabled", subscribers: 156, description: "Enterprise plan for large businesses" },
];

const walletData = [
  { id: 1, user: "Maruti Suzuki", userType: "Brand", balance: "₹2,45,000", lastRecharge: "2024-01-15", totalSpend: "₹5,67,890" },
  { id: 2, user: "Auto Parts Hub", userType: "Wholesaler", balance: "₹89,500", lastRecharge: "2024-01-18", totalSpend: "₹3,45,200" },
  { id: 3, user: "Hyundai Motors", userType: "Brand", balance: "₹3,78,000", lastRecharge: "2024-01-12", totalSpend: "₹8,90,450" },
  { id: 4, user: "Premium Auto", userType: "Wholesaler", balance: "₹1,23,400", lastRecharge: "2024-01-20", totalSpend: "₹2,78,600" },
  { id: 5, user: "Tata Motors", userType: "Brand", balance: "₹4,56,700", lastRecharge: "2024-01-14", totalSpend: "₹12,34,800" },
];

const rechargeRequests = [
  { id: 1, user: "City Auto Shop", amount: "₹50,000", method: "Bank Transfer", status: "Pending", date: "2024-01-22" },
  { id: 2, user: "Highway Motors", amount: "₹25,000", method: "UPI", status: "Approved", date: "2024-01-21" },
  { id: 3, user: "Express Car Care", amount: "₹75,000", method: "Cheque", status: "Pending", date: "2024-01-20" },
];

function SubscriptionPackagesTable() {
  const getStatusBadge = (status: string) => {
    return status === "Active" ? 
      <Badge className="status-active">Active</Badge> : 
      <Badge className="status-inactive">Disabled</Badge>;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Subscription Packages</h3>
          <p className="text-sm text-muted-foreground">Manage pricing and duration options</p>
        </div>
        <Button className="admin-button-primary" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Create Package
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {subscriptionPackages.map((pkg) => (
          <Card key={pkg.id} className="dashboard-card">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{pkg.duration}</CardTitle>
                {getStatusBadge(pkg.status)}
              </div>
              <div className="text-2xl font-bold text-primary">{pkg.price}</div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{pkg.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subscribers:</span>
                <span className="font-medium">{pkg.subscribers.toLocaleString()}</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit3 className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function WalletBalancesTable() {
  const getUserTypeBadge = (type: string) => {
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
            <Input placeholder="Search wallets..." className="pl-10 w-80" />
          </div>
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
            <RefreshCw className="w-4 h-4 mr-2" />
            Manual Adjustment
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Type</th>
                <th>Current Balance</th>
                <th>Last Recharge</th>
                <th>Total Spent</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {walletData.map((wallet) => (
                <tr key={wallet.id} className="hover:bg-muted/50">
                  <td>
                    <div className="font-medium">{wallet.user}</div>
                  </td>
                  <td>{getUserTypeBadge(wallet.userType)}</td>
                  <td>
                    <div className="font-bold text-success">{wallet.balance}</div>
                  </td>
                  <td>{wallet.lastRecharge}</td>
                  <td>
                    <div className="font-medium">{wallet.totalSpend}</div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <RefreshCw className="w-4 h-4" />
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

function RechargeRequestsTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="status-active">Approved</Badge>;
      case "Pending":
        return <Badge className="status-pending">Pending</Badge>;
      case "Rejected":
        return <Badge className="status-inactive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Recharge Requests</h3>
          <p className="text-sm text-muted-foreground">Manual wallet recharge approvals</p>
        </div>
        <Button className="admin-button-primary" size="sm">
          Approve All Pending
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rechargeRequests.map((request) => (
                <tr key={request.id} className="hover:bg-muted/50">
                  <td>
                    <div className="font-medium">{request.user}</div>
                  </td>
                  <td>
                    <div className="font-bold">{request.amount}</div>
                  </td>
                  <td>
                    <Badge variant="outline">{request.method}</Badge>
                  </td>
                  <td>{request.date}</td>
                  <td>{getStatusBadge(request.status)}</td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {request.status === "Pending" && (
                        <>
                          <Button variant="ghost" size="sm" className="text-success hover:text-success">
                            Approve
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            Reject
                          </Button>
                        </>
                      )}
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

export default function Subscriptions() {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Subscription & Wallet Management</h1>
              <p className="text-muted-foreground">Manage subscription plans, wallet balances, and payment processing</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Revenue Analytics
              </Button>
              <Button className="admin-button-primary" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Payment Schedule
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Subscribers</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7,636</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Revenue</CardTitle>
                <CreditCard className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹45.2L</div>
                <p className="text-xs text-muted-foreground">+18% from last month</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Wallet Balance</CardTitle>
                <Wallet className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹28.9L</div>
                <p className="text-xs text-muted-foreground">Platform-wide balance</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Renewals Due</CardTitle>
                <Calendar className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">234</div>
                <p className="text-xs text-muted-foreground">Next 30 days</p>
              </CardContent>
            </Card>
          </div>

          {/* Subscription & Wallet Management */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Management</CardTitle>
              <CardDescription>Manage subscription packages, wallet balances, and payment processing</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="packages" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="packages">Subscription Packages</TabsTrigger>
                  <TabsTrigger value="wallets">Wallet Balances</TabsTrigger>
                  <TabsTrigger value="recharges">Recharge Requests</TabsTrigger>
                </TabsList>

                <TabsContent value="packages">
                  <SubscriptionPackagesTable />
                </TabsContent>

                <TabsContent value="wallets">
                  <WalletBalancesTable />
                </TabsContent>

                <TabsContent value="recharges">
                  <RechargeRequestsTable />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}