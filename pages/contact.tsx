import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Twitter } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-card via-card/95 to-secondary/10 backdrop-blur-md border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="relative flex items-center justify-between p-8">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <h1 className="text-5xl font-black bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent tracking-tight">
                Contact
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <a href="/">Back to Projects</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    kingzorockz@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                  <Twitter className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Twitter</h3>
                  <p className="text-sm text-muted-foreground">@Zorephona</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
