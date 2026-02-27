import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={news.image}
        alt={news.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{news.title}</h2>
        <p className="text-gray-600 text-sm mb-3">
          {news.description?.slice(0, 100)}...
        </p>
        <Link to={`/news/${news._id}`} className="text-blue-600 font-semibold">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
