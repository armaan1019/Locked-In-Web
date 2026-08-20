import Link from "next/link";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Locked In<span className="text-[var(--locked-in-blue)]">.</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm text-zinc-300">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/support" className="transition hover:text-white">
              Support
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto flex min-h-[75vh] max-w-6xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-[var(--locked-in-blue)]/20 bg-[var(--locked-in-blue)]/10 px-4 py-2 text-sm font-medium text-[var(--locked-in-blue)]">
              Built for consistency
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Stay focused.
              <br />
              <span className="text-[var(--locked-in-blue)]">Stay Locked In.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Locked In helps you stay consistent with your workouts,
              nutrition, and goals — all in one place.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#features"
                className="rounded-full bg-[var(--locked-in-blue)] px-7 py-3.5 text-center font-semibold text-black transition hover:bg-[var(--locked-in-blue-hover)]"
              >
                Explore Locked In
              </a>

              <Link
                href="/support"
                className="rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/5"
              >
                Get Support
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="border-t border-white/10 bg-zinc-900/50"
        >
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--locked-in-blue)]">
                Everything in one place
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built to help you keep showing up.
              </h2>

              <p className="mt-4 text-zinc-400">
                Track your progress, build better habits, and stay connected
                with your goals.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <FeatureCard
                title="Workouts"
                description="Track your workouts and keep a record of your progress over time."
              />

              <FeatureCard
                title="Nutrition"
                description="Keep your nutrition organized and make it easier to stay consistent."
              />

              <FeatureCard
                title="Community"
                description="Share progress, connect with others, and stay motivated."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-3xl border border-[var(--locked-in-blue)]/20 bg-[var(--locked-in-blue)]/10 px-6 py-16 text-center sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Keep moving forward.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Consistency is built one day at a time. Stay focused and stay
              Locked In.
            </p>

            <Link
              href="/support"
              className="mt-8 inline-flex rounded-full bg-[var(--locked-in-blue)] px-7 py-3.5 font-semibold text-black transition hover:bg-[var(--locked-in-blue-hover)]"
            >
              Visit Support
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Locked In. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/support" className="transition hover:text-white">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}