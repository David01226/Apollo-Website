class InfiniteCarousel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      @keyframes slide {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }
      .infinite-carousel__container {overflow: hidden; white-space: nowrap; display: flex; background-color: #FFFFFF;}
      .infinite-carousel__title {text-transform: uppercase; }
      .infinite-carousel__img-wrapper {display: flex; align-items: center; margin: 40px 0; animation: 60s slide infinite linear; flex-shrink: 0; animation-delay: 3s;}
      .infinite-carousel__img {padding: 0 20px; max-height: 80px;}
      @media screen and (max-width:767px) {
        .infinite-carousel__img {width: calc(100vw / 3); padding: 0 10px;}
      }    
    </style>

    <div class="infinite-carousel__container">
      <div class="infinite-carousel__img-wrapper">
          <img class="infinite-carousel__img" src="/img/global/accreditations/city-guilds.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/canadian-solar.jpeg">
          <img class="infinite-carousel__img" src="/img/global/accreditations/givenergy.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/napit.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/nic-eic.jpeg">
          <img class="infinite-carousel__img" src="/img/global/accreditations/site-safe.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/solar-edge.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/solis.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/tesla.jpeg">
          <img class="infinite-carousel__img" src="/img/global/accreditations/jym.png">
          </div>
          <div class="infinite-carousel__img-wrapper">
          <img class="infinite-carousel__img" src="/img/global/accreditations/city-guilds.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/canadian-solar.jpeg">
          <img class="infinite-carousel__img" src="/img/global/accreditations/givenergy.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/napit.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/nic-eic.jpeg">
          <img class="infinite-carousel__img" src="/img/global/accreditations/site-safe.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/solar-edge.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/solis.png">
          <img class="infinite-carousel__img" src="/img/global/accreditations/tesla.jpeg">
          <img class="infinite-carousel__img" src="/img/global/accreditations/jym.png">
      </div>
    </div>
    `;
  }
}

customElements.define('infinite-carousel', InfiniteCarousel);