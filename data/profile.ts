export interface ProfileData {
  name: string;
  headline: string;
  edition: string;
  roleSubtitle: string;
  heroStatement: string;
  supportingText: string;
  aboutStatement: string;
  biography: string[];
  location: string;
  environment: string;
  interests: string[];
  currentMissions: {
    number: string;
    title: string;
    description: string;
  }[];
  socials: {
    label: string;
    href: string;
    display: string;
  }[];
  contactEmail: string;
}

export const profile: ProfileData = {
  name: "ANGGIT MAULANA ABDI",
  headline: "ANGGIT\nMAULANA\nABDI",
  edition: "PERSONAL UNIVERSE / 2026",
  roleSubtitle: "BUILDER / AI / ROBOTICS / SOFTWARE",
  heroStatement: "I build things somewhere between code, curiosity, and chaos.",
  supportingText:
    "Exploring artificial intelligence, robotics, software, cybersecurity, and creative technology.",
  aboutStatement:
    "I like building things that sit somewhere between software and the real world.",
  biography: [
    "A self-driven builder and student at MAN 2 Wonosobo, exploring computational intelligence, embedded robotics, and modern software architectures.",
    "Driven by direct experimentation: from solder fumes and hardware microcontroller logic to training computer vision models, hacking Capture The Flag challenges, and engineering interactive digital spaces.",
    "No pretense, no corporate buzzwords. Just curiosity, late-night debugging, and a continuous search for how complex systems actually operate."
  ],
  location: "Wonosobo, Central Java, Indonesia",
  environment: "MAN 2 Wonosobo",
  interests: [
    "Artificial Intelligence",
    "Robotics",
    "Computer Vision",
    "Data Science",
    "Cybersecurity",
    "Software Engineering",
    "Game Development",
    "Creative Technology",
  ],
  currentMissions: [
    {
      number: "01",
      title: "Build better AI systems",
      description: "Moving beyond superficial wrappers toward deep computer vision, adaptive agent reasoning, and edge deployment.",
    },
    {
      number: "02",
      title: "Explore computer science",
      description: "Deepening algorithmic fundamentals, system design, low-level programming, and theoretical computer science.",
    },
    {
      number: "03",
      title: "Create useful products",
      description: "Translating abstract technical experiments into reliable, responsive tools and tangible interfaces.",
    },
    {
      number: "04",
      title: "Experiment with software and creative technology",
      description: "Blending cultural artifacts like Javanese wayang with computer vision, alongside rich virtual worlds in Roblox Studio.",
    },
    {
      number: "05",
      title: "Prepare for the next stage of education and engineering",
      description: "Laying solid mathematical and engineering foundations for higher academic research and serious technical contributions.",
    },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/AnggitMaulanaAbdi",
      display: "github.com/AnggitMaulanaAbdi",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/anggitmaulanaabdi",
      display: "linkedin.com/in/anggitmaulanaabdi",
    },
    {
      label: "Email",
      href: "mailto:contact.anggitmaulana@gmail.com",
      display: "contact.anggitmaulana@gmail.com",
    },
  ],
  contactEmail: "contact.anggitmaulana@gmail.com",
};
