export const useTabs = () => {
  const tabs = document.querySelector('.about__tabs');
  const slides = document.querySelectorAll('[data-category]');

  tabs.addEventListener('click', tabsHandler);

  function tabsHandler(e) {
    const target = e.target;
    const tabsChildren = tabs.children;
    if (!target.closest('.tabs__link')) return;
    console.log(tabsChildren);

    tabsChildren.map((tab) => {
      tab.classList.remove('tabs__tab--active');
    });
    let activetedTab = target.closest('.tabs__tab');
    console.log(activetedTab);

    activetedTab.classList.add('tabs__tab--active');
  }
};
