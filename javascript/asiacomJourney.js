document.addEventListener('DOMContentLoaded', () => {
    const presentationButton = document.getElementById('presentation-button');
    const onJourneyButton = document.getElementById('on-journey');

    const presentationImage = document.getElementById('presentation');
    const carouselElement = document.getElementById('carousel');

    // Function to change text for the 'Presentation' button
    function changeToPresentationText() {
        const title = document.getElementById('big-title');
        const paragraph = document.getElementById('description');

        title.textContent = "Unveiling My Internship Innovations";
        paragraph.textContent = "In this pivotal presentation, I'm thrilled to demonstrate the culmination of my internship experience: a groundbreaking report conversion automation script. Designed to streamline processes for the HR team, this script embodies my commitment to enhancing efficiency and accuracy in the workplace.";
    }

    // Function to change text for the 'On Journey' button
    function changeToOnJourneyText() {
        const title = document.getElementById('big-title');
        const paragraph = document.getElementById('description');

        title.textContent = "Photos On My Journey";
        paragraph.textContent = "Shot with Google Pixel 6";
    }

    presentationButton.addEventListener('click', () => {
        presentationImage.style.display = 'block';
        carouselElement.style.display = 'none';
        changeToPresentationText(); // Call the function to change text
    });

    onJourneyButton.addEventListener('click', () => {
        presentationImage.style.display = 'none';
        carouselElement.style.display = 'block';
        changeToOnJourneyText(); // Call the function to change text

        if (!carouselElement.classList.contains('carousel-initialized')) {
            new bootstrap.Carousel(carouselElement, {
                interval: 2000,
                wrap: true
            });
            carouselElement.classList.add('carousel-initialized');
        }
    });
});
