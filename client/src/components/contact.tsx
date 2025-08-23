import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { SiInstagram, SiTiktok, SiFacebook } from "react-icons/si";
import { useScrollReveal, useFadeInOut } from "@/hooks/use-scroll-reveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { toast } = useToast();
  const titleRef = useFadeInOut();
  const contentRef = useScrollReveal();

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
    <section id="contact" className="py-20" style={{backgroundColor: 'var(--brand-f4efe9)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="fade-in-out text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Stay Connected</h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{backgroundColor: 'var(--dark-brown)'}}></div>
        </div>

        <div ref={contentRef} className="scroll-reveal grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Visit Our Studio</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-xl mt-1" style={{color: 'var(--dark-brown)'}} />
                  <div>
                    <p className="font-semibold" style={{color: 'var(--dark-brown)'}}>Boutique Studio Location</p>
                    <p style={{color: 'var(--brand-665446)'}}>Scarborough, ON</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-xl" style={{color: 'var(--dark-brown)'}} />
                  <div>
                    <p className="font-semibold" style={{color: 'var(--dark-brown)'}}>hello@trivarapilates.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-xl" style={{color: 'var(--dark-brown)'}} />
                  <div>
                    <p className="font-semibold" style={{color: 'var(--dark-brown)'}}>Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-serif)', color: 'var(--dark-brown)'}}>Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300" style={{backgroundColor: 'var(--dark-brown)', color: 'var(--brand-f4efe9)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--dark-brown)'}
                  aria-label="Follow us on Instagram"
                >
                  <SiInstagram className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300" style={{backgroundColor: 'var(--dark-brown)', color: 'var(--brand-f4efe9)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--dark-brown)'}
                  aria-label="Follow us on TikTok"
                >
                  <SiTiktok className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300" style={{backgroundColor: 'var(--dark-brown)', color: 'var(--brand-f4efe9)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-665446)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--dark-brown)'}
                  aria-label="Follow us on Facebook"
                >
                  <SiFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="p-8 shadow-lg hover-lift" style={{backgroundColor: 'var(--brand-f4efe9)', border: '1px solid var(--brand-e1d4c5)'}}>
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
                  className="w-full px-4 py-3 border focus:outline-none focus:ring-2" style={{borderColor: 'var(--brand-e1d4c5)', borderRadius: '9999px'}} onFocus={(e) => {e.currentTarget.style.borderColor = 'var(--dark-brown)'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(50, 24, 11, 0.2)';}} onBlur={(e) => {e.currentTarget.style.borderColor = 'var(--brand-e1d4c5)'; e.currentTarget.style.boxShadow = 'none';}}
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border focus:outline-none focus:ring-2" style={{borderColor: 'var(--brand-e1d4c5)', borderRadius: '9999px'}} onFocus={(e) => {e.currentTarget.style.borderColor = 'var(--dark-brown)'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(50, 24, 11, 0.2)';}} onBlur={(e) => {e.currentTarget.style.borderColor = 'var(--brand-e1d4c5)'; e.currentTarget.style.boxShadow = 'none';}}
                />
              </div>
              <Button 
                type="submit" 
                disabled={newsletterMutation.isPending}
                className="w-full brand-button py-3 px-6 font-semibold" style={{borderRadius: '9999px'}}
              >
                {newsletterMutation.isPending ? "Joining..." : "Join the Founder's List"}
              </Button>
            </form>
            
            <p className="text-sm mt-4 text-center" style={{color: 'var(--brand-978170)'}}>
              Get exclusive access to grand opening specials and priority booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
