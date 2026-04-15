export interface Competency {
  title: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface Experience {
  company: string;
  title: string;
  period: string;
  bullets: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
}

export const personalInfo: PersonalInfo = {
  name: "Tom Walsh",
  title: "Solutions Engineer",
  location: "Seattle, WA",
  email: "tom@tomwalsh.xyz",
  phone: "(206) 719-5992",
  linkedin: "https://linkedin.com/in/tomwalsh",
};

export const heroContent = {
  heading: "Experienced Solutions Architect",
  subheading:
    "Highly skilled technical engineering and sales professional with 8+ years of experience in software sales, data analysis, payments, fraud, and cryptocurrency.",
  cta: "Get In Touch",
  ctaSecondary: "See My Experience",
};

export const competencies: Competency[] = [
  {
    title: "Solutions Architecture",
    description:
      "8+ years designing and delivering technical solutions for enterprise clients — from SaaS platforms to cloud infrastructure — across regulated industries including FinTech, identity, and digital assets.",
    icon: "SquareTerminal",
  },
  {
    title: "Leadership",
    description:
      "Seasoned leadership professional recognized for cross-functional achievement in mentoring teams and streamlining operational processes.",
    icon: "Users",
  },
  {
    title: "Professional Sales",
    description:
      "Consistently exceeded revenue targets by building and scaling enterprise relationships across SaaS, payments, cryptocurrency, and financial services — turning complex technical value into closed deals.",
    icon: "Handshake",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    icon: "Code",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Web & Infrastructure",
    icon: "Globe",
    items: ["React", "Next.js", "Node.js", "REST APIs", "Tailwind CSS"],
  },
  {
    category: "Cloud & Services",
    icon: "Cloud",
    items: ["AWS EC2", "AWS S3", "AWS Lambda", "Vercel"],
  },
  {
    category: "Blockchain",
    icon: "Link",
    items: ["Bitcoin", "Ethereum", "L2s", "DeFi Tools"],
  },
  {
    category: "AI & Agents",
    icon: "Sparkles",
    items: ["Claude", "CoWork", "Claude Code", "AI Agents", "MCP", "LLM Orchestration", "Prompt Engineering"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: ["Office Suite", "Google Suite", "Jira", "Salesforce", "Asana", "Monday", "Linear"],
  },
];

export const experience: Experience[] = [
  {
    company: "Vouched",
    title: "Head of Solutions Engineering",
    period: "2024 – Present",
    bullets: [
      "Placeholder — details to be added.",
    ],
  },
  {
    company: "Chainalysis",
    title: "Manager of Solutions Architecture",
    period: "2022 – 2024",
    bullets: [
      "Lead team of Solutions Architects in designing solution-oriented technical proofs of value to C-level executives and risk officers.",
      "Constructed technical proofs which yielded 700% more return on investment (ROI) against competition.",
      "Collaborate in a cross-functional manner on the design and demonstration of data lakehouse use cases and workflows.",
      "Establish strong relationships with key stakeholders and decision makers including economic and technical buyers.",
      "Triage and organize team workloads in order to maximize efficiency using good time management to tackle competing priorities.",
      "Spearhead key initiatives such as development of technical sales process which yielded 5x more revenue per opportunity.",
    ],
  },
  {
    company: "Chainalysis",
    title: "Senior Solutions Architect",
    period: "2021 – 2022",
    bullets: [
      "Acted as primary point of contact for technical implementation leading pre-sales technical qualification for enterprise accounts.",
      "Partnered with sales, product, marketing, and other teams to create demonstrations and ensure alignment with requirements.",
      "Orchestrated discovery to uncover technical, business, and persona needs while fostering collaboration for product trials.",
      "Brought focus on pre-sales team enablement and advancement by engaging in strategic internal dialogue throughout the process.",
    ],
  },
  {
    company: "Ekata (a Mastercard Company)",
    title: "Account Director",
    period: "2020 – 2021",
    bullets: [
      "Oversaw a $1.6MM value business portfolio executing focused go-to-market strategy for emerging segments.",
      "Successfully doubled the cryptocurrency customer base covering major exchanges such as Binance and Coinbase.",
      "Streamlined the sales cycles via Strategic Selling and Winning by Design in collaboration with Digital Assets team.",
    ],
  },
  {
    company: "Ekata (a Mastercard Company)",
    title: "Sales Engineering Manager",
    period: "2017 – 2020",
    bullets: [
      "Conducted data analysis using Python and Jupyter to enhance pre-sales support and better direct Sales Engineering team.",
      "Optimized workflows in Jira while contributing to pre-sales opportunities and fostering relationships with Coinbase and PayPal.",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#competencies" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
