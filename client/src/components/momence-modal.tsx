import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MomenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MomenceModal({ isOpen, onClose }: MomenceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-4xl mx-4 h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-serif font-bold text-taupe">Book Your Class</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 p-4">
          {/* Momence Embed Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-cream to-warm-beige flex flex-col items-center justify-center text-center p-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-serif font-bold text-taupe mb-4">
                Booking System Integration
              </h3>
              <p className="text-gray-600 mb-6">
                This is where the Momence booking widget will be embedded. The integration will allow clients to:
              </p>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li>• View class schedules</li>
                <li>• Book group and private sessions</li>
                <li>• Purchase memberships</li>
                <li>• Manage their bookings</li>
              </ul>
              <div className="bg-white p-4 text-xs text-gray-500 font-mono">
                {`<!-- MOMENCE EMBED CODE -->`}
                <br />
                {`<div id="momence-widget"></div>`}
                <br />
                {`<script src="https://momence.com/widget.js"></script>`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function useMomenceModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  return {
    isOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false)
  };
}