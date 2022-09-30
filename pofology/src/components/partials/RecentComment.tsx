import Comment from '@/components/shared/Comment';
import React from 'react';
import Button from '../form/Button';

const comments = [
  {
    id: 1,
    content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
    name: 'John Doe',
    totalLikes: 10,
    totalReplies: 3,
    createdAt: '1 month ago',
  },
  {
    id: 2,
    content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
    name: 'Newton',
    totalLikes: 7,
    totalReplies: 5,
    createdAt: '2 hours ago',
  },
  {
    id: 3,
    content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
    name: 'Emily Selman',
    totalLikes: 5,
    totalReplies: 1,
    createdAt: '6 min ago',
  },
  {
    id: 4,
    content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
    name: 'Gary Smith',
    totalLikes: 3,
    totalReplies: 0,
    createdAt: '1 years ago',
  },
];

const RecentComment = () => {
  return (
    <div className="relative">
      <h3 className="text-2xl font-semibold">Recent Comments</h3>
      {comments.map((item, index) => {
        return <Comment key={index} comment={item} />;
      })}
      <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
        See More
      </Button>
    </div>
  );
};

export default RecentComment;
