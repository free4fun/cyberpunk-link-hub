import React from 'react';
import type { Link } from '../types';

type LinkButtonProps = Omit<Link, 'id' | 'url'> & { href: string };

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full overflow-hidden rounded-md border-2 border-cyan-400/50 bg-slate-900/50 p-4 text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:border-pink-400/80 hover:text-pink-300 hover:shadow-[0_0_20px_theme(colors.pink.500/50)]"
    >
      <div className="absolute left-0 top-0 h-full w-0 bg-pink-500/20 transition-all duration-500 group-hover:w-full"></div>
      <div className="relative flex items-center justify-center space-x-4">
        <span className="transition-transform duration-300 group-hover:-translate-x-2">{icon}</span>
        <span className="font-orbitron text-lg font-bold tracking-widest transition-transform duration-300 group-hover:translate-x-1">{text}</span>
      </div>
    </a>
  );
};

export default LinkButton;
