export interface PolicyData {
  subject: string;
  value: number;
  fullMark: number;
}

export interface Policy {
  id: string;
  name: string;
  description: string;
  summary: string;
  year: number;
  area: string;
  data: PolicyData[];
  color: string;
  pdfUrl?: string;
}

export const POLICY_ATTRIBUTES = [
  {
    name: "National Security",
    description: "National security in AI policy addresses the protection of the United States from threats posed by adversaries leveraging AI for espionage, cyberwarfare, disinformation, and military advantage. It encompasses safeguarding critical infrastructure, ensuring technological sovereignty through export controls and supply chain resilience, and maintaining U.S. leadership in the global AI race. This category highlights the strategic dimension of AI as both a national defense tool and a geopolitical asset."
  },
  {
    name: "Safety & Security",
    description: "Safety & Security emphasize protecting people, systems, and the public from direct and indirect harm caused by AI deployment. It includes requirements for testing and evaluation (such as red teaming and safety benchmarks), incident reporting (where incidents are typically defined within the policy), human oversight, cybersecurity measures, and third-party audits. Policies in this domain focus on minimizing risks ranging from cybersecurity to catastrophic system failures, ensuring that AI adoption aligns with principles of robustness, transparency, and accountability."
  },
  {
    name: "Antitrust",
    description: "Antitrust in AI policy seeks to prevent excessive market concentration, promote fair competition within the AI sector, and ensure that AI does not facilitate market concentration in other sectors. It involves scrutiny of mergers and acquisitions, promoting interoperability and open standards, expanding fair access to datasets, allocating enforcement resources to regulators like the Federal Trade Commission (FTC) and Department of Justice (DOJ), and promoting small AI players in the AI sector. This category reflects concerns that unchecked dominance by a few large players could stifle innovation, limit consumer choice, and concentrate economic and political power within the technology industry and more broadly."
  },
  {
    name: "Civil & Human Rights",
    description: "The Civil & Human Rights category encompasses policies designed to safeguard civil liberties, consumer protections, equity, and transparency in the use of AI. It prioritizes privacy and data rights, algorithmic fairness, accessibility, explainability, and the protection of human rights and dignity. Civil society stakeholders emphasize trust, accountability, and inclusion as preconditions for AI adoption, urging governance structures that advance the broader public good while balancing innovation with democratic safeguards."
  },
  {
    name: "Industrial Policy",
    description: "Industrial Policy (Economic Resilience) refers to strategic measures that strengthen U.S. competitiveness and economic resilience in the global AI economy. It includes investments in research & development (R&D), workforce development, domestic manufacturing, supply chain security, infrastructure such as public compute capacity, energy use requirements, and environmental impact. By fostering public-private partnerships and enabling small and medium enterprises (SMEs), this category seeks to position the U.S. as a global leader in AI while supporting job creation and innovation across industries."
  }
];
