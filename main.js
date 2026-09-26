/*
    <!--
    CARANTO, CRISIANE JOSEF A.
    MANGALIMAN, ROLAIGNE E.
    VELASCO, AIKEN A.

    CYB 202
    INTROWEB - FINAL REQUIREMENT - MAIN JAVASCRIPT
    -->
*/

/* ============================================
    LOGIN FORM
============================================= */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassBtn = document.getElementById('toggle-pass');
    const googleBtn = document.getElementById('google');
    const canvasBtn = document.getElementById('canvas');
    const canvasOption = document.getElementById('canvas-option');
    const canvasContinue = document.getElementById('canvas-btn');
    const selectUniv = document.getElementById('select-univ');
    const hauLogo = document.getElementById('hau-logo');

    //Student login credentials
    const validUser = "Tolits";
    const validEmail = "linakoTatamarin@gmail.com"
    const validPass = "uno1saiwebpls";
   
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
        
            const enteredValue = emailInput.value.trim();
            const enteredPass = passwordInput.value.trim();

            if ((enteredValue === validUser || enteredValue === validEmail) && enteredPass === validPass) {
                const displayName = (enteredValue === validEmail) ? validUser : enteredValue;
                localStorage.setItem('linaUsername', displayName);
                window.location.href = "home.html";
            }
            else {
                alert("Invalid username/email or password!");
            }
        });
    }

    if (togglePassBtn && passwordInput) {
        togglePassBtn.addEventListener('click', () => {
            const icon = togglePassBtn.querySelector('i');
            const willShow = passwordInput.type === 'password';

            passwordInput.type = willShow ? 'text' : 'password';
            icon.classList.toggle('fa-eye', willShow);
            icon.classList.toggle('fa-eye-slash', !willShow);

            const label = willShow ? 'Hide password' : 'Show password';
          togglePassBtn.setAttribute('aria-label', label);
            togglePassBtn.setAttribute('title', label);
        });
    }

    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            localStorage.setItem('linaUsername', validUser);
            window.location.href = 'home.html';
        });
    }

    if (canvasBtn && canvasOption) {
        canvasBtn.addEventListener('click', () => {
            canvasOption.classList.toggle('canvas-hidden');
            canvasOption.classList.toggle('canvas-visible');
            if (canvasOption.classList.contains('canvas-visible')) {
                canvasOption.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }

    if (canvasContinue) {
        canvasContinue.addEventListener('click', () => {
            if (selectUniv && !selectUniv.value) {
                alert("Please select your university before continuing with Canvas.");
                return;
            }
            localStorage.setItem('linaUsername', validUser);
            window.location.href = 'home.html';
        });
    }

    if (selectUniv && hauLogo) {
        selectUniv.addEventListener('change', () => {
            hauLogo.style.display = selectUniv.value === 'hau' ? 'inline-block' : 'none';
        });
    }

    const usernameDisplay = document.getElementById('username-display');
    const savedUser = localStorage.getItem('linaUsername');

    if (savedUser && usernameDisplay) {
        usernameDisplay.textContent = savedUser;
    }
});



