import { useEffect, useState } from "react";
import API from "../services/api";
import NewsCard from "../components/NewsCard";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    API.get("/news").then((res) => setNews(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">All News</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {news.map((n) => (
          <NewsCard key={n._id} news={n} />
        ))}
      </div>
    </div>
  );
};

export default News;
