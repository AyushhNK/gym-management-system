import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    email: "hello@gmail.com",
    about: user.about,
    membershipStartDate: user.membershipStartDate,
    membershipType: user.membershipType,
    nextBillingDate: user.nextBillingDate,
    phone: user.phone,
    address: user.address,
    facebook: user.facebook,
    twitter: user.twitter,
    instagram: user.instagram,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., update user data)
    setEditing(false); // Disable editing mode after submission
    // Example of handling submission (can be replaced with actual API call):
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-6">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-lg">
        <div className="relative">
          <img
            className="w-full h-32 object-cover"
            src="https://www.primalstrength.com/cdn/shop/files/gym_design_Headers.jpg?v=1680779429&width=2000"
            alt="Background"
          />
          <div className="absolute inset-0 flex items-center justify-center mt-16">
            <img
              className="h-24 w-24 rounded-full border-4 border-white object-cover"
              src={user.profile_picture}
              alt={`${user.Username}'s profile`}
            />
          </div>
        </div>
        <div className="p-6 pt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">{user.Username.toUpperCase()}</h2>
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly={!editing}
              />
            </div>
            <div className="text-center mt-4">
              <label htmlFor="about" className="block text-gray-700 text-sm font-bold mb-2">
                About Me:
              </label>
              <textarea
                id="about"
                name="about"
                value={formData.about}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly={!editing}
              />
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Membership Details</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li>
                  <span className="font-semibold">Member since:</span>{' '}
                  <input
                    type="date"
                    id="membershipStartDate"
                    name="membershipStartDate"
                    value={formData.membershipStartDate}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    readOnly={!editing}
                  />
                </li>
                <li>
                  <span className="font-semibold">Membership type:</span>{' '}
                  <input
                    type="text"
                    id="membershipType"
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    readOnly={!editing}
                  />
                </li>
                <li>
                  <span className="font-semibold">Next billing date:</span>{' '}
                  <input
                    type="date"
                    id="nextBillingDate"
                    name="nextBillingDate"
                    value={formData.nextBillingDate}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    readOnly={!editing}
                  />
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li>
                  <span className="font-semibold">Phone:</span>{' '}
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // readOnly={!editing}
                  />
                </li>
                <li>
                  <span className="font-semibold">Address:</span>{' '}
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    readOnly={!editing}
                  />
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Social Media</h3>
              <ul className="text-gray-700 mt-2 flex space-x-4 justify-center">
                <li>
                  <a href={formData.facebook} className="text-blue-600 hover:text-blue-800">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={formData.twitter} className="text-blue-400 hover:text-blue-600">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href={formData.instagram} className="text-pink-600 hover:text-pink-800">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 flex justify-center">
              {!editing ? (
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Edit
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
