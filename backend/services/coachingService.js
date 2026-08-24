const { examInstitutes } = require("../data/coachingData");

function generateCoachingRecommendation(exam, state, city, area, mode) {
  const institutes = examInstitutes[exam];

  if (!institutes) {
    return `<h1>Coaching Recommendation</h1>
    <p>No data available for ${exam} yet. Please try another course.</p>`;
  }

  const isOnline = mode === "Online";
  const locationLabel = isOnline
    ? "Online (Pan India)"
    : area
    ? `${area}, ${city}`
    : city || state;

  let tableRows = "";
  institutes.forEach((inst) => {
    tableRows += `
      <tr>
        <td>${inst.name}</td>
        <td>${locationLabel}</td>
        <td>${mode === "Any" ? "Online & Offline" : mode}</td>
        <td>${inst.fees}</td>
        <td>${inst.knownFor}</td>
      </tr>`;
  });

  return `
    <h1>Coaching Recommendation for ${exam}</h1>
    <h2>Overview</h2>
    <p>Here are recommended coaching options for <strong>${exam}</strong> near <strong>${locationLabel}</strong> (${mode} mode).</p>
    <h2>Recommended Institutes</h2>
    <table>
      <thead>
        <tr>
          <th>Institute Name</th>
          <th>Location</th>
          <th>Mode</th>
          <th>Approx Fees</th>
          <th>Known For</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
    <h2>What to Look For</h2>
    <ul>
      <li>Faculty experience and past student results</li>
      <li>Test series frequency and quality</li>
      <li>Batch size for personal attention</li>
      <li>Doubt-clearing support availability</li>
    </ul>
    <blockquote>Consistency in coaching combined with self-study is the key to success — no institute can replace daily practice.</blockquote>
  `;
}

module.exports = { generateCoachingRecommendation };