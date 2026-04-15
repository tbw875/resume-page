"use client";

import { motion } from "framer-motion";
import { competencies } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SquareTerminal, Users, Handshake } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  SquareTerminal,
  Users,
  Handshake,
};

export function CoreCompetencies() {
  return (
    <SectionWrapper id="competencies">
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Core Competencies
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        A blend of deep technical expertise and business acumen, built across
        multiple industries and roles.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {competencies.map((comp, i) => {
          const Icon = iconMap[comp.icon] || Blocks;
          return (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{comp.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {comp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
