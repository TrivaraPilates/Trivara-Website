import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "../hooks/use-toast";
import { apiRequest } from "../lib/queryClient";
import { SiInstagram, SiTiktok, SiFacebook } from "react-icons/si";
import { useFadeIn } from "../hooks/use-fade-in";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { toast } = useToast();
  const titleRef = useFadeIn();
  const contentRef = useFadeIn({ threshold: 0.2 });
  
  const newsletterMutation = useMutation({
    mutationFn: (data: { name: string; email: string }) =>
      apiRequest("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      toast({
        title: "Welcome to Trivāra!",
        description: "You're now on our Founder's List. We'll be in touch soon!",
      });
      setFormData({ name: "", email: "" });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in all fields",
        description: "Name and email are required.",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20" style={{backgroundColor: 'var(--brand-856e5f)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={titleRef.ref} 
          className={`fade-in-on-scroll ${titleRef.isVisible ? 'visible' : ''} text-center mb-16`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{fontFamily: 'var(--font-serif)', color: 'var(--brand-f4efe9)'}}>Stay Connected</h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{backgroundColor: 'var(--peach)'}}></div>
        </div>

        <div 
          ref={contentRef.ref} 
          className={`fade-in-on-scroll ${contentRef.isVisible ? 'visible' : ''} grid md:grid-cols-2 gap-16`}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{fontFamily: 'var(--font-serif)', color: 'var(--brand-f4efe9)'}}>Visit Our Studio</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-xl mt-1" style={{color: 'var(--peach)'}} />
                  <div>
                    <p className="font-semibold" style={{color: 'var(--brand-f4efe9)'}}>Boutique Studio Location</p>
                    <p style={{color: 'var(--brand-c5ae99)'}}>Scarborough, ON</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-xl" style={{color: 'var(--peach)'}} />
                  <div>
                    <p className="font-semibold" style={{color: 'var(--brand-f4efe9)'}}>hello@trivarapilates.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-xl" style={{color: 'var(--peach)'}} />
                  <div>
                    <p className="font-semibold" style={{color: 'var(--brand-f4efe9)'}}>Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--brand-f4efe9)'}}>Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{backgroundColor: 'var(--dark-brown)', color: 'var(--brand-f4efe9)'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--peach)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--dark-brown)'}
                  aria-label="Follow us on Instagram"
                >
                  <SiInstagram className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{backgroundColor: 'var(--dark-brown)', color: 'var(--brand-f4efe9)'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--peach)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--dark-brown)'}
                  aria-label="Follow us on TikTok"
                >
                  <SiTiktok className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{backgroundColor: 'var(--dark-brown)', color: 'var(--brand-f4efe9)'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--peach)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--dark-brown)'}
                  aria-label="Follow us on Facebook"
                >
                  <SiFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="p-8 shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
            <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Join Our Founder's List</h3>
            <p className="mb-6" style={{color: 'var(--brand-665446)'}}>
              Join our exclusive Founder's List for early access & special pricing! Be the first to experience the transformative power of Trivāra.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  type="text" 
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border focus:outline-none focus:ring-2"
                  style={{borderColor: 'var(--brand-c5ae99)', borderRadius: '0px'}}
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border focus:outline-none focus:ring-2"
                  style={{borderColor: 'var(--brand-c5ae99)', borderRadius: '0px'}}
                />
              </div>
              <Button 
                type="submit" 
                disabled={newsletterMutation.isPending}
                className="w-full brand-button py-3 px-6 font-semibold"
                style={{borderRadius: '0px'}}
              >
                {newsletterMutation.isPending ? "Joining..." : "Join the Founder's List"}
              </Button>
            </form>
            
            <p className="text-sm mt-4 text-center" style={{color: 'var(--brand-665446)'}}>
              Get exclusive access to grand opening specials and priority booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
