function showStory(storyId) {
    const stories = document.querySelectorAll('article');
    stories.forEach((story) => {
        if (story.id === storyId) {
            story.style.display = 'block';
        } else {
            story.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showStory(link.dataset.story);
        });
    });

    // Show the first story by default
    showStory('story1');
});

