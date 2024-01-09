function copyText(id) {
    const textToCopy = document.getElementById(id).textContent;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
        alert('Text copied to clipboard!');
        })
        .catch(err => {
        console.error('Failed to copy text: ', err);
        });
}
