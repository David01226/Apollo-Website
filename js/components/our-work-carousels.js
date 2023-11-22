class Carousel extends HTMLElement {
  constructor() {
    super();
    this.carouselID = this.getAttribute('carouselID');
    this.images = JSON.parse(this.getAttribute('images'));
    this.innerHTML = `
    <section id="${this.carouselID}-splide" class="splide" aria-label="Splide Basic HTML Example">
      <div class="splide__track">
        <ul class="splide__list">
          ${this.images.map((img) => {
            return (`<li class="splide__slide"><img src="/img/our-work/${this.carouselID}/${img}" alt=""></li>`)
            }).join("")}
        </ul>
      </div>
    </section>

    <section
      id="${this.carouselID}-thumbnail-slider"
      class="splide page-wrapper"
      aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
    >
      <div class="splide__track">
        <ul class="splide__list">
        ${this.images.map((img) => {
          return (`<li class="splide__slide"><img src="/img/our-work/${this.carouselID}/${img}" alt=""></li>`)
          }).join("")}
        </ul>
      </div>
    </section>
    `;
  }

  connectedCallback() {
  
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
        },
      } );

      main.sync( thumbnails );
      main.mount();
      thumbnails.mount();

  }
}

customElements.define('our-work-carousel', Carousel);