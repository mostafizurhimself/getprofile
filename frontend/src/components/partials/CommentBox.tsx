import React from "react";
import Button from "../form/Button";

type Props = {};

const CommentBox = (props: Props) => {
  return (
    <>
      <h3 className="font-semibold text-2xl">Leave a comment</h3>
      <p className="text-gray-500">Your email address will not be published.</p>
      <div className="grid md:grid-cols-2 gap-8 md:gap-4 max-w-2xl mt-4">
        <input
          className="w-full px-6 py-4 rounded-full outline-none focus:border focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-lg"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="w-full px-6 py-4 rounded-full outline-none focus:border focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-lg"
          type="email"
          placeholder="Email Address"
        />
      </div>
      <div className="mt-8 max-w-2xl">
        <textarea
          className="w-full px-6 py-4 rounded-3xl outline-none focus:border focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-lg"
          placeholder="Comment"
          rows={5}
        ></textarea>
      </div>
      <div className="mt-8">
        <Button className="px-8 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 text-white font-semibold mt-5">
          Add Comment
        </Button>
      </div>
    </>
  );
};

export default CommentBox;
