import Link from "next/link";

export default function Support() {
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

            <Link href="/support" className="text-white">
              Support
            </Link>
          </nav>
        </div>
      </header>

      {/* Support */}
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--locked-in-blue)]">
            Support
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            How can we help?
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Having trouble with Locked In? Contact our support team and we'll
            do our best to help.
          </p>
        </div>

        {/* Contact Card */}
        <section className="mt-12 rounded-3xl border border-[var(--locked-in-blue)]/20 bg-[var(--locked-in-blue)]/10 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold">Contact Support</h2>

          <p className="mt-4 max-w-2xl leading-8 text-zinc-300">
            For account issues, bugs, questions, or other problems with the
            app, send us an email and include as much detail as possible.
          </p>

          <a
            href="mailto:help.lockedinapp@gmail.com"
            className="mt-8 inline-flex rounded-full bg-[var(--locked-in-blue)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--locked-in-blue-hover)]"
          >
            Email Support
          </a>

          <p className="mt-4 text-sm text-zinc-500">
            help.lockedinapp@gmail.com
          </p>
        </section>

        {/* Common Issues */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Common Issues</h2>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h3 className="font-semibold">Account or Login Problems</h3>
              <p className="mt-2 leading-7 text-zinc-400">
                Having trouble signing in, creating an account, or accessing
                your account? Contact support and we'll help you troubleshoot
                the issue.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h3 className="font-semibold">App Bugs or Errors</h3>
              <p className="mt-2 leading-7 text-zinc-400">
                If something isn't working correctly, let us know what happened
                and what you were doing when the issue occurred.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h3 className="font-semibold">Account Deletion</h3>
              <p className="mt-2 leading-7 text-zinc-400">
                Locked In provides an in-app option to permanently delete your
                account and associated data.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h3 className="font-semibold">Report a User or Content</h3>
              <p className="mt-2 leading-7 text-zinc-400">
                You can report users or content directly through the Locked In
                app if you believe something violates our community standards.
              </p>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <Link
            href="/privacy"
            className="text-[var(--locked-in-blue)] transition hover:underline"
          >
            View Privacy Policy
          </Link>

          <Link
            href="/"
            className="text-zinc-400 transition hover:text-white"
          >
            Back to Locked In
          </Link>
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

            <Link
              href="/support"
              className="text-zinc-300 transition hover:text-white"
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}