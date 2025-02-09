document.getElementById("downloadBtn").addEventListener("click", handleDownloadBook);

function handleDownloadBook() {
    window.open("https://drive.google.com/uc?export=download&id=1--80DcvoGGZhMbwTnKBdCP7ow5Q6VWDz", "_blank");
}

handleDownloadBook();