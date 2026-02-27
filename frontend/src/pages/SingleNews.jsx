import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const SingleNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    API.get(`/news/${id}`).then((res) => setNews(res.data));
  }, [id]);

  if (!news) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <img src={news.image} className="w-full h-96 object-cover rounded mb-4" />
      <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
      <p className="text-gray-700">{news.description}</p>
    </div>
  );
};

export default SingleNews;
