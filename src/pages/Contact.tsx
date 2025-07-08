import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
            <Link href="/">
              <Button variant="outline" size="lg" className="gap-3 shadow-lg hover:shadow-xl transition-all duration-200">
                ← Back to Projects
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="your.email@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell me about your project..." rows={6} />
              </div>
              <Button className="w-full gap-2 bg-gradient-to-r from-primary to-primary/90">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-2">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Let's Work Together
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  I'm passionate about creating digital experiences that make a difference. 
                  Whether you have a project in mind or just want to connect, I'd love to hear from you.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-colors">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">hello@bencline.dev</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-colors">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-colors">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;