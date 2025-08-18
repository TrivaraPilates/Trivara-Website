import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function StickyBookButton() {
  const { toast } = useToast();

  const handleBookClass = () => {
    toast({
      title: "Booking System Coming Soon!",
      description: "We're finalizing our booking system. Join our Founder's List for early access and special pricing!",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={handleBookClass}
        className="brand-button px-6 py-3 rounded-full font-medium shadow-lg transform hover:scale-105"
      >
        <CalendarPlus className="w-5 h-5 mr-2" />
        Book a Class
      </Button>
    </div>
  );
}
