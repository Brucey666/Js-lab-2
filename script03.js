// 🔄 Toggle Dark Mode
function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('modeIcon');
  body.classList.toggle('dark-mode');
  icon.textContent = body.classList.contains('dark-mode') ? '🌙' : '🌞';
}

// 🕒 Clock Function
function startClock() {
  updateTime();
  setInterval(updateTime, 1000);
}

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toDateString();
  document.getElementById('clock').textContent = `${dateString} - ${timeString}`;
}

// 🚀 Wait until the page is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  // Add "User Type" and "Confirm Password" fields dynamically to Sign Up form
  const signupForm = document.querySelector('#signup .styled-form');

  if (signupForm) {
    // Create User Type selector
    const userLabel = document.createElement('label');
    userLabel.setAttribute('for', 'usertype');
    userLabel.textContent = 'User Type';

    const userSelect = document.createElement('select');
    userSelect.id = 'usertype';
    userSelect.required = true;

    const options = ['Student', 'Landlord'];
    options.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt.toLowerCase();
      option.textContent = opt;
      userSelect.appendChild(option);
    });

    // Confirm Password
    const confirmLabel = document.createElement('label');
    confirmLabel.setAttribute('for', 'confirmpassword');
    confirmLabel.textContent = 'Confirm Password';

    const confirmInput = document.createElement('input');
    confirmInput.type = 'password';
    confirmInput.id = 'confirmpassword';
    confirmInput.required = true;

    // Append to form before submit button
    const submitBtn = signupForm.querySelector('button[type="submit"]');
    signupForm.insertBefore(userLabel, submitBtn);
    signupForm.insertBefore(userSelect, submitBtn);
    signupForm.insertBefore(confirmLabel, submitBtn);
    signupForm.insertBefore(confirmInput, submitBtn);
  }

  // ✉️ Handle Booking Form Submission
  const bookForm = document.querySelector('#book .styled-form');
  bookForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const movein = new Date(document.getElementById('movein').value);
    const duration = parseInt(document.getElementById('duration').value);

    const nameValid = /^[A-Za-z\s]+$/.test(fullname);
    const now = new Date();

    if (!nameValid) {
      alert("Full name should only contain letters.");
    } else if (isNaN(movein) || movein < now) {
      alert("Please enter a valid move-in date that is not in the past.");
    } else if (isNaN(duration) || duration < 1 || duration > 12) {
      alert("Duration must be between 1 and 12 months.");
    } else {
      alert("You have successfully booked a bedsitter!");
      bookForm.reset();
    }
  });

  // 🔐 Handle Signup Form Submission
  const signupSubmitForm = document.querySelector('#signup .styled-form');
  signupSubmitForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email2').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;
    const userType = document.getElementById('usertype').value;

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      alert("Password must contain at least 8 characters, uppercase, lowercase, number, and special character.");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      alert(`You have successfully registered as a ${userType.charAt(0).toUpperCase() + userType.slice(1)}!`);
      signupSubmitForm.reset();
    }
  });
});
