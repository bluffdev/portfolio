import Image from 'next/image';
import { hero, contact } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-16">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center w-25 h-20 relative overflow-hidden">
          <h1 className="text-2xl">bluff.dev</h1>
        </div>
        <div className="flex space-x-4 mt-0 text-lightText transition-colors duration-500">
          {contact.github && (
            <a
              className="flex items-center"
              href={`https://github.com/${contact.github}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/static/icons/github.svg"
                width={20}
                height={20}
                alt="Github icon"
              />
            </a>
          )}
          {contact.linkedin && (
            <a
              className="flex items-center"
              href={`https://linkedin.com/in/${contact.linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/static/icons/linkedin.svg"
                width={20}
                height={20}
                alt="LinkedIn icon"
              />
            </a>
          )}
          <div className="flex items-center">
            <Image
              src="/static/icons/sun.svg"
              width={30}
              height={30}
              alt="Toggle theme"
              className="cursor-pointer toggleTheme"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          </div>
        </div>
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}
