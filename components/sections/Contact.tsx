"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import Image from "next/image";

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <SectionWrapper id="contact">
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Get In Touch
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        Excited about learning how Tom&apos;s experience can directly
        fulfill your business goals? Drop a note below and let&apos;s
        connect.
      </p>

      <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
        {/* Personal note */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-start gap-5">
            <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/30">
              <Image
                src="/images/headshot.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <blockquote className="border-l-2 border-primary pl-4 text-muted-foreground italic">
                &ldquo;Whether you&apos;re exploring a technical partnership, need help
                navigating a complex sales cycle, or just want to talk shop &mdash;
                I&apos;d love to connect.&rdquo;
              </blockquote>
              <p className="mt-2 pl-4 text-sm text-muted-foreground">
                &mdash; {personalInfo.name}
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Email: </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-primary hover:underline"
              >
                {personalInfo.email}
              </a>
            </p>
            <p>
              <span className="font-medium text-foreground">Phone: </span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-primary hover:underline"
              >
                {personalInfo.phone}
              </a>
            </p>
            <p>
              <span className="font-medium text-foreground">Location: </span>
              {personalInfo.location}
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="How can I help?"
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full sm:w-auto">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
}
