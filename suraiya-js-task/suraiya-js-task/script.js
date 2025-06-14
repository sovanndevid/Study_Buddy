// Wait for the form to be submitted
document.getElementById("lookupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page refresh

  const name = document.getElementById("nameInput").value.toLowerCase();

  // Load data from people.json
  fetch("people.json")
    .then(response => response.json())
    .then(data => {
      const person = data.find(p => p.name.toLowerCase() === name);

      const resultDiv = document.getElementById("result");
      if (person) {
        resultDiv.innerHTML = `
          <p><strong>Name:</strong> ${person.name}</p>
          <p><strong>Age:</strong> ${person.age}</p>
          <p><strong>Job:</strong> ${person.job}</p>
        `;
      } else {
        resultDiv.innerHTML = `<p>No person found.</p>`;
      }
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
    });
});
