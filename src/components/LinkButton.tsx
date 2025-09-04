import React from 'react';
import type { Link } from '../types';

type LinkButtonProps = Omit<Link, 'id' | 'url'> & { href: string };

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group relative w-full overflow-hidden rounded-md text-cyber-primary border-2 border-cyber-primary/50 bg-slate-900/50 mb-4 p-4 backdrop-blur-md transition-all duration-300 hover:border-cyber-secondary/80 hover:text-cyber-secondary hover:shadow-[0_0_20px_theme(colors.cyber-secondary.500/50)]">
      <div className="absolute left-0 top-0 h-full w-0 bg-cyber-secondary/20 transition-all duration-500 group-hover:w-full"></div>
      <div className="relative flex items-center justify-center space-x-4">
        <span className="text-3xl transition-transform duration-300 group-hover:-translate-x-2">{icon}</span>
        <span className="font-title text-lg font-bold tracking-widest transition-transform duration-300 group-hover:-translate-x-2">{text}</span>
      </div>
    </a>
  );
};

export default LinkButton;
