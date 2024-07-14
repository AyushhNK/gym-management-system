import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-6">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-lg">
        <div className="relative">
          <img
            className="w-full h-32 object-cover"
            src="https://via.placeholder.com/400x150"
            alt="Background"
          />
          <div className="absolute inset-0 flex items-center justify-center mt-16">
            <img
              className="h-24 w-24 rounded-full border-4 border-white object-cover"
              src={user.profilePicture}
              alt={`${user.name}'s profile`}
            />
          </div>
        </div>
        <div className="p-6 pt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">{user.name}</h2>
          <p className="text-gray-600 text-center mb-4">{user.email}</p>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
            <p className="text-gray-700 mt-2">{user.about}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Membership Details</h3>
            <ul className="text-gray-700 mt-2 space-y-1">
              <li><span className="font-semibold">Member since:</span> {user.membershipStartDate}</li>
              <li><span className="font-semibold">Membership type:</span> {user.membershipType}</li>
              <li><span className="font-semibold">Next billing date:</span> {user.nextBillingDate}</li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
            <ul className="text-gray-700 mt-2 space-y-1">
              <li><span className="font-semibold">Phone:</span> {user.phone}</li>
              <li><span className="font-semibold">Address:</span> {user.address}</li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Social Media</h3>
            <ul className="text-gray-700 mt-2 flex space-x-4 justify-center">
              <li>
                <a href={user.socialMedia.facebook} className="text-blue-600 hover:text-blue-800">
                  Facebook
                </a>
              </li>
              <li>
                <a href={user.socialMedia.twitter} className="text-blue-400 hover:text-blue-600">
                  Twitter
                </a>
              </li>
              <li>
                <a href={user.socialMedia.instagram} className="text-pink-600 hover:text-pink-800">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
            <ul className="text-gray-700 mt-2 space-y-1">
              {user.recentActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
