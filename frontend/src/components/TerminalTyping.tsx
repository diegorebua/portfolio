import { useEffect, useState } from 'react';

const phrases = [
  'Node.js · React · Vue.js',
  'TypeScript · Java · Docker',
  'PostgreSQL · AWS · REST',
];

const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

export default function TerminalTyping() {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let running = true;
    const cursorInterval = setInterval(() => setCursorVisible(value => !value), 530);
    const animate = async () => {
      let phraseIndex = 0;
      while (running) {
        const phrase = phrases[phraseIndex];
        for (let i = 0; i <= phrase.length && running; i++) {
          setDisplayedText(phrase.substring(0, i));
          await sleep(70 + Math.random() * 30);
        }
        await sleep(3500);
        for (let i = phrase.length; i >= 0 && running; i--) {
          setDisplayedText(phrase.substring(0, i));
          await sleep(40);
        }
        await sleep(300);
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    };
    void animate();
    return () => { running = false; clearInterval(cursorInterval); };
  }, []);

  return (
    <div className="mono inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm backdrop-blur-md transition-colors duration-300" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)', color: 'var(--color-accent-glow)' }}>
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
      <span style={{ color: 'var(--color-accent-text)', fontWeight: 600 }}>~/diego $</span>
      <span style={{ color: 'var(--color-text)' }}>{displayedText}</span>
      <span className={'inline-block w-[2px] h-[1.1em] align-middle transition-opacity duration-75 ' + (cursorVisible ? 'opacity-100' : 'opacity-0')} style={{ background: 'var(--color-accent)' }} />
    </div>
  );
}
