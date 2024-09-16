// References to the form and preview
const form = document.getElementById('resume-form') as HTMLFormElement;
const preview = document.getElementById('resume-preview') as HTMLDivElement;

// Form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reloading

    // Input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const cnic = (document.getElementById('cnic') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLSelectElement).value;
    const nationality = (document.getElementById('nationality') as HTMLInputElement).value;
    const religion = (document.getElementById('religion') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const work_exp = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generation of content
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
    <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
    <p><b>Address:</b> <span contenteditable="true">${address}</span></p>
    <p><b>Date of Birth:</b><span contenteditable="true"> ${dob}</span></p>
    <p><b>CNIC:</b><span contenteditable="true"> ${cnic}</span></p>
    <p><b>Gender:</b><span contenteditable="true"> ${gender}</span></p>
    <p><b>Nationality:</b> <span contenteditable="true">${nationality}</span></p>
    <p><b>Religion:</b> <span contenteditable="true">${religion}</span></p>

    <h3>Education</h3>
    <p contenteditable="true"><b>Education:</b> ${education}</p>
    
    <h3>Work Experience</h3>
    <p contenteditable="true"><b>Work Experience:</b> ${work_exp}</p>

    <h3>Skills</h3>
    <p contenteditable="true"><b>Skills:</b> ${skills}</p>`;

    // Displaying the generated result
    if (preview) {
        preview.innerHTML = resumeHTML;
    } else {
        console.error('Preview section not found.');
    }
});
