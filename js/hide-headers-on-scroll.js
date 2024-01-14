var lastScrollTop = 0;
let pageWidth = window.innerWidth

if (pageWidth > 1024) {
  window.addEventListener("scroll", function(){ 
     var st = window.pageYOffset || document.documentElement.scrollTop; 
     let desktopHeader = document.querySelector('header');
       if (lastScrollTop > 150) {
         if (st > lastScrollTop) {
           // downscroll code
           desktopHeader.style.transform = 'translateY(-100%)';
          } else if (st < lastScrollTop) {
            // upscroll code
            desktopHeader.style.transform = 'translateY(0%)';
          } // else was horizontal scroll
      }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
} else {
  window.addEventListener("scroll", function(){ 
     var st = window.pageYOffset || document.documentElement.scrollTop; 
     let mobileHeader = document.querySelector('.mobile-nav');
     if (lastScrollTop > 150) {
         if (st > lastScrollTop) {
           // downscroll code
           mobileHeader.style.transform = 'translateY(-100%)';
          } else if (st < lastScrollTop) {
            // upscroll code
            mobileHeader.style.transform = 'translateY(0%)';
          } // else was horizontal scroll
      }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
}