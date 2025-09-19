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
  Edit3, 
  Trash2, 
  Package,
  Upload,
  Eye,
  Grid3X3,
  Move3D
} from "lucide-react";

const categoriesData = [
  { id: 1, name: "Interior Accessories", subcategories: 15, type: "Interior", status: "Active", icon: "🪑" },
  { id: 2, name: "Exterior Accessories", subcategories: 22, type: "Exterior", status: "Active", icon: "🚗" },
  { id: 3, name: "Performance Parts", subcategories: 18, type: "Performance", status: "Active", icon: "⚙️" },
  { id: 4, name: "Safety Equipment", subcategories: 12, type: "Safety", status: "Active", icon: "🛡️" },
  { id: 5, name: "Electronics", subcategories: 28, type: "Electronics", status: "Active", icon: "📱" },
];

const subcategoriesData = [
  { id: 1, category: "Interior Accessories", name: "Seat Covers", compatibleModels: 245, status: "Active" },
  { id: 2, category: "Interior Accessories", name: "Floor Mats", compatibleModels: 312, status: "Active" },
  { id: 3, category: "Exterior Accessories", name: "Roof Rails", compatibleModels: 156, status: "Active" },
  { id: 4, category: "Exterior Accessories", name: "Bumper Guards", compatibleModels: 289, status: "Active" },
  { id: 5, category: "Electronics", name: "Dash Cameras", compatibleModels: 402, status: "Active" },
];

const compatibilityData = [
  { subcategory: "Seat Covers", models: ["Swift", "Baleno", "Creta", "Nexon"], compatibility: "85%" },
  { subcategory: "Floor Mats", models: ["All Models"], compatibility: "100%" },
  { subcategory: "Roof Rails", models: ["Creta", "Nexon", "Thar"], compatibility: "45%" },
  { subcategory: "Bumper Guards", models: ["Swift", "i20", "Altroz"], compatibility: "72%" },
  { subcategory: "Dash Cameras", models: ["Universal"], compatibility: "95%" },
];

function CategoriesTable() {
  const getStatusBadge = (status: string) => {
    return status === "Active" ? 
      <Badge className="status-active">Active</Badge> : 
      <Badge className="status-inactive">Inactive</Badge>;
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      Interior: "bg-blue-100 text-blue-800 border-blue-200",
      Exterior: "bg-green-100 text-green-800 border-green-200",
      Performance: "bg-red-100 text-red-800 border-red-200",
      Safety: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Electronics: "bg-purple-100 text-purple-800 border-purple-200",
    };
    return <Badge className={colors[type as keyof typeof colors]}>{type}</Badge>;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search categories..." className="pl-10 w-80" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Type
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Move3D className="w-4 h-4 mr-2" />
            Reorder
          </Button>
          <Button className="admin-button-primary" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Type</th>
                <th>Subcategories</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categoriesData.map((category) => (
                <tr key={category.id} className="hover:bg-muted/50">
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{category.icon}</div>
                      <div className="font-medium">{category.name}</div>
                    </div>
                  </td>
                  <td>{getTypeBadge(category.type)}</td>
                  <td>
                    <Badge variant="secondary">{category.subcategories} items</Badge>
                  </td>
                  <td>{getStatusBadge(category.status)}</td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
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

function SubcategoriesTable() {
  const getStatusBadge = (status: string) => {
    return status === "Active" ? 
      <Badge className="status-active">Active</Badge> : 
      <Badge className="status-inactive">Inactive</Badge>;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search subcategories..." className="pl-10 w-80" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Category
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Bulk Upload
          </Button>
          <Button className="admin-button-primary" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Subcategory
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Parent Category</th>
                <th>Subcategory</th>
                <th>Compatible Models</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subcategoriesData.map((subcategory) => (
                <tr key={subcategory.id} className="hover:bg-muted/50">
                  <td>
                    <div className="font-medium text-muted-foreground">{subcategory.category}</div>
                  </td>
                  <td>
                    <div className="font-medium">{subcategory.name}</div>
                  </td>
                  <td>
                    <Badge variant="outline">{subcategory.compatibleModels} models</Badge>
                  </td>
                  <td>{getStatusBadge(subcategory.status)}</td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Grid3X3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
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

function CompatibilityMatrix() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Compatibility Mapping</h3>
          <p className="text-sm text-muted-foreground">Manage which accessories fit which car models</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Matrix View
          </Button>
          <Button className="admin-button-primary" size="sm">
            Bulk Assign
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Subcategory</th>
                <th>Compatible Models</th>
                <th>Compatibility Rate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {compatibilityData.map((item, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td>
                    <div className="font-medium">{item.subcategory}</div>
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-1">
                      {item.models.slice(0, 3).map((model, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {model}
                        </Badge>
                      ))}
                      {item.models.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{item.models.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: item.compatibility }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{item.compatibility}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Grid3X3 className="w-4 h-4" />
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

export default function Accessories() {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Accessories Management</h1>
              <p className="text-muted-foreground">Manage accessory categories and car model compatibility</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Matrix
              </Button>
              <Button className="admin-button-primary" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Import Compatibility
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Categories</CardTitle>
                <Package className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">95</div>
                <p className="text-xs text-muted-foreground">Main categories</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Subcategories</CardTitle>
                <Package className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,247</div>
                <p className="text-xs text-muted-foreground">Total subcategories</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Mappings</CardTitle>
                <Grid3X3 className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15,678</div>
                <p className="text-xs text-muted-foreground">Compatibility mappings</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg Compatibility</CardTitle>
                <Grid3X3 className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">Across all accessories</p>
              </CardContent>
            </Card>
          </div>

          {/* Accessories Management */}
          <Card>
            <CardHeader>
              <CardTitle>Accessories Database</CardTitle>
              <CardDescription>Manage categories, subcategories, and model compatibility</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="categories" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="categories">Categories</TabsTrigger>
                  <TabsTrigger value="subcategories">Subcategories</TabsTrigger>
                  <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
                </TabsList>

                <TabsContent value="categories">
                  <CategoriesTable />
                </TabsContent>

                <TabsContent value="subcategories">
                  <SubcategoriesTable />
                </TabsContent>

                <TabsContent value="compatibility">
                  <CompatibilityMatrix />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}