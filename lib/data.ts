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
  linkedin: "https://www.linkedin.com/in/tom-walsh-solutions-architect/",
};

export const heroContent = {
  heading: "Experienced Solutions Engineering Leader",
  subheading:
    "Technical sales leader specializing in complex enterprise sales cycles, proof-of-concept design, and verification integrations across healthcare, fintech, and identity.",
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
    title: "Lead Solutions Engineer",
    period: "2024 – Present",
    bullets: [
      "Sole Solutions Engineer supporting the full sales organization, influencing **$1.54M in annual contract value**, representing 74.4% of all company-wide revenue closed.",
      "Doubled close rates on SE-engaged deals compared to non-SE pipeline, with **3x higher average deal size** per opportunity.",
      "Architected sophisticated verification workflow and orchestration strategies that became the company's core technical sales playbook across all telehealth accounts.",
      "Led competitive proof-of-concept engagements resulting in **$14.8M of measurable customer value** and a **53% performance win** over incumbent solutions in head-to-head evaluations.",
      "Drove expansion revenue through post-close technical strategy, including upsells of 3.4x and 4.2x on existing accounts via workflow enhancements.",
      "Mentored AEs on technical positioning, collaborated on deal strategy, and ran internal enablement sessions to elevate team-wide sales engineering capabilities.",
      "Built and maintained a fully customized demo environment enabling any employee to deliver live product demonstrations independently.",
      "Partnered cross-functionally with AEs, product, and engineering to run end-to-end deal cycles from discovery and POC design through integration kickoff and QBR.",
    ],
  },
  {
    company: "Chainalysis",
    title: "Manager of Solutions Architecture",
    period: "2022 – 2024",
    bullets: [
      "Lead team of Solutions Architects in designing solution-oriented technical proofs of value to **C-level executives and risk officers**.",
      "Constructed technical proofs which yielded **700% more return on investment (ROI)** against competition.",
      "Collaborate in a cross-functional manner on the design and demonstration of data lakehouse use cases and workflows.",
      "Establish strong relationships with key stakeholders and decision makers including economic and technical buyers.",
      "Triage and organize team workloads in order to maximize efficiency using good time management to tackle competing priorities.",
      "Spearhead key initiatives such as development of technical sales process which yielded **5x more revenue per opportunity**.",
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
      "Oversaw a **$1.6MM value business portfolio** executing focused go-to-market strategy for emerging segments.",
      "Successfully **doubled the cryptocurrency customer base** covering major exchanges such as Binance and Coinbase.",
      "Streamlined the sales cycles via Strategic Selling and Winning by Design in collaboration with Digital Assets team.",
    ],
  },
  {
    company: "Ekata (a Mastercard Company)",
    title: "Manager, Solutions Architecture",
    period: "2019 – 2020",
    bullets: [
      "Led the Solutions Architecture team, directing pre-sales strategy and technical sales support across enterprise accounts.",
      "Optimized team workflows in Jira to maximize efficiency and coverage across competing priorities.",
    ],
  },
  {
    company: "Ekata (a Mastercard Company)",
    title: "Senior Solutions Architect",
    period: "2018 – 2019",
    bullets: [
      "Conducted data analysis using Python and Jupyter to enhance pre-sales technical support and accelerate discovery.",
      "Contributed to pre-sales opportunities while building relationships with key fintech accounts.",
    ],
  },
  {
    company: "Ekata (a Mastercard Company)",
    title: "Solutions Architect",
    period: "2017 – 2018",
    bullets: [
      "Supported pre-sales technical evaluations and fostered relationships with key accounts including Coinbase and PayPal.",
    ],
  },
  {
    company: "Point Inside",
    title: "Client Success Analyst",
    period: "2017",
    bullets: [],
  },
  {
    company: "Point Inside",
    title: "Data Content Technician",
    period: "2016 – 2017",
    bullets: [],
  },
];

export const navLinks = [
  { label: "About", href: "#competencies" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
