import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Locked In<span className="text-[var(--locked-in-blue)]">.</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm text-zinc-300">
            <Link
              href="/privacy"
              className="text-white transition hover:text-white"
            >
              Privacy
            </Link>

            <Link href="/support" className="transition hover:text-white">
              Support
            </Link>
          </nav>
        </div>
      </header>

      {/* Privacy Policy */}
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--locked-in-blue)]">
            Legal
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-zinc-400">Last updated: August 19, 2026</p>
        </div>

        <div className="space-y-12 text-zinc-300">
          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Introduction
            </h2>

            <p className="mt-4 leading-8">
              Locked In ("Locked In," "we," "our," or "us") is a fitness and
              wellness application that helps users track workouts, nutrition,
              body metrics, and progress while providing social features for
              sharing and interacting with other users.
            </p>

            <p className="mt-4 leading-8">
              This Privacy Policy explains what information we collect, how we
              use it, how it is processed and stored, the services we use to
              operate Locked In, and the choices available to you.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Information We Collect
            </h2>

            <p className="mt-4 leading-8">
              We collect information that you choose to provide when creating
              and using your Locked In account and when using features within
              the app.
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Account Information
                </h3>

                <p className="mt-2 leading-8">
                  When you create an account, we collect information such as
                  your email address and username. You may also provide a password
                  when creating or accessing your account. Passwords are handled
                  by Firebase Authentication and are not accessible to Locked In.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Body and Fitness Information
                </h3>

                <p className="mt-2 leading-8">
                  You may choose to provide body metrics such as your weight
                  and height. This information is used to support fitness
                  features and help you track your progress.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Workout Information
                </h3>

                <p className="mt-2 leading-8">
                  Locked In stores workout information that you enter into the
                  app. This may include workouts, exercises, sets,
                  repetitions, weights, workout sessions, and other
                  workout-related information you choose to record.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Nutrition Information
                </h3>

                <p className="mt-2 leading-8">
                  Locked In stores nutrition and diet information that you
                  enter or create. This may include meals, foods, nutritional
                  information, saved meals, and other dietary information you
                  choose to record.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Social Content
                </h3>

                <p className="mt-2 leading-8">
                  When you use Locked In's social features, we collect content
                  that you choose to submit, including posts, comments, and
                  other information associated with your social activity.
                </p>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. How We Use Your Information
            </h2>

            <p className="mt-4 leading-8">
              We use the information we collect to operate and improve Locked
              In and provide the features you choose to use.
            </p>

            <div className="mt-6 space-y-3 leading-8">
              <p>• Create and manage your account.</p>
              <p>• Authenticate your account.</p>
              <p>
                • Store your workouts, nutrition information, body metrics, and
                other information you enter.
              </p>
              <p>• Provide workout and nutrition tracking features.</p>
              <p>• Provide social and community features.</p>
              <p>• Moderate social posts and comments.</p>
              <p>• Protect the safety and integrity of the service.</p>
              <p>• Maintain and operate the application.</p>
              <p>• Respond to support requests.</p>
            </div>

            <p className="mt-6 leading-8">
              We do not sell your personal information.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Social Content Moderation
            </h2>

            <p className="mt-4 leading-8">
              Locked In uses OpenAI's moderation technology to help identify
              potentially inappropriate or unsafe content submitted through
              the social features of the app.
            </p>

            <p className="mt-4 leading-8">
              When you submit a social post or comment, that content may be
              sent to OpenAI's API for automated moderation using OpenAI's{" "}
              <span className="font-medium text-white">
                omni-moderation-latest
              </span>{" "}
              model.
            </p>

            <p className="mt-4 leading-8">
              The moderation service is used to help determine whether
              submitted social content violates Locked In's content standards.
              Content may be rejected when it is identified as containing
              prohibited or inappropriate material.
            </p>

            <p className="mt-4 leading-8">
              We use OpenAI's moderation service for content moderation and
              safety purposes and not to provide general-purpose AI features to
              users.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. User Reports and Safety
            </h2>

            <p className="mt-4 leading-8">
              Locked In allows users to report other users and content that they
              believe violates our community standards or may be inappropriate.
            </p>

            <p className="mt-4 leading-8">
              When you submit a report, we may process the information included in the
              report, along with relevant information about the reported user or
              content, to review the report, enforce our community standards, and help
              maintain a safe experience for Locked In users.
            </p>

            <p className="mt-4 leading-8">
              Reports may be reviewed by Locked In and may result in actions such as
              removing content, restricting accounts, or taking other appropriate
              safety measures.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              6. Third-Party Services
            </h2>

            <p className="mt-4 leading-8">
              Locked In relies on certain third-party services to provide its
              functionality.
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Firebase
                </h3>

                <p className="mt-2 leading-8">
                  Locked In uses Firebase services provided by Google,
                  including Firebase Authentication, Cloud Firestore, and
                  Firebase Cloud Functions.
                </p>

                <p className="mt-2 leading-8">
                  Firebase Authentication is used for account authentication,
                  Cloud Firestore is used to store application and user data,
                  and Firebase Cloud Functions are used to provide backend
                  functionality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">OpenAI</h3>

                <p className="mt-2 leading-8">
                  Locked In uses OpenAI's API to moderate social posts and
                  comments as described in Section 4. Information necessary to
                  perform moderation may be sent to OpenAI for this purpose.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  USDA FoodData Central
                </h3>

                <p className="mt-2 leading-8">
                  Locked In uses the U.S. Department of Agriculture's FoodData
                  Central API to allow users to search for foods and retrieve
                  nutritional information.
                </p>

                <p className="mt-2 leading-8">
                  When you search for a food using this feature, information
                  necessary to perform the search may be sent to the FoodData
                  Central API so that relevant food and nutrition results can
                  be returned.
                </p>
              </div>
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              7. Data Storage and Security
            </h2>

            <p className="mt-4 leading-8">
              We use reasonable measures designed to protect information
              stored and processed through Locked In.
            </p>

            <p className="mt-4 leading-8">
              Our application relies on security features provided by Firebase
              and the infrastructure supporting the third-party services we
              use. However, no method of electronic storage or transmission is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              8. Data Retention
            </h2>

            <p className="mt-4 leading-8">
              We retain your information for as long as reasonably necessary
              to provide the Locked In service, maintain your account, provide
              the features you use, comply with legal obligations, resolve
              disputes, and enforce our agreements.
            </p>

            <p className="mt-4 leading-8">
              The information you provide through Locked In may remain
              associated with your account until you delete it or delete your
              account, subject to information we are required or permitted to
              retain.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              9. Account Deletion
            </h2>

            <p className="mt-4 leading-8">
              Locked In provides users with the ability to permanently delete their
              account from within the application.
            </p>

            <p className="mt-4 leading-8">
              When you delete your account, we delete your Locked In account and
              associated data, including your profile information, username, posts,
              comments, likes, workout data, workout sessions, nutrition and diet
              entries, saved meals, and other data associated with your account.
            </p>

            <p className="mt-4 leading-8">
              Account deletion is intended to permanently remove your data from the
              Locked In services. Deleted information may remain temporarily in
              encrypted backups or other systems maintained by our service providers
              before being overwritten or deleted according to their retention
              processes.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              10. Your Privacy Choices
            </h2>

            <p className="mt-4 leading-8">
              You may review and update certain information directly within
              the Locked In application.
            </p>

            <p className="mt-4 leading-8">
              You may also delete your account through the account deletion
              functionality provided by Locked In.
            </p>

            <p className="mt-4 leading-8">
              Depending on where you live, you may have additional rights
              concerning your personal information, including rights to access,
              correct, delete, or otherwise manage certain information.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              11. Children's Privacy
            </h2>

            <p className="mt-4 leading-8">
              Locked In is not intended for children who are below the minimum
              age required to use the service in the applicable jurisdiction.
            </p>

            <p className="mt-4 leading-8">
              We do not knowingly collect personal information from children in
              violation of applicable law.
            </p>

            <p className="mt-4 leading-8">
              If you believe a child has provided personal information to us
              inappropriately, please contact us through the Locked In support
              page.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              12. Changes to This Privacy Policy
            </h2>

            <p className="mt-4 leading-8">
              We may update this Privacy Policy from time to time as Locked In
              evolves or as our privacy practices change.
            </p>

            <p className="mt-4 leading-8">
              When we make changes, we will update the "Last updated" date at
              the top of this policy. We encourage you to review this Privacy
              Policy periodically.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              13. Contact Us
            </h2>

            <p className="mt-4 leading-8">
              If you have questions about this Privacy Policy or how Locked In handles
              your information, you can contact us at{" "}
              <a
                href="mailto:help.lockedinapp@gmail.com"
                className="text-[var(--locked-in-blue)] hover:underline"
              >
                help.lockedinapp@gmail.com
              </a>
              .
            </p>

            <div className="mt-6">
              <Link
                href="/support"
                className="inline-flex rounded-full bg-[var(--locked-in-blue)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--locked-in-blue-hover)]"
              >
                Visit Support
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Locked In. All rights reserved.</p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-zinc-300 transition hover:text-white"
            >
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