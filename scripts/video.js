const container = document.querySelector('.video');
const thumbnail = container.querySelector('.video__thumbnail');
const button = container.querySelector('.video__playback-button');
const template = container.querySelector('.video__iframe-template');
const iframeSelector = '.video__iframe';
const videoParams = '?autoplay=1';
const link = thumbnail.dataset.videolink;

button.addEventListener('click', () => {
  const iframe = template.content.querySelector(iframeSelector).cloneNode(true);
  iframe.src = link + videoParams;
  thumbnail.remove();
  button.remove();
  container.append(iframe);
});
