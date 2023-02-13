const images = document.querySelectorAll('.image-container');

for (const image of images) {
    image.addEventListener('click', (event) => {
        event.preventDefault();
        const imageElement = image.querySelector('img');
        const detailsElement = image.querySelector('.details');
        imageElement.style.transform = 'translateX(-100%)';
        detailsElement.style.display = 'block';
    });
}
