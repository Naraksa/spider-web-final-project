// ==================
// Typing animation
// ==================
const typingText = document.querySelector(".typing-text");

if (typingText) {
    const typingTextAnimation = document.querySelector(".text-over-video");
    const textToType = typingText.textContent;
    typingTextAnimation.textContent = "";
    const speed = 150;
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typingTextAnimation.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    window.onload = typeWriter;
}

// ==================
// Mobile menu toggle
// ==================
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('nav > ul');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
}


// ==================
// Contact form
// ==================
const contactForm = document.getElementById('contact-form');

if (contactForm) {  // Only runs on contact.html
    const fields = ['name', 'email', 'subject', 'message'];

    const rules = {
        name:    v => v.trim().length < 2  ? 'Please enter your full name' : '',
        email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Enter a valid email address',
        subject: v => v.trim().length < 3  ? 'Subject must be at least 3 characters' : '',
        message: v => v.trim().length < 10 ? 'Message must be at least 10 characters' : ''
    };

    function validate(id) {
        const el  = document.getElementById(id);
        const err = document.getElementById(id + '-err');
        const msg = rules[id](el.value);
        err.textContent = msg ? '⚠ ' + msg : '';
        el.classList.toggle('err', !!msg);
        return !msg;
    }

    fields.forEach(id => {
        const el = document.getElementById(id);
        el.addEventListener('blur', () => validate(id));
        el.addEventListener('input', () => {
            if (el.classList.contains('err')) validate(id);
            if (id === 'message') {
                document.getElementById('char').textContent = el.value.length;
            }
        });
    });

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const allValid = fields.map(validate).every(Boolean);
        if (!allValid) return;

        const btn   = document.getElementById('submit-btn');
        const label = document.getElementById('btn-label');
        btn.disabled = true;
        label.innerHTML = '<span class="spinner"></span> Sending...';

        // Replace with real fetch() when you have a backend
        await new Promise(r => setTimeout(r, 1400));

        document.getElementById('confirm-email').textContent =
            document.getElementById('email').value.trim();

        contactForm.style.display = 'none';
        document.getElementById('success-msg').style.display = 'block';
    });

    document.getElementById('reset-btn').addEventListener('click', function () {
        fields.forEach(id => {
            const el = document.getElementById(id);
            el.value = '';
            el.classList.remove('err');
            document.getElementById(id + '-err').textContent = '';
        });
        document.getElementById('char').textContent = '0';
        document.getElementById('submit-btn').disabled = false;
        document.getElementById('btn-label').textContent = 'Send Message';
        contactForm.style.display = 'flex';
        document.getElementById('success-msg').style.display = 'none';
    });
}