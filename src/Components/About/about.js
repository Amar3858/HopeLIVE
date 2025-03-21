import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-2">
          Empowering Dreams, One Contribution at a Time!
        </p>
      </div>

      {/* Our Mission */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-600 mt-2">
          We believe in the power of community-driven support. Our mission is to connect 
          people in need with generous donors who want to make a difference. Whether it's for 
          medical emergencies, education, startups, or social causes, we provide a secure and 
          transparent platform for fundraising.
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">How It Works</h2>
        <ul className="list-disc pl-6 text-gray-600 mt-2">
          <li><strong>Start a Campaign</strong> – Create a fundraiser with an inspiring story and goal.</li>
          <li><strong>Share Your Story</strong> – Use social media and our network to reach more people.</li>
          <li><strong>Receive Donations</strong> – Get contributions directly and securely.</li>
          <li><strong>Make an Impact</strong> – Withdraw funds and bring your vision to life!</li>
        </ul>
      </div>

      {/* Why Choose Us? */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-600 mt-2">
          
          <li><strong>Fast & Secure Transactions</strong> – Trusted payment gateways ensure smooth transfers.</li>
          <li><strong>Community Support</strong> – We help you with guidance, tips, and customer support.</li>
        </ul>
      </div>

      {/* Meet the Team */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 mt-2">Our dedicated admins work tirelessly to ensure a seamless experience:</p>
        <ul className="list-none mt-4 text-gray-700">
          <li>👨‍💻 <strong>Keshav Barnawal</strong> – Platform Development & Security</li>
          <li>👨‍💻 <strong>Hritik Choudhary</strong> – Fundraising Strategy & Outreach</li>
          <li>👨‍💻 <strong>Amar Kumar</strong> – Community Support & Operations</li>
          <li>👨‍💻 <strong>Prashant Kashyap</strong> – Marketing & Partnerships</li>
        </ul>
      </div>

      
    </div>
  );
};

export default About;
