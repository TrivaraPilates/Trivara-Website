import { CalendarPlus } from "lucide-react";

export default function StickyBookButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="/book-classes"
        className="brand-button px-6 py-3 font-medium shadow-lg transform hover:scale-105 inline-flex items-center"
      >
        <CalendarPlus className="w-5 h-5 mr-2" />
        Book a Class
      </a>
    </div>
  );
}
