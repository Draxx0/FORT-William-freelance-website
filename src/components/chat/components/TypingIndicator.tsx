'use client';

import Image from 'next/image';
import React from 'react';

interface TypingIndicatorProps {
  isVisible: boolean;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="flex justify-start mb-4">
      <div className="bg-white rounded-2xl rounded-bl-md shadow-sm p-4 max-w-[80%]">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-[var(--lavande)] rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
            <Image
              src="/logo.png"
              width={24}
              height={24}
              alt="Pulse AI"
              className="w-4 h-4 object-cover rounded-full"
            />
          </div>

          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-600 mr-2">Pulse réfléchit</span>
            <div className="flex space-x-1">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-primary rounded-full animate-pulse"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: '1.5s',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
