if (document.readyState != 'loading') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

function bootstrap() {
  const stories = document.querySelectorAll('article');
  for (const story of stories) {
    const url = story.getAttribute('data-url');
    story.addEventListener('click', () => (document.location = url));
  }
}
