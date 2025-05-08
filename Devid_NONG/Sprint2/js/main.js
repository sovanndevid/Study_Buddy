document.addEventListener('DOMContentLoaded', () => {
    const facilities = document.querySelectorAll('.facility-rating');
  
    facilities.forEach(facility => {
      const checkbox = facility.querySelector('input[type="checkbox"]');
      const select = facility.querySelector('select');
  
      checkbox.addEventListener('change', () => {
        select.disabled = !checkbox.checked;
      });
  
      // Optional: disable by default
      select.disabled = !checkbox.checked;
    });
  
    // Submit Form Validation
    document.getElementById('gymReviewForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const visitFrequency = document.getElementById('visitFrequency').value;
      const facilitiesChecked = document.querySelectorAll('.facility-rating input[type="checkbox"]:checked');
      const feedback = document.getElementById('feedback').value;
  
      // Form validation
      if (!name || !email || !visitFrequency || facilitiesChecked.length === 0) {
        alert("Please fill in all required fields (Name, Email, Visit Frequency, and at least one facility rating).");
        return;
      }
  
      const formData = {
        name: name.trim(),
        email: email.trim(),
        visitFrequency: visitFrequency.trim(),
        facilities: Array.from(facilitiesChecked).map(checkbox => checkbox.value),
        feedback: feedback.trim()
      };
  
      // Update year automatically
      document.getElementById('currentYear').textContent = new Date().getFullYear();
  
      // ======= Back-end send data section DISABLED below =======
      /*
      fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.text())
      .then(data => {
        alert(data);
        document.getElementById('gymReviewForm').reset();
      })
      .catch(error => {
        alert('Error submitting form: ' + error);
      });
      */
  
      // ✅ Show Thank You message and reload the page
      alert("✅ Thank you for your response!");
      location.reload();
    });
  });
  