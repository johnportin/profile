import Image from "next/image";
import { lorem } from "../utils/utils";
import ProjectPlaceholder from "../images/project-placeholder.jpg";

export default function Card({ title, image, content, href }) {
  return (
    <div className="flex flex-col md:self-start md:items-start md:justify-start w-full gap-4">
      <h1 className="text-3xl  ">{title}</h1>
      <div className="">
        <Image
          src={image}
          className="rounded-2xl object-none"
          alt="Project Image"
        />
      </div>
      <p>{content}</p>
    </div>
  );
}
