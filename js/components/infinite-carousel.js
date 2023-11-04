class InfiniteCarousel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
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
      </div>
    </div>
    `;
  }
}

customElements.define('infinite-carousel', InfiniteCarousel);