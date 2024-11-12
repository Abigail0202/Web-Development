document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
  
    const errors = {
      nameError: "Name must be at least 10 characters",
      emailError: "Enter a valid email with '@'",
      phoneError: "Phone number must be a 10-digit number",
      passwordError: "Password must be at least 8 characters and cannot be 'password' or your name",
      confirmPasswordError: "Passwords do not match"
    };
  
    function validateForm() {
      let isValid = true;
  
      // Full Name Validation
      if (fullName.value.length < 5) {
        showError("nameError", errors.nameError);
        isValid = false;
      } else {
        clearError("nameError");
      }
  
      // Email Validation
      if (!email.value.includes("@")) {
        showError("emailError", errors.emailError);
        isValid = false;
      } else {
        clearError("emailError");
      }
  
      // Phone Number Validation
      if (phone.value.length !== 10 || phone.value === "1234567890") {
        showError("phoneError", errors.phoneError);
        isValid = false;
      } else {
        clearError("phoneError");
      }
  
      // Password Validation
      if (password.value.length < 8 || password.value.toLowerCase() === "password" || password.value === fullName.value) {
        showError("passwordError", errors.passwordError);
        isValid = false;
      } else {
        clearError("passwordError");
      }
  
      // Confirm Password Validation
      if (password.value !== confirmPassword.value) {
        showError("confirmPasswordError", errors.confirmPasswordError);
        isValid = false;
      } else {
        clearError("confirmPasswordError");
      }
  
      return isValid;
    }
  
    function showError(id, message) {
      document.getElementById(id).innerText = message;
    }
  
    function clearError(id) {
      document.getElementById(id).innerText = "";
    }
  
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateForm()) {
        alert("Your application is submitted!");
        signupForm.reset();
      }
    });
  
    togglePassword.addEventListener("click", () => {
      password.type = password.type === "password" ? "text" : "password";
      togglePassword.classList.toggle("fa-eye");
      togglePassword.classList.toggle("fa-eye-slash");
    });
  
    toggleConfirmPassword.addEventListener("click", () => {
      confirmPassword.type = confirmPassword.type === "password" ? "text" : "password";
      toggleConfirmPassword.classList.toggle("fa-eye");
      toggleConfirmPassword.classList.toggle("fa-eye-slash");
    });
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("signupForm");
        const humanCheck = document.getElementById("humanCheck");
        const humanError = document.getElementById("humanError");
      
        form.addEventListener("submit", (event) => {
          // Reset error message
          humanError.textContent = "";
      
          // Check if "I'm not a robot" is checked
          if (!humanCheck.checked) {
            event.preventDefault(); // Prevent form submission
            humanError.textContent = "Please confirm you're not a robot.";
          }
        });
      
        // Your existing password toggle logic
        const passwordField = document.getElementById('password');
        const confirmPasswordField = document.getElementById('confirmPassword');
        const togglePassword = document.getElementById('togglePassword');
        const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
      
        togglePassword.addEventListener('click', () => {
          const type = passwordField.type === 'password' ? 'text' : 'password';
          passwordField.type = type;
          togglePassword.classList.toggle('fa-eye');
          togglePassword.classList.toggle('fa-eye-slash');
        });
      
        toggleConfirmPassword.addEventListener('click', () => {
          const type = confirmPasswordField.type === 'password' ? 'text' : 'password';
          confirmPasswordField.type = type;
          toggleConfirmPassword.classList.toggle('fa-eye');
          toggleConfirmPassword.classList.toggle('fa-eye-slash');
        });
      });
      
  });
  