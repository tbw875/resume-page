"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Code, Globe, Cloud, Link, Wrench, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Globe,
  Cloud,
  Link,
  Wrench,
  Sparkles,
};

export function TechnicalSkills() {
  return (
    <SectionWrapper id="skills" className="bg-muted/30">
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Technical Skills
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        Tools and technologies I work with across the full stack, from cloud
        infrastructure to blockchain protocols.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, i) => {
          const Icon = iconMap[category.icon] || Code;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, j) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.1 + j * 0.05,
                    }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1.5 text-sm transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
