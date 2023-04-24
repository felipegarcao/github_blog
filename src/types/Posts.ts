export interface PostsProps {
  title: string;
  body: string;
  created_at: string;
  number?: number;
}



export interface PostDetails {
  title: string;
  url: string;
  body: string;

  user: {
    login: string;
  }
}