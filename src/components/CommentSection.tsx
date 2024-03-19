import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// Define the type for a single comment
interface Comment {
  name: string;
  comment: string;
  rating: number;
}

const CommentSection = () => {
  // State to store user input for new comment
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);

  // State to store list of comments
  const [comments, setComments] = useState<Comment[]>([]);

  // State to track current page number
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle submission of new comment
  const handleSubmit = () => {
    // Add new comment to the list of comments
    setComments([
      ...comments,
      {
        name: "User", // Hardcoded for now, replace with actual user name
        comment: newComment,
        rating: newRating,
      },
    ]);

    // Reset input fields
    setNewComment("");
    setNewRating(0);
  };

  // Function to render star icons for rating in the form
  const renderRatingStarsForm = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < newRating ? "#ffc107" : "#e4e5e9"}
          onClick={() => setNewRating(i + 1 === newRating ? 0 : i + 1)}
          style={{ cursor: "pointer", marginRight: 4 }}
        />
      );
    }
    return stars;
  };

  // Function to render star icons for displaying existing comments
  const renderRatingStarsDisplay = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < rating ? "#ffc107" : "#e4e5e9"}
          style={{ marginRight: 4 }}
        />
      );
    }
    return stars;
  };

  // Calculate the index of the first and last comment to display on the current page
  const indexOfLastComment = currentPage * 4;
  const indexOfFirstComment = indexOfLastComment - 4;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-center">
      {/* Left side: Form to leave a new comment */}
      <div className="flex-1 pr-4 pb-8">
        <h2 className="text-xl font-bold mb-4">Leave a Comment</h2>
        <textarea
          className="w-full border border-gray-300 rounded-md p-2 mb-8"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={6}
        ></textarea>
        <div className="flex flex-row mb-8 text-3xl">
          <span className="mr-2">Rating:</span>
          {renderRatingStarsForm()}
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Comment
        </button>
      </div>
      {/* Right side: List of comments */}
      <div className="flex-1 pl-4">
        <div className="flex flex-row items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Comments</h2>
          {/* Pagination buttons */}
          <div className="flex justify-center">
            <button
              className={`py-2 px-4 rounded-md mr-2 ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 border border-blue-500"
              }`}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                currentComments.length < 4
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 border border-blue-500"
              }`}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentComments.length < 4}
            >
              Next
            </button>
          </div>
        </div>

        {currentComments.map((comment, index) => (
          <div
            key={index}
            className="mb-8 p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <div className="font-bold text-blue-600">{comment.name}</div>
            <div className="text-gray-700">{comment.comment}</div>
            <div className="mt-2 flex text-yellow-400 text-xl">
              {renderRatingStarsDisplay(comment.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
