import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Briefcase } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground">
            Ready to build something amazing? Let's talk about your AI project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea placeholder="Tell me about your project..." className="min-h-[120px]" />
              </div>
              <Button className="w-full gradient-primary text-primary-foreground">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Links */}
          <div className="space-y-4">
            <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer group">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Upwork</h3>
                  <p className="text-sm text-muted-foreground">Hire me on Upwork</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer group">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer group">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">fazzy@example.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
