import React from 'react';
import { FiExternalLink } from "react-icons/fi";


interface ProjectCardProps {
    href: string;
    title: string;
    description: string;
}

const ProjectButton: React.FC<ProjectCardProps> = ({ href, title, description }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full rounded-md border border-cyan-400/20 bg-slate-900/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-pink-400/60 hover:-translate-y-1 hover:shadow-[0_0_25px_theme(colors.pink.500/30)]"
        >
            <div className="flex justify-between items-start gap-4">
                <div>
                    <h3 className="font-orbitron text-lg font-bold text-cyan-300 group-hover:text-pink-300 transition-colors duration-300">{title}</h3>
                    <p className="text-slate-400 mt-1 text-sm leading-relaxed">{description}</p>
                </div>
                <FiExternalLink className="w-5 h-5 text-slate-500 group-hover:text-pink-400 transition-colors duration-300 mt-1 flex-shrink-0" />
            </div>
        </a>
    );
};

export default ProjectButton;