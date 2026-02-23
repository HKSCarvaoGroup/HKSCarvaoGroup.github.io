export interface PolicyExcerpt {
  attribute: string;
  excerpts: string[];
}

export const policyExcerpts: Record<string, PolicyExcerpt[]> = {
  "california-sb53": [
    {
      attribute: "National Security",
      excerpts: [
        "The TFAIA would require a large frontier developer to transmit to the Office of Emergency Services a summary of any assessment of catastrophic risk resulting from internal use of its frontier models.",
        "Establishes mechanisms to be used by frontier developers to confidentially submit summaries of assessments of potential for catastrophic risk."
      ]
    },
    {
      attribute: "Safety & Security",
      excerpts: [
        "Require a large frontier developer to write, implement, and clearly and conspicuously publish on its internet website a frontier AI framework that applies to the large frontier developer's frontier models.",
        "The Office of Emergency Services shall establish a mechanism to be used by a frontier developer or a member of the public to report a critical safety incident.",
        "The TFAIA would impose civil penalties for noncompliance to be enforced by the Attorney General."
      ]
    },
    {
      attribute: "Antitrust",
      excerpts: [
        "Establishes within the Government Operations Agency a consortium to develop a framework for CalCompute - a public cloud computing cluster advancing AI development that is safe, ethical, equitable, and sustainable.",
        "CalCompute aims to foster research and innovation that benefits the public by providing accessible computing infrastructure."
      ]
    },
    {
      attribute: "Civil & Human Rights",
      excerpts: [
        "Requires developers to post documentation regarding data used to train generative AI systems made publicly available to Californians.",
        "The TFAIA includes whistleblower protections for covered employees reporting concerns about frontier AI models.",
        "Promotes transparency through mandatory public disclosure of frontier AI frameworks and safety practices."
      ]
    },
    {
      attribute: "Industrial Policy",
      excerpts: [
        "The CalCompute consortium shall develop a framework for creation of a public cloud computing cluster that advances AI development and deployment.",
        "Framework provisions become operative only upon appropriation in a budget act for its purposes, demonstrating state investment in AI infrastructure."
      ]
    }
  ],
  "colorado-ai-act": [
    {
      attribute: "National Security",
      excerpts: [
        "Provisions address AI systems used in essential government services, ensuring security and reliability of government AI deployments."
      ]
    },
    {
      attribute: "Safety & Security",
      excerpts: [
        "Developers and deployers of high-risk AI systems must implement risk management policies and programs to protect consumers from algorithmic discrimination.",
        "Requires impact assessments for high-risk artificial intelligence systems before deployment.",
        "Mandates documentation of known or reasonably foreseeable risks of algorithmic discrimination."
      ]
    },
    {
      attribute: "Antitrust",
      excerpts: [
        "Promotes transparency and accountability in AI system deployment to ensure competitive markets are not distorted by discriminatory AI practices.",
        "Requirements apply uniformly to developers regardless of size, preventing monopolistic advantages through biased systems."
      ]
    },
    {
      attribute: "Civil & Human Rights",
      excerpts: [
        "Defines 'algorithmic discrimination' as unlawful differential treatment or impact that disfavors individuals on the basis of protected classifications including age, color, disability, ethnicity, genetic information, national origin, race, religion, sex, and veteran status.",
        "Protects consumers in consequential decisions affecting education enrollment, employment opportunities, financial services, healthcare services, housing, insurance, and legal services.",
        "Establishes consumer rights to notice when high-risk AI systems are used in consequential decisions affecting them."
      ]
    },
    {
      attribute: "Industrial Policy",
      excerpts: [
        "Creates framework for responsible AI development and deployment that supports innovation while protecting consumers.",
        "Establishes clear standards that developers can follow to ensure compliance and market access."
      ]
    }
  ],
  "eo-ai-education": [
    {
      attribute: "National Security",
      excerpts: [
        "Ensuring the United States remains a global leader in AI technological revolution through workforce development.",
        "Early AI education prepares students for active participation in workforce of the future, supporting national technological dominance."
      ]
    },
    {
      attribute: "Safety & Security",
      excerpts: [
        "Professional development programs focused on AI education will empower educators to confidently guide students through this complex and evolving field.",
        "Framework integrates early student exposure with comprehensive teacher training to promote responsible AI understanding."
      ]
    },
    {
      attribute: "Antitrust",
      excerpts: [
        "Educators, industry leaders, and employers should partner to create educational programs, promoting collaboration rather than concentration."
      ]
    },
    {
      attribute: "Civil & Human Rights",
      excerpts: [
        "AI education demystifies powerful technology and sparks curiosity and creativity, preparing students to become responsible participants in digital society.",
        "Provides opportunities for all Americans, from K-12 through postsecondary education, fostering culture of innovation and critical thinking.",
        "Makes resources available for lifelong learners to develop new skills for a changing workforce, ensuring equitable access to AI education."
      ]
    },
    {
      attribute: "Industrial Policy",
      excerpts: [
        "White House Task Force on Artificial Intelligence Education established to coordinate Federal efforts in preparing next generation of American AI innovators.",
        "Cultivates skills and understanding necessary to use and create next generation of AI technology, nurturing American AI innovators.",
        "Invests in educators and equips them with tools and knowledge to utilize AI in classrooms to improve educational outcomes."
      ]
    }
  ],
  "eo-genesis-mission": [
    {
      attribute: "National Security",
      excerpts: [
        "Genesis Mission is a dedicated national effort comparable in urgency and ambition to Manhattan Project that was instrumental to victory in World War II.",
        "Will strengthen national security and secure energy dominance through AI-accelerated scientific discovery.",
        "Establishes American Science and Security Platform integrating DOE national laboratories, federal scientific datasets, and national security sites.",
        "Brings together Nation's research and development resources to achieve dramatic acceleration in AI development for strategic leadership."
      ]
    },
    {
      attribute: "Safety & Security",
      excerpts: [
        "Platform provides secure cloud-based AI computing environments capable of supporting large-scale model training and simulation.",
        "Ensures all DOE resources used for Mission elements are integrated into secure, unified platform with appropriate security measures."
      ]
    },
    {
      attribute: "Antitrust",
      excerpts: [
        "Mission combines efforts of brilliant American scientists with pioneering American businesses and world-renowned universities.",
        "Creates integrated platform providing broad access to computational resources and federal datasets for research community."
      ]
    },
    {
      attribute: "Civil & Human Rights",
      excerpts: [
        "Genesis Mission will harness Federal scientific datasets - world's largest collection developed over decades of Federal investments - for public benefit.",
        "Will multiply return on taxpayer investment into research and development through AI-accelerated discovery."
      ]
    },
    {
      attribute: "Industrial Policy",
      excerpts: [
        "Secretary of Energy shall establish and operate the American Science and Security Platform to serve as infrastructure for the Mission.",
        "Platform provides high-performance computing resources including DOE national laboratory supercomputers and secure cloud-based AI computing environments.",
        "Builds on decades of innovation in semiconductors and high-performance computing to harness computing revolution for Nation's benefit.",
        "Will dramatically accelerate scientific discovery and enhance workforce productivity."
      ]
    }
  ],
  "eo-ai-exports": [
    {
      attribute: "National Security",
      excerpts: [
        "United States must ensure American AI technologies, standards, and governance models are adopted worldwide to strengthen relationships with allies and secure continued technological dominance.",
        "Decrease international dependence on AI technologies developed by our adversaries through global deployment of US-origin AI technologies.",
        "All proposals must comply with relevant US export control regimes, outbound investment regulations, and end-user policies."
      ]
    },
    {
      attribute: "Safety & Security",
      excerpts: [
        "Full-stack AI packages must include measures to ensure security and cybersecurity of AI models and systems.",
        "Proposals must comply with all relevant export control regimes and end-user policies to ensure safe deployment."
      ]
    },
    {
      attribute: "Antitrust",
      excerpts: [
        "Program supports industry-led consortia for development of full-stack AI export packages, encouraging collaboration.",
        "Creates opportunities for various entities to build, own, and operate data centers and associated infrastructure."
      ]
    },
    {
      attribute: "Civil & Human Rights",
      excerpts: [
        "Full-stack packages include AI applications for specific use cases including education, healthcare, agriculture, and transportation.",
        "Program aims to export American governance models alongside technology, promoting responsible AI deployment globally."
      ]
    },
    {
      attribute: "Industrial Policy",
      excerpts: [
        "American AI Exports Program established to support development and deployment of United States full-stack AI export packages.",
        "Full-stack packages encompass AI-optimized computer hardware manufactured in United States, data pipelines, AI models and systems, and applications.",
        "Mobilizes Federal financing tools including EXIM, DFC, and Trade and Development Agency to support American AI exports.",
        "Selected proposals designated as priority AI export packages receive priority access to Federal financing and diplomatic support.",
        "Secretary of Commerce to identify specific target countries or regional blocs for export engagement."
      ]
    }
  ],
  "eu-digital-services-act": [
    {
      attribute: "National Security",
      excerpts: [
        "Provisions address protection of critical infrastructure and coordination among Member States for security threats.",
        "Addresses illegal content and disinformation that could pose national security risks."
      ]
    },
    {
      attribute: "Safety & Security",
      excerpts: [
        "Establishes tiered obligations for intermediary services and online platforms based on service type and size.",
        "Creates harmonized rules requiring transparency, content moderation, and accountability mechanisms across digital services.",
        "Mandates providers to implement measures to tackle illegal content and protect users from online harms.",
        "Responsible and diligent behavior by providers of intermediary services is essential for safe, predictable and trustworthy online environment."
      ]
    },
    {
      attribute: "Antitrust",
      excerpts: [
        "Harmonizes conditions for provision of intermediary services across internal market to provide businesses access to new markets.",
        "Addresses market concentration concerns by establishing rules that apply proportionally based on platform size and reach.",
        "Prevents diverging national laws that negatively affect internal market and cross-border provision of services."
      ]
    },
    {
      attribute: "Civil & Human Rights",
      excerpts: [
        "Safeguards fundamental rights guaranteed in Charter of Fundamental Rights including freedom of expression and information, freedom to conduct business, right to non-discrimination.",
        "Ensures high level of consumer protection through transparency requirements and user protection mechanisms.",
        "Allows Union citizens and other persons to exercise their fundamental rights in digital environment.",
        "Provisions designed to protect consumers and other recipients of services with increased choice."
      ]
    },
    {
      attribute: "Industrial Policy",
      excerpts: [
        "Creates harmonized framework across EU single market to enable businesses to scale and operate efficiently across borders.",
        "Provides regulatory certainty for digital service providers operating in European market."
      ]
    }
  ],
  "uk-digital-markets-act": [
    {
      attribute: "National Security",
      excerpts: [
        "Provisions ensure digital market regulations protect UK strategic interests in technology sector.",
        "CMA empowered to designate undertakings with strategic market status affecting UK digital activities."
      ]
    },
    {
      attribute: "Safety & Security",
      excerpts: [
        "Establishes investigatory powers and compliance reporting requirements for designated undertakings.",
        "Creates enforcement mechanisms and appeal processes to ensure compliance with digital market regulations.",
        "CMA can take steps to promote competition where activities of designated undertakings have adverse effects."
      ]
    },
    {
      attribute: "Antitrust",
      excerpts: [
        "CMA may designate undertaking as having Strategic Market Status (SMS) where it has substantial and entrenched market power and position of strategic significance.",
        "Provides for CMA to impose conduct requirements on designated undertakings to prevent anti-competitive behavior.",
        "CMA can take steps to promote competition where activities of designated undertaking are having adverse effect on competition.",
        "Makes provision about duty to report certain possible mergers involving designated undertakings to prevent harmful consolidation.",
        "Amends Competition Act 1998 and Enterprise Act 2002 to strengthen competition enforcement in digital markets."
      ]
    },
    {
      attribute: "Civil & Human Rights",
      excerpts: [
        "Makes provision relating to protection of consumer rights and confers further such rights in digital markets.",
        "Ensures consumers benefit from competitive digital markets through enhanced protections.",
        "Creates framework to prevent consumer harm from dominant digital platforms."
      ]
    },
    {
      attribute: "Industrial Policy",
      excerpts: [
        "Regulation of competition in digital markets aims to foster innovation and growth in UK technology sector.",
        "Framework designed to ensure competitive digital markets that support business development and entrepreneurship."
      ]
    }
  ]
};
