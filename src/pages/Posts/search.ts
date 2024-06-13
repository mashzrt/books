import { ICard } from "../../types/types";

export function filterPosts(posts: ICard[], searchInput: string): ICard[] {
  if (searchInput.trim() === "") {
    return posts;
  } else {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
}
