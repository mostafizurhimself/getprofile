import React from 'react';
import { FiHeart, FiMessageSquare } from 'react-icons/fi';

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
        <h4 className="text-lg font-bold">{comment.name}</h4>
        <time className="ml-2 text-xs text-gray-500 dark:text-gray-400">{comment.createdAt}</time>
      </div>
      <div className="mt-2 space-y-6 text-base text-gray-500 dark:text-gray-300">{comment.content}</div>
      <div className="mt-3 flex items-center">
        <button className="flex items-center text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500">
          <FiHeart className="h-4" />
          <span className="ml-1 text-sm">{comment.totalLikes} likes</span>
        </button>

        <button className="ml-4 flex items-center text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500">
          <FiMessageSquare className="h-4" />
          <span className="ml-1 text-sm">{comment.totalReplies} replies</span>
        </button>
      </div>
    </div>
  );
};

export default Comment;
