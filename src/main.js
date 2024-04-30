window.onload = function () {
    var button = document.getElementById('clickButton');
    if (button) {
        button.addEventListener('click', function () {
            alert('Button clicked!');
        });
    }
};
