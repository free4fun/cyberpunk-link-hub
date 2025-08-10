import React from 'react';

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  title: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, title }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative p-1 border-2 border-cyan-400/30 rounded-full bg-slate-900/50">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-slate-800"
        />
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/50 animate-pulse"></div>
      </div>
      <div className="mt-4 space-y-1">
        <h1 className="text-3xl sm:text-4xl font-bold font-orbitron text-cyan-300 tracking-wider flicker">
          {name}
        </h1>
        <p className="text-pink-400 text-glow-pink font-orbitron tracking-widest text-sm sm:text-base">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
