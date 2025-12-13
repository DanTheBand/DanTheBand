import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-white/20">
      <div className="container mx-auto max-w-3xl px-6 py-12 md:py-24">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors mb-8 uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Last Updated: January 1, 2025
          </p>
        </div>

        <Separator className="bg-white/10 mb-12" />

        <div className="space-y-12 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy describes how Artist Development ("we," "our,"
              or "us") collects, uses, and discloses your information when you
              use our website and services. By accessing or using our services,
              you consent to the data practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including
              but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>
                Contact information (such as name, email address, and phone
                number)
              </li>
              <li>
                Professional information (such as artist name, career goals, and
                budget)
              </li>
              <li>Communications you send to us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>To provide, maintain, and improve our services</li>
              <li>To communicate with you about your application or inquiry</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and the safety of our users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              4. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties. This does not include
              trusted third parties who assist us in operating our website,
              conducting our business, or servicing you, so long as those
              parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              5. Data Security
            </h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information. However, no method of transmission
              over the Internet or method of electronic storage is 100% secure.
              While we strive to use commercially acceptable means to protect
              your personal information, we cannot guarantee its absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page. You are advised to review this Privacy Policy
              periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us via the consultation form on our homepage.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
