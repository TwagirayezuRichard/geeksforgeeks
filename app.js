const siteHeader = document.querySelector('.site-header');
const siteFooter = document.querySelector('body > footer');

if (siteHeader && !siteHeader.querySelector('#courses-menu')) {
  siteHeader.innerHTML = `
    <div class="header-main">
      <button class="menu-button" type="button" aria-label="Menu" aria-expanded="false">☰</button>
      <a class="logo" href="index.html" aria-label="GeeksforGeeks home"><img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GeeksforGeeks"></a>
      <div class="search">
        <input type="search" placeholder="Search for articles, tutorials, courses, and more...">
        <button type="button" aria-label="Search">⌕</button>
        <div class="search-status" role="status"></div>
      </div>
      <nav class="main-nav" aria-label="Main navigation">
        <div class="nav-dropdown">
          <button class="nav-trigger" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="courses-menu">Courses</button>
          <ul class="nav-menu" id="courses-menu">
            <li><a href="courses.html">DSA / Placements</a></li>
            <li><a href="courses.html">DA / Data Science &amp; AI</a></li>
            <li><a href="courses.html">Development</a></li>
            <li><a href="courses.html">DevOps Course</a></li>
            <li><a href="courses.html">All Courses</a></li>
          </ul>
        </div>
        <div class="nav-dropdown">
          <button class="nav-trigger" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="tutorials-menu">Tutorials</button>
          <ul class="nav-menu" id="tutorials-menu">
            <li><a href="topics.html#dsa">Data Structures and Algorithms</a></li>
            <li><a href="topics.html#languages">Programming Languages</a></li>
            <li><a href="topics.html#web-development">Web Development</a></li>
            <li><a href="topics.html#ai-ml">AI, ML &amp; Data Science</a></li>
          </ul>
        </div>
        <div class="nav-dropdown">
          <button class="nav-trigger" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="interview-menu">Interview Prep</button>
          <ul class="nav-menu" id="interview-menu">
            <li><a href="practice.html">Interview Corner</a></li>
            <li><a href="practice.html">GfG 160</a></li>
            <li><a href="practice.html">System Design</a></li>
            <li><a href="practice.html">Aptitude</a></li>
          </ul>
        </div>
      </nav>
      <button class="theme-toggle" type="button" aria-label="Toggle theme"></button>
      <a class="sign-in login-trigger" href="signup.html">Sign In</a>
    </div>
    <nav class="topic-nav" aria-label="Topics">
      <ul>
        <li class="active"><a href="topics.html#dsa">DSA</a></li>
        <li><a href="practice.html">Practice Problems</a></li>
        <li><a href="topics.html#languages">C</a></li>
        <li><a href="topics.html#languages">C++</a></li>
        <li><a href="topics.html#languages">Java</a></li>
        <li><a href="topics.html#languages">Python</a></li>
        <li><a href="topics.html#web-development">JavaScript</a></li>
        <li><a href="topics.html#ai-ml">Data Science</a></li>
        <li><a href="topics.html#ai-ml">Machine Learning</a></li>
        <li><a href="courses.html">Courses</a></li>
      </ul>
    </nav>`;
}

if (siteFooter && !siteFooter.querySelector('.footer-brand')) {
  siteFooter.innerHTML = `
    <div class="footer-grid">
      <div>
        <div class="footer-brand">∞ <span>GeeksforGeeks</span></div>
        <div class="address"><strong>⌖ Corporate &amp; Communications Address:</strong>A-143, 6th Floor, Sovereign Corporate Tower, Sector- 136, Noida, Uttar Pradesh (201305)</div>
        <div class="address"><strong>⌖ Registered Address:</strong>K 061, Tower K, Gulshan Vivante Apartment, Sector 137, Noida, Gautam Buddh Nagar, Uttar Pradesh, 201305</div>
        <div class="social-links"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="X">X</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="YouTube">▶</a></div>
        <div class="app-links"><a href="#">▶ Get it on<br>Google Play</a><a href="#"> Download on the<br>App Store</a></div>
      </div>
      <div><h3>Company</h3><ul><li>About Us</li><li>Legal</li><li>Privacy Policy</li><li>Contact Us</li><li>Advertise with us</li><li>GFG Corporate Solution</li><li>Campus Training Program</li></ul></div>
      <div><h3>Explore</h3><ul><li>POTD</li><li>Job-A-Thon</li><li>Blogs</li><li>Nation Skill Up</li></ul></div>
      <div><h3>Tutorials</h3><ul><li>Programming Languages</li><li>DSA</li><li>Web Technology</li><li>AI, ML &amp; Data Science</li><li>DevOps</li><li>CS Core Subjects</li><li>Interview Preparation</li><li>Software and Tools</li></ul></div>
      <div><h3>Courses</h3><ul><li>ML and Data Science</li><li>DSA and Placements</li><li>Web Development</li><li>Programming Languages</li><li>DevOps &amp; Cloud</li><li>GATE</li><li>Trending Technologies</li></ul></div>
      <div><h3>Videos</h3><ul><li>DSA</li><li>Python</li><li>Java</li><li>C++</li><li>Web Development</li><li>Data Science</li><li>CS Subjects</li></ul><h3>Preparation Corner</h3><ul><li>Interview Corner</li><li>Aptitude</li><li>Puzzles</li><li>GfG 160</li><li>System Design</li></ul></div>
    </div>
    <div class="copyright">@GeeksforGeeks, Sanchhaya Education Private Limited, All rights reserved</div>`;
}

if (!document.querySelector('#login-overlay')) {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="login-overlay" id="login-overlay" hidden>
      <section class="login-dialog" role="dialog" aria-modal="true" aria-labelledby="login-title" aria-describedby="login-intro">
        <button class="login-close" type="button" aria-label="Close sign-in dialog">&times;</button>
        <h2 id="login-title">Log in</h2>
        <p class="login-intro" id="login-intro">New user? <a href="signup.html">Register Now</a></p>
        <button class="login-google" type="button"><span class="google-mark" aria-hidden="true">G</span>Continue with Google</button>
        <div class="login-social" aria-label="More sign-in options">
          <button type="button" data-login-provider="Facebook" aria-label="Continue with Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877F2" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.3c0-3 1.8-4.7 4.5-4.7 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12H17l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12Z"/></svg>
          </button>
          <button type="button" data-login-provider="LinkedIn" aria-label="Continue with LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#0A66C2" d="M20.4 3H3.6C3.3 3 3 3.3 3 3.6v16.8c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6V3.6c0-.3-.3-.6-.6-.6ZM8.3 18H5.4V9.2h2.9V18ZM6.9 8a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM18 18h-2.9v-4.3c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.1V18H9.2V9.2H12v1.2h.1a3 3 0 0 1 2.7-1.5c2.9 0 3.4 1.9 3.4 4.3V18Z"/></svg>
          </button>
          <button type="button" data-login-provider="GitHub" aria-label="Continue with GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#24292f" d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.8-5.5 6.1.4.3.8 1 .8 2v3.9c0 .4.2.7.8.6A11.1 11.1 0 0 0 12 .9Z"/></svg>
          </button>
          <button type="button" data-login-provider="Microsoft" aria-label="Continue with Microsoft">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#f35325" d="M2 2h9v9H2z"/><path fill="#81bc06" d="M13 2h9v9h-9z"/><path fill="#05a6f0" d="M2 13h9v9H2z"/><path fill="#ffba08" d="M13 13h9v9h-9z"/></svg>
          </button>
        </div>
        <div class="login-divider"><span>or</span></div>
        <form class="login-form">
          <label class="login-field">Username or Email<input name="email" type="text" autocomplete="username" required placeholder="Username or Email"></label>
          <label class="login-field">Password<span class="login-password"><input name="password" type="password" autocomplete="current-password" required placeholder="Enter password"><button class="login-password-toggle" type="button" aria-label="Show password" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5c-5.2 0-9.4 4.3-10.8 6.4a1 1 0 0 0 0 1.2C2.6 14.7 6.8 19 12 19s9.4-4.3 10.8-6.4a1 1 0 0 0 0-1.2C21.4 9.3 17.2 5 12 5Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/><circle cx="12" cy="12" r="2"/></svg><span class="password-eye-slash" aria-hidden="true"></span></button></span></label>
          <div class="login-help"><a class="login-forgot" href="#">Forgot password</a></div>
          <button class="login-submit" type="submit">Sign In</button>
          <p class="login-status" role="status" aria-live="polite"></p>
        </form>
      </section>
    </div>`);
}

const themeToggle = document.querySelector('.theme-toggle');
const themePreferenceKey = 'geeksforgeeks-theme';
let activeTheme = 'light';

try {
  const savedTheme = window.localStorage.getItem(themePreferenceKey);
  if (savedTheme === 'dark' || savedTheme === 'light') activeTheme = savedTheme;
} catch (error) {
  console.error('Unable to read the saved theme preference.', error);
}

function applyTheme(theme) {
  activeTheme = theme;
  document.documentElement.dataset.theme = theme;
  themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  themeToggle?.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

applyTheme(activeTheme);

themeToggle?.addEventListener('click', () => {
  const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  try {
    window.localStorage.setItem(themePreferenceKey, nextTheme);
  } catch (error) {
    console.error('Unable to save the theme preference.', error);
  }
});

const searchableCards = [...document.querySelectorAll('[data-topic], [data-course], [data-challenge], .topic-card')];
const topicCards = [...document.querySelectorAll('[data-topic]')];
const moreButton = document.querySelector('.topics-more');
const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const searchStatus = document.querySelector('.search-status');
const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');
const subscribeButton = document.querySelector('.newsletter button');
const emailInput = document.querySelector('.newsletter input');
const toast = document.querySelector('.toast');
const navDropdowns = [...document.querySelectorAll('.nav-dropdown')];

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('visible'), 2800);
}

navDropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector('.nav-trigger');
  let isHovering = false;
  const setOpen = (isOpen) => {
    dropdown.classList.toggle('open', isOpen);
    trigger?.setAttribute('aria-expanded', String(isOpen));
  };
  trigger?.addEventListener('click', (event) => {
    event.stopPropagation();
    const shouldOpen = isHovering || !dropdown.classList.contains('open');
    navDropdowns.forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
    });
    setOpen(shouldOpen);
  });
  dropdown.addEventListener('pointerenter', () => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      isHovering = true;
      navDropdowns.forEach((item) => {
        item.classList.remove('open');
        item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
      });
      setOpen(true);
    }
  });
  dropdown.addEventListener('pointerleave', () => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      isHovering = false;
      if (!dropdown.contains(document.activeElement)) setOpen(false);
    }
  });
});

document.addEventListener('click', () => {
  navDropdowns.forEach((dropdown) => {
    dropdown.classList.remove('open');
    dropdown.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    navDropdowns.forEach((dropdown) => {
      dropdown.classList.remove('open');
      dropdown.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
    });
  }
});

function updateSearch(query) {
  const normalizedQuery = query.trim().toLowerCase();
  const cards = searchableCards;
  if (!normalizedQuery) {
    cards.forEach((card, index) => card.classList.toggle('is-hidden', Boolean(moreButton) && index > 5 && !moreButton?.dataset.expanded));
    if (searchStatus) searchStatus.classList.remove('visible');
    return;
  }

  let matches = 0;
  cards.forEach((card) => {
    const searchableText = `${card.dataset.topic || ''} ${card.dataset.course || ''} ${card.dataset.challenge || ''} ${card.textContent}`.toLowerCase();
    const isMatch = searchableText.includes(normalizedQuery);
    card.classList.toggle('is-hidden', !isMatch);
    if (isMatch) matches += 1;
  });

  if (searchStatus) {
    searchStatus.textContent = matches ? `${matches} result${matches === 1 ? '' : 's'} found for "${query}".` : `No results found for "${query}". Try Python, web, or design.`;
    searchStatus.classList.add('visible');
  }
}

searchInput?.addEventListener('input', (event) => updateSearch(event.target.value));
searchButton?.addEventListener('click', () => {
  updateSearch(searchInput?.value || '');
  searchInput?.focus();
});
searchInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    updateSearch(searchInput.value);
  }
});

moreButton?.addEventListener('click', () => {
  const isExpanded = moreButton.dataset.expanded === 'true';
  moreButton.dataset.expanded = String(!isExpanded);
  moreButton.setAttribute('aria-expanded', String(!isExpanded));
  topicCards.forEach((card, index) => {
    if (index > 5) card.classList.toggle('is-hidden', isExpanded);
  });
  moreButton.textContent = isExpanded ? 'View 6 more topics' : 'Show fewer topics';
});

function applyFilters(items, filters) {
  items.forEach((item) => {
    const matches = filters.every(({ value, attribute }) => value === 'all' || item.dataset[attribute]?.includes(value));
    item.classList.toggle('is-hidden', !matches);
  });
}

const courseCards = [...document.querySelectorAll('[data-course]')];
const courseFilter = document.querySelector('.course-filter');
const levelFilter = document.querySelector('.level-filter');
function filterCourses() {
  applyFilters(courseCards, [
    { value: courseFilter?.value || 'all', attribute: 'course' },
    { value: levelFilter?.value || 'all', attribute: 'course' }
  ]);
}
courseFilter?.addEventListener('change', filterCourses);
levelFilter?.addEventListener('change', filterCourses);

const challengeCards = [...document.querySelectorAll('[data-challenge]')];
const challengeFilter = document.querySelector('.challenge-filter');
const difficultyFilter = document.querySelector('.difficulty-filter');
function filterChallenges() {
  applyFilters(challengeCards, [
    { value: challengeFilter?.value || 'all', attribute: 'challenge' },
    { value: difficultyFilter?.value || 'all', attribute: 'challenge' }
  ]);
}
challengeFilter?.addEventListener('change', filterChallenges);
difficultyFilter?.addEventListener('change', filterChallenges);

menuButton?.addEventListener('click', () => {
  const isOpen = mainNav?.classList.toggle('mobile-open');
  menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

subscribeButton?.addEventListener('click', () => {
  const email = emailInput?.value.trim() || '';
  if (!email || !email.includes('@')) {
    showToast('Enter a valid email address to subscribe.');
    emailInput?.focus();
    return;
  }
  showToast('You are subscribed to the CodeHub newsletter.');
  if (emailInput) emailInput.value = '';
});

document.querySelector('.hero-action')?.addEventListener('click', () => {
  document.querySelector('#topics')?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.price').forEach((button) => {
  button.addEventListener('click', () => showToast('Course preview coming soon.'));
});

document.querySelectorAll('.course-action').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const courseCard = button.closest('.course-card');
    const destination = courseCard?.getAttribute('href');
    if (destination) window.location.href = destination;
  });
});

document.querySelectorAll('.start-challenge').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const challenge = button.closest('.challenge');
    const challengeId = challenge?.dataset.challengeId;
    if (challengeId) window.location.href = `challenge.html?challenge=${challengeId}`;
  });
});

const loginOverlay = document.querySelector('#login-overlay');
const loginDialog = loginOverlay?.querySelector('.login-dialog');
const loginForm = loginOverlay?.querySelector('.login-form');
const loginStatus = loginOverlay?.querySelector('.login-status');
let loginOpener;

function closeLoginDialog() {
  if (!loginOverlay || loginOverlay.hidden) return;
  loginOverlay.hidden = true;
  loginOpener?.focus();
}

document.querySelectorAll('.login-trigger').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    if (!loginOverlay) return;
    event.preventDefault();
    loginOpener = trigger;
    loginOverlay.hidden = false;
    loginDialog?.querySelector('input')?.focus();
  });
});

loginOverlay?.querySelector('.login-close')?.addEventListener('click', closeLoginDialog);
loginOverlay?.addEventListener('click', (event) => {
  if (event.target === loginOverlay) closeLoginDialog();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLoginDialog();
});
loginOverlay?.querySelector('.login-google')?.addEventListener('click', () => {
  if (loginStatus) loginStatus.textContent = 'Google sign-in is not connected in this demo.';
});
loginOverlay?.querySelector('.login-password-toggle')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const password = loginOverlay.querySelector('input[name="password"]');
  if (!password) return;
  const shouldShow = password.type === 'password';
  password.type = shouldShow ? 'text' : 'password';
  button.setAttribute('aria-pressed', String(shouldShow));
  button.setAttribute('aria-label', shouldShow ? 'Hide password' : 'Show password');
  button.classList.toggle('is-visible', shouldShow);
});
loginOverlay?.querySelector('.login-forgot')?.addEventListener('click', (event) => {
  event.preventDefault();
  if (loginStatus) loginStatus.textContent = 'Password recovery is not connected in this demo.';
});
loginOverlay?.querySelectorAll('[data-login-provider]').forEach((button) => {
  button.addEventListener('click', () => {
    const provider = button.dataset.loginProvider;
    if (loginStatus && provider) loginStatus.textContent = `${provider} sign-in is not connected in this demo.`;
  });
});
loginForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (loginStatus) loginStatus.textContent = 'This demo sign-in form is not connected to an account service.';
});

const lessonPage = document.querySelector('.lesson-layout');
if (lessonPage) {
  const lessonData = {
    dsa: { title: 'Data Structures & Algorithms', eyebrow: 'DSA learning path', intro: 'Build the patterns behind efficient, reliable problem solving.', description: 'Start with arrays and complexity, then move through trees, graphs, and reusable interview patterns.', modules: ['Arrays and complexity', 'Stacks, queues, and trees', 'Graphs and dynamic programming'], example: 'A strong solution starts by choosing the right structure before writing the loop.', code: 'const numbers = [3, 1, 4];\nconst sorted = [...numbers].sort((a, b) => a - b);', video: 'https://www.youtube.com/results?search_query=data+structures+algorithms+tutorial' },
    web: { title: 'Web Development', eyebrow: 'Web learning path', intro: 'Create accessible interfaces that respond to real users.', description: 'Learn the path from semantic HTML and CSS to JavaScript interactions, APIs, and production-ready projects.', modules: ['HTML and CSS foundations', 'JavaScript in the browser', 'APIs and full-stack projects'], example: 'Build a page, connect an interaction, then make it useful on every screen.', code: '<button id="hello">Say hello</button>\n<script>hello.onclick = () => alert("Hello!");</script>', video: 'https://www.youtube.com/results?search_query=web+development+course' },
    ai: { title: 'AI, ML & Data Science', eyebrow: 'AI learning path', intro: 'Understand data, models, and the systems that make AI useful.', description: 'Move from clean datasets to experiments, model evaluation, and responsible product integrations.', modules: ['Python and data preparation', 'Model training and evaluation', 'Building AI features'], example: 'Good AI work is measured by useful outcomes, not only by a model score.', code: 'features = [[1, 2], [2, 3]]\nlabels = [0, 1]\nmodel.fit(features, labels)', video: 'https://www.youtube.com/results?search_query=machine+learning+course' },
    languages: { title: 'Programming Languages', eyebrow: 'Programming foundations', intro: 'Learn the ideas that transfer between every language.', description: 'Practice variables, functions, control flow, data structures, and the habits that make code readable.', modules: ['Syntax and control flow', 'Functions and data', 'Testing and clean code'], example: 'The language changes, but decomposition and clear names remain valuable everywhere.', code: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("CodeHub"))', video: 'https://www.youtube.com/results?search_query=programming+fundamentals+course' },
    'system-design': { title: 'System Design', eyebrow: 'Architecture learning path', intro: 'Learn to reason about reliable systems at scale.', description: 'Explore APIs, storage, caching, queues, trade-offs, and the communication skills used in design interviews.', modules: ['Requirements and APIs', 'Data and scaling choices', 'Reliability and trade-offs'], example: 'Start with the user journey, then choose the simplest architecture that serves it.', code: 'client -> API -> service -> database\n             |\n           cache', video: 'https://www.youtube.com/results?search_query=system+design+interview+course' }
  };
  const params = new URLSearchParams(window.location.search);
  const data = lessonData[params.get('topic') || params.get('course')] || lessonData.dsa;
  document.title = `${data.title} | CodeHub`;
  document.querySelector('#lesson-eyebrow').textContent = data.eyebrow;
  document.querySelector('#lesson-title').textContent = data.title;
  document.querySelector('#lesson-intro').textContent = data.intro;
  document.querySelector('#lesson-description').textContent = data.description;
  document.querySelector('#lesson-example-text').textContent = data.example;
  document.querySelector('#lesson-code').textContent = data.code;
  document.querySelector('#video-link').href = data.video;
  document.querySelector('#lesson-list').innerHTML = data.modules.map((module) => `<li>${module}</li>`).join('');
  document.querySelector('#lesson-modules').innerHTML = data.modules.map((module, index) => `<a href="#lesson-body">${index + 1}. ${module}</a>`).join('');
}

const challengePage = document.querySelector('.challenge-layout');
if (challengePage) {
  const challengeData = {
    'missing-number': ['Find the missing number', 'Arrays · Easy', 'Given a sequence containing numbers from 1 to n with one value missing, return the missing value without sorting the input.', 'Try a linear-time solution using a running total or XOR.'],
    'unique-substring': ['Longest unique substring', 'Strings · Medium', 'Given a string, find the length of the longest substring that contains no repeated characters.', 'Use a sliding window and move its left edge when a character repeats.'],
    'shortest-path': ['Shortest path in a weighted graph', 'Graphs · Hard', 'Find the least expensive route between two nodes in a graph whose edges have non-negative weights.', 'Compare Dijkstra\'s algorithm with a priority queue against a simple breadth-first search.'],
    'daily-users': ['Daily active users', 'SQL · Easy', 'Write a query that counts unique users grouped by the date on which they were active.', 'Use COUNT DISTINCT with a date grouping expression.'],
    'rotate-array': ['Rotate an array in place', 'Arrays · Medium', 'Move every value in an array k positions to the right without creating a second array.', 'Consider reversing the whole array and then reversing two sections.'],
    'pattern-match': ['Pattern matching engine', 'Strings · Hard', 'Match a string against a pattern containing wildcard characters while keeping the solution efficient.', 'Define the state clearly, then decide which wildcard transitions can reuse prior work.']
  };
  const challenge = challengeData[new URLSearchParams(window.location.search).get('challenge')] || challengeData['missing-number'];
  document.title = `${challenge[0]} | CodeHub`;
  document.querySelector('#challenge-title').textContent = challenge[0];
  document.querySelector('#challenge-intro').textContent = challenge[1];
  document.querySelector('#challenge-prompt').textContent = challenge[2];
  document.querySelector('.submit-answer')?.addEventListener('click', () => showToast(challenge[3]));
}

document.querySelector('.signup-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formStatus = document.querySelector('.form-status');
  if (formStatus) formStatus.textContent = 'This demo sign-up form is not connected to an account service.';
  event.currentTarget.reset();
});

document.querySelectorAll('[data-social-provider]').forEach((button) => {
  button.addEventListener('click', () => {
    const status = document.querySelector('.social-status');
    const provider = button.dataset.socialProvider;
    if (status && provider) status.textContent = `${provider} sign-up is not connected in this demo.`;
  });
});
