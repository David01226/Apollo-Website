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

      .infinite-carousel__title {font-weight: 400; font-size: 16px; text-transform: uppercase; padding: 40px 0 0; margin: 0; background-color: var(--primary-background-light); text-align: center;}
      .infinite-carousel__container {overflow: hidden; white-space: nowrap; display: flex; background-color: var(--primary-background-light);}
      .infinite-carousel__img-wrapper {display: flex; align-items: center; margin: 40px 0; animation: 60s slide infinite linear; flex-shrink: 0; animation-delay: 3s;}
      .infinite-carousel__img {padding: 0 20px; max-height: 80px;}
      @media screen and (max-width:767px) {
        .infinite-carousel__img {width: calc(100vw / 3); padding: 0 10px;}
      }    
    </style>

  
      <div class="infinite-carousel__title">Our Accreditations & Associations</div>
      <div class="infinite-carousel__container">
        <div class="infinite-carousel__img-wrapper">
            <img class="infinite-carousel__img" src="/img/global/accreditations/city-guilds.jpg" alt="City Guilds Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/renewable-energy-hub.jpg" alt="The Renewable Energy Hub">
            <img class="infinite-carousel__img" src="/img/global/accreditations/canadian-solar.jpg" alt="Canadian Solar Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/givenergy.jpg" alt="Give Energy Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/napit.jpg" alt="Napit Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/nic-eic.jpg" alt="NIC EIC Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/site-safe.jpg" alt="Site Safe Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/solar-edge.jpg" alt="Solar Edge Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/solis.jpg" alt="Solis Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/tesla.jpg" alt="Tesla Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/jym.jpg" alt="JYM Roofing Logo">
            </div>
            <div class="infinite-carousel__img-wrapper">
            <img class="infinite-carousel__img" src="/img/global/accreditations/city-guilds.jpg" alt="City Guilds Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/renewable-energy-hub.jpg" alt="The Renewable Energy Hub">
            <img class="infinite-carousel__img" src="/img/global/accreditations/canadian-solar.jpg" alt="Canadian Solar Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/givenergy.jpg" alt="Give Energy Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/napit.jpg" alt="Napit Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/nic-eic.jpg" alt="NIC EIC Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/site-safe.jpg" alt="Site Safe Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/solar-edge.jpg" alt="Solar Edge Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/solis.jpg" alt="Solis Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/tesla.jpg" alt="Tesla Logo">
            <img class="infinite-carousel__img" src="/img/global/accreditations/jym.jpg" alt="JYM Roofing Logo">
        </div>
      </div>
   
    `;
  }
}

customElements.define('infinite-carousel', InfiniteCarousel);