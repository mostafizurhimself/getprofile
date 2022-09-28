import React from 'react';
import Button from '../form/Button';
import Input from '../form/Input';
import TextArea from '../form/Textarea';

const CommentBox = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold">Leave a comment</h3>
      <p className="text-gray-500 dark:text-gray-300">Your email address will not be published.</p>
      <div className="mt-4 grid max-w-2xl gap-8 md:grid-cols-2 md:gap-4">
        <Input placeholder="Your Name" />
        <Input placeholder="Email Address" />
      </div>
      <div className="mt-8 max-w-2xl">
        <TextArea placeholder="Comment" />
      </div>
      <div className="mt-8">
        <Button className="px-8">Add Comment</Button>
      </div>
    </>
  );
};

export default CommentBox;
