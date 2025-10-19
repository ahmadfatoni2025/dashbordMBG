import { BarChart3, TrendingUp, DollarSign, Package } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
          <p className="text-muted-foreground">Track your product performance and insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                12%
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">$45,231</p>
            <p className="text-sm text-muted-foreground">Total Revenue</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                8%
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">2,345</p>
            <p className="text-sm text-muted-foreground">Products Sold</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-secondary/80 rounded-lg">
                <BarChart3 className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                5%
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">$19.25</p>
            <p className="text-sm text-muted-foreground">Average Order</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-muted rounded-lg">
                <TrendingUp className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                15%
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">3.2x</p>
            <p className="text-sm text-muted-foreground">Growth Rate</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-sm text-center">
          <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Analytics Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're working on detailed charts and insights to help you make better business decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
