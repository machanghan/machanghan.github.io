var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });


      // 背景
    document.body.addEventListener("pointermove", (e)=>{
      const { currentTarget: el, clientX: x, clientY: y } = e;
      const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
      el.style.setProperty('--posX',  x-l-w/2);
      el.style.setProperty('--posY',  y-t-h/2);
    })


