// popup.js
document.getElementById('copyColor').addEventListener('click', () => {
    const color = document.getElementById('colorPicker').value;
    navigator.clipboard.writeText(color).then(() => {
        alert('Color code copied to clipboard: ' + color);
    });
});
