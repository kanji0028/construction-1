document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    const hero = new HeroSlider('.swiper-container');
    hero.start();
  }, 2500);

  // <!-------- /HeroSlider-animation -------->
  const cb = function (el, inview) {
    if (inview) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };
  const so = new ScrollObserver('.clip-js', cb, {
    rootMargin: '0px 0px',
  });
  const cb2 = function (el, inview) {
    if (inview) {
      const ta = new BgAnimation(el);
      ta.animate();
    }
  };
  // const so4 = new ScrollObserver('.clip-js-bg', cb2, {
  //   rootMargin: '300px 0px',
  // });
  // <!-------- /text-animation -------->
  const so2 = new ScrollObserver(
    '.appear',
    (el, inview) => {
      if (inview) {
        el.classList.add('inview');
      } else {
        el.classList.remove('inview');
      }
    }, {
      rootMargin: '-10px 0px',
    }
  );
  // <!-------- /inview-animation -------->
  const so3 = new ScrollObserver(
    '.cover-slide',
    (el, inview) => {
      if (inview) {
        el.classList.add('inview');
      } else {
        el.classList.remove('inview');
      }
    }, {
      rootMargin: '-100px 0px',
    }
  );
  // <!-------- /imgSlide-animation -------->
});

window.addEventListener("scroll", function(){
  var header = document.querySelector(".p-header");
  header.classList.toggle("scroll-nav", window.scrollY > 700);
});