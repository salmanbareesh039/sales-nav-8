import React from 'react';
import FounderCard from './FounderCard';

export default function FounderSection() {
  const founderInfo = {
    name: "Ayyaz Rashid",
    role: "Founder & CEO of Professionals",
    bio: "With a passion for empowering professionals and businesses, Ayyaz founded Professionals with a clear vision: to make premium LinkedIn services accessible to everyone. His innovative approach and dedication to client success have helped thousands of individuals and organizations maximize their professional networking potential.",
    imageUrl: "https://images.unsplash.com/photo-1509933551745-514268e48884?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxpbmRpYW4lMjBtYW58ZW58MHx8MHx8fDI%3D"
  };

  return (
    <section id="founder" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Founder
          </h2>
        </div>

        <FounderCard {...founderInfo} />
      </div>
    </section>
  );
}