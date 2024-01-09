function copyText(id) {
    const textToCopy = document.getElementById(id).textContent;
    const statusBar = document.getElementById('status-bar');

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // Update status bar content
            statusBar.textContent = 'Copied';
            // Show the status bar
            statusBar.style.opacity = 1;

            // Hide the status bar after a short delay (e.g., 2000 milliseconds = 2 seconds)
            setTimeout(() => {
                statusBar.style.opacity = 0;
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}
