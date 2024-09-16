// References to the form and preview
var form = document.getElementById('resume-form');
var preview = document.getElementById('resume-preview');
// Form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reloading
    // Input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var dob = document.getElementById('dob').value;
    var cnic = document.getElementById('cnic').value;
    var gender = document.getElementById('gender').value;
    var nationality = document.getElementById('nationality').value;
    var religion = document.getElementById('religion').value;
    var education = document.getElementById('education').value;
    var work_exp = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value;
    // Generation of content
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n    <p><b>Address:</b> ").concat(address, "</p>\n    <p><b>Date of Birth:</b> ").concat(dob, "</p>\n    <p><b>CNIC:</b> ").concat(cnic, "</p>\n    <p><b>Gender:</b> ").concat(gender, "</p>\n    <p><b>Nationality:</b> ").concat(nationality, "</p>\n    <p><b>Religion:</b> ").concat(religion, "</p>\n\n    <h3>Education</h3>\n    <p><b>Education:</b> ").concat(education, "</p>\n\n    <h3>Work Experience</h3>\n    <p><b>Work Experience:</b> ").concat(work_exp, "</p>\n\n    <h3>Skills</h3>\n    <p><b>Skills:</b> ").concat(skills, "</p>");
    // Displaying the generated result
    if (preview) {
        preview.innerHTML = resumeHTML;
    }
    else {
        console.error('Preview section not found.');
    }
});
