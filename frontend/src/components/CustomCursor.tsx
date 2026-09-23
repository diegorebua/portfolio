import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const interactive = [
  'a', 'button', '[role="button"]', '.cursor-pointer', '.skill-card',
  '.project-card', '.project-media', '.bio-card', '.exp-item',
  '.photo-card', '.theme-toggle-btn', '.tech-badge', 'label',
].join(',');
const textTargets = 'input, textarea, select, [contenteditable="true"]';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    let mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;
    let hovering = false, clicking = false, visible = false, textTarget = false;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!visible) { visible = true; ringX = mouseX; ringY = mouseY; }
      const target = event.target as HTMLElement | null;
      textTarget = Boolean(target?.closest(textTargets));
      hovering = !textTarget && Boolean(target?.closest(interactive));
    };
    const onDown = () => { clicking = true; };
    const onUp = () => { clicking = false; };
    const onLeave = () => { visible = false; };
    const onEnter = () => { visible = true; };

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot && ring) {
        dot.style.opacity = ring.style.opacity = visible && !textTarget ? '1' : '0';
        dot.style.transform = 'translate3d(' + mouseX + 'px,' + mouseY + 'px,0) translate(-50%,-50%) scale(' + (hovering ? 0.65 : clicking ? 0.8 : 1) + ')';
        ring.style.transform = 'translate3d(' + ringX + 'px,' + ringY + 'px,0) translate(-50%,-50%) scale(' + (clicking ? 0.75 : hovering ? 1.55 : 1) + ')';
        ring.classList.toggle('is-hovering', hovering);
        ring.classList.toggle('is-clicking', clicking);
      }
      frame = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown, { passive: true });
    window.addEventListener('mouseup', onUp, { passive: true });
    document.addEventListener('mouseleave', onLeave, { passive: true });
    document.addEventListener('mouseenter', onEnter, { passive: true });
    frame = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="custom-cursor-container" aria-hidden="true"><div ref={dotRef} className="cursor-dot" /><div ref={ringRef} className="cursor-ring" /></div>;
}
