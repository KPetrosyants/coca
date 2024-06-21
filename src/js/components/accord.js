export const UseAccord = () => {
  const accordList = document.querySelector('.footer__list');
  accordList.addEventListener('click', accordOpener);

  function accordOpener(e) {
    const target = e.target;
    if (!target.closest('.footer__item')) return;

    target.classList.toggle('opened');
    const accordContent = target.querySelector('.footer__sublist');
    if (!target.classList.contains('opened')) {
      accordContent.style.maxHeight = 0 + 'px';
    } else {
      accordContent.style.maxHeight = accordContent.scrollHeight + 'px';
    }
  }
};
