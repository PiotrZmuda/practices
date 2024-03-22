import { NextApiRequest, NextApiResponse } from "next";
import { Post as PostType } from "../../type";

const posts: PostType[] = [
  {
    id: "1",
    title: "Pierwszy wpis na blogu",
    content: "To jest pierwszy wpis na moim blogu!",
  },
  {
    id: "2",
    title: "Drugi wpis na blogu",
    content: "To jest drugi wpis, pełen ciekawostek.",
  },
  {
    id: "3",
    title: "Trzeci wpis",
    content: "To jest trzeci wpis, rozwiązywanie problemów.",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const post = posts.find((post) => post.id === id);

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: `Post with id ${id} not found` });
  }
}
