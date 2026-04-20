/*============================================*/
/*  region.js  —  Regions Page                */
/*  SpiderWeb  |  INFO 250  |  AUPP 2026      */
/*============================================*/

// ── REGION DATA (for Fast Facts bar) ────────
const REGION_FACTS = {
    asia:      { species: '10,000+',  climate: 'Tropical / Alpine',  danger: 'Chinese Bird Spider' },
    europe:    { species: '5,775+',   climate: 'Temperate / Med.',    danger: 'Mediterranean Widow' },
    america:   { species: '8,700+',   climate: 'Desert / Tropical',   danger: 'Brazilian Wandering' },
    africa:    { species: '3,000+',   climate: 'Desert / Savanna',    danger: 'Six-Eyed Sand Spider' },
    australia: { species: '10,000+',  climate: 'Arid / Tropical',     danger: 'Sydney Funnel-Web'   },
};

// ── SLIDESHOW STATE ──────────────────────────
const slideState  = { asia:0, europe:0, america:0, africa:0, australia:0 };
const AUTO_MS     = 5000;  // 5 seconds per slide
let   autoTimer   = null;
let   progressRAF = null;
let   progressStart = null;
let   currentRegion = 'asia';

// ── SWITCH REGION ────────────────────────────
function switchRegion(name) {
    if (name === currentRegion) return;
    currentRegion = name;

    // Update tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.region === name);
    });

    // Swap panels
    document.querySelectorAll('.region-panel').forEach(panel => {
        panel.classList.toggle('active', panel.dataset.region === name);
    });

    // Body class → triggers CSS variable swap
    ['asia','europe','america','africa','australia'].forEach(r =>
        document.body.classList.remove(`region--${r}`)
    );
    document.body.classList.add(`region--${name}`);

    // Update fast facts bar
    updateFacts(name);

    // Trigger scroll reveals for the newly active panel
    triggerReveals();

    // Restart auto-play
    restartAutoPlay();

    // Scroll to tab bar (smooth)
    document.querySelector('.region-tabs')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── FAST FACTS ───────────────────────────────
function updateFacts(name) {
    const f = REGION_FACTS[name];
    if (!f) return;
    animateText('fact-species', f.species);
    animateText('fact-climate', f.climate);
    animateText('fact-danger',  f.danger);
}

function animateText(id, text) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    setTimeout(() => {
        el.textContent = text;
        el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, 120);
}

// ── SLIDESHOW ────────────────────────────────
function changeSlide(region, dir) {
    const ss     = document.getElementById(`slideshow-${region}`);
    if (!ss) return;
    const slides = ss.querySelectorAll('.slide');
    const total  = slides.length;
    if (total < 2) return;

    setSlide(region, (slideState[region] + dir + total) % total);
    restartAutoPlay();
}

function goToSlide(region, idx) {
    setSlide(region, idx);
    restartAutoPlay();
}

function setSlide(region, idx) {
    const ss = document.getElementById(`slideshow-${region}`);
    if (!ss) return;
    const slides = ss.querySelectorAll('.slide');

    slides[slideState[region]].classList.remove('active');
    updateDot(region, slideState[region], false);

    slideState[region] = idx;

    slides[slideState[region]].classList.add('active');
    updateDot(region, slideState[region], true);

    resetProgress(region);
}

function updateDot(region, idx, on) {
    const dots = document.querySelectorAll(`#dots-${region} .dot`);
    if (dots[idx]) dots[idx].classList.toggle('active', on);
}

// ── PROGRESS BAR ─────────────────────────────
function resetProgress(region) {
    const bar = document.getElementById(`progress-bar-${region}`);
    if (!bar) return;
    bar.style.transition = 'none';
    bar.style.width = '0%';
}

function startProgress(region) {
    const bar = document.getElementById(`progress-bar-${region}`);
    if (!bar) return;
    // Small delay so the reset paints first
    requestAnimationFrame(() => {
        bar.style.transition = `width ${AUTO_MS}ms linear`;
        bar.style.width = '100%';
    });
}

// ── AUTO-PLAY ────────────────────────────────
function restartAutoPlay() {
    clearInterval(autoTimer);
    resetProgress(currentRegion);
    // Tiny defer so resetProgress renders before we start
    setTimeout(() => {
        startProgress(currentRegion);
        autoTimer = setInterval(() => {
            changeSlide(currentRegion, 1);
            // changeSlide calls restartAutoPlay → don't recurse
        }, AUTO_MS);
    }, 50);
}

// ── SCROLL REVEAL ────────────────────────────
function triggerReveals() {
    // Use IntersectionObserver if available, otherwise just show all
    const revealEls = document.querySelectorAll('.region-panel.active .reveal:not(.visible)');
    if ('IntersectionObserver' in window) {
        revealEls.forEach(el => revealObserver.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('visible'));
    }
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// ── KEYBOARD NAV ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    // Default region on load
    document.body.classList.add('region--asia');
    updateFacts('asia');

    // Check URL hash
    const hash = location.hash.replace('#','');
    if (['asia','europe','america','africa','australia'].includes(hash)) {
        switchRegion(hash);
    } else {
        triggerReveals();
        restartAutoPlay();
    }

    // Keyboard arrow nav on tabs
    document.querySelector('.region-tabs')?.addEventListener('keydown', e => {
        const tabs  = [...document.querySelectorAll('.tab-btn')];
        const cur   = tabs.indexOf(document.activeElement);
        if (cur === -1) return;
        let next = cur;
        if (e.key === 'ArrowRight') next = (cur + 1) % tabs.length;
        if (e.key === 'ArrowLeft')  next = (cur - 1 + tabs.length) % tabs.length;
        if (next !== cur) {
            tabs[next].focus();
            switchRegion(tabs[next].dataset.region);
        }
    });

    // Pause auto-play when tab is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) clearInterval(autoTimer);
        else restartAutoPlay();
    });
});



function toggleMenu() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("active");
}

function toggleDropdown(event) {
    event.preventDefault();
    const parent = event.target.parentElement;
    parent.classList.toggle("open");
}