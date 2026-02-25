import News from "../Models/News";

export const getAllNews = async (req, res) => {
  const news = await News.find().populate("author");
  res.json(news);
};

export const getTopNews = async (req, res) => {
  const news = await News.find()
    .sort({ createdAt: -1 })
    .limit(6)
    .populate("author");
  res.json(news);
};

export const getSingleNews = async (req, res) => {
  const news = await News.findById(req.params.id).populate("author");
  if (!news) return res.status(404).json({ msg: "News not found" });
  res.json(news);
};

export const createNews = async (req, res) => {
  const news = await News.create({ ...req.body, author: req.user.id });
  res.json({ msg: "News created successfully", news });
};

export const updateNews = async (req, res) => {
  const news = await News.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!news) return res.status(404).json({ msg: "News not found" });
  res.json({ msg: "News updated successfully", news });
};

export const deleteNews = async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
