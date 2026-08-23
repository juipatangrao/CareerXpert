import axios from "axios";

const API = "http://localhost:5000/api/skill-gap";

export const analyzeSkillGap = async (formData) => {
  try {
    const response = await axios.post(
      `${API}/analyze`,
      formData
    );

    return response.data;
  } catch (error) {
    console.error("Skill Gap Error :", error);

    throw error;
  }
};