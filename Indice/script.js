function toggleFolder(event) {
    const content = event.target.nextElementSibling;
    if (content.classList.contains('show')) {
        content.classList.remove('show');
    } else {
        document.querySelectorAll('.content').forEach(el => el.classList.remove('show'));
        content.classList.add('show');
    }
}

function openDocument(event) {
    event.preventDefault();
    const url = event.target.href;
    document.getElementById('document-viewer').src = url;
}
