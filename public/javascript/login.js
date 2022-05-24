// Signup form handler
async function signupFormHandler(event) {
    event.preventDefault();

    // user sugnup information from the form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        // check the response status
        if (response.ok) {
            console.log('success')
        } else {
            alert(response.statusText);
        }
    }
}


// Event listener for signup button
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

// login form handler
async function loginFormHandler(event) {
    event.preventDefault();

    // login information from the form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            header: { 'Content-Type': 'application/json'}
        });

        // check the response status
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

// Event listiner for login button
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);