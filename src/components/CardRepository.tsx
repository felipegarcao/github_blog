export function CardRepository() {
  return (
    <div className="rounded-xl p-8 bg-[#112131] flex flex-col">
      <header className="flex items-center justify-between">
        <h3 className="text-lg text-[#E7EDF4] font-bold flex-1">JavaScript data types and data structures</h3>
        <span className="text-sm text-[#7B96B2]">Há 1 dia</span>
      </header>
      <article>
        <p className="text-justify text-[#AFC2D4]">
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data 
          structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons wit
        </p>
      </article>
    </div>
  )
}