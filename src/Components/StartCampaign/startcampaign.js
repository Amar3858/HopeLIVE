import React, { useState } from "react";

const StartCampaign = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState("");

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCaptcha !== captcha) {
      alert("Captcha does not match! Please try again.");
      setCaptcha(generateCaptcha()); // Refresh Captcha
      return;
    }
    alert("Campaign submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Start a Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name of Campaign */}
        <div>
          <label className="block text-gray-700">Name of Campaign</label>
          <input type="text" required className="w-full p-2 border rounded" />
        </div>

        {/* Your Name */}
        <div>
          <label className="block text-gray-700">Your Name</label>
          <input type="text" required className="w-full p-2 border rounded" />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-700">Contact Number</label>
          <input type="tel" required className="w-full p-2 border rounded" />
        </div>

        {/* Email ID */}
        <div>
          <label className="block text-gray-700">Email ID</label>
          <input type="email" required className="w-full p-2 border rounded" />
        </div>

        {/* Fund Raising Amount */}
        <div>
          <label className="block text-gray-700">Fund Raising Amount</label>
          <input type="number" required className="w-full p-2 border rounded" />
        </div>

        {/* Reason for the Campaign */}
        <div>
          <label className="block text-gray-700">Reason for the Campaign</label>
          <textarea
            required
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Explain why you are starting this campaign..."
          ></textarea>
        </div>

        {/* Upload Campaign Image */}
        <div>
          <label className="block text-gray-700">Upload Campaign Image</label>
          <input type="file" accept="image/*" required className="w-full p-2 border rounded" />
        </div>

        {/* Upload Supporting Documents */}
        <div>
          <label className="block text-gray-700">Upload Documents</label>
          <input type="file" required className="w-full p-2 border rounded" />
        </div>

        {/* Captcha */}
        <div>
          <label className="block text-gray-700">Captcha</label>
          <div className="flex items-center space-x-4">
            <span className="bg-gray-200 px-4 py-2 rounded text-lg font-bold">{captcha}</span>
            <input 
              type="text" 
              required 
              className="p-2 border rounded"
              onChange={(e) => setInputCaptcha(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Submit Campaign
        </button>
      </form>
    </div>
  );
};

export default StartCampaign;
