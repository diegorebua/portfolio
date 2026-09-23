import './InteractiveBackground.css';

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" style={{ backgroundColor: 'var(--color-bg)', transition: 'background-color 0.4s ease' }} aria-hidden="true">
      <div className="absolute inset-0 bg-textured-noise opacity-[0.05]" />
      <div className="absolute inset-0 bg-ambient-glow" />
      <div className="absolute inset-0 bg-textured-dots opacity-40" />
    </div>
  );
}
