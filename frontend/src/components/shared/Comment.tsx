import React from "react";
import { Heart, MessageSquare } from "react-feather";

interface Comment {
  id: number | string;
  name: string;
  content: string;
  totalLikes: number;
  totalReplies: number;
  createdAt: string;
}

type Props = {
  comment: Comment;
};

const Comment = ({ comment }: Props) => {
  return (
    <div className="py-4">
      <div className="flex items-baseline">
        <h4 className="font-bold text-lg">{comment.name}</h4>
        <time className="ml-2 text-xs text-gray-500">{comment.createdAt}</time>
      </div>
      <div className="text-base space-y-6 text-gray-500 mt-2">
        {comment.content}
      </div>
      <div className="mt-3 flex items-center">
        <button className="flex items-center text-gray-500">
          <Heart className="h-4" />
          <span className="ml-1 text-sm">{comment.totalLikes} likes</span>
        </button>

        <button className="ml-4 flex items-center text-gray-500">
          <MessageSquare className="h-4" />
          <span className="ml-1 text-sm">{comment.totalReplies} replies</span>
        </button>
      </div>
    </div>
  );
};

export default Comment;
