document.addEventListener('DOMContentLoaded', () => {
const target = document.querySelector('#about p');

const observer = new IntersectionObserver(
    ([entry]) => {
    if (entry.isIntersecting) {
        target.classList.remove('opacity-0');
        target.classList.add('opacity-100');
    } else {
        target.classList.remove('opacity-100');
        target.classList.add('opacity-0');
    }
    },
    {
    threshold: 0.1,
    }
);

// Initial transition class setup
target.classList.add('transition-opacity', 'duration-700', 'ease-in-out');
observer.observe(target);
});

document.addEventListener('DOMContentLoaded', () => {
const el = document.getElementById('credentials-content');
const observer = new IntersectionObserver(
    ([entry]) => {
    const el = entry.target;
    if (entry.isIntersecting) {
        el.classList.remove('opacity-0', 'translate-y-4');
        el.classList.add('opacity-100', 'translate-y-0');
    } else {
        el.classList.remove('opacity-100', 'translate-y-0');
        el.classList.add('opacity-0', 'translate-y-4');
    }
    },
    { threshold: 0.2 }
);
observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
const el = document.getElementById('products-content');

const observer = new IntersectionObserver(
    ([entry]) => {
    if (entry.isIntersecting) {
        el.classList.remove('opacity-0', 'translate-y-4');
        el.classList.add('opacity-100', 'translate-y-0');
    } else {
        el.classList.remove('opacity-100', 'translate-y-0');
        el.classList.add('opacity-0', 'translate-y-4');
    }
    },
    { threshold: 0.2 }
);

observer.observe(el);
});
