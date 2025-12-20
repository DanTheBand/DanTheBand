import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground selection:bg-white/10">
      {/* Mobile-only top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className="px-4 pt-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md px-4 py-3">
            <button
              type="button"
              className="text-white/80 font-sans text-xs uppercase tracking-widest"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
            >
              Artist Development
            </button>

            <button
              type="button"
              className="text-white font-sans text-xs uppercase tracking-widest"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Request Strategy Call"
            >
              Request Call
            </button>
          </div>
        </div>
      </div>
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-24 md:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Dark atmospheric recording studio background texture"
            className="w-full h-full object-cover opacity-70 brightness-80"
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.05] text-white/90">
              Artist Development <br />
              <span className="italic text-white/84">The Right Way, From the Start.</span>
            </h1>


          <p className="text-lg md:text-xl font-sans text-white/84 max-w-2xl mx-auto tracking-wide">
            A private advisory for those investing seriously in an artist’s career, 
            focused on building the right foundation from day one.
          </p>

          <div className="pt-12">
            <Button
              size="lg"
              className="bg-black text-white/90 rounded-none px-12 py-8 text-lg md:text-xl uppercase tracking-widest font-bold transition-all duration-200 shadow-[0_4px_32px_0_rgba(255,255,255,0.04)] relative overflow-hidden hover:bg-neutral-800 hover:text-white/100 hover:shadow-[0_8px_48px_0_rgba(255,255,255,0.10)] hover:scale-105 active:scale-95"
              style={{ position: 'relative' }}
              onClick={e => {
                // Micro-interaction ripple effect
                const btn = e.currentTarget;
                const circle = document.createElement('span');
                const diameter = Math.max(btn.clientWidth, btn.clientHeight);
                const radius = diameter / 2;
                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
                circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
                circle.className = 'ripple-effect';
                btn.appendChild(circle);
                setTimeout(() => circle.remove(), 600);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Strategy Call
            </Button>
            <style>{`
              .ripple-effect {
                position: absolute;
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                background: rgba(255,255,255,0.15);
                pointer-events: none;
                z-index: 2;
              }
              @keyframes ripple {
                to {
                  transform: scale(2.5);
                  opacity: 0;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* 2. ORIENTATION */}
      <section className="relative py-24 md:py-32 px-6 border-t border-white/5 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Singer.jpg"
            alt="Singer performing live on stage"
            className="w-full h-full object-cover opacity-70 brightness-75"
            role="presentation"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background/90" />
        </div>
        <div className="container max-w-3xl mx-auto space-y-16 relative z-10">
          <div className="space-y-10">
            <p className="text-2xl md:text-3xl font-sans leading-relaxed text-white/100">
              Designed for those taking a long-term view — where early decisions compound over time.
            </p>
            <p className="text-2xl md:text-3xl font-sans leading-relaxed text-white/100">
              Direction is set relative to the artist’s lane, goals, and current level with attention paid to what must be addressed now, what should wait, and what should be avoided entirely.
            </p>
            <p className="text-2xl md:text-3xl font-sans leading-relaxed text-white/90">
              Availability is limited.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CONTEXT */}
      <section className="relative py-24 bg-white/5 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/studio-abstract.jpg"
            alt="Studio Abstract Texture"
            className="w-full h-full object-cover opacity-30 brightness-110"
            role="presentation"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 flex flex-col justify-center items-start">
              <img
                src="/images/logo.png"
                alt="DanTheBand Logo"
                className="w-50 h-50 mb-6 opacity-100 invert"
                loading="lazy"
              />
            </div>

            <div className="md:col-span-8">
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl font-sans text-white/100 leading-relaxed max-w-2xl">
                  Practitioner-led guidance shaped by real-world work, from the biggest stages, to the major studios, and in the rooms where decisions get made.
                </p>
                <p className="text-xl md:text-2xl font-sans text-white/100 leading-relaxed max-w-2xl">
                  Touring and studio work includes Sean Paul, Ellie Goulding, Madison Beer, and Fabolous, among others.
                </p>
                <div className="pt-2">
                  <p className="text-sm text-white/85 font-sans">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 5. CAPABILITIES */}
<section className="relative py-32 bg-black text-white px-6 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img
      src="/images/microphone.jpg"
      alt="Microphone on stage"
      className="w-full h-full object-cover opacity-70 brightness-90"
      role="presentation"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
  </div>

  <div className="relative z-10">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Intro */}
        <div className="lg:col-span-5">
          <div className="text-xs font-sans uppercase tracking-[0.2em] text-white/40">
            Capabilities
          </div>

          <h2 className="mt-6 text-5xl md:text-6xl font-serif leading-tight">
            A small number of levers,
            <br />
            pulled with care.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-white/90 font-sans max-w-xl leading-relaxed">
            Hands-on development focused on critical decisions, made in sequence,
            with long-term growth in mind.
          </p>
        </div>

        {/* Pillars */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Strategic Direction */}
            <div className="border-t border-white/15 pt-8">
              <h3 className="text-2xl font-serif text-white/90 mb-4">
                Strategic Direction
              </h3>
              <p className="text-sm text-white/55 font-sans leading-relaxed">
                Clarifying the artist’s lane and sequencing decisions that shape long-term value.
              </p>
              <p className="mt-6 text-sm text-white/75 font-sans leading-relaxed">
                This engagement focuses on positioning, priorities, and timing, ensuring early decisions
                support not just momentum, but the long-term integrity of the artist’s catalog.
              </p>
            </div>

            {/* Industry Guidance */}
            <div className="border-t border-white/15 pt-8">
              <h3 className="text-2xl font-serif text-white/90 mb-4">
                Industry Guidance
              </h3>
              <p className="text-sm text-white/55 font-sans leading-relaxed">
                Decision support informed by real-world industry context.
              </p>
              <p className="mt-6 text-sm text-white/75 font-sans leading-relaxed">
                This engagement centers on evaluating opportunities, filtering teams and collaborators,
                and pressure-testing timing — with an emphasis on protecting long-term creative ownership
                and direction.
              </p>
            </div>

            {/* Creative Production */}
            <div className="border-t border-white/15 pt-8">
              <h3 className="text-2xl font-serif text-white/90 mb-4">
                Creative Production
              </h3>
              <p className="text-sm text-white/55 font-sans leading-relaxed">
                Hands-on development focused on work that endures.
              </p>
              <p className="mt-6 text-sm text-white/75 font-sans leading-relaxed">
                This engagement focuses on shaping material, performance, and presentation so the work reads
                as intentional, cohesive, and worthy of standing as part of a lasting catalog.
              </p>
            </div>
          </div>
        </div>

        {/* Approach — full width */}
        <div className="lg:col-span-12 pt-10 border-t border-white/10">
          <div className="text-xs font-sans uppercase tracking-[0.2em] text-white/80 mb-10">
            Approach
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { n: "01", title: "Find your lane", desc: "Clarify what fits, what doesn’t, and where focus actually pays off." },
              { n: "02", title: "Set your direction", desc: "Align sound, priorities, and decisions around one clear identity." },
              { n: "03", title: "Raise your standard", desc: "Develop material and execution until it reads as professional." },
              { n: "04", title: "Prepare for the moment", desc: "Support performance and presentation so the artist shows up ready." },
            ].map((step) => (
              <div key={step.n} className="border-t border-white/15 pt-7">
                <div className="text-xs font-sans uppercase tracking-[0.28em] text-white/45">
                  {step.n}
                </div>
                <div className="mt-3 text-xl lg:text-2xl font-serif text-white/95 leading-snug">
                  {step.title}
                </div>
                <p className="mt-3 text-sm text-white/70 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* 8. CONTACT / APPLICATION */}
      <section id="contact" className="relative py-24 px-0 bg-black text-white w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/piano.jpg"
            alt="Dark grand piano background texture"
            className="w-full h-full object-cover opacity-70 brightness-80"
            role="presentation"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto max-w-3xl p-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl font-serif mb-4">Request a Strategy Call</h2>
          </div>

          <ApplicationForm />
        </div>
      </section>

      <footer
        role="contentinfo"
        className="py-12 bg-black text-white/30 text-center text-xs font-sans uppercase tracking-widest border-t border-white/10"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <p>&copy; 2025 DanTheBand. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <p className="sr-only">
          This site describes a private artist development advisory focused on sequencing decisions, long-term growth, and professional readiness in music careers.
        </p>
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

  const handleNext = () => {
    if (
      step === 1 &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      setError("Please enter a valid email address before continuing.");
      return;
    }
    setError(null);
    setStep(step + 1);
  };
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (typeof window !== "undefined") {
      // Debug: Log the access key in production
      console.log("VITE_WEB3FORMS_ACCESS_KEY:", accessKey);
    }

    // Guardrail: prevent accidental deploys that still use a placeholder or missing key
    const isPlaceholderKey =
      !accessKey ||
      accessKey === "YOUR_ACCESS_KEY_HERE" ||
      accessKey.toLowerCase().includes("placeholder") ||
      accessKey.length < 30;

    if (isPlaceholderKey) {
      setIsSubmitting(false);
      setError(
        "Form is not configured yet. Missing VITE_WEB3FORMS_ACCESS_KEY.",
      );
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          // Useful metadata for identifying where the submission came from
          from_name: "Artist Development Site",
          subject: `New Strategy Call Request: ${formData.artistName || "(No artist name)"}`,
          // Web3Forms supports replyto; helps you reply directly from the email you receive
          replyto: formData.email,
          // Include the page origin so you can tell if it's from localhost vs production
          origin: window.location.origin,
          ...formData,
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
      </div>
    );
  }

  return (
    <div className="space-y-12 bg-black rounded-xl p-8 shadow-lg">
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
          {error && (
            <div className="bg-red-50 text-red-600 p-4 text-sm font-sans">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label
                htmlFor="parentName"
                className="font-sans text-xs uppercase tracking-wider text-gray-500"
              >
                Primary Contact Name
              </Label>
              <Input
                id="parentName"
                placeholder="Name"
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
            <Label className="font-sans text-xs uppercase tracking-wider text-white">
              Estimated Monthly Investment Capacity
            </Label>
            <p className="text-sm text-white mb-4 font-sans uppercase tracking-wider">
              <span className="text-[0.65rem] text-white font-sans">
                This helps determine whether an engagement makes sense. Specific structure is discussed later.
              </span>
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
                    className={`flex items-center space-x-4 border p-6 transition-colors cursor-pointer ${formData.budget === range ? "bg-black text-white border-white" : "bg-neutral-900 text-white/80 border-white/20 hover:border-white/40"}`}
                  >
                    <RadioGroupItem
                      value={range}
                      id={range}
                      className={`border-current ${formData.budget === range ? "text-white" : "text-black"} w-7 h-7 min-w-[1.75rem] min-h-[1.75rem]`} // Increased size
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

          <div className="bg-black p-8 text-sm text-white/80 font-sans border-l-2 border-white/30">
            <p className="mb-2 font-bold text-white uppercase tracking-wider text-xs">
              Confirmation
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
              ? "Request Strategy Call"
              : "Next Step"}
          {!isSubmitting && (
            <ChevronRight className="ml-2 w-4 h-4" aria-hidden="true" />
          )}
        </Button>
      </div>
    </div>
  );
}
