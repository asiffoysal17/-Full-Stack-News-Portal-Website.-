import { useEffect, useState } from "react";
import API from "../services/api";

const Admin = () => {
  const [pending, setPending] = useState([]);

  const fetchPending = async () => {
    const res = await API.get("/news/pending");
    setPending(res.data);
  };
  useEffect(() => {
    (async () => {
      await fetchPending();
    })();
  }, []);

  const approve = async (id) => {
    await API.put(`/news/approve/${id}`);
    fetchPending();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      {pending.map((n) => (
        <div key={n._id} className="bg-white p-4 shadow rounded mb-4">
          <h2 className="text-xl font-bold">{n.title}</h2>
          <button
            onClick={() => approve(n._id)}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
          >
            Approve
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
