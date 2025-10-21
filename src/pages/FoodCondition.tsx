import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Apple, Plus, CheckCircle, XCircle } from "lucide-react";

interface FoodCondition {
  id: string;
  product_name: string;
  condition: string;
  fit_for_processing: boolean;
  inspection_date: string;
  notes: string;
}

const FoodCondition = () => {
  const [conditions, setConditions] = useState<FoodCondition[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    product_name: "",
    condition: "",
    fit_for_processing: "true",
    notes: "",
  });

  useEffect(() => {
    checkAdminRole();
    fetchConditions();
  }, []);

  const checkAdminRole = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .single();

      if (!error && data) {
        setIsAdmin(true);
      }
    } catch (error) {
      console.error("Error checking admin role:", error);
    }
  };

  const fetchConditions = async () => {
    try {
      const { data, error } = await supabase
        .from("food_conditions")
        .select("*")
        .order("inspection_date", { ascending: false });

      if (error) throw error;
      setConditions(data || []);
    } catch (error) {
      console.error("Error fetching conditions:", error);
      toast({
        title: "Error",
        description: "Failed to load food conditions",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from("food_conditions")
        .insert({
          product_name: formData.product_name,
          condition: formData.condition,
          fit_for_processing: formData.fit_for_processing === "true",
          notes: formData.notes,
          inspector_id: user.id,
        });

      if (error) throw error;

      toast({
        title: "Inspection Added",
        description: "Food condition has been recorded.",
      });

      setDialogOpen(false);
      setFormData({ product_name: "", condition: "", fit_for_processing: "true", notes: "" });
      fetchConditions();
    } catch (error) {
      console.error("Error creating condition:", error);
      toast({
        title: "Error",
        description: "Failed to record food condition",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Apple className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Food Condition</h1>
          </div>
          
          {isAdmin && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Inspection
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Food Inspection</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="product_name">Product Name</Label>
                    <Input
                      id="product_name"
                      value={formData.product_name}
                      onChange={(e) => setFormData({ ...formData, product_name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="condition">Condition</Label>
                    <Input
                      id="condition"
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      placeholder="e.g., Fresh, Slightly damaged, Expired"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="fit_for_processing">Fit for Processing</Label>
                    <Select
                      value={formData.fit_for_processing}
                      onValueChange={(value) => setFormData({ ...formData, fit_for_processing: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">Yes</SelectItem>
                        <SelectItem value="false">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full">Submit Inspection</Button>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>

        {loading ? (
          <p className="text-muted-foreground">Loading inspections...</p>
        ) : conditions.length === 0 ? (
          <Card>
            <CardContent className="py-10 text-center">
              <p className="text-muted-foreground">No inspections found</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((condition) => (
              <Card key={condition.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-lg">{condition.product_name}</span>
                    {condition.fit_for_processing ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge>{condition.condition}</Badge>
                      <Badge variant={condition.fit_for_processing ? "default" : "destructive"}>
                        {condition.fit_for_processing ? "Fit" : "Not Fit"}
                      </Badge>
                    </div>
                    {condition.notes && (
                      <p className="text-sm text-muted-foreground">{condition.notes}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Inspected: {new Date(condition.inspection_date).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCondition;
