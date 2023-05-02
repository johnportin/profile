import Image from "next/image";
import { lorem } from "../utils/utils";
import ProjectPlaceholder from "../images/project-placeholder.jpg";

export default function Card({ title, image, content, href }) {
  return (
    <div className="flex flex-col md:self-start md:items-start md:justify-start w-full gap-4">
      <h1 className="text-3xl  ">{title}</h1>
      <a href={href} target="_blank" className="">
        <Image
          src={image}
          className="rounded-2xl object-none hover:shadow-lg hover:shadow-slate-500 duration-200"
          alt="Project Image"
        />
      </a>
      <p>{content}</p>
    </div>
  );
}
