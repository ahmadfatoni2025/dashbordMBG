import { Database as DatabaseIcon, Server, HardDrive } from "lucide-react";

const Database = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Database</h1>
          <p className="text-muted-foreground">Manage your data storage and connections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
              <DatabaseIcon className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">PostgreSQL</p>
            <p className="text-sm text-muted-foreground">Primary Database</p>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
              <Server className="w-6 h-6 text-accent" />
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">Redis Cache</p>
            <p className="text-sm text-muted-foreground">Caching Layer</p>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="p-3 bg-secondary/80 rounded-lg w-fit mb-4">
              <HardDrive className="w-6 h-6 text-secondary-foreground" />
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">S3 Storage</p>
            <p className="text-sm text-muted-foreground">File Storage</p>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
