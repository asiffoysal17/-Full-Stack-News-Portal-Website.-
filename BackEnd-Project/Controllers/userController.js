import User from "../Models/User";
import News from "../Models/News";

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};

export const updateProfile = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  });
  res.json(user);
};

export const getMyNews = async (req, res) => {
  const news = await News.find({ author: req.user.id });
  res.json(news);
};
