import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Structure Joyful Programs",
    icon: web,
  },
  {
    title: "Inspire Confidence",
    icon: mobile,
  },
  {
    title: "Build Safe Spaces",
    icon: backend,
  },
  {
    title: "Guided by Islamic Values",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Pray & Praise 13-17 Y/0",
    company_name: "SoulDigest",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept 23 - Sept 24",
    points: [
      "What can you expect from this program:.",
      "Covering the 3 Ps; Pre-Solah, Performing Solah, Pro-Tips In Solah",
      "Gain a deeper perspective into the spirits of Solah",
      "Learn the Whys and Hows of Solah and everything in between",
      "Age-appropriate games and activities surrounding Solah", 
      "A curated worksheet and Program Kit to take home", 
      "Fun and engaging discussions on Solah & more!",
    ],
  },
  {
    title: "Pray & Praise 7-12 Y/0",
    company_name: "SoulDigest",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "15-16 JUL | 19-20 AUG / 26-27 AUG 2023",
    points: [
      "Gain a deeper perspective into the spirits of Solah",
      "Learn the Whys and Hows of Solah-and everything in between",
      "Age-appropriate games and activities surrounding Solah", 
      "A curated worksheet and Program Kit to take home ",
      "Fun and engaging discussions on Solah & more!",
    ],
  },
  {
    title: "Grow & Glo (TEEN)",
    company_name: "SoulDigest",
    icon: tesla,
    iconBg: "#383E56",
    date: "22-23 JUL |  12 - 13 AUG",
    points: [
      "Gain a deeper understanding of your purpose as a young Muslim",
"Learn about love, relationships, responsibilities, and more, from an Islamic perspective",
"Hot Q&A Sessions 🔥 There’s no wrong questions, only new lessons!",
"Age-appropriate games and activities!",
"A curated worksheet and Program Kit to take home",
"Fun and engaging discussions on Glo-ing up & more!",
    ],
  },
  {
    title: "Capes & Caliphs (Kids 7 - 12 Y/O)",
    company_name: "SoulDigest",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2 - 3 SEPT | 9- 10 SEPT",
    points: [
      "What can you expect from this program:",
      "Gain a fresh and inspiring perspective about how to start your life as a Muslim",
      " Debunk the misconceptions and find out your true purpose as a Muslim.",
      "Age-appropriate games and activities",
      "Safe space for you to grow and bond with fellow young Muslims!",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "People learn best through stories. With Mu'alim's superb storytelling, my son could remember the lessons without even jotting down anything! MashaAllah TabarakAlIah!",
    name: "Dr. Zabrina",
    designation: "Parent",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I liked learning about Islam from a social, cultural, and political perspective through these lessons. It's a breath of fresh air to view religion in this light ,and makes it easier to relate to.",
    name: "Myra Student",
    designation: "Student",
    company: "SoulDigest",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "AWe hope schools can have this approach. It's fun plus they learn faster. Noah Ismail Wong Good storytelling, the know why we need to solat instead of scaring us kids why if we don't. Fun and games all in the name of learning hows and whys of the gift of solat. Thank you Muallim Faizul and SoulDigest team!",
    name: "Yasmin Hani Richardson, Noah Ismail Wong",
    designation: "Parents",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };