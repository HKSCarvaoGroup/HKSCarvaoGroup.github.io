import { Policy } from "@/types/policy";

export const policies: Policy[] = [
  {
    id: "california-sb53",
    name: "California SB 53 (Transparency in Frontier AI Act)",
    description: "Comprehensive AI safety and transparency requirements for large frontier AI developers",
    summary: "California's Transparency in Frontier AI Act establishes rigorous safety frameworks, testing requirements, incident reporting mechanisms, and risk assessment obligations for large frontier AI developers. The Act mandates public documentation of safety practices, creates whistleblower protections, and establishes the CalCompute initiative to provide public cloud computing infrastructure for safe and equitable AI development.",
    year: 2025,
    color: "hsl(221, 83%, 53%)",
    pdfUrl: "/policies/California_SB53.pdf",
    data: [
      { subject: 'National Security', value: 65, fullMark: 100 },
      { subject: 'Safety & Security', value: 95, fullMark: 100 },
      { subject: 'Antitrust', value: 50, fullMark: 100 },
      { subject: 'Civil & Human Rights', value: 90, fullMark: 100 },
      { subject: 'Industrial Policy', value: 70, fullMark: 100 },
    ]
  },
  {
    id: "colorado-ai-act",
    name: "Colorado Artificial Intelligence Act (SB 24-205)",
    description: "Consumer protection law preventing algorithmic discrimination in consequential decisions",
    summary: "Colorado's groundbreaking consumer protection law addresses algorithmic discrimination in high-stakes automated decision systems affecting education, employment, financial services, healthcare, housing, insurance, and legal services. The Act requires impact assessments, risk management programs, and transparency measures while establishing strong enforcement mechanisms and consumer rights.",
    year: 2024,
    color: "hsl(280, 65%, 60%)",
    pdfUrl: "/policies/Colorado_Artificial_Intelligence_Act.pdf",
    data: [
      { subject: 'National Security', value: 35, fullMark: 100 },
      { subject: 'Safety & Security', value: 85, fullMark: 100 },
      { subject: 'Antitrust', value: 55, fullMark: 100 },
      { subject: 'Civil & Human Rights', value: 95, fullMark: 100 },
      { subject: 'Industrial Policy', value: 40, fullMark: 100 },
    ]
  },
  {
    id: "eo-ai-education",
    name: "EO 14277: Advancing AI Education for American Youth",
    description: "National initiative to integrate AI education in K-12 and workforce development",
    summary: "Executive Order establishing a comprehensive framework to promote AI literacy and proficiency among Americans through early education integration, comprehensive teacher training programs, and lifelong learning resources. The order creates a White House Task Force on AI Education to coordinate federal efforts in preparing the next generation of American AI innovators and an AI-ready workforce.",
    year: 2025,
    color: "hsl(142, 71%, 45%)",
    pdfUrl: "/policies/EO_AI_Education.pdf",
    data: [
      { subject: 'National Security', value: 40, fullMark: 100 },
      { subject: 'Safety & Security', value: 50, fullMark: 100 },
      { subject: 'Antitrust', value: 30, fullMark: 100 },
      { subject: 'Civil & Human Rights', value: 80, fullMark: 100 },
      { subject: 'Industrial Policy', value: 90, fullMark: 100 },
    ]
  },
  {
    id: "eo-genesis-mission",
    name: "EO: Launching the Genesis Mission",
    description: "Manhattan Project-scale national effort for AI-accelerated scientific discovery",
    summary: "Ambitious executive order launching the Genesis Mission, a coordinated national effort comparable to the Manhattan Project to unleash AI-accelerated innovation and scientific discovery. Led by the Department of Energy, the mission establishes the American Science and Security Platform integrating national laboratories, federal datasets, and high-performance computing to achieve transformative breakthroughs in pressing national challenges.",
    year: 2025,
    color: "hsl(25, 95%, 53%)",
    pdfUrl: "/policies/EO_Genesis_Mission.pdf",
    data: [
      { subject: 'National Security', value: 95, fullMark: 100 },
      { subject: 'Safety & Security', value: 75, fullMark: 100 },
      { subject: 'Antitrust', value: 35, fullMark: 100 },
      { subject: 'Civil & Human Rights', value: 55, fullMark: 100 },
      { subject: 'Industrial Policy', value: 90, fullMark: 100 },
    ]
  },
  {
    id: "eo-ai-exports",
    name: "EO 14320: Promoting Export of American AI Technology Stack",
    description: "Strategic program to promote global deployment of full-stack American AI technologies",
    summary: "Executive Order establishing the American AI Exports Program to support the development and deployment of full-stack AI technology packages worldwide. The program mobilizes federal financing tools, diplomatic support, and coordinated interagency efforts to ensure American AI technologies, standards, and governance models are adopted globally while decreasing international dependence on adversary AI technologies.",
    year: 2025,
    color: "hsl(199, 89%, 48%)",
    pdfUrl: "/policies/EO_AI_Exports.pdf",
    data: [
      { subject: 'National Security', value: 85, fullMark: 100 },
      { subject: 'Safety & Security', value: 65, fullMark: 100 },
      { subject: 'Antitrust', value: 40, fullMark: 100 },
      { subject: 'Civil & Human Rights', value: 50, fullMark: 100 },
      { subject: 'Industrial Policy', value: 85, fullMark: 100 },
    ]
  },
  {
    id: "eu-digital-services-act",
    name: "EU Digital Services Act (Regulation 2022/2065)",
    description: "Comprehensive regulation of digital services and online platform responsibilities",
    summary: "Landmark European Union regulation establishing harmonized rules for intermediary services and online platforms across the single market. The Act creates tiered obligations based on service type and size, mandating transparency, content moderation, user protections, and accountability mechanisms while safeguarding fundamental rights including freedom of expression, consumer protection, and non-discrimination.",
    year: 2022,
    color: "hsl(340, 75%, 55%)",
    pdfUrl: "/policies/EU_Digital_Services_Act.pdf",
    data: [
      { subject: 'National Security', value: 45, fullMark: 100 },
      { subject: 'Safety & Security', value: 85, fullMark: 100 },
      { subject: 'Antitrust', value: 65, fullMark: 100 },
      { subject: 'Civil & Human Rights', value: 95, fullMark: 100 },
      { subject: 'Industrial Policy', value: 50, fullMark: 100 },
    ]
  },
  {
    id: "uk-digital-markets-act",
    name: "UK Digital Markets, Competition and Consumers Act 2024",
    description: "Competition regulation framework targeting strategic market power in digital markets",
    summary: "Comprehensive UK legislation empowering the Competition and Markets Authority (CMA) to designate undertakings with Strategic Market Status (SMS) in digital activities. The Act provides mechanisms to impose conduct requirements, promote competition, scrutinize mergers, and enforce compliance against dominant digital market players with substantial and entrenched market power, while also enhancing consumer protection.",
    year: 2024,
    color: "hsl(160, 70%, 45%)",
    pdfUrl: "/policies/UK_Digital_Markets_Act.pdf",
    data: [
      { subject: 'National Security', value: 40, fullMark: 100 },
      { subject: 'Safety & Security', value: 60, fullMark: 100 },
      { subject: 'Antitrust', value: 95, fullMark: 100 },
      { subject: 'Civil & Human Rights', value: 75, fullMark: 100 },
      { subject: 'Industrial Policy', value: 45, fullMark: 100 },
    ]
  }
];
