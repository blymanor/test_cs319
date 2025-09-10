document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let fname = document.getElementById("fname").value.trim();
  let lname = document.getElementById("lname").value.trim();
  let email = document.getElementById("email").value.trim();
  let zipcode = document.getElementById("zipcode").value.trim();
  let country = document.getElementById("country").value;

  // Username 5-12
  if (username.length < 5 || username.length > 12) {
    document.getElementById("usernameError").textContent = "Username must be 5-12 characters.";
    valid = false;
  }

  // Password 6-16
  if (password.length < 6 || password.length > 16) {
    document.getElementById("passwordError").textContent = "Password must be 6-16 characters.";
    valid = false;
  }

  // First Name alphabet only
  if (!/^[A-Za-z]+$/.test(fname)) {
    document.getElementById("fnameError").textContent = "First name must contain alphabets only.";
    valid = false;
  }

  // Last Name alphabet only
  if (!/^[A-Za-z]+$/.test(lname)) {
    document.getElementById("lnameError").textContent = "Last name must contain alphabets only.";
    valid = false;
  }

  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    valid = false;
  }

  // Country required
  if (!country) {
    document.getElementById("countryError").textContent = "Please select a country.";
    valid = false;
  }

  // ZIP code numeric only
  if (!/^[0-9]+$/.test(zipcode)) {
    document.getElementById("zipcodeError").textContent = "ZIP Code must be numeric only.";
    valid = false;
  }

  // Language required
  if (!document.querySelector('input[name="language"]:checked')) {
    document.getElementById("languageError").textContent = "Please select a language.";
    valid = false;
  }

  // Gender required
  if (!document.querySelector('input[name="gender"]:checked')) {
    document.getElementById("genderError").textContent = "Please select a gender.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    this.submit();
  }
});