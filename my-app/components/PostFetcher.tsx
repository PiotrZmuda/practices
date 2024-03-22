import React, { useEffect, useState } from "react";

import { Post as PostType } from "../type";

interface PostFetcherProps {
  postId: string;
}
const PostFetcher = ({ postId }: PostFetcherProps) => {
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    fetch(`/api/posts?id=${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [postId]);

  if (!post) {
    return <div>Ładowanie...</div>;
  }

  return (
    <div>
      <h1 className=" mt-6 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
        {post.title}
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {post.content}
      </p>
    </div>
  );
};

export default PostFetcher;
