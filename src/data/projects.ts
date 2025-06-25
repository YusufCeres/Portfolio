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
    description: "A personalized AI-powered workout generator that creates custom fitness plans based on your specific requirements. Built with vanilla JavaScript, HTML, and CSS, and powered by Firebase for authentication and data storage.",
    technologies: ["Firebase", "JavaScript", "HTML", "CSS", "AI Integration"],
    image: "/lovable-uploads/40f214b7-a500-412c-8df1-03f27ed2bffa.png",
    liveLink: "https://ai-workout-generator.web.app/",
    githubLink: "https://github.com/YusufCeres/WorkoutGenerator",
  },
  {
    id: 6,
    title: "DinoJump",
    description: "A fun browser-based game where you control a dinosaur by physically jumping in front of your webcam! The game uses computer vision to detect your jumps and makes the dino jump to avoid obstacles, just like the classic Chrome Dino game—but with a twist: you are the controller!",
    technologies: ["JavaScript", "Computer Vision", "WebRTC", "HTML5 Canvas", "Machine Learning"],
    image: "/lovable-uploads/1f233491-462a-4216-8c4d-ae2d4122554c.png",
    githubLink: "https://github.com/YusufCeres/DinoGame-",
  },
  {
    id: 7,
    title: "Clash Royale Top Card Tracker",
    description: "A web app that helps you visualize the top 10 Clash Royale cards you most frequently encounter in battles. Uses Python Flask for the backend and integrates with the Clash Royale API to fetch battle data and analyze it.",
    technologies: ["Python", "Flask", "Clash Royale API", "Data Analysis", "HTML", "CSS", "Render"],
    image: "/lovable-uploads/d6c1eba3-fc2b-44e7-8116-372be30d08d7.png",
    githubLink: "https://github.com/YusufCeres/ClashRoyaleTopCardTracker",
  }
];

export default projects;
