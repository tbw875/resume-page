"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase } from "lucide-react";

const companyColors: Record<string, { tw: string; hex: string }> = {
  Vouched: { tw: "border-[#10b981] bg-[#10b981]", hex: "#10b981" },
  Chainalysis: { tw: "border-[#F7631A] bg-[#F7631A]", hex: "#F7631A" },
  "Ekata (a Mastercard Company)": { tw: "border-[#3F3FA0] bg-[#3F3FA0]", hex: "#3F3FA0" },
  "Point Inside": { tw: "border-[#0077CC] bg-[#0077CC]", hex: "#0077CC" },
};

const defaultColor = { tw: "border-primary bg-primary", hex: "hsl(var(--primary))" };

function getCompanyColor(company: string) {
  return companyColors[company] || defaultColor;
}

export function Experience() {
  // Group consecutive roles at the same company
  const groups: { company: string; roles: typeof experience }[] = [];
  for (const role of experience) {
    const last = groups[groups.length - 1];
    if (last && last.company === role.company) {
      last.roles.push(role);
    } else {
      groups.push({ company: role.company, roles: [role] });
    }
  }

  return (
    <SectionWrapper id="experience">
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Professional Experience
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        A track record of driving revenue, building teams, and delivering
        technical solutions at scale.
      </p>

      <div className="relative mx-auto max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-0 hidden h-full w-px bg-border md:block" />

        <Accordion
          type="multiple"
          defaultValue={[]}
        >
          {groups.map((group, gi) => {
            const { tw, hex } = getCompanyColor(group.company);
            const borderClass = tw.split(" ")[0]; // border-xxx-500

            return (
              <motion.div
                key={group.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.15 }}
              >
                {/* Company header */}
                <div className="relative md:pl-12 mt-8 first:mt-0 mb-1">
                  {/* Company dot on timeline */}
                  <div
                    className={`absolute left-[11px] top-[6px] hidden h-[17px] w-[17px] items-center justify-center rounded-full border-2 ${borderClass} bg-background md:flex`}
                  >
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: hex }} />
                  </div>

                  <div className="flex items-center gap-3">
                    <Briefcase className="h-4 w-4 text-muted-foreground md:hidden" />
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {group.company}
                    </span>
                    <div className="hidden h-px flex-1 md:block" style={{ backgroundColor: `${hex}33` }} />
                  </div>
                </div>

                {/* Roles at this company */}
                {group.roles.map((role) => (
                  <div
                    key={role.company + role.period}
                    className="relative md:pl-12"
                  >
                    {/* Connecting line segment for multi-role companies */}
                    {group.roles.length > 1 && (
                      <div
                        className="absolute left-[19px] top-0 hidden h-full w-px md:block"
                        style={{ backgroundColor: `${hex}4D` }}
                      />
                    )}

                    {/* Small role dot - only on timeline, not on title */}

                    <AccordionItem
                      value={role.company + role.period}
                      className="border-b border-border/50"
                    >
                      <AccordionTrigger className="py-5 hover:no-underline">
                        <div className="flex flex-col items-start gap-1 text-left">
                          <span className="font-semibold">{role.title}</span>
                          <span className="text-sm text-muted-foreground">
                            {role.period}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pb-2 text-sm leading-relaxed text-muted-foreground">
                          {role.bullets.map((bullet, j) => (
                            <li key={j} className="flex gap-2">
                              <span className="flex-shrink-0" style={{ color: hex }}>
                                –
                              </span>
                              <span>
                                {bullet.split(/(\*\*.*?\*\*)/).map((part, k) =>
                                  part.startsWith("**") && part.endsWith("**") ? (
                                    <strong key={k} className="font-semibold text-foreground">
                                      {part.slice(2, -2)}
                                    </strong>
                                  ) : (
                                    <span key={k}>{part}</span>
                                  )
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
