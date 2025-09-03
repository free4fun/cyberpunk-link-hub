import React from 'react';

interface ProfileCardProps {
  imageUrl: string;
  name: string;

}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name }) => {
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
        <h1 className="text-3xl sm:text-4xl text-pink-400 text-glow-pink font-bold font-orbitron tracking-wider flicker">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default ProfileCard;
