
const noBtn = document.getElementById('no-btn');
const contentBox = document.getElementById('content-box');
const successMsg = document.getElementById('success-msg');

const moveButton = () => {
    // Calculate available space to prevent button from going off-screen
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'fixed'; // Fixed works better for mobile viewport
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
};

// Trigger for both Mouse (Desktop) and Touch (Mobile)
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents the actual "click" on mobile
    moveButton();
});

function celebrate() {
    contentBox.classList.add('d-none');
    successMsg.classList.remove('d-none');
    noBtn.style.display = 'none';
}