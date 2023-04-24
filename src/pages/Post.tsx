import { useEffect, useState } from "react";

import { CardPostDetails } from "../components/CardPostDetails";
import { PostDetails } from "../types/Posts";
import { api } from "../services/api";
import { useParams } from "react-router-dom";

export function Post() {
  const [post, setPost] = useState({} as PostDetails);

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`repos/felipegarcao/github_blog/issues/${id}`)
      .then((response) => setPost(response.data));
   
  }, []);

  return (
    <div className="md:w-[864px] container mx-auto p-3">
      <CardPostDetails {...post}  />
      <article className="p-10">
        <div
          className="text-justify text-[#AFC2D4]"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>
    </div>
  );
}
