import React from "react";
import { Post as PostType } from "../../type";
import { posts } from "../api/data/posts";

const Page = () => {
  const post: PostType | undefined = posts.find((post) => post.id === 1);

  if (!post) {
    return <div>Post not found</div>;
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

export default Page;
