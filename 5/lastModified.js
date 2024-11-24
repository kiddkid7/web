function displayLastModified() {
    const lastModified = document.lastModified;
    const  lastModifiedElement = document.getElementById('last-modified');

    lastModifiedElement.textContent = `网页最后修改时间: ${lastModified}`;
}

displayLastModified();