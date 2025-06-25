
import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from './ui/button';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-portfolio-teal hover:bg-portfolio-teal/90 shadow-lg z-50 p-0"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-portfolio-teal text-white">
            <h3 className="font-semibold text-sm">Portfolio Assistant</h3>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:text-white hover:bg-white/20 p-1 h-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chatbot iframe */}
          <div className="flex-1">
            <iframe
              src="https://my-chatbot-eight-xi.vercel.app/"
              className="w-full h-full border-0"
              title="Portfolio Chatbot"
              allow="microphone"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
