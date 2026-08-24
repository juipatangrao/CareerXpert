import React, { useEffect, useState } from "react";
import axios from "axios";

const GeneratedLetter = ({ formData, setFormData }) => {
  const [loading, setLoading] = useState(false);

  const generateLetter = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/cover-letter/generate",
        formData
      );

      setFormData({
  ...formData,
  _id: res.data.data._id,
  generatedLetter: res.data.coverLetter,
});

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Failed to Generate Cover Letter");
    }
  };

  useEffect(() => {
    if (!formData.generatedLetter) {
      generateLetter();
    }
  }, []);

  const copyLetter = () => {
    navigator.clipboard.writeText(formData.generatedLetter);
    alert("Cover Letter Copied Successfully");
  };
const downloadPDF = () => {
  window.open(
    `http://localhost:5000/api/cover-letter/download/pdf/${formData._id}`,
    "_blank"
  );
};
const downloadDOCX = () => {
  window.open(
    `http://localhost:5000/api/cover-letter/download/docx/${formData._id}`,
    "_blank"
  );
};
  return (
    <div className="form-container">

      <h2>Generated Cover Letter</h2>

      {loading ? (
        <h3>Generating Cover Letter...</h3>
      ) : (
        <>
          <textarea
            rows="20"
            value={formData.generatedLetter}
            readOnly
          />

          <div className="button-group">

            <button onClick={copyLetter}>
              Copy
            </button>

            <button onClick={generateLetter}>
              Regenerate
            </button>

            <button onClick={downloadPDF}>
  Download PDF
</button>

<button onClick={downloadDOCX}>
  Download DOCX
</button>

          </div>
        </>
      )}

    </div>
  );
};

export default GeneratedLetter;