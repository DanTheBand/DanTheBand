import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground selection:bg-white/20">
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Dark atmospheric recording studio background texture"
            className="w-full h-full object-cover opacity-40"
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.05] text-white">
            Artist Development <br />
            <span className="italic text-white/70">and Management</span> <br />
            Services.
          </h1>

          <p className="text-lg md:text-xl font-sans text-muted-foreground max-w-2xl mx-auto tracking-wide">
            Professional guidance for early-stage career establishment.
          </p>

          <div className="pt-12">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-none px-12 py-8 text-sm uppercase tracking-widest font-bold transition-colors duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Consultation Request
            </Button>
          </div>
        </div>
      </section>

      {/* 2. ORIENTATION */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5">
        <div className="container max-w-3xl mx-auto space-y-16">
          <div className="space-y-10">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/90">
              Services are designed for long-term career planning and
              infrastructure.
            </p>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/70">
              Consultation is available for specific industry sectors and
              territories.
            </p>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/50">
              Client intake is limited to qualified applicants meeting specific
              criteria.
            </p>
          </div>
        </div>
      </section>

      {/* 3. AUTHORITY */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 flex flex-col justify-center items-start">
              <img
                src="/images/brand-mark.png"
                alt="Artist Development Company Logo"
                className="w-24 h-24 mb-8 opacity-80 invert"
              />
              <div className="text-6xl font-serif text-white mb-2">20+</div>
              <div className="text-sm font-sans uppercase tracking-widest text-muted-foreground">
                Years Duration
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Logo Placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-24 border border-white/10 flex items-center justify-center bg-black/20"
                >
                  <span className="font-sans text-xs tracking-widest">
                    PARTNER {i}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Strategic Planning",
              "Tour Logistics",
              "Contract Negotiation",
            ].map((milestone, i) => (
              <div key={i} className="border-t border-white/20 pt-6">
                <h3 className="text-xl font-serif text-white/90">
                  {milestone}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPROACH */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/studio-abstract.png"
            alt="Studio Abstract"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="container relative z-10 mx-auto">
          <div className="mb-20">
            <h2 className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Methodology
            </h2>
            <Separator className="bg-white/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
            {[
              {
                title: "Creative Direction",
                desc: "Focus on artistic output and brand consistency.",
              },
              {
                title: "Market Analysis",
                desc: "Utilization of current industry data points.",
              },
              {
                title: "Industry Network",
                desc: "Access to relevant professional contacts.",
              },
              {
                title: "Personal Development",
                desc: "Support for non-musical career aspects.",
              },
            ].map((principle, i) => (
              <div key={i} className="group">
                <div className="text-xs font-sans text-white/30 mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-white/80 transition-colors">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed max-w-md">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CAPABILITIES */}
      <section className="py-32 bg-black text-white px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Core Capability */}
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-block border border-white/20 px-4 py-2 text-xs font-sans uppercase tracking-widest mb-4">
                Primary Service
              </div>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                Management <br /> Overview
              </h2>
              <p className="text-xl text-white/60 font-sans max-w-xl leading-relaxed">
                Comprehensive oversight of all career verticals including
                administration, creative, and logistics.
              </p>

              <ul className="space-y-6 mt-8">
                {[
                  "Brand Identity",
                  "Repertoire Selection",
                  "Digital Assets",
                  "Team Structure",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-white/80 font-sans text-lg"
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary Support */}
            <div className="lg:col-span-5 space-y-16 border-l border-white/10 pl-0 lg:pl-12 pt-12 lg:pt-0">
              <div>
                <h3 className="text-2xl font-serif mb-6 text-white/90">
                  Advisory Services
                </h3>
                <p className="text-sm text-white/50 font-sans mb-6">
                  Service available for existing teams.
                </p>
                <ul className="space-y-4">
                  {[
                    "Document Review",
                    "Risk Assessment",
                    "Logistics Planning",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-white/70 font-sans text-sm border-b border-white/5 pb-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-6 text-white/90">
                  Project Consultation
                </h3>
                <p className="text-sm text-white/50 font-sans mb-6">
                  Service available for specific campaigns.
                </p>
                <ul className="space-y-4">
                  {[
                    "Release Coordination",
                    "Production Oversight",
                    "Media Relations",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-white/70 font-sans text-sm border-b border-white/5 pb-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST & PROOF */}
      <section className="py-32 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <img
              src="/images/brand-mark.png"
              alt=""
              className="w-12 h-12 mx-auto opacity-50 invert mb-8"
              aria-hidden="true"
            />
            <blockquote className="text-3xl md:text-4xl font-serif leading-relaxed text-white/90 italic">
              "Statement regarding the effectiveness and professional nature of
              the provided consultation services."
            </blockquote>
            <div className="mt-10 font-sans text-sm tracking-widest text-white/50 uppercase">
              — Client Reference, 2024
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA TRANSITION */}
      <section className="py-32 px-6 text-center">
        <div className="container mx-auto max-w-2xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Application Process
          </h2>
          <p className="text-muted-foreground font-sans text-lg">
            New client intake is conducted quarterly based on capacity.
          </p>
          <div className="pt-8">
            <ArrowRight
              className="w-6 h-6 mx-auto text-white/50"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* 8. CONTACT / APPLICATION */}
      <section id="contact" className="py-24 px-6 bg-white text-black">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-16">
            <h2 className="text-4xl font-serif mb-4">Consultation Request</h2>
            <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider">
              Submit required information.
            </p>
          </div>

          <ApplicationForm />
        </div>
      </section>

      <footer
        role="contentinfo"
        className="py-12 bg-black text-white/30 text-center text-xs font-sans uppercase tracking-widest border-t border-white/10"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <p>&copy; 2025 Artist Development. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    parentName: "",
    artistName: "",
    email: "",
    budget: "",
    goals: "",
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key:
            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          ...formData,
          subject: `New Artist Application: ${formData.artistName}`,
          from_name: "Artist Development Site",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStep(4);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(
        "Failed to submit form. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 4) {
    return (
      <div className="text-center py-12 space-y-6">
        <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto">
          <Check className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="text-3xl font-serif">Submission Received</h3>
        <p className="text-muted-foreground font-sans max-w-md mx-auto">
          Information has been recorded. A representative will contact you if
          the profile matches current requirements.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Progress Indicator */}
      <div className="flex gap-2 mb-12">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-0.5 flex-1 transition-colors duration-300 ${i <= step ? "bg-black" : "bg-gray-200"}`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label
                htmlFor="parentName"
                className="font-sans text-xs uppercase tracking-wider text-gray-500"
              >
                Parent / Guardian Name
              </Label>
              <Input
                id="parentName"
                placeholder="Full Name"
                className="rounded-none border-0 border-b border-black/20 focus:border-black px-0 h-12 font-serif text-xl placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                value={formData.parentName}
                onChange={(e) =>
                  setFormData({ ...formData, parentName: e.target.value })
                }
              />
            </div>
            <div className="space-y-3">
              <Label
                htmlFor="artistName"
                className="font-sans text-xs uppercase tracking-wider text-gray-500"
              >
                Artist Name
              </Label>
              <Input
                id="artistName"
                placeholder="Stage or Real Name"
                className="rounded-none border-0 border-b border-black/20 focus:border-black px-0 h-12 font-serif text-xl placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                value={formData.artistName}
                onChange={(e) =>
                  setFormData({ ...formData, artistName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="space-y-3">
            <Label
              htmlFor="email"
              className="font-sans text-xs uppercase tracking-wider text-gray-500"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="rounded-none border-0 border-b border-black/20 focus:border-black px-0 h-12 font-serif text-xl placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8">
          <div className="space-y-6">
            <Label className="font-sans text-xs uppercase tracking-wider text-gray-500">
              Budget Allocation (Monthly)
            </Label>
            <p className="text-sm text-muted-foreground mb-4 font-serif italic">
              Select the applicable monthly budget range.
            </p>
            <RadioGroup
              value={formData.budget}
              onValueChange={(val) => setFormData({ ...formData, budget: val })}
              className="grid grid-cols-1 gap-4"
            >
              {["$2,500 - $5,000", "$5,000 - $10,000", "$10,000+"].map(
                (range) => (
                  <div
                    key={range}
                    className={`flex items-center space-x-4 border p-6 transition-colors cursor-pointer ${formData.budget === range ? "border-black bg-black text-white" : "border-black/10 hover:border-black/30"}`}
                  >
                    <RadioGroupItem
                      value={range}
                      id={range}
                      className={`border-current ${formData.budget === range ? "text-white" : "text-black"}`}
                    />
                    <Label
                      htmlFor={range}
                      className="flex-1 cursor-pointer font-serif text-xl"
                    >
                      {range}
                    </Label>
                  </div>
                ),
              )}
            </RadioGroup>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-8">
          <div className="space-y-3">
            <Label
              htmlFor="goals"
              className="font-sans text-xs uppercase tracking-wider text-gray-500"
            >
              Objectives (Next 12 Months)
            </Label>
            <Textarea
              id="goals"
              placeholder="List primary objectives..."
              className="rounded-none border-0 border-b border-black/20 focus:border-black min-h-[150px] font-serif text-lg resize-none p-0 placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
              value={formData.goals}
              onChange={(e) =>
                setFormData({ ...formData, goals: e.target.value })
              }
            />
          </div>

          <div className="bg-gray-50 p-8 text-sm text-muted-foreground font-sans border-l-2 border-black">
            <p className="mb-2 font-bold text-black uppercase tracking-wider text-xs">
              Confirmation
            </p>
            <p>
              Submission acknowledges this is a request for information, not a
              guarantee of service.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 text-sm font-sans">
              {error}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between pt-8">
        {step > 1 ? (
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={isSubmitting}
            className="rounded-none hover:bg-transparent hover:text-black/60 text-black font-sans uppercase tracking-wider text-xs h-12 px-0 pl-0"
          >
            Back
          </Button>
        ) : (
          <div />
        )}

        <Button
          onClick={step === 3 ? handleSubmit : handleNext}
          disabled={isSubmitting}
          className="rounded-none bg-black text-white hover:bg-black/80 font-sans uppercase tracking-wider text-xs h-14 px-10 ml-auto"
        >
          {isSubmitting
            ? "Submitting..."
            : step === 3
              ? "Submit Request"
              : "Next Step"}
          {!isSubmitting && (
            <ChevronRight className="ml-2 w-4 h-4" aria-hidden="true" />
          )}
        </Button>
      </div>
    </div>
  );
}
