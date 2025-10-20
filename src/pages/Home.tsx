import { ArrowRight, Package, TrendingUp, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            <Shield className="w-4 h-4" />
            <span>Enterprise-Grade Product Management</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Optimalkan Pasokanmu, untuk
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
              Makan Bergisi Gratis
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, at.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button asChild size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
              <Link to="/products">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/analytics">View Analytics</Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Product Management</h3>
            <p className="text-sm text-muted-foreground">
              Add, edit, and manage your entire product catalog with ease.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Analytics</h3>
            <p className="text-sm text-muted-foreground">
              Track inventory levels and product performance in real-time.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-secondary/80 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Team Collaboration</h3>
            <p className="text-sm text-muted-foreground">
              Work together seamlessly with role-based access control.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Reliable</h3>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade security with automatic backups and encryption.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-primary-foreground shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">10K+</p>
              <p className="text-primary-foreground/80">Products Managed</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-primary-foreground/80">Active Users</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">99.9%</p>
              <p className="text-primary-foreground/80">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
