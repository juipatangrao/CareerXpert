// const { GoogleGenAI } = require("@google/genai");

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// const generateComparison = async (prompt) => {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.5-flash",
//       contents: prompt,
//       config: {
//         temperature: 0.5,
//         maxOutputTokens: 2500,
//       },
//     });

//     return response.text;
//   } catch (err) {
//     console.error(err);
//     return "<h2>Error</h2><p>Unable to generate comparison.</p>";
//   }
// };

// module.exports = generateComparison;

const careerData = require("../data/careerData");

function findCareer(name) {
    return careerData.find(
        career => career.name.toLowerCase() === name.toLowerCase()
    );
}

function createList(arr) {
    if (!arr || arr.length === 0) {
        return "<li>Not Available</li>";
    }

    return arr.map(item => `<li>${item}</li>`).join("");
}

function comparisonService(career1Name, career2Name) {

    const career1 = findCareer(career1Name);
    const career2 = findCareer(career2Name);

    if (!career1 || !career2) {

        return `
        <h2>Career Not Found</h2>
        <p>Please select valid careers.</p>
        `;

    }

    let html = `
    <div style="font-family:Arial;padding:20px;">

    <h2 style="text-align:center;">
    Career Comparison
    </h2>

    <table
    border="1"
    cellpadding="10"
    cellspacing="0"
    style="width:100%;border-collapse:collapse;text-align:center;">

    <tr style="background:#800000;color:white;">
        <th>Feature</th>
        <th>${career1.name}</th>
        <th>${career2.name}</th>
    </tr>

    <tr>
        <td><b>Category</b></td>
        <td>${career1.category}</td>
        <td>${career2.category}</td>
    </tr>

    <tr>
        <td><b>Aptitude</b></td>
        <td>${career1.aptitude}</td>
        <td>${career2.aptitude}</td>
    </tr>

    <tr>
        <td><b>Minimum Score</b></td>
        <td>${career1.minScore}</td>
        <td>${career2.minScore}</td>
    </tr>

    <tr>

        <td><b>Subjects</b></td>

        <td>
            <ul>
                ${createList(career1.subjects)}
            </ul>
        </td>

        <td>
            <ul>
                ${createList(career2.subjects)}
            </ul>
        </td>

    </tr>

    <tr>

        <td><b>Skills</b></td>

        <td>
            <ul>
                ${createList(career1.skills)}
            </ul>
        </td>

        <td>
            <ul>
                ${createList(career2.skills)}
            </ul>
        </td>

    </tr>

    <tr>

        <td><b>Interests</b></td>

        <td>
            <ul>
                ${createList(career1.interests)}
            </ul>
        </td>

        <td>
            <ul>
                ${createList(career2.interests)}
            </ul>
        </td>

    </tr>

    <tr>

        <td><b>Personality</b></td>

        <td>
            <ul>
                ${createList(career1.personality)}
            </ul>
        </td>

        <td>
            <ul>
                ${createList(career2.personality)}
            </ul>
        </td>

    </tr>

    </table>
    `;
        html += `

    <br>

    <h2 style="color:#800000;">Advantages</h2>

    <table
    border="1"
    cellpadding="10"
    cellspacing="0"
    style="width:100%;border-collapse:collapse;">

    <tr style="background:#800000;color:white;">
        <th>${career1.name}</th>
        <th>${career2.name}</th>
    </tr>

    <tr>

        <td>

            <ul>

                <li>Good Career Growth</li>

                <li>High Demand</li>

                <li>Excellent Learning Opportunities</li>

            </ul>

        </td>

        <td>

            <ul>

                <li>Strong Career Opportunities</li>

                <li>Good Salary Potential</li>

                <li>Future Scope Available</li>

            </ul>

        </td>

    </tr>

    </table>

    <br>

    <h2 style="color:#800000;">Final Recommendation</h2>

    `;

    if (career1.minScore > career2.minScore) {

        html += `
        <p>

        <b>${career1.name}</b> requires a higher minimum score and may be
        slightly more competitive than <b>${career2.name}</b>.

        </p>
        `;

    } else if (career2.minScore > career1.minScore) {

        html += `
        <p>

        <b>${career2.name}</b> requires a higher minimum score and may be
        slightly more competitive than <b>${career1.name}</b>.

        </p>
        `;

    } else {

        html += `
        <p>

        Both careers have similar eligibility requirements.
        Your choice should depend on your interests and skills.

        </p>
        `;

    }

    html += `

    <br>

    <h3 style="color:green;">Choose ${career1.name} if:</h3>

    <ul>

    ${createList(career1.interests)}

    </ul>

    <h3 style="color:blue;">Choose ${career2.name} if:</h3>

    <ul>

    ${createList(career2.interests)}

    </ul>

    </div>

    `;

    return html;

}

module.exports = comparisonService;