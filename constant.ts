import { StaticImageData } from "next/image";
import IMAGES from "./assets/images";
import { InfoSectionProps } from "./app/_components/InfoSection";

export const ALL_CASES = [
  {
    id: 1,
    text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
    heading: "Website and App Development for Online Food Marketplace",
    par_1: [
      {
        text: "We developed an online marketplace through website and app development for authentic food, connecting food enthusiasts with talented chefs. Our ",
        link: false,
      },
      { text: "software development team", link: true, url: "" },
      {
        text: " meticulously crafted the platform, ensuring a seamless user experience. Today, we continue to maintain and support the platform, ensuring smooth operation and consistent quality for our client, Foodiano.",
        link: false,
      },
    ],
    par_2: "",
    image: IMAGES.CASE_BANNER_1,
  },
  {
    id: 2,
    text_yellow: "Instant Valuation Platform to Sell Vehicles Hassle-Free",
    heading: "Website and App Development for Online Vehicle Action",
    par_1: [
      {
        text: "We built an online car action platform designed to make selling cars hassle-free for sellers. In order to achieve this, we successfully integrated with one of the UK’s top automotive online marketplace and classified advertising business. Our team focused on creating a user-friendly and efficient system that streamlines the selling process. Today, we continue to maintain and support the platform, ensuring smooth operation, reliability, and consistent quality for our client.",
        link: false,
      },
    ],
    par_2: "",
    image: IMAGES.CASE_BANNER_2,
  },
  {
    id: 3,
    text_yellow: "Debt Collection Software to Enhance Operational Efficiency",
    heading: "Comprehensive Software for Debt Collection Management",
    par_1: [
      {
        text: "We led the design and development of a robust debt collection software to optimize operations for over 2,000 users. The platform integrates seamlessly with external services, including core banking systems and third-party debt collection agencies, efficiently handling over one million records daily. By streamlining debt tracking and management, the software has significantly improved recovery rates, reducing overall debt owed to the bank. We continue to provide ongoing support, ensuring the system’s reliability and smooth operations for our client.",
        link: false,
      },
    ],
    par_2:
      "This project is bound by an NDA, so we are only sharing a brief snapshot, highlighting our expertise while respecting client confidentiality.",
    image: IMAGES.CASE_BANNER_3,
  },
  {
    id: 4,
    text_yellow: "Medical Quiz Examining Patients for Dry Eye Syndrome​",
    heading: "Medical Quiz with Custom Logic",
    par_1: [
      {
        text: "We are developed an interactive quiz with custom logic to assess patients with dry eye syndrome. Our software development team is focused on creating an intuitive and effective tool for accurate examination. We continue to build and maintain the platform, ensuring smooth operation, reliability, and ongoing support for our client who run their clinic operations.",
        link: false,
      },
    ],
    par_2: "",
    image: IMAGES.CASE_BANNER_4,
  },
  {
    id: 5,
    text_yellow: "Patients Dashboard for Eye Specialist Medical Advice​",
    heading: "Medical Advice Software",
    par_1: [
      {
        text: "We developed an interactive patient dashboard with custom logic to provide medical advice to individuals with dry eye syndrome. Our software development team is focused on creating an intuitive and effective tool for delivering accurate medical guidance. We continue to build and maintain the platform, ensuring smooth operation, reliability, and ongoing support for our client.",
        link: false,
      },
    ],
    par_2:
      "We are bound by a Non-Disclosure Agreement (NDA) and cannot disclose detailed information. This snapshot represents a small portion of the work we are permitted to share, showcasing our expertise in delivering advanced solutions while maintaining strict client privacy.",
    image: IMAGES.CASE_BANNER_5,
  },
  {
    id: 4,
    text_yellow: "AI Assistant in a Medical Clinic​",
    heading: "AI-Powered Medical Assistant",
    par_1: [
      {
        text: "We are developed a medical AI assistant for a clinic to advise patients with dry eye syndrome using OpenAI solutions. Our software development team is focused on creating an accurate and effective tool for providing medical guidance. We continue to build and maintain the platform, ensuring smooth operation, reliability, and ongoing support for our client.",
        link: false,
      },
    ],
    par_2:
      "We are bound by a Non-Disclosure Agreement (NDA) and cannot disclose detailed information. This snapshot represents a small portion of the work we are permitted to share, showcasing our expertise in delivering advanced solutions while maintaining strict client privacy.",
    image: IMAGES.CASE_BANNER_6,
  },
];

export const STEPS = [
  {
    id: 1,
    image: IMAGES.STEP_1,
    title: "Discovery and need finding",
    description:
      "We value the transformative power of discovery and requirement gathering. Through immersive dialogues, we deeply understand our clients’ aspirations, goals, and visions. By asking insightful questions and listening carefully, we capture every essential detail. This crucial phase helps us define the project scope, anticipate challenges, and set clear, tangible goals. Conducting rigorous market research and thorough competitor analysis, we gain invaluable insights that shape a unique value proposition, driving our clients toward unparalleled success.",
  },
  {
    id: 2,
    image: IMAGES.STEP_2,
    title: "Strategic planning",
    description:
      "We approach planning with precision and strategic foresight. Led by experienced project leaders, we collaborate closely with our clients to develop a comprehensive roadmap. We carefully outline top level requirements, user stories, milestones, allocate resources efficiently, and create a detailed plan that highlights interdependency. During this phase, we select the most suitable technologies to ensure optimal performance and scalability for future growth.",
  },
  {
    id: 3,
    image: IMAGES.STEP_3,
    title: "Iterative Development",
    description:
      "We follow an iterative development process rooted in Agile principles, transforming ideas into reality through continuous refinement and improvement. By breaking each project into manageable agile iterations or sprints, we deliver functional updates regularly. This approach allows for early client feedback, enabling us to make necessary adjustments that align with evolving needs. We are dedicated to excellence, rigorously testing each component to ensure quality, reliability, and security. Our comprehensive testing methods, including user acceptance testing, ensure that the final product meets and exceeds expectations in both functionality and performance.",
  },
  {
    id: 4,
    image: IMAGES.STEP_4,
    title: "Deployment & Rollout",
    description:
      "As development and testing conclude, we prepare for deployment. We optimise hosting environments, fine-tune servers, and manage the migration to production. Our team ensures every detail is in place for a flawless launch, closely monitoring performance and stability to ensure a smooth transition.",
  },
  {
    id: 5,
    image: IMAGES.STEP_5,
    title: "Support & maintenance",
    description:
      "Our commitment extends beyond launch—we’re your long-term partners. We swiftly address any issues or bugs and provide continuous maintenance to keep your platform up-to-date. From technical updates to security patches, we have you covered. With clear communication and transparency, we ensure your satisfaction at every step. Trust us to deliver not just a project, but a product of exceptional quality.",
  },
];

type Certificate = {
  courseName: string;
  courseDomain: string;
  courseImage: StaticImageData;
};

export const CERTIFICATES: Certificate[] = [
  {
    courseName: "Certified ScrumMaster (CSM)",
    courseDomain: "Project Management",
    courseImage: IMAGES.CERTIFICATES_1,
  },
  {
    courseName: "Project Management Professional (PMP)",
    courseDomain: "Project Management",
    courseImage: IMAGES.CERTIFICATES_1,
  },
  {
    courseName: "AWS Certified Solutions Architect – Associate",
    courseDomain: "Cloud Computing",
    courseImage: IMAGES.CERTIFICATES_2,
  },
  {
    courseName: "Microsoft Certified: Azure Fundamentals",
    courseDomain: "Cloud Computing",
    courseImage: IMAGES.CERTIFICATES_3,
  },
  {
    courseName: "Google Certified Professional Data Engineer",
    courseDomain: "Data Engineering",
    courseImage: IMAGES.CERTIFICATES_1,
  },
  {
    courseName: "CompTIA Security+",
    courseDomain: "Cybersecurity",
    courseImage: IMAGES.CERTIFICATES_2,
  },
  {
    courseName: "Certified Information Systems Security Professional (CISSP)",
    courseDomain: "Cybersecurity",
    courseImage: IMAGES.CERTIFICATES_3,
  },
  {
    courseName: "Certified Kubernetes Administrator (CKA)",
    courseDomain: "DevOps",
    courseImage: IMAGES.CERTIFICATES_1,
  },
  {
    courseName: "Docker Certified Associate (DCA)",
    courseDomain: "DevOps",
    courseImage: IMAGES.CERTIFICATES_2,
  },
  {
    courseName: "Certified Ethical Hacker (CEH)",
    courseDomain: "Cybersecurity",
    courseImage: IMAGES.CERTIFICATES_3,
  },
  {
    courseName: "Salesforce Certified Administrator",
    courseDomain: "CRM",
    courseImage: IMAGES.CERTIFICATES_1,
  },
];

export const KEY_POINTS: InfoSectionProps[] = [
  {
    title: "1. Key Security Practices at NetNexus",
    startParagraph:
      "We integrate security at every stage of our development process, from design to deployment. This includes:",
    bullets: [
      {
        label: "Threat Modeling",
        description:
          "Identifying potential security threats during the design phase.",
      },
      {
        label: "Secure Coding Practices",
        description:
          "Following best practices to prevent vulnerabilities, such as SQL injection and cross-site scripting.",
      },
      {
        label: "Regular Code Reviews",
        description:
          "Conducting peer reviews to catch and fix security issues early.",
      },
      {
        label: "Automated Testing",
        description:
          "Using tools to automatically scan for vulnerabilities and ensure compliance with security standards.",
      },
    ],
    endParagraph:
      "Our stack, which primarily includes React, Django, and PostgreSQL, is equipped with robust security features. Django’s built-in protections against common web vulnerabilities and PostgreSQL’s strong data integrity and encryption capabilities form the backbone of our secure development process.",
  },
  {
    title: "2. Data Encryption and Protection",
    startParagraph:
      "Protecting our clients’ data is paramount. We ensure data security through:",
    bullets: [
      {
        label: "Encryption in Transit and at Rest",
        description:
          "Using industry-standard encryption protocols to protect data during transmission and while stored.",
      },
      {
        label: "Access Controls",
        description:
          "Implementing strict access controls to ensure that only authorized personnel can access sensitive data.",
      },
      {
        label: "Regular Updates",
        description:
          "Keeping our software and dependencies up-to-date to protect against known vulnerabilities.",
      },
    ],
    endParagraph:
      "For instance, PostgreSQL’s support for advanced encryption techniques allows us to safeguard data effectively, while React and Django provide frameworks for secure application development.",
  },
  {
    title: "3. Security Audits and Assessments",
    startParagraph:
      "Regular security audits and assessments are critical to maintaining compliance and identifying areas for improvement. Our approach includes:",
    bullets: [
      {
        label: "Penetration Testing",
        description: "Simulating attacks to identify and fix vulnerabilities.",
      },
      {
        label: "Vulnerability Scanning",
        description:
          "Continuously scanning our systems to detect and address security weaknesses.",
      },
      {
        label: "Compliance Audits",
        description:
          "Ensuring that our practices meet the latest regulatory requirements.",
      },
    ],
    endParagraph:
      "These assessments help us stay ahead of potential threats and maintain the highest security standards for our clients.",
  },
  {
    title: "4. Employee Training and Awareness",
    startParagraph:
      "A Security-First Culture starts with our team. We invest in ongoing training and awareness programs to ensure that every employee understands the importance of security and knows how to implement best practices. Our initiatives include:",
    bullets: [
      {
        label: "Regular Training Sessions",
        description:
          "Providing up-to-date training on the latest security threats and how to mitigate them.",
      },
      {
        label: "Security Awareness Campaigns",
        description:
          "Running campaigns to keep security top-of-mind for all employees.",
      },
      {
        label: "Clear Policies and Procedures",
        description:
          "Establishing and enforcing clear security policies and procedures to guide our team’s actions.",
      },
    ],
    endParagraph:
      "By fostering a culture of security, we empower our employees to contribute to a secure development environment.",
  },
];
