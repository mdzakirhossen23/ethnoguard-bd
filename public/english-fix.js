(() => {
  const english = new Map(
    [...document.querySelectorAll('[data-i18n]')].map((node) => [node.dataset.i18n, node.innerHTML])
  );

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.language');
    if (!button || button.dataset.lang !== 'en') return;

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const value = english.get(node.dataset.i18n);
      if (value !== undefined) node.innerHTML = value;
    });

    const search = document.querySelector('#searchInput');
    if (search) search.placeholder = 'Search name, scientific name or traditional use…';
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  });
})();

