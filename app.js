document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeOutput = document.getElementById("resume-output");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting normally
        // Collect form data
        var formData = new FormData(form);
        var name = formData.get("name");
        var email = formData.get("email");
        var education = formData.get("education");
        var workExperience = formData.get("work-experience");
        var skills = formData.get("skills");
        // Populate resume sections
        document.getElementById("personal-info").innerHTML = "<h3>Personal Information</h3><p>Name: ".concat(name, "</p><p>Email: ").concat(email, "</p>");
        document.getElementById("education-info").innerHTML = "<h3>Education</h3><p>".concat(education, "</p>");
        document.getElementById("work-experience-info").innerHTML = "<h3>Work Experience</h3><p>".concat(workExperience, "</p>");
        document.getElementById("skills-info").innerHTML = "<h3>Skills</h3><p>".concat(skills
            .split(",")
            .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
            .join(""), "</p>");
        // Show the resume output
        resumeOutput.classList.remove("hidden");
    });
});
