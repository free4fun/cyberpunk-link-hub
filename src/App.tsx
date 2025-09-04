import * as React from 'react';
import { useEffect } from 'react';
import { gtmPush } from './lib/gtm';
import type { Link } from './types';
import ProfileCard from './components/ProfileCard';
import LinkButton from './components/LinkButton';
import ProjectCard from './components/ProjectCard';
import { FaGithub, FaLinkedinIn, FaTelegram, FaTwitter, FaDiscord, FaMastodon, FaChess, FaYoutube, FaInstagram, FaGlobe  } from "react-icons/fa";
import { SiFarcaster } from "react-icons/si";




const links: Link[] = [
  { id: 'github', url: 'https://github.com/free4fun', text: 'GitHub', icon: <FaGithub /> },
  { id: 'linkedin', url: 'https://linkedin.com/in/free4fun', text: 'LinkedIn', icon: <FaLinkedinIn /> },
  { id: 'telegram', url: 'https://t.me/fr334fun', text: 'Telegram', icon: <FaTelegram /> },
  { id: 'twitter', url: 'https://x.com/fr334fun', text: 'Twitter/X', icon: <FaTwitter /> },
  { id: 'farcaster', url: 'https://farcaster.xyz/free4fun', text: 'Farcaster', icon: <SiFarcaster /> },
  { id: 'discord', url: 'https://discordapp.com/users/free4fun', text: 'Discord', icon: <FaDiscord /> },
  { id: 'mastodon', url: 'https://mastodon.social/@fr334fun', text: 'Mastodon', icon: <FaMastodon /> },
  { id: 'chess', url: 'https://www.chess.com/member/fr334fun', text: 'Chess', icon: <FaChess /> },
  { id: 'youtube', url: 'https://www.youtube.com/@fr334fun', text: 'YouTube', icon: <FaYoutube /> },
  { id: 'instagram', url: 'https://www.instagram.com/fr334fun', text: 'Instagram', icon: <FaInstagram /> },
  { id: 'website', url: 'https://www.free4fun.dev', text: 'Website', icon: <FaGlobe/> }
];

interface ProjectLink {
  id: string;
  url: string;
  title: string;
  description: string;
}

const projects: ProjectLink[] = [
  { id: 'tener-exito', url: 'https://www.tenerexito.com/', title: 'Tener Éxito', description: 'Your ultimate destination for success strategies and self-growth.' },
  { id: 'espacio-en-armonia', url: 'https://www.espacioenarmonia.com/', title: 'Espacio en Armonía', description: 'A place to reconnect with your physical, emotional, and spiritual well-being.' },
];



const App: React.FC = () => {
  useEffect(() => {
    gtmPush({ event: 'page_view', page_path: location.pathname + location.hash, page_title: document.title });
  }, []);
  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-slate-300">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: `
        linear-gradient(rgba(200, 200, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200, 200, 255, 0.05) 1px, transparent 1px)
      `, backgroundSize: '20px 20px' }}></div>
      <div className="absolute inset-0 z-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"></div>
      <header className="relative w-full h-40 sm:h-56">
        <img loading="lazy" decoding="async" src="/images/banner.webp" alt="Cyberpunk city street banner" className="w-full h-full object-cover brightness-[0.6] saturate-150"/>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </header>
      <main className="relative z-10 flex flex-col items-center px-2 -mt-20 sm:-mt-24">
        <div className="w-full max-w-lg mx-auto">
          <ProfileCard imageUrl="/images/profile.webp" name="free4fun"/>
          <p className="text-center text-md font-txt tracking-wider text-white max-w-lg mx-auto my-6 leading-relaxed">Eternal rover of data finding signal in noise and art in the glitch.</p>
          <div className="flex w-full flex-col items-center">
            {links.map((link) => (
              <LinkButton key={link.id} href={link.url} text={link.text} icon={link.icon}/>
            ))}
          </div>
          <div className="mt-12 w-full">
            <h2 className="text-2xl font-title font-bold tracking-widest text-center text-cyber-primary mb-6">
              Projects
            </h2>
            <div className="flex flex-col space-y-4">
                {projects.map((project) => (
                    <ProjectCard key={project.id} href={project.url} title={project.title} description={project.description}/>
                ))}
            </div>
          </div>

        </div>
      </main>

      <footer className="text-center p-6 mt-8 text-slate-600 text-sm font-title tracking-widest">
        <p>&copy; {new Date().getFullYear()} // System Online</p>
      </footer>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;