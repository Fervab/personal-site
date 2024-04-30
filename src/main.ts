window.onload = () => {
    const button = document.getElementById('clickButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
};