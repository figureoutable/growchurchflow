"use client";

import { type FormEvent, useState } from "react";
import ParticleButton from "@/components/kokonutui/particle-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const helpOptions = [
  { value: "", label: "Select an option" },
  { value: "website", label: "Website Design" },
  { value: "social", label: "YouTube Shorts and Social Media" },
  { value: "both", label: "Both" },
  { value: "unsure", label: "Not Sure Yet" },
];

const selectClass = cn(
  "h-10 w-full rounded-xl border border-brand-ink/15 bg-white px-3 text-sm text-brand-ink outline-none transition-colors",
  "focus-visible:border-brand-orange focus-visible:ring-2 focus-visible:ring-brand-orange/25",
  "disabled:cursor-not-allowed disabled:opacity-50"
);

export function ContactForm() {
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <Card className="rounded-3xl border-0 bg-white shadow-xl ring-1 ring-brand-ink/10">
      <CardHeader className="space-y-1 p-8 pb-6">
        <CardTitle className="font-heading text-2xl text-brand-ink">
          Discovery call request
        </CardTitle>
        <CardDescription className="text-base text-brand-muted">
          Share a few details and we&apos;ll get back to you to schedule your
          call.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        {done ? (
          <p className="rounded-2xl bg-brand-purple-soft px-5 py-8 text-center text-sm font-medium text-brand-ink ring-1 ring-brand-purple/20">
            Thank you. We&apos;ve received your message. We&apos;ll be in touch
            within one working day.
          </p>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="h-11 rounded-xl border-brand-ink/15 bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="churchName">Church Name</Label>
                <Input
                  id="churchName"
                  name="churchName"
                  required
                  placeholder="Your church"
                  className="h-11 rounded-xl border-brand-ink/15 bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="h-11 rounded-xl border-brand-ink/15 bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Optional"
                className="h-11 rounded-xl border-brand-ink/15 bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="help">How can we help?</Label>
              <select
                id="help"
                name="help"
                required
                defaultValue=""
                className={selectClass}
              >
                {helpOptions.map((o) => (
                  <option
                    key={o.value || "placeholder"}
                    value={o.value}
                    disabled={o.value === ""}
                  >
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Tell us a bit about your church and what you&apos;re looking
                for
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="We'd love to hear your story..."
                className="min-h-[120px] resize-y rounded-xl border-brand-ink/15 bg-white"
              />
            </div>

            <ParticleButton
              type="submit"
              className="h-12 w-full gap-2 rounded-full border-0 bg-brand-orange px-6 text-base font-bold text-white shadow-md transition-colors hover:bg-brand-orange-dark"
            >
              Book My Free Call
            </ParticleButton>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
