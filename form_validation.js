const form = document.getElementById('regForm');

function setError(id, message) {
  document.getElementById(id + "Error").textContent = message;
  document.getElementById(id).classList.add("invalid");
}

function clearError(id) {
  document.getElementById(id + "Error").textContent = "";
  document.getElementById(id).classList.remove("invalid");
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  // Username
  const username = document.getElementById('username').value.trim();
  if (username === "") {
    setError("username", "This field is required.");
    valid = false;
  } else if (username.length < 5 || username.length > 12) {
    setError("username", "Username must be 5–12 characters.");
    valid = false;
  } else {
    clearError("username");
  }

  // Password
  const password = document.getElementById('password').value.trim();
  if (password === "") {
    setError("password", "This field is required.");
    valid = false;
  } else if (password.length < 6 || password.length > 16) {
    setError("password", "Password must be 6–16 characters.");
    valid = false;
  } else {
    clearError("password");
  }

  // First Name
  const fname = document.getElementById('fname').value.trim();
  if (fname === "") {
    setError("fname", "This field is required.");
    valid = false;
  } else if (!/^[A-Za-z]+$/.test(fname)) {
    setError("fname", "First name must contain only letters.");
    valid = false;
  } else {
    clearError("fname");
  }

  // Last Name
  const lname = document.getElementById('lname').value.trim();
  if (lname === "") {
    setError("lname", "This field is required.");
    valid = false;
  } else if (!/^[A-Za-z]+$/.test(lname)) {
    setError("lname", "Last name must contain only letters.");
    valid = false;
  } else {
    clearError("lname");
  }

  // Email
  const email = document.getElementById('email').value.trim();
  if (email === "") {
    setError("email", "This field is required.");
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError("email", "Please enter a valid email address.");
    valid = false;
  } else {
    clearError("email");
  }

  // Zip Code
  const zipcode = document.getElementById('zipcode').value.trim();
  if (zipcode === "") {
    setError("zipcode", "This field is required.");
    valid = false;
  } else if (!/^\d+$/.test(zipcode)) {
    setError("zipcode", "ZIP Code must contain only numbers.");
    valid = false;
  } else {
    clearError("zipcode");
  }

  // Country
  const country = document.getElementById('country').value;
  if (country === "") {
    document.getElementById('countryError').textContent = "Please select a country.";
    document.getElementById('country').classList.add("invalid");
    valid = false;
  } else {
    document.getElementById('countryError').textContent = "";
    document.getElementById('country').classList.remove("invalid");
  }

  // Language
  const language = document.querySelector('input[name="language"]:checked');
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
