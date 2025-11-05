
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
}

/**
 * A reusable card component for displaying content blocks.
 */
const Card: React.FC<CardProps> = ({ title, children, actionButton }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="text-gray-600">
          {children}
        </div>
        {actionButton && <div className="mt-4">{actionButton}</div>}
      </div>
    </div>
  );
};

export default Card;
