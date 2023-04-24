import { FiGithub, FiHome, FiUsers } from 'react-icons/fi'

import { CardDetailsProps } from '../types/CardDetails'

export function CardDetails(user: CardDetailsProps) {


  const profileInformation = [
    {
      icon: <FiGithub size={20} />,
      title: user.login,
    },
    {
      icon: <FiHome size={20} />,
      title: user.company,
    },
    {
      icon: <FiUsers size={20} />,
      title: `${user.followers} seguidores`,
    },
  ]

  return (
    <div className="bg-[#0B1B2B] rounded-2xl py-8 px-10 mt-[-100px]">
      <div className="flex items-center gap-5 flex-col md:flex-row">
        <img src={user.avatar_url} alt="" className="h-36 w-36 rounded-lg"
        />
        <div className="flex flex-col justify-between h-36 flex-1">
          <header className="flex items-center justify-between">
            <h3 className="text-white text-xl">{user.name}</h3>
            <p className="text-white text-sm">@{user.login}</p>
          </header>
          <p className="text-justify text-[#AFC2D4]">
           {user.bio}
          </p>
          <div className="flex items-center gap-5 text-[#AFC2D4]">
            {
              profileInformation.map((item, index) => (
                <span key={index} className="flex items-center gap-3 text-sm">{item.icon} {item.title}</span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}