import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
  
   
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Trainee Intern",
        company_name: "Defence Research and Development Organization",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "June 2022 - September 2022",
        points: [
            "Worked in a team of 2 to carry out detailed study and research work in the field of Variational Quantum circuits. ",
            "Implemented various quantum circuits to check their accuracies using Qiskit.",
        ],
    },
    {
        title: "Trainee",
        company_name: "Institute of Nuclear Medicines and Applied Science",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "May 2023 - June 2023",
        points: [
            "Analyzed the activities of controlled , uncontrolled mice in different phases of the day using testing chamber Intellicage.",
            "Plotted non cummulative activities of mice using visualizing tools like bar graphs in Python which could not be through their intellicage.",
           
        ],
    },
    {
        title: "Trainee",
        company_name: "Indira Gandhi Delhi Technical University for Women",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "May 2023 - June 2023",
        points: [
            "Learned Visual Computing with Pytorch and performed various activities and made projects in Deep Leanring using Pytorch",
            "Learned about various neural networks and their implementations in Pytorch",
           
        ],
    },
    {
        title: "Technical Associate",
        company_name: "Minerva",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2023 - Present",
        points: [
            "Adding new articles and blogs on the official website of MINERVA IGDTUW",
            "Collaborated with team members to create fully responsive team's page for the society.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
    
        ],
    },
    {
        title: "Web Administrator",
        company_name: "IEEE-IGDTUW",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - August 2023",
        points: [
            "Worked on improving and adding inputs on the official website of IEEE IGDTUW.",
            "Led a team of 7 for making the website for an event WIE at IEEE,IGDTUW",
        ],
    },
    {
        title: "Design Core",
        company_name: "DeCode Cafe",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "June 2023 - October 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborated with cross-functional teams including designers,  developers to create high-quality websites and posters for events organized by the community.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Mentor",
        company_name: "Protege IGDTUW",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "April 2023-October 2023",
        points: [
            "Mentored a college junior on Data Structures and Algorithms and Front End Development",
            "Actively participated in doubt resolution sessions",
        ],
    },
    {
        title: "Contributor",
        company_name: "HacktoberFest",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "October 2022",
        points: [
            "Actively participated in a month long open source source contribution event",
            "Contributed to many open source projects in Web Developemnt ,Machine Learning and Data Structures",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Sre-eja-09',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sreeja-prakash-36a538229/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'NewsTop',
        description: 'News application that calls the most recent news from the News API.Single page application with a navigation bar corresponding to different sections of the newspaper added functionality of infinite scroll along with a loader on page rendering.',
        link: 'https://github.com/Sre-eja-09/NewsTop',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'A look alike of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/Sre-eja-09/snapgram_',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/Sre-eja-09/ai_summarizer',
    }
];