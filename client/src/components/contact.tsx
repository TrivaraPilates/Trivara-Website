import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { SiInstagram, SiTiktok, SiFacebook } from "react-icons/si";
import { useFadeIn } from "../hooks/use-fade-in";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ 
    firstName: "", 
    lastName: "", 
    email: "", 
    phoneNumber: "", 
    subject: "", 
    message: "",
    discoveryAnswer: ""
  });
  const { toast } = useToast();
  const titleRef = useFadeIn();
  const contentRef = useFadeIn({ threshold: 0.2 });

  // Submit to Momence API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "First name, last name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('https://momence.com/api/lead-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          host_id: '92063',
          token: '3AXe3Ar27P',
          country_code: 'ca',
          data_collect_consent: 'required',
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message,
          discoveryAnswer: formData.discoveryAnswer
        })
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon!",
        });
        setFormData({ 
          firstName: "", 
          lastName: "", 
          email: "", 
          phoneNumber: "", 
          subject: "", 
          message: "",
          discoveryAnswer: ""
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20" style={{backgroundColor: '#fff7f1'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={contentRef.ref} 
          className={`fade-in-on-scroll ${contentRef.isVisible ? 'visible' : ''} grid md:grid-cols-2 gap-16 items-start`}
        >
          {/* Contact Info */}
          <div className="space-y-8 w-full">
            {/* Contact Image */}
            <div className="text-center">
              <img 
                src="/images/Contact1.png" 
                alt="Two women sharing a joyful moment on a yoga mat" 
                className="w-full h-auto rounded-lg shadow-lg mx-auto"
                style={{borderRadius: '12px', minHeight: '700px', objectFit: 'cover'}}
              />
            </div>

            {/* Contact Information */}
            <div className="text-center mt-8">
              {/* Address / Phone */}
              <div className="mb-6">
                <p className="text-lg font-medium" style={{ fontFamily: 'Lora, serif', color: '#32180b' }}>
                  2181 McNicoll Ave, Unit 3
                </p>
                <p className="text-lg font-medium" style={{ fontFamily: 'Lora, serif', color: '#32180b' }}>
                  Scarborough, ON
                </p>
                <p className="text-lg font-medium" style={{ fontFamily: 'Lora, serif', color: '#32180b' }}>
                  647.492.3773
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 flex flex-col justify-center" style={{height: 'fit-content'}}>
            <h3 className="text-3xl font-bold mb-8 text-center" style={{fontFamily: 'Lora, serif', color: '#32180b'}}>We'd love to hear from you!</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name - Two Columns */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: '#32180b', fontFamily: 'Lora, serif'}}>First Name</label>
                  <Input 
                    type="text" 
                    placeholder="" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-0 bg-transparent"
                    style={{borderBottom: '1px solid #c5ae99', borderRadius: '0px'}}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: '#32180b', fontFamily: 'Lora, serif'}}>Last Name</label>
                  <Input 
                    type="text" 
                    placeholder="" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-0 bg-transparent"
                    style={{borderBottom: '1px solid #c5ae99', borderRadius: '0px'}}
                  />
                </div>
              </div>

              {/* Email and Phone - Two Columns */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: '#32180b', fontFamily: 'Lora, serif'}}>Email Address</label>
                  <Input 
                    type="email" 
                    placeholder=""
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-0 bg-transparent"
                    style={{borderBottom: '1px solid #c5ae99', borderRadius: '0px'}}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: '#32180b', fontFamily: 'Lora, serif'}}>Phone Number</label>
                  <Input 
                    type="tel" 
                    placeholder=""
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-0 bg-transparent"
                    style={{borderBottom: '1px solid #c5ae99', borderRadius: '0px'}}
                  />
                </div>
              </div>

              {/* Subject - Single Column */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#32180b', fontFamily: 'Lora, serif'}}>Subject</label>
                <Input 
                  type="text" 
                  placeholder=""
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-0 bg-transparent"
                  style={{borderBottom: '1px solid #c5ae99', borderRadius: '0px'}}
                />
              </div>

              {/* Message - Single Column */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#32180b', fontFamily: 'Lora, serif'}}>Message</label>
                <Textarea 
                  placeholder=""
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-0 bg-transparent min-h-[80px] resize-none"
                  style={{borderBottom: '1px solid #c5ae99', borderRadius: '0px'}}
                />
              </div>

              {/* Discovery Question */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#32180b', fontFamily: 'Lora, serif'}}>How did you find out about us?</label>
                <Input 
                  type="text" 
                  placeholder=""
                  value={formData.discoveryAnswer}
                  onChange={(e) => setFormData({ ...formData, discoveryAnswer: e.target.value })}
                  className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-0 bg-transparent"
                  style={{borderBottom: '1px solid #c5ae99', borderRadius: '0px'}}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  className="w-1/2 py-8 font-semibold"
                  style={{
                    backgroundColor: '#856e5f',
                    color: '#ffffff',
                    borderRadius: '8px',
                    fontFamily: 'Barlow, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  Submit
                </Button>
              </div>
            </form>

            {/* Social Media Icons - Directly Below Form */}
            <div className="text-center mt-16">
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: '#856e5f', color: '#ffffff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#32180b')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#856e5f')}
                  aria-label="Follow us on Instagram"
                >
                  <SiInstagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: '#856e5f', color: '#ffffff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#32180b')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#856e5f')}
                  aria-label="Follow us on TikTok"
                >
                  <SiTiktok className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: '#856e5f', color: '#ffffff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#32180b')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#856e5f')}
                  aria-label="Follow us on Facebook"
                >
                  <SiFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
