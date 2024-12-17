import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EventCardProps {
  icon: LucideIcon;
  title: string;
  time: string;
  location: string;
}

export function EventCard({ icon: Icon, title, time, location }: EventCardProps) {
  return (
    <div className="text-center">
      <Icon className="w-12 h-12 mx-auto mb-4 text-rose-400" />
      <h3 className="text-2xl font-serif mb-2">{title}</h3>
      <p className="text-gray-600">{time}</p>
      <p className="text-gray-600">{location}</p>
    </div>
  );
}