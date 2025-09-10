const form = document.getElementById('regForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  // Username
  const username = document.getElementById('username').value.trim();
  if (username.length < 5 || username.length > 12) {
    document.getElementById('usernameError').textContent = "Username must be 5–12 characters.";
    valid = false;
  } else {
    document.getElementById('usernameError').textContent = "";
  }

  // Password
  const password = document.getElementById('password').value.trim();
  if (password.length < 6 || password.length > 16) {
    document.getElementById('passwordError').textContent = "Password must be 6–16 characters.";
    valid = false;
  } else {
    document.getElementById('passwordError').textContent = "";
  }

  // First Name
  const fname = document.getElementById('fname').value.trim();
  if (!/^[A-Za-z]+$/.test(fname)) {
    document.getElementById('fnameError').textContent = "First name must contain only letters.";
    valid = false;
  } else {
    document.getElementById('fnameError').textContent = "";
  }

  // Last Name
  const lname = document.getElementById('lname').value.trim();
  if (!/^[A-Za-z]+$/.test(lname)) {
    document.getElementById('lnameError').textContent = "Last name must contain only letters.";
    valid = false;
  } else {
    document.getElementById('lnameError').textContent = "";
  }

  // Email
  const email = document.getElementById('email').value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById('emailError').textContent = "";
  }

  // Zip Code
  const zipcode = document.getElementById('zipcode').value.trim();
  if (!/^\d+$/.test(zipcode)) {
    document.getElementById('zipcodeError').textContent = "Zip Code must be numbers only.";
    valid = false;
  } else {
    document.getElementById('zipcodeError').textContent = "";
  }

  // Country
  const country = document.getElementById('country').value;
  if (country === "") {
    document.getElementById('countryError').textContent = "Please select a country.";
    valid = false;
  } else {
    document.getElementById('countryError').textContent = "";
  }

  // Language
  const language = document.getElementById('language').value;
  if (language === "") {
    document.getElementById('languageError').textContent = "Please select a language.";
    valid = false;
  } else {
    document.getElementById('languageError').textContent = "";
  }

  // Gender
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    document.getElementById('genderError').textContent = "Please select your gender.";
    valid = false;
  } else {
    document.getElementById('genderError').textContent = "";
  }

  if (valid) {
    alert("Registration successful!");
    form.reset();
  }
});
