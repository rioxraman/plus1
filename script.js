
document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', () => {
        const subject = button.parentElement.querySelector('h2').textContent;
        alert(`Thank you for your interest in ${subject}! Visit plus1.elinavara.com for enrollment details.`);
    });
});
