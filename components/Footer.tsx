import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-semibold text-foreground">{personalInfo.name}</p>
          <p className="text-sm text-muted-foreground">{personalInfo.title}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            {personalInfo.phone}
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {personalInfo.location}
          </span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            aria-label="LinkedIn profile"
          >
            <ExternalLink className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
