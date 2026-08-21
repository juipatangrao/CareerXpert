const axios = require("axios");

const getCareerNews = async (req, res) => {
  try {
    const response = await axios.get(
      "https://gnews.io/api/v4/search",
      {
       params: {
  q: '"career guidance"',
  lang: "en",
  country: "in",
  max: 10,
  apikey: process.env.GNEWS_API_KEY,
}
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("News Error:", error.response?.data || error.message);

    res.status(500).json({
      message: "Unable to fetch news",
    });
  }
};

module.exports = {
  getCareerNews,
};