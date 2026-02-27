import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [myNews, setMyNews] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  const fetchMyNews = async () => {
    try {
      const res = await API.get("/news/my-news");
      setMyNews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchMyNews();
    })();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await API.post("/news", form);
      toast.success("News created successfully!");
      setForm({ title: "", description: "", image: "" });
      fetchMyNews();
    } catch {
      toast.error("Failed to create news");
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/news/${id}`);
      toast.success("News deleted");
      fetchMyNews();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">User Dashboard</h1>

      {/* Create News Form */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Create News</h2>
        <form onSubmit={handleCreate} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="News Title"
            value={form.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL (Cloudinary)"
            value={form.image}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />
          <textarea
            name="description"
            placeholder="News Description"
            rows="4"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Publish News
          </button>
        </form>
      </div>

      {/* My News List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">My News</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {myNews.map((news) => (
            <div key={news._id} className="bg-white p-4 rounded-xl shadow">
              <img
                src={news.image}
                alt={news.title}
                className="h-40 w-full object-cover rounded mb-3"
              />
              <h3 className="text-xl font-bold">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {news.description?.slice(0, 80)}...
              </p>
              <button
                onClick={() => handleDelete(news._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
