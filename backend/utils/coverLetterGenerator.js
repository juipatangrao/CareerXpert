const generateCoverLetter = (data) => {
  const {
    fullName,
    email,
    phone,
    city,
    linkedin,
    company,
    role,
    hiringManager,
    companyLocation,
    jobDescription,
    degree,
    college,
    university,
    passingYear,
    cgpa,
    technicalSkills,
    softSkills,
    experience,
    internship,
    workExperience,
    achievements,
    certifications,
    projectTitle,
    projectDescription,
    technologies,
    github,
    liveDemo,
    tone,
  } = data;

  // Default values
  const name = fullName || "Candidate";
  const companyName = company || "your organization";
  const jobRole = role || "the available position";
  const manager = hiringManager || "Hiring Manager";

  // Skills formatting
  const tech = technicalSkills || "relevant technical skills";
  const soft = softSkills || "communication and teamwork skills";

  // Education
  const education = degree
    ? `${degree}${college ? ` from ${college}` : ""}${
        university ? `, ${university}` : ""
      }${passingYear ? ` (${passingYear})` : ""}`
    : "my educational background";

  // Experience paragraph
  let experienceParagraph = "";

  if (
    experience &&
    experience.toLowerCase().includes("fresher")
  ) {
    experienceParagraph = `
As a fresher, I am eager to begin my professional career and apply
my academic knowledge and technical skills in a practical environment.
I am a quick learner, adaptable, and motivated to contribute positively
to the organization.
`;
  } else if (workExperience) {
    experienceParagraph = `
With my previous work experience, I have developed practical knowledge
and professional skills that I believe will help me contribute effectively
to this position.
`;
  } else {
    experienceParagraph = `
My academic background and practical exposure have helped me develop
the skills required to take on professional responsibilities and learn
new technologies effectively.
`;
  }

  // Internship paragraph
  let internshipParagraph = "";

  if (internship) {
    internshipParagraph = `
During my internship, I gained practical exposure to ${internship}.
This experience helped me understand professional development practices,
team collaboration, and real-world project requirements.
`;
  }

  // Project paragraph
  let projectParagraph = "";

  if (projectTitle) {
    projectParagraph = `
I have also worked on a project titled "${projectTitle}".
${projectDescription ? projectDescription : ""}
${
  technologies
    ? `The project was developed using ${technologies}.`
    : ""
}
`;
  }

  // Achievements
  let achievementParagraph = "";

  if (achievements) {
    achievementParagraph = `
My achievements include ${achievements}.
`;
  }

  // Certifications
  let certificationParagraph = "";

  if (certifications) {
    certificationParagraph = `
I have also completed certifications such as ${certifications},
which have further strengthened my professional knowledge.
`;
  }

  // Tone based opening
  let opening = "";

  switch (tone) {
    case "Friendly":
      opening = `
I am excited to apply for the ${jobRole} position at ${companyName}.
I would welcome the opportunity to bring my skills and enthusiasm
to your team.
`;
      break;

    case "Confident":
      opening = `
I am writing to express my strong interest in the ${jobRole} position
at ${companyName}. With my technical knowledge, practical experience,
and commitment to continuous learning, I am confident that I can
contribute effectively to your organization.
`;
      break;

    case "Formal":
    case "Professional":
    default:
      opening = `
I am writing to express my interest in the ${jobRole} position
at ${companyName}. With my educational background, technical skills,
and practical exposure, I am eager to contribute to your organization.
`;
      break;
  }

  // Contact information
  const contactInfo = [
    email,
    phone,
    city,
    linkedin,
  ]
    .filter(Boolean)
    .join(" | ");

  // Job description paragraph
  let jobDescriptionParagraph = "";

  if (jobDescription) {
    jobDescriptionParagraph = `
After reviewing the job requirements, I believe that my background
and skills align well with the expectations of this role. I am
particularly interested in this opportunity because it allows me
to apply my knowledge while continuing to develop professionally.
`;
  }

  // Final cover letter
  const coverLetter = `${name}
${contactInfo}

${new Date().toLocaleDateString("en-IN")}

${manager}
${companyName}
${companyLocation || ""}

Subject: Application for ${jobRole}

Dear ${manager},

${opening}

I have an educational background in ${education}. Through my academic
work and practical learning, I have developed knowledge of ${tech}.
In addition, I possess strong ${soft}.

${experienceParagraph}

${internshipParagraph}

${projectParagraph}

${jobDescriptionParagraph}

${achievementParagraph}

${certificationParagraph}

I am enthusiastic about the opportunity to join ${companyName} and
contribute to the organization through my skills, dedication, and
willingness to learn. I would appreciate the opportunity to discuss
how my background and abilities can contribute to your team.

Thank you for considering my application. I look forward to hearing
from you.

Sincerely,

${name}
${email || ""}
${phone || ""}
`;

  return coverLetter.trim();
};

module.exports = generateCoverLetter;