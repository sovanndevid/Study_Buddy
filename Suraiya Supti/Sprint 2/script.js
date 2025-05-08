document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dataEntryForm");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let valid = true;
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const dob = document.getElementById("dob").value.trim();
        const category = document.getElementById("category").value;

        if (name === "") {
            alert("Name is required");
            valid = false;
        }
        if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
            alert("Enter a valid email address");
            valid = false;
        }
        if (!phone.match(/^\d{10}$/)) {
            alert("Enter a valid 10-digit phone number");
            valid = false;
        }
        if (dob === "") {
            alert("Please select your date of birth");
            valid = false;
        }
        if (category === "") {
            alert("Please select a category");
            valid = false;
        }

        if (valid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });
});
