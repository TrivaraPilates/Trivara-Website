import { CalendarPlus } from "lucide-react";
import { Button } from "./ui/button";
import MomenceModal, { useMomenceModal } from "./momence-modal";

export default function StickyBookButton() {
  const { isOpen, openModal, closeModal } = useMomenceModal();

  const handleBookClass = () => {
    openModal();
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={handleBookClass}
          className="brand-button px-6 py-3 font-medium shadow-lg transform hover:scale-105"
        >
          <CalendarPlus className="w-5 h-5 mr-2" />
          Book a Class
        </Button>
      </div>
      
      <MomenceModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
