export const useTabs = () => {
  const tabs = document.querySelector('.about__tabs');
  const slides = document.querySelectorAll('[data-category]');
  const tabsButton = document.querySelector('.about__slider-button');

  tabs.addEventListener('click', useTabsHandler);

  function useTabsHandler(e) {
    const target = e.target;
    if (!target.closest('.tabs__link')) return;

    const tabsChildren = tabs.querySelectorAll('.tabs__tab');
    const activetedTab = target.closest('.tabs__tab');
    const activetedTabLink = activetedTab.querySelector('.tabs__link');
    const activetedTaLinkbAttribute = activetedTabLink.getAttribute('href');

    tabsChildren.forEach((tab) => {
      tab.classList.remove('tabs__tab--active');
    });
    activetedTab.classList.add('tabs__tab--active');

    useSlidersSortCategory(activetedTaLinkbAttribute);
    useHidenButton();
  }

  function useSlidersSortCategory(href) {
    const categoryName = href.slice(1);

    if (categoryName == 'all') {
      slides.forEach((slide) => {
        slide.dataset.slideHiden = false;
      });
      return;
    }

    slides.forEach((slide) => {
      slide.dataset.slideHiden = false;
    });
    slides.forEach((slide) => {
      if (slide.dataset.category != categoryName) {
        slide.dataset.slideHiden = true;
      }
    });
  }
  function useHidenButton() {
    let activeSlidesCount = 0;
    slides.forEach((slide) => {
      if (slide.closest('[data-slide-hiden=true]')) return;
      activeSlidesCount += 1;
    });

    if (activeSlidesCount < 4) {
      tabsButton.classList.add('button--hiden');
    } else {
      tabsButton.classList.remove('button--hiden');
    }
  }
};
