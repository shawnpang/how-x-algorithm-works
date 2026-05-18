export default function Home() {
  return (
    <main className="home">
      <div className="home-inner">
        <header className="home-head">
          <h1 className="home-name">Shawn Pang</h1>
          <p className="home-tag">
            Founder of AllScale. Notes on what I&apos;m building, reading,
            and thinking about.
          </p>
          <div className="home-links">
            <a
              className="home-link"
              href="https://x.com/0xshawnpang"
              target="_blank"
              rel="noopener"
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>@0xshawnpang</span>
            </a>
          </div>
        </header>

        <section className="home-section">
          <h2 className="home-section-title">Writing</h2>
          <ul className="home-list">
            <li>
              <a href="/howxworks">
                <span className="home-list-title">
                  How X&apos;s algorithm actually works
                </span>
                <span className="home-list-meta">May 2026</span>
              </a>
            </li>
          </ul>
        </section>

        <section className="home-section">
          <h2 className="home-section-title">Projects</h2>
          <p className="home-empty">More soon.</p>
        </section>

        <section className="home-section">
          <h2 className="home-section-title">Notes</h2>
          <p className="home-empty">More soon.</p>
        </section>
      </div>

      <footer className="home-foot">shawnpang.xyz</footer>
    </main>
  );
}
