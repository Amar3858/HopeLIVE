import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-2">Any questions or remarks? Just write us a message!</p>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Comment Textarea */}
          <div>
            <label className="block text-gray-700 font-medium">Comment</label>
            <textarea 
              rows="4" 
              placeholder="Write your message here..." 
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
