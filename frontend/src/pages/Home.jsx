import { useEffect, useState } from "react";
import API from "../services/api";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.get("/news/top").then((res) => setNews(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">Latest Breaking News</h1>
        <p className="text-gray-600">Stay updated with the world</p>
      </section>

      <h2 className="text-3xl font-bold mb-6">Top News</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {news.map((n) => (
          <NewsCard key={n._id} news={n} />
        ))}
      </div>
    </div>
  );
};

export default Home;
