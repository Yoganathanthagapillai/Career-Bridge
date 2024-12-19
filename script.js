document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        document.getElementById('message').textContent = data.message || "Login successful";
    } catch (err) {
        document.getElementById('message').textContent = "Error logging in";
    }
});

// Example of handling Sign Up and Forgot Password
document.getElementById('signUpLink').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Redirecting to the Sign Up page...");
    // Redirect to sign up page or show a sign-up modal
});

document.getElementById('forgotPasswordLink').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Redirecting to Forgot Password page...");
    // Redirect to forgot password page or show a modal
});

// javascript for signup page

document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.querySelector('input[name="role"]:checked').value;

    // Simple password match validation
    if (password !== confirmPassword) {
        document.getElementById('message').textContent = "Passwords do not match";
        return;
    }

    try {
        const res = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, role })
        });
        const data = await res.json();
        document.getElementById('message').textContent = data.message || "Sign Up successful";
    } catch (err) {
        document.getElementById('message').textContent = "Error during sign up";
    }
});







//signup page
document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    const response = await fetch('/signup', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();

    if (response.ok) {
        alert(result.message);
        window.location.href = 'index.html';
    } else {
        alert(result.error);
    }
});





//login page
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    const response = await fetch('/login', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();

    if (response.ok) {
        alert(result.message);
        window.location.href = 'home.html'; // Redirect to home/dashboard
    } else {
        alert(result.error);
    }
});

