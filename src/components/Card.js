import Image from "next/image";
import { lorem } from "../utils/utils";
import ProjectPlaceholder from "../images/project-placeholder.jpg";

export default function Card({ title, image, content, href }) {
  return (
    <div className="flex flex-col md:self-start md:items-start md:justify-start w-full gap-4">
      <h1 className="text-3xl  ">{title}</h1>
      <div className="md:w-full h-60 overflow-hidden rounded-2xl">
        <a href={href} target="_blank" className="">
          <Image
            src={image}
            className="block h-full w-full object-cover object-center hover:shadow-lg hover:shadow-slate-500 duration-200"
            alt="Project Image"
          />
        </a>
      </div>
      <p>{content}</p>
    </div>
  );
}
