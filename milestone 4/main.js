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
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Address:</b> <span contenteditable=\"true\">").concat(address, "</span></p>\n    <p><b>Date of Birth:</b><span contenteditable=\"true\"> ").concat(dob, "</span></p>\n    <p><b>CNIC:</b><span contenteditable=\"true\"> ").concat(cnic, "</span></p>\n    <p><b>Gender:</b><span contenteditable=\"true\"> ").concat(gender, "</span></p>\n    <p><b>Nationality:</b> <span contenteditable=\"true\">").concat(nationality, "</span></p>\n    <p><b>Religion:</b> <span contenteditable=\"true\">").concat(religion, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\"><b>Education:</b> ").concat(education, "</p>\n    \n    <h3>Work Experience</h3>\n    <p contenteditable=\"true\"><b>Work Experience:</b> ").concat(work_exp, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\"><b>Skills:</b> ").concat(skills, "</p>");
    // Displaying the generated result
    if (preview) {
        preview.innerHTML = resumeHTML;
    }
    else {
        console.error('Preview section not found.');
    }
});
