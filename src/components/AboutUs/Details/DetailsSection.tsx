"use client"
import React, { useEffect } from 'react';

interface DetailsProps {
  title?: string;
  description?: string[]; // Array of paragraph strings
}

const DetailsSection: React.FC<DetailsProps> = ({ title, description = [] }) => {
  useEffect(() => {
    console.log('Description Array:', description);
  }, [description]);

  return (
    <div className="font-Jost flex flex-col gap-4">
      {title && <h1 className='text-primary-10 text-xl font-medium'>{title}</h1>}
      {description.map((para, idx) => (
        <p key={idx} className='text-white  justify-around
        '>{para}</p>
      ))}
    </div>
  );
};

export default DetailsSection;
