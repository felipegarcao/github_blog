import { FiAlignLeft, FiCalendar, FiGithub, FiMessageCircle } from "react-icons/fi";

export function CardPostDetails() {

  const postInformation = [
    {
      icon: <FiGithub size={20} />,
      title: 'felipegarcao',
    },
    {
      icon: <FiCalendar size={20} />,
      title: 'Unimed',
    },
    {
      icon: <FiMessageCircle size={20} />,
      title: '32 seguidores',
    },
  ]

  return (
    <div className="bg-[#0B1B2B] rounded-2xl py-8 px-10 mt-[-100px]">
    <div className="flex items-center justify-between">
    <a href="" className="flex items-center gap-2 text-[#3294F8] text-sm "><FiAlignLeft /> Voltar</a>
      <a href="" className="text-[#3294F8] uppercase text-sm">ver no github</a>
    </div>
      <h3 className="mt-3 font-bold text-[24px] text-[#E7EDF4]">JavaScript data types and data structures</h3>

      <div className="flex items-center gap-3 mt-3 text-[#7B96B2]">
        {postInformation.map((item, index) => (
          <span key={index} className="flex items-center gap-3 text-sm">{item.icon} {item.title}</span>
        ))}
      </div>
    </div>
  )
}