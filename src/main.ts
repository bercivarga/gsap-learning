import './index.css'
import gsap from 'gsap';

// const CLIP_FOLD = "polygon(0 0, 100% 0, 100% 0, 0 0)"
const CLIP_UNFOLD = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"

const screenSize = window.innerWidth > 768 ? 'desktop' : 'mobile';

const isMobile = screenSize === 'mobile';

const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl
  .to('.main-title', { clipPath: CLIP_UNFOLD, duration: 1, delay: 0.5 })
  .to('.main-title', { top: isMobile ? "35%" : "50%", duration: 1.2 })
  .from('.subtitle', { y: -20, opacity: 0, duration: 0.6 }, "-=0.65")
  .from('.home-item', { y: -20, opacity: 0, duration: 0.6, stagger: 0.25 })


function handleLocationClick() {
  tl.reverse().then(() => {
    window.location.href = '/locations/index.html';
  });
}

const locationButtons = document.querySelectorAll('.home-item');

locationButtons.forEach((button) => {
  button.addEventListener('click', handleLocationClick);
});
