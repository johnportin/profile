import Typewriter from "typewriter-effect";
import ProfilePicture from "../images/profile.jpg";
import Image from "next/image";
import { lorem } from "../utils/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row w-full items-center md:px-8 justify-between mb-8"
    >
      <div className="flex flex-col mt-8 md:mt-0 items-start md:gap-6">
        <h2 className="text-4xl">Hi, Im John</h2>
        <Typewriter
          options={{
            strings: [
              "Web Developer",
              "Software Engineer",
              "Mathematician",
              "Problem Solver",
            ],
            delay: 66,
            deleteSpeed: 35,
            cursorClassName: "text-blue-500 text-5xl",
            autoStart: true,
            loop: true,
            wrapperClassName: "text-5xl text-blue-500 overflow-hidden",
          }}
        />
      </div>
      <Image
        className="h-full w-48 lg:w-72 shrink-0 rounded-3xl"
        src={ProfilePicture}
        alt="Profile Picture"
      />
    </section>
  );
}
