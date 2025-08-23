import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { SiInstagram, SiTiktok, SiFacebook } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: (data: { name: string; email: string }) =>
      apiRequest("POST", "/api/newsletter", data),
    onSuccess: () => {
      toast({
        title: "Welcome to the Founder's List!",
        description: "Thank you for joining! We'll be in touch with exclusive updates and early access.",
      });
      setFormData({ name: "", email: "" });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and email are required.",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-taupe mb-8">Stay Connected</h2>
          <div className="w-24 h-1 bg-coffee mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-taupe mb-6">Visit Our Studio</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-coffee text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-taupe">Boutique Studio Location</p>
                    <p className="text-gray-600">Scarborough, ON</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-coffee text-xl" />
                  <div>
                    <p className="font-semibold text-taupe">hello@trivarapilates.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-coffee text-xl" />
                  <div>
                    <p className="font-semibold text-taupe">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-serif font-semibold text-taupe mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center text-white hover:bg-taupe transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <SiInstagram className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center text-white hover:bg-taupe transition-colors duration-300"
                  aria-label="Follow us on TikTok"
                >
                  <SiTiktok className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-coffee rounded-full flex items-center justify-center text-white hover:bg-taupe transition-colors duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <SiFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
            <h3 className="text-2xl font-serif font-bold text-taupe mb-4">Join Our Founder's List</h3>
            <p className="text-gray-600 mb-6">
              Join our exclusive Founder's List for early access & special pricing! Be the first to experience the transformative power of Trivāra.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  type="text" 
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-sand rounded-full focus:outline-none focus:ring-2 focus:ring-coffee/20 focus:border-coffee"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-sand rounded-full focus:outline-none focus:ring-2 focus:ring-coffee/20 focus:border-coffee"
                />
              </div>
              <Button 
                type="submit" 
                disabled={newsletterMutation.isPending}
                className="w-full brand-button py-3 px-6 rounded-full font-semibold"
              >
                {newsletterMutation.isPending ? "Joining..." : "Join the Founder's List"}
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              Get exclusive access to grand opening specials and priority booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
