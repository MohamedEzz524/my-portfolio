export default function CrazyPreloader() {
  return (
    <div
      id="preloader"
      className="fixed inset-0 bg-[var(--bg)] flex items-center justify-center z-50"
    >
      <div className="relative w-24 h-24">
        <div className="absolute w-6 h-6 bg-gradient-to-br from-[var(--button-bg)] to-[var(--link-hover)] rounded-full animate-orbit"></div>
        <div className="absolute w-6 h-6 bg-gradient-to-br from-[var(--special-text)] to-[var(--contact-highlight)] rounded-full animate-orbit delay-200"></div>
      </div>
    </div>
  );
}
