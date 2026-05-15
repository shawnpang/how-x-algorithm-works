/* DESIGN: FOOTER — keep small and unobtrusive. */

export default function Footer() {
  return (
    <footer className="section">
      <p className="text-sm">
        Built as a plain-English explainer of xAI&apos;s open-source release at
        github.com/xai-org/x-algorithm. The production system is continuously
        retrained — this explains the released snapshot.
      </p>
      <p className="mt-3 text-sm">
        <a href="https://github.com/xai-org/x-algorithm">View source code →</a>
      </p>
    </footer>
  );
}
