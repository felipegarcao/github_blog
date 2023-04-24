import { useEffect, useMemo, useState } from "react";

import { CardDetails } from "../components/CardDetails";
import { CardDetailsProps } from "../types/CardDetails";
import { CardRepository } from "../components/CardRepository";
import { PostsProps } from "../types/Posts";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [user, setUser] = useState({} as CardDetailsProps);
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [query, setQuery] = useState("");

  useMemo(() => {
    api.get("users/felipegarcao").then((response) => setUser(response.data));
  }, []);

  useEffect(() => {
    api
      .get(`search/issues?q=${query}%20repo:felipegarcao/github_blog`)
      .then((response) => setPosts(response.data.items));
  }, [query]);

  const navigate = useNavigate();

  return (
    <div className="md:w-[864px] container mx-auto p-3">
      <CardDetails {...user} />

      <section className="mt-10">
        <header className="flex items-center justify-between mb-3">
          <span className="font-bold text-lg text-[#C4D4E3]">Publicações</span>
          <span className="text-sm text-[#7B96B2]">
            {posts.length} publicações
          </span>
        </header>
        <input
          type="text"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar conteúdo"
          className="focus:ring-1 focus:ring-[#3294F8] w-full rounded bg-[#040F1A] border border-[#1C2F41] px-4 py-3 focus:outline-none text-[#AFC2D4] placeholder:text-[#3A536B]"
        />

        <div className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-4">
          {posts.map((post, index) => (
            <div onClick={() => navigate(`post/${post.number}`)}>
              <CardRepository
                key={index}
                body={post.body}
                created_at={post.created_at}
                title={post.title}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
