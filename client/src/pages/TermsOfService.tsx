import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm">
            Last Updated: January 1, 2025
          </p>
        </div>

        <Separator className="bg-white/10 mb-12" />

        <div className="space-y-12 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the website of Artist Development ("we,"
              "our," or "us"), you accept and agree to be bound by the terms and
              provision of this agreement. In addition, when using these
              particular services, you shall be subject to any posted guidelines
              or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              2. Description of Service
            </h2>
            <p>
              We provide artist development and consultation
              services. The content on this website is for informational
              purposes only and does not constitute a binding offer of
              representation or employment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              3. User Conduct
            </h2>
            <p>
              You agree to use the website only for lawful purposes. You are
              prohibited from posting on or transmitting through the website any
              material that is unlawful, harmful, threatening, abusive,
              harassing, defamatory, vulgar, obscene, sexually explicit,
              profane, hateful, racially, ethnically, or otherwise
              objectionable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              4. Intellectual Property
            </h2>
            <p>
              All content included on this site, such as text, graphics, logos,
              images, as well as the compilation thereof, is the property of
              Artist Development or its suppliers and protected by copyright and
              other laws that protect intellectual property and proprietary
              rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p>
              The website and its content are provided on an "as is" and "as
              available" basis. We make no representations or warranties of any
              kind, express or implied, as to the operation of the website or
              the information, content, materials, or products included on this
              site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              In no event shall Artist Development be liable for any direct,
              indirect, incidental, special, consequential, or exemplary damages
              resulting from the use or the inability to use the website or
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              7. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of the jurisdiction in which we operate, without regard to
              its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. What constitutes a material change will
              be determined at our sole discretion.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
