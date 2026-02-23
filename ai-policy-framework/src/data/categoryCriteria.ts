export interface Criterion {
  name: string;
  weight: number;
  description: string;
}

export interface CategoryCriteria {
  category: string;
  criteria: Criterion[];
}

export const categoryCriteria: CategoryCriteria[] = [
  {
    category: "National Security",
    criteria: [
      {
        name: "Defense & Military Applications",
        weight: 20,
        description: "Addresses AI in defense, autonomous weapons, and military decision-making."
      },
      {
        name: "Critical Infrastructure Protection",
        weight: 20,
        description: "Protects energy, transport, health, and communications against AI vulnerabilities."
      },
      {
        name: "Export Controls & Tech Sovereignty",
        weight: 15,
        description: "Imposes export controls, licensing requirements, or restrictions on the transfer of AI technologies to protect national security or strategic advantage."
      },
      {
        name: "Foreign Influence & Espionage",
        weight: 15,
        description: "Mitigates AI misuse for espionage, disinformation, and cyber warfare."
      },
      {
        name: "Cyber Defense & Resilience",
        weight: 15,
        description: "Addresses AI-enabled cyber threats to national security, including state-sponsored attacks, critical systems defense, and strategic cyber resilience."
      },
      {
        name: "Interagency & International Coordination",
        weight: 15,
        description: "Promotes coordination among national security agencies and with security alliances (e.g., NATO, defense partnerships) on AI-related threats and controls."
      }
    ]
  },
  {
    category: "Safety & Security",
    criteria: [
      {
        name: "Testing & Evaluation Requirements",
        weight: 25,
        description: "Mandates pre-deployment testing (e.g., red teaming, safety benchmarks)."
      },
      {
        name: "Incident Reporting & Transparency",
        weight: 15,
        description: "Requires timely reporting of AI malfunctions, security breaches, near-misses, or harmful outcomes to regulators or designated authorities."
      },
      {
        name: "Cybersecurity Provisions",
        weight: 15,
        description: "Addresses system robustness, adversarial attacks, and security vulnerabilities in AI systems, excluding state-sponsored or military cyber threats."
      },
      {
        name: "Human Oversight & Accountability",
        weight: 15,
        description: "Requires human-in-the-loop controls and clearly assigned organizational responsibility for AI system operation and risk management."
      },
      {
        name: "Whistleblower Protections",
        weight: 10,
        description: "Protects individuals who report AI-related risks or noncompliance in good faith, including anti-retaliation safeguards and confidential reporting channels."
      },
      {
        name: "Third-Party Audits & Compliance",
        weight: 10,
        description: "Independent review, auditing, certification mechanisms."
      },
      {
        name: "Physical & Individual Safety Protections",
        weight: 10,
        description: "Addresses risks of physical injury or harm to individual well-being, including mental health impacts, arising from AI system operation."
      }
    ]
  },
  {
    category: "Antitrust",
    criteria: [
      {
        name: "Market Concentration & Dominance",
        weight: 30,
        description: "Addresses market power, dominance, concentration metrics, and anticompetitive structural barriers to entry in AI markets."
      },
      {
        name: "Merger & Acquisition Scrutiny",
        weight: 20,
        description: "Strengthens review of mergers, acquisitions, and roll-up strategies in the AI sector, including foreclosure and killer-acquisition risks."
      },
      {
        name: "Competition Enforcement Capacity",
        weight: 20,
        description: "Allocates authority, staffing, funding, or tools to competition agencies (e.g., FTC, DOJ) for AI-related antitrust enforcement."
      },
      {
        name: "Interoperability & Open Standards",
        weight: 15,
        description: "Requires or promotes open APIs, data portability, or standards to reduce lock-in, switching costs, or gatekeeper control in AI markets."
      },
      {
        name: "Data Access & Mandatory Sharing",
        weight: 10,
        description: "Requires dominant platforms to provide fair, nondiscriminatory access to key datasets or inputs as a competition remedy, including court-ordered or regulator-imposed data-sharing obligations."
      },
      {
        name: "Exclusionary Conduct & Platform Neutrality",
        weight: 5,
        description: "Restricts exclusionary practices such as self-preferencing, tying, exclusive dealing, default settings, or discriminatory access that distort competition or foreclose rivals."
      }
    ]
  },
  {
    category: "Civil & Human Rights",
    criteria: [
      {
        name: "Consumer Protection",
        weight: 20,
        description: "Prevents fraud, deception, and consumer harm from AI applications."
      },
      {
        name: "Privacy & Data Rights",
        weight: 20,
        description: "Protects personal data, data ownership, consent, and lawful use."
      },
      {
        name: "Bias & Fairness",
        weight: 20,
        description: "Prevents algorithmic discrimination and promotes equitable treatment across protected classes."
      },
      {
        name: "Accessibility & Inclusion",
        weight: 15,
        description: "Ensures accessibility for people with disabilities consistent with the Americans with Disabilities Act (ADA) and promotes inclusive access for underserved groups."
      },
      {
        name: "Legal Protections & Due Process",
        weight: 15,
        description: "Safeguards civil liberties, procedural due process, and legal rights of individuals subject to AI-enabled decisions."
      },
      {
        name: "Transparency & Explainability",
        weight: 10,
        description: "Requires meaningful notice, explanation, or contestability for individuals affected by AI-driven decisions."
      }
    ]
  },
  {
    category: "Industrial Policy",
    criteria: [
      {
        name: "Workforce Development & Job Quality",
        weight: 25,
        description: "Supports training, reskilling, apprenticeships, and workforce transition measures that promote sustainable, high-quality employment using, deploying, or creating AI, including job-quality standards linked to public investment."
      },
      {
        name: "R&D, Investment & Incentives",
        weight: 20,
        description: "Funds grants, tax credits, procurement, and public-private programs that expand AI R&D and deployment capacity."
      },
      {
        name: "Domestic Manufacturing & Supply Chains",
        weight: 20,
        description: "Builds domestic production capacity and supply chain resilience for chips, computing hardware, and critical inputs."
      },
      {
        name: "Infrastructure & Compute Capacity",
        weight: 15,
        description: "Expands public-interest compute, clusters, and scalable compute infrastructure (including public compute initiatives)."
      },
      {
        name: "Energy & Resource Capacity",
        weight: 10,
        description: "Expands energy generation, grid capacity, and resource availability required for compute and infrastructure resilience."
      },
      {
        name: "Global Competitiveness",
        weight: 10,
        description: "Strengthens national AI competitiveness through standards leadership and international market access, excluding export controls or trade restrictions."
      }
    ]
  }
];
