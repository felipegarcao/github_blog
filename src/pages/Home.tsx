import { CardDetails } from "../components/CardDetails";
import { CardRepository } from "../components/CardRepository";

export function Home() {
  return (
    <div className="md:w-[864px] container mx-auto p-3">
      <CardDetails />

      <section className="mt-10">
        <header className="flex items-center justify-between mb-3">
          <span className="font-bold text-lg text-[#C4D4E3]">Publicações</span>
          <span className="text-sm text-[#7B96B2]">6 publicações</span>
        </header>
        <input type="text" placeholder="Buscar conteúdo" className="focus:ring-1 focus:ring-[#3294F8] w-full rounded bg-[#040F1A] border border-[#1C2F41] px-4 py-3 focus:outline-none text-[#AFC2D4] placeholder:text-[#3A536B]" />

        <div className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-4">
          <CardRepository />
          <CardRepository />
          <CardRepository />
        </div>
      </section>
    </div>
  )
}