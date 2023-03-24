import { CardPostDetails } from "../components/CardPostDetails";

export function Post() {
  return (
    <div className="md:w-[864px] container mx-auto p-3">

      <CardPostDetails />


      <article className="p-10">
        <p className="text-justify text-[#AFC2D4]">
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data
          structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons wit
        </p>
      </article>


    </div>
  )
}