import { Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Ten Pin Bowling",
    description: "A Java-based bowling game simulation that implements the rules and scoring system of ten-pin bowling.",
    technologies: ["Java", "Object-Oriented Programming"],
    image: "/lovable-uploads/175c29c2-0147-4923-8cd7-f08d48583f40.png",
    githubLink: "https://github.com/YusufCeres/Ten_Pin_Bowling",
  },
  {
    id: 2,
    title: "Gallery With Bae",
    description: "A responsive gallery website built with HTML and CSS, showcasing image collections with modern design elements.",
    technologies: ["HTML", "CSS", "Responsive Design"],
    image: "/lovable-uploads/ba41d1ad-bb6b-42ba-8df8-bbd082c80578.png",
    githubLink: "https://github.com/YusufCeres/GalleryWithBae",
  },
  {
    id: 3,
    title: "AI Anime Chatbot",
    description: "An interactive anime-themed chatbot built using Dialogflow with Firebase backend and GraphQL for API integration.",
    technologies: ["Dialogflow", "Firebase", "GraphQL", "API Integration"],
    image: "/lovable-uploads/309cc18f-bf8b-43e4-ac8e-af37b090bb26.png",
    liveLink: "https://console.dialogflow.com/api-client/demo/embedded/0e04319a-aab1-49db-bdca-e02a1d02d1c1",
  },
  {
    id: 4,
    title: "Portfolio Assistant Chatbot",
    description: "An interactive chatbot that helps users navigate my portfolio and learn more about my skills and experience. Built with modern web technologies and deployed on Vercel.",
    technologies: ["Dialogflow", "Firebase", "HTML", "CSS", "JavaScript", "Vercel", "Render"],
    image: "/lovable-uploads/9f5d4899-a34e-4cd4-b64f-88ce057bdd41.png",
    liveLink: "https://my-chatbot-eight-xi.vercel.app/",
  },
  {
    id: 5,
    title: "AI Workout Generator",
    description: "An intelligent fitness application that generates personalized workout routines based on user preferences, fitness level, and available equipment. Built with Firebase for real-time data management and AI integration for smart workout recommendations.",
    technologies: ["Firebase", "JavaScript", "HTML", "CSS", "AI Integration"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    githubLink: "https://github.com/YusufCeres/WorkoutGenerator",
  }
];

export default projects;