import { PostsProps } from "../types/Posts";
import moment from "moment";

export function CardRepository({ body, created_at, title }: PostsProps) {
  return (
    <div className="rounded-xl p-8 bg-[#112131] flex flex-col cursor-pointer hover:ring-2 hover:ring-[#3A536B] transition-all ease-linear duration-75">
      <header className="flex items-center justify-between">
        <h3 className="text-lg text-[#E7EDF4] font-bold flex-1">{title}</h3>
        <span className="text-sm text-[#7B96B2]">
          {moment(created_at).startOf("day").fromNow()}
        </span>
      </header>
      <article
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          textOverflow: "ellipsis",
        }}
      >
        <p className="text-justify text-[#AFC2D4]">{body}</p>
      </article>
    </div>
  );
}
