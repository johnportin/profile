import Card from "./Card";
import { lorem } from "../utils/utils";
import Picture from "../images/project-placeholder.jpg";

const projects = [
  {
    title: "Digital Roster",
    image: Picture,
    content: `Keeping track of student attendance can be a chore for any teacher. 
        This app allows teachers to track their students attendance -- and more -- in a digital format. 
        Teachers can easily manage multiple classes of students with the ability to:
        upload multiple rosters,
        add/remove students,
        update attendance after the fact,
        and generate attendance reports.`,
    href: "https://google.com",
  },
  {
    title: "Wellness Tracker",
    image: Picture,
    content: `
        This app allows users to track their mood.
        Users can add new mood entries by taking a short quiz.
        The entries are stored in a database, and can be viewed as a calendar.
        The app also provides a quote -- depending on your current mood -- to help you get through the day.`,
    href: "https://google.com",
  },
  {
    title: "Meta Front-End Capstone",
    image: Picture,
    content: `This website is the capstone project of Meta's Front-End Developer Course on Coursera.
    This gave me the opportunity to build a website from scratch.
    Starting from wireframes in figma, adhering to the Nielsen Heuristics, and finally producing a fully functional website with React.`,
    href: "https://google.com",
  },
  {
    title: "BattleShip",
    image: Picture,
    content: `This is the classic game of battleship. Together with a group of fellow students, we worked together to build this game.
        We built the entire thing with basic web technologies: HTML, CSS, and JavaScript.
        It was a lot of fun to work together with others to build something from scratch!`,
    href: "https://google.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        flex flex-col w-full
        gap-auto place-items-center
        md:items-end
        md:grid md:grid-cols-2 md:gap-16
        "
    >
      {projects.map((project) => {
        return (
          <Card
            key={project.title}
            title={project.title}
            content={project.content}
            image={project.image}
          />
        );
      })}
    </section>
  );
}
