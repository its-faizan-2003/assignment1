document.getElementById("jobApplicationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      processFormData();
    }
  });
  
  function validateForm() {
    var form = document.getElementById("jobApplicationForm");
    var isValid = form.checkValidity();
    if (!isValid) {
      alert("Please fill out all required fields correctly.");
    }
    return isValid;
  }
  
  function processFormData() {
    var formData = new FormData(document.getElementById("jobApplicationForm"));
    var data = {};
    for (var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    console.log("Submitted Application Data:", data);
  }
  
  // Function to display applications as table (iski abhi practice ni hai i am learning)
  function displayApplicationsAsTable() {
    
  <button onclick="displayApplicationsAsTable()">View Applications as Table</button>
  }