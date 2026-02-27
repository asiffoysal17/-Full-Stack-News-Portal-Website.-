import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const fetchProfile = async () => {
    try {
      const res = await API.get("/auth/profile");
      setUser(res.data);
    } catch {
      console.error("Failed to fetch profile");
    }
  };

  useEffect(() => {
    (async () => {
      await fetchProfile();
    })();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put("/auth/profile", user);
      toast.success("Profile updated successfully!");
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">
          My Profile
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              disabled
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
