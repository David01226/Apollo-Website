class ServiceSelector extends HTMLElement {
  constructor() {
    super();
    this.servicePage = this.getAttribute('servicePage');
    this.innerHTML = `
    <section class="service-selector">
      <div class="service-selector__wrapper page-wrapper">
            <div class="service-selector__item-container">
              <a href="${this.servicePage === 'true' ? '/services/solar-power' : '#solar'}">
                <div id="solar-btn" class="service-selector__item ${this.servicePage === 'true' ? '' : 'selected'}" data-id="solar">
                  <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M122.2 0C91.7 0 65.5 21.5 59.5 51.4L8.3 307.4C.4 347 30.6 384 71 384H288v64H224c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V384H569c40.4 0 70.7-36.9 62.8-76.6l-51.2-256C574.5 21.5 548.3 0 517.8 0H122.2zM260.9 64H379.1l10.4 104h-139L260.9 64zM202.3 168H101.4L122.2 64h90.4L202.3 168zM91.8 216H197.5L187.1 320H71L91.8 216zm153.9 0H394.3l10.4 104-169.4 0 10.4-104zm196.8 0H548.2L569 320h-116L442.5 216zm96-48H437.7L427.3 64h90.4l31.4-6.3L517.8 64l20.8 104z"/></svg>
                  <div class="service-selector__item-title">Solar<br>Power</div>
                </div>
              </a>
            </div>
            <div class="service-selector__item-container">
              <a href=${this.servicePage === 'true' ? '/services/battery-storage' : '#battery'}>
                <div id="battery-btn" class="service-selector__item" data-id="battery">
                  <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm272 96H96V320H352V192z"/></svg>
                  <div class="service-selector__item-title">Battery<br>Storage</div>
                </div>
              </a>
            </div>
            <div class="service-selector__item-container">
              <a href="${this.servicePage === 'true' ? '/services/ev-chargers' : '#ev-chargers'}">
                <div id="ev-charger-btn" class="service-selector__item" data-id="ev-chargers">
                <svg xmlns="https://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M96 0C60.7 0 32 28.7 32 64V448c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32s-14.3-32-32-32V304h16c22.1 0 40 17.9 40 40v32c0 39.8 32.2 72 72 72s72-32.2 72-72V252.3c32.5-10.2 56-40.5 56-76.3V144c0-8.8-7.2-16-16-16H544V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H480V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H432c-8.8 0-16 7.2-16 16v32c0 35.8 23.5 66.1 56 76.3V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V344c0-48.6-39.4-88-88-88H320V64c0-35.3-28.7-64-64-64H96zM216.9 82.7c6 4 8.5 11.5 6.3 18.3l-25 74.9H256c6.7 0 12.7 4.2 15 10.4s.5 13.3-4.6 17.7l-112 96c-5.5 4.7-13.4 5.1-19.3 1.1s-8.5-11.5-6.3-18.3l25-74.9H96c-6.7 0-12.7-4.2-15-10.4s-.5-13.3 4.6-17.7l112-96c5.5-4.7 13.4-5.1 19.3-1.1z"/></svg>
                  <div class="service-selector__item-title">EV<br>Chargers</div>
                </div>
              </a>
            </div>
            <div class="service-selector__item-container">
              <a href="${this.servicePage === 'true' ? '/services/ventilation' : '#ventilation'}">
                <div id="ventilation-btn" class="service-selector__item" data-id="ventilation">
                  <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M258.6 0c-1.7 0-3.4 .1-5.1 .5C168 17 115.6 102.3 130.5 189.3c2.9 17 8.4 32.9 15.9 47.4L32 224H29.4C13.2 224 0 237.2 0 253.4c0 1.7 .1 3.4 .5 5.1C17 344 102.3 396.4 189.3 381.5c17-2.9 32.9-8.4 47.4-15.9L224 480v2.6c0 16.2 13.2 29.4 29.4 29.4c1.7 0 3.4-.1 5.1-.5C344 495 396.4 409.7 381.5 322.7c-2.9-17-8.4-32.9-15.9-47.4L480 288h2.6c16.2 0 29.4-13.2 29.4-29.4c0-1.7-.1-3.4-.5-5.1C495 168 409.7 115.6 322.7 130.5c-17 2.9-32.9 8.4-47.4 15.9L288 32V29.4C288 13.2 274.8 0 258.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                  <div class="service-selector__item-title">Ventilation</div>
                </div>
              </a>
          </div>
      </div>
    </section>
    `;
  }

  connectedCallback() {
    this.allServiceBtns = document.querySelectorAll('.service-selector__item')
    this.allContentSections = document.querySelectorAll('.content-section')
    this.clickedBtn = ''

    if (this.servicePage !== 'true') {
      // Loop through each service btn in the section
      this.allServiceBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          // Loop through all btns and remove selected class
          this.allServiceBtns.forEach((elem) => {
              elem.classList.remove('selected')
          })
  
          // Add selected class to clicked btn
          this.clickedBtn = event.target.closest('.service-selector__item')
          this.clickedBtn.classList.add('selected')
  
          
          // Loop through the sections to determine which is hidden/visible
          this.allContentSections.forEach((section) => {
            if (section.classList.contains('hidden')) {
              if (section.id === this.clickedBtn.getAttribute('data-id')) {
                section.classList.remove('hidden')
              }
            } 
            else {
              if (section.id !== this.clickedBtn.getAttribute('data-id')) {
                section.classList.add('hidden')
              }
            }
          })
  
          // Initialise Splide for relevant carousel after click
          let currentPage = document.querySelector('body').id
          if (currentPage === 'our-work-page') {
            if (this.clickedBtn.getAttribute('data-id') === 'solar') {
              let main = new Splide( '#solar-splide' , {
                type: 'loop',
                padding: '22%',
                height: '500px',
                gap: '10px',
                perPage: 1,
                arrows:true,
                pagination:false,
                pauseOnFocus:false,
                pauseOnHover:false, 
                speed: 500,
                rewind: false,
                breakpoints : {
                  1024: {
                    padding: '10%',
                    height: '55vw'
                  },
                  767: {
                    padding: '0',
                    height: '74vw'
                  }
                },
              });
        
              let thumbnails = new Splide( '#solar-thumbnail-slider', {
                rewind          : true,
                perPage: 8,
                fixedHeight: 110,
                isNavigation    : true,
                gap             : 10,
                focus           : 'center',
                pagination      : false,
                cover           : true,
                arrows: false,
                dragMinThreshold: {
                  mouse: 4,
                  touch: 10,
                },
                breakpoints : {
                  1024: {
                    perPage: 5,
                    fixedHeight : 90,
                  },
                  767: {
                    perPage: 3,
                    fixedHeight : 80,
                  }
                },
              } );
        
              main.sync( thumbnails );
              main.mount();
              thumbnails.mount();
    
            } else if (this.clickedBtn.getAttribute('data-id') === 'battery') {
              let main = new Splide( '#battery-splide' , {
                type: 'loop',
                padding: '22%',
                height: '500px',
                gap: '10px',
                perPage: 1,
                arrows:true,
                pagination:false,
                pauseOnFocus:false,
                pauseOnHover:false, 
                speed: 500,
                rewind: false,
                breakpoints : {
                  1024: {
                    padding: '10%',
                    height: '55vw'
                  },
                  767: {
                    padding: '0',
                    height: '74vw'
                  }
                },
              });
    
              let thumbnails = new Splide( '#battery-thumbnail-slider', {
                rewind          : true,
                perPage: 8,
                fixedHeight: 110,
                isNavigation    : true,
                gap             : 10,
                focus           : 'center',
                pagination      : false,
                cover           : true,
                arrows: false,
                dragMinThreshold: {
                  mouse: 4,
                  touch: 10,
                },
                breakpoints : {
                  1024: {
                    perPage: 5,
                    fixedHeight : 90,
                  },
                  767: {
                    perPage: 3,
                    fixedHeight : 80,
                  }
                },
              } );
    
              main.sync( thumbnails );
              main.mount();
              thumbnails.mount();
            } else if (this.clickedBtn.getAttribute('data-id') === 'ev-chargers') {
              let main = new Splide( '#ev-chargers-splide' , {
                type: 'loop',
                padding: '22%',
                height: '500px',
                gap: '10px',
                perPage: 1,
                arrows:true,
                pagination:false,
                pauseOnFocus:false,
                pauseOnHover:false, 
                speed: 500,
                rewind: false,
                breakpoints : {
                  1024: {
                    padding: '10%',
                    height: '55vw'
                  },
                  767: {
                    padding: '0',
                    height: '74vw'
                  }
                },
              });
    
              let thumbnails = new Splide( '#ev-chargers-thumbnail-slider', {
                rewind          : true,
                perPage: 8,
                fixedHeight: 110,
                isNavigation    : true,
                gap             : 10,
                focus           : 'center',
                pagination      : false,
                cover           : true,
                arrows: false,
                dragMinThreshold: {
                  mouse: 4,
                  touch: 10,
                },
                breakpoints : {
                  1024: {
                    perPage: 5,
                    fixedHeight : 90,
                  },
                  767: {
                    perPage: 3,
                    fixedHeight : 80,
                  }
                },
              } );
    
              main.sync( thumbnails );
              main.mount();
              thumbnails.mount();

            } else {
              let main = new Splide( '#ventilation-splide' , {
                type: 'loop',
                padding: '22%',
                height: '500px',
                gap: '10px',
                perPage: 1,
                arrows:true,
                pagination:false,
                pauseOnFocus:false,
                pauseOnHover:false, 
                speed: 500,
                rewind: false,
                breakpoints : {
                  1024: {
                    padding: '10%',
                    height: '55vw'
                  },
                  767: {
                    padding: '0',
                    height: '74vw'
                  }
                },
              });
    
              let thumbnails = new Splide( '#ventilation-thumbnail-slider', {
                rewind          : true,
                perPage: 8,
                fixedHeight: 110,
                isNavigation    : true,
                gap             : 10,
                focus           : 'center',
                pagination      : false,
                cover           : true,
                arrows: false,
                dragMinThreshold: {
                  mouse: 4,
                  touch: 10,
                },
                breakpoints : {
                  1024: {
                    perPage: 5,
                    fixedHeight : 90,
                  },
                  767: {
                    perPage: 3,
                    fixedHeight : 80,
                  }
                },
              } );
    
              main.sync( thumbnails );
              main.mount();
              thumbnails.mount();
            }
          }
          
        })
      })
    }
    




  }


}



customElements.define('service-selector', ServiceSelector);



