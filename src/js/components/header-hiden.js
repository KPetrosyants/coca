export const useHeaderHiden = () => {
  let lastScroll = 0;
  const defaultOffset = 200;
  const header = document.querySelector('[data-header-hiden]');
  const scrollPosition = () => {
    return document.documentElement.scrollTop;
  };

  const containHide = () => header.dataset.headerHiden;

  window.addEventListener('scroll', () => {
    if (
      scrollPosition() > lastScroll &&
      containHide() &&
      scrollPosition() > defaultOffset
    ) {
      header.dataset.headerHiden = true;
    } else if (scrollPosition() < lastScroll && containHide()) {
      //scroll up
      header.dataset.headerHiden = false;
    }
    lastScroll = scrollPosition();
  });
};
