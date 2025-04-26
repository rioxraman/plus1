
document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', () => {
        const subject = button.parentElement.querySelector('h2').textContent;
        alert(`Thank you for your interest in ${subject}! Visit plus1.elinavara.com for enrollment details.`);
    });
});

// Popup functionality
setTimeout(() => {
    document.getElementById('discount-popup').style.display = 'block';
}, 3000);

// document.querySelector('.close-btn').addEventListener('click', () => {
//     document.getElementById('discount-popup').style.display = 'none';
// });

// document.querySelector('.close-now-btn').addEventListener('click', () => {
//     document.getElementById('discount-popup').style.display = 'none';
// });

document.querySelector('.contact-btn').addEventListener('click', () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=919056230369&text=i%20am%20a%20plus1%20%student';
});
document.querySelector('.close-now-btn').addEventListener('click', () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=919056230369&text=i%20am%20a%20plus1%20%student';
});
document.querySelector('.close-btn').addEventListener('click', () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=919056230369&text=i%20am%20a%20plus1%20%student';
});
