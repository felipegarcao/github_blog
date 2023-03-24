import { FiGithub, FiHome, FiUsers } from 'react-icons/fi'

export function CardDetails() {
  return (
    <div className="bg-[#0B1B2B] rounded-2xl py-8 px-10 mt-[-100px]">
      <div className="flex items-center gap-5 flex-col md:flex-row">
        <img src="https://github.com/felipegarcao.png" alt="" className="h-36 w-36 rounded-lg"
        />
        <div className="flex flex-col justify-between h-36">
          <header className="flex items-center justify-between">
            <h3 className="text-white text-xl">Cameron Williamson</h3>
            <p className="text-white text-sm">@felipegarcao</p>
          </header>
          <p className="text-justify text-[#AFC2D4]">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>
          <div className="flex items-center gap-5 text-[#AFC2D4]">
            <span className="flex items-center gap-3"><FiGithub size={20} /> felipegarcao</span>
            <span className="flex items-center gap-3"> <FiHome size={20} /> Unimed</span>
            <span className="flex items-center gap-3"><FiUsers size={20} /> 32 seguidores</span>
          </div>
        </div>
      </div>
    </div>
  )
}