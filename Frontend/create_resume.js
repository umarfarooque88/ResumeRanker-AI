document.addEventListener('DOMContentLoaded', function() {
    const resumeForm = document.getElementById('resume-form'); // Ensure this ID exists in your HTML
    const generateButton = resumeForm.querySelector('button[type="submit"]');  // Or get the button by ID


    generateButton.addEventListener('click', function(event) {
        event.preventDefault();

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // User is logged in
                const formData = new FormData(resumeForm);

                fetch('/generate_resume', {  // Your Flask backend endpoint
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {

                    // Display the generated resume in the preview area (adapt as needed)
                    document.getElementById('resume-preview').innerHTML = data.resume_html; 

                    // Optionally, hide the form and show the preview:
                    resumeForm.style.display = 'none';
                    document.getElementById('resume-preview').style.display = 'block'; // Assuming you have a preview div


                })
                .catch(error => {

                    console.error("Error:", error);
                    // Display appropriate error message to the user
                });



            } else {
                // User is not logged in, redirect to login page
                window.location.href = 'login_signup.html'; // Correct file name
            }
        });
    });
});
