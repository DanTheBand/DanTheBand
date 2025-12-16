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
            className="w-full h-full object-cover opacity-70 brightness-80"
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.05] text-white">
            Artist Development <br />
            <span className="italic text-white/70">for Emerging Artists.</span>
          </h1>

          <p className="text-lg md:text-xl font-sans text-white/70 max-w-2xl mx-auto tracking-wide">
            Bespoke, real-world guidance to help emerging artists build an industry-ready foundation.
          </p>

          <div className="pt-12">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-none px-12 py-8 text-lg md:text-xl uppercase tracking-widest font-bold transition-colors duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Request Strategy Call
            </Button>
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
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background/90" />
        </div>
        <div className="container max-w-3xl mx-auto space-y-16 relative z-10">
          <div className="space-y-10">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/90">
              Designed for those taking a long-term view building a solid, sustainable foundation.
            </p>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/800">
              Decisions are tuned to the artist's lane, goals, and current level with a clear path mapped out for the greatest possible success.
            </p>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/50">
              Limited Availability. The first step is a strategy call to confirm alignment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CONTEXT */}
      <section className="relative py-24 bg-white/5 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/studio-abstract.png"
            alt="Studio Abstract Texture"
            className="w-full h-full object-cover opacity-30 brightness-110"
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 flex flex-col justify-center items-start">
              <img
                src="/images/logo.jpg"
                alt="DanTheBand Logo"
                className="w-50 h-50 mb-6 opacity-100 invert"
              />
            </div>

            <div className="md:col-span-8">
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl font-serif text-white/85 leading-relaxed max-w-2xl">
                  Practitioner-led guidance shaped by real-world work, from the biggest stages, to the major studios, and in the rooms where decisions get made.
                </p>

                <p className="text-xl md:text-2xl font-serif text-white/80 leading-relaxed max-w-2xl">
                  Touring and studio work includes Sean Paul, Ellie Goulding, Madison Beer, and Fabolous, and more.
                </p>
                <div className="pt-2">
                  <p className="text-sm text-white/65 font-sans">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. CAPABILITIES */}
      <section className="relative py-32 bg-black text-white px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/microphone.jpg"
            alt="Microphone on stage"
            className="w-full h-full object-cover opacity-70 brightness-90"
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>
        <div className="relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Intro */}
            <div className="lg:col-span-5 space-y-8">
              <div className="text-xs font-sans uppercase tracking-[0.2em] text-white/40">
                Capabilities
              </div>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                A small number of levers,
                <br />
                pulled with care.
              </h2>
              <p className="text-lg md:text-xl text-white/90 font-sans max-w-xl leading-relaxed">
                Hands-on development built for longevity, taste-led decisions, professional standards, and a clear plan
                for what matters next.
              </p>

              <div className="pt-10 border-t border-white/10 space-y-10">
                <div>
                  <div className="text-xs font-sans uppercase tracking-[0.2em] text-white/80">
                    Approach
                  </div>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      {
                        n: "01",
                        title: "Find your lane",
                        desc: "Clarify what fits, what doesn’t, and where focus actually pays off.",
                      },
                      {
                        n: "02",
                        title: "Set your direction",
                        desc: "Align sound, priorities, and decisions around one clear identity.",
                      },
                      {
                        n: "03",
                        title: "Raise your standard",
                        desc: "Develop material and execution until it reads as professional.",
                      },
                      {
                        n: "04",
                        title: "Prepare for the moment",
                        desc: "Support performance and presentation so the artist shows up ready.",
                      },
                    ].map((step) => (
                      <div key={step.n} className="space-y-3">
                        <div className="text-xs font-sans text-white/80 tracking-widest">{step.n}</div>
                        <div className="text-xl font-serif text-white/95">{step.title}</div>
                        <p className="text-sm text-white/90 font-sans leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Pillars */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Strategic Direction */}
                <div className="border-t border-white/15 pt-8">
                  <h3 className="text-2xl font-serif text-white/90 mb-4">Strategic Direction</h3>
                  <p className="text-sm text-white/55 font-sans leading-relaxed">
                    Define the lane, remove noise, and set decisions that compound.
                  </p>
                  <ul className="space-y-3 mt-6">
                    {[
                      "Positioning & lane clarity",
                      "Priorities and next moves",
                      "Release pacing & milestones",
                      "6–12 month roadmap",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/75 font-sans text-sm"
                      >
                        <span className="mt-2 w-1.5 h-1.5 bg-white/70 rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industry Guidance */}
                <div className="border-t border-white/15 pt-8">
                  <h3 className="text-2xl font-serif text-white/90 mb-4">Industry Guidance</h3>
                  <p className="text-sm text-white/55 font-sans leading-relaxed">
                    Real-world decision support, without chasing trends.
                  </p>
                  <ul className="space-y-3 mt-6">
                    {[
                      "What matters / what doesn’t",
                      "Team & infrastructure filtering",
                      "Timing and strategy checks",
                      "Introductions when appropriate",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/75 font-sans text-sm"
                      >
                        <span className="mt-2 w-1.5 h-1.5 bg-white/70 rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Creative Production */}
                <div className="border-t border-white/15 pt-8">
                  <h3 className="text-2xl font-serif text-white/90 mb-4">Creative Production</h3>
                  <p className="text-sm text-white/55 font-sans leading-relaxed">
                    Work that reads as professional, cohesive, intentional, and ready.
                  </p>
                  <ul className="space-y-3 mt-6">
                    {[
                      "Song development & production",
                      "Repertoire & selection",
                      "Vocal & performance preparation",
                      "Cohesive body of work",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/75 font-sans text-sm"
                      >
                        <span className="mt-2 w-1.5 h-1.5 bg-white/70 rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>


      {/* 8. CONTACT / APPLICATION */}
      <section id="contact" className="py-24 px-6 bg-white text-black">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-16">
            <h2 className="text-4xl font-serif mb-4">Request a Strategy Call</h2>
            <p className="text-muted-foreground font-sans text-sm uppercase tracking-wider">
              Share a few details and we’ll follow up if it’s a fit.
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
          <p>&copy; 2025 DanTheBand. All Rights Reserved.</p>
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
          subject: `New Strategy Call Request: ${formData.artistName}`,
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
          Information has been recorded. We’ll follow up if it’s a fit.
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
            <Label className="font-sans text-xs uppercase tracking-wider text-gray-500">
              Budget Range (Monthly)
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
              Submitting this form requests a strategy call. Availability is limited and not every request is accepted.
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
