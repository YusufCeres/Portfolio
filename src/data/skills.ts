
interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
}

const skills: SkillCategory[] = [
  {
    id: 1,
    title: "Programming Languages",
    skills: ["Java", "Python", "C", "Dart", "HTML", "CSS", "JavaScript", "SQL", "C#"]
  },
  {
    id: 2,
    title: "Frontend Technologies",
    skills: ["React", "Next.js", "Flutter", "HTML", "CSS", "JavaScript"]
  },
  {
    id: 3,
    title: "Backend Technologies",
    skills: ["Flask", "Node.js", "Prisma", "Firebase", "SQL", "Postgres"]
  },
  {
    id: 4,
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "OpenMP", "MPI"]
  },
  {
    id: 5,
    title: "Academic Disciplines",
    skills: ["Mathematics", "Operations Research", "Economics", "Computer Science", "Algorithms", "Data Structures"]
  }
];

export default skills;
