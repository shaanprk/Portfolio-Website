// pdf button toggle
document.getElementById('resume-button').addEventListener('click', function() {
    var pdfContainer = document.getElementById('pdf-container');
    if (pdfContainer.style.display === 'none' || pdfContainer.style.display === '') {
        pdfContainer.style.display = 'block';
    } else {
        pdfContainer.style.display = 'none';
    }
});

// spotify API data
