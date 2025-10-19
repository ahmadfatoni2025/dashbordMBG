import { FolderOpen, Clock, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    { id: 1, name: "Product Catalog", status: "Active", members: 5, updated: "2 hours ago" },
    { id: 2, name: "Inventory System", status: "Active", members: 3, updated: "1 day ago" },
    { id: 3, name: "Analytics Dashboard", status: "In Progress", members: 4, updated: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
          <p className="text-muted-foreground">Manage your active projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FolderOpen className="w-6 h-6 text-primary" />
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  {project.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{project.name}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{project.members} members</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Updated {project.updated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
