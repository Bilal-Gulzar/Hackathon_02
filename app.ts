 
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumeOutput = document.getElementById(
    "resume-output"
  ) as HTMLDivElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    // Collect form data
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const education = formData.get("education") as string;
    const workExperience = formData.get("work-experience") as string;
    const skills = formData.get("skills") as string;

    // Populate resume sections
    document.getElementById(
      "personal-info"
    )!.innerHTML = `<h3>Personal Information</h3><p>Name: ${name}</p><p>Email: ${email}</p>`;
    document.getElementById(
      "education-info"
    )!.innerHTML = `<h3>Education</h3><p>${education}</p>`;
    document.getElementById(
      "work-experience-info"
    )!.innerHTML = `<h3>Work Experience</h3><p>${workExperience}</p>`;
    document.getElementById(
      "skills-info"
    )!.innerHTML = `<h3>Skills</h3><p>${skills
      .split(",")
      .map((skill) => `<li>${skill.trim()}</li>`)
      .join("")}</p>`;

    // Show the resume output
    resumeOutput.classList.remove("hidden");
  });
});
