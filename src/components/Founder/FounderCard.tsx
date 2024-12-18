import React from 'react';

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export default function FounderCard({ name, role, bio, imageUrl }: FounderCardProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-card p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-12">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl shadow-purple-500/20 bg-gradient-to-br from-purple-600/20 to-blue-600/20">
          <img
            src={imageUrl}
            alt={`${name} - ${role}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold text-white mb-3">{name}</h3>
          <p className="text-purple-400 text-lg mb-6">{role}</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}