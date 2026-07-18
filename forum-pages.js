const menuButton = document.querySelector('#menuToggle');
const navigation = document.querySelector('#mainNavigation');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});

navigation?.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  }
});

const languageButton = document.querySelector('#languageToggle');
const translatable = [...document.querySelectorAll('[data-ar]')];
const originalText = new Map(translatable.map((element) => [element, element.textContent]));
let language = 'en';

languageButton?.addEventListener('click', () => {
  language = language === 'en' ? 'ar' : 'en';
  document.documentElement.lang = language;
  document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  translatable.forEach((element) => {
    element.textContent = language === 'ar' ? element.dataset.ar : originalText.get(element);
  });
  languageButton.textContent = language === 'ar' ? 'EN' : 'العربية';
});

const submissionToggle = document.querySelector('#submissionToggle');
const submissionPanel = document.querySelector('#submissionPanel');
submissionToggle?.addEventListener('click', () => {
  const open = submissionPanel.classList.toggle('open');
  submissionToggle.setAttribute('aria-expanded', String(open));
  submissionPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('#projectSubmission')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('[type="submit"]');
  button.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Draft saved';
  button.disabled = true;
});

const projectSearch = document.querySelector('#projectSearch');
const regionFilter = document.querySelector('#regionFilter');
const themeFilter = document.querySelector('#themeFilter');
const projectCards = [...document.querySelectorAll('.project-card')];
const resultCount = document.querySelector('#resultsCount');
const emptyState = document.querySelector('#emptyState');

function filterProjects() {
  const query = projectSearch?.value.trim().toLowerCase() || '';
  const region = regionFilter?.value || 'all';
  const theme = themeFilter?.value || 'all';
  let visible = 0;
  projectCards.forEach((card) => {
    const matchesQuery = card.textContent.toLowerCase().includes(query);
    const matchesRegion = region === 'all' || card.dataset.region === region;
    const matchesTheme = theme === 'all' || card.dataset.theme === theme;
    const show = matchesQuery && matchesRegion && matchesTheme;
    card.hidden = !show;
    if (show) visible += 1;
  });
  if (resultCount) resultCount.textContent = `${visible} standardized project summaries`;
  if (emptyState) emptyState.style.display = visible ? 'none' : 'block';
}

[projectSearch, regionFilter, themeFilter].forEach((control) => control?.addEventListener('input', filterProjects));

const newsTabs = [...document.querySelectorAll('.filter-tab')];
const newsCards = [...document.querySelectorAll('[data-news-category]')];
newsTabs.forEach((tab) => tab.addEventListener('click', () => {
  newsTabs.forEach((item) => item.classList.remove('active'));
  tab.classList.add('active');
  const category = tab.dataset.category;
  newsCards.forEach((card) => { card.hidden = category !== 'all' && card.dataset.newsCategory !== category; });
}));

document.querySelectorAll('.subscribe').forEach((form) => form.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = '✓';
  button.setAttribute('aria-label', 'Subscribed');
}));
