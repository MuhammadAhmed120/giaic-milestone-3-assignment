"use client";
import React, { useState } from "react";

const CommentForm = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Comments:</h3>
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="bg-gray-100 text-black shadow-sm shadow-rose-400 p-4 rounded-lg"
          >
            {comment}
          </li>
        ))}
      </ul>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        className="w-full p-2 mt-4 rounded-lg outline-none border-2 shadow-md border-slaet-400"
      />
      <button
        onClick={handleAddComment}
        className=" bg-yellow-300 text-black px-4 py-2 rounded-lg mt-2 hover:bg-yellow-200"
      >
        Add Comment
      </button>
    </div>
  );
};

export default CommentForm;
