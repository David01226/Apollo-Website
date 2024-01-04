class FeaturedPanel extends HTMLElement {
  constructor() {
    super();
    this.sectionID = this.getAttribute('sectionID');
    this.sectionColor = this.getAttribute('sectionColor');
    this.img = this.getAttribute('img')
    this.imgPosition = this.getAttribute('imgPosition');
    this.imgSize = this.getAttribute('imgSize');
    this.sectionTitle = this.getAttribute('sectionTitle');
    this.bodyText = this.getAttribute('bodyText');
    this.btnStyle = this.getAttribute('btnStyle')
    this.btn1Text = this.getAttribute('btn1Text');
    this.btn1Link = this.getAttribute('btn1Link');
    this.btn1NewTab = this.getAttribute('btn1NewTab');
    this.btn2Text = this.getAttribute('btn2Text');
    this.btn2Link = this.getAttribute('btn2Link');
    this.btn2NewTab = this.getAttribute('btn2NewTab');
  }

  connectedCallback() {
    this.innerHTML = `
    <div ${this.sectionID ? `id="${this.sectionID}"` : ''} class="featured-panel ${this.imgPosition} ${this.imgSize} ${this.sectionColor}">
    <div class="featured-panel__wrapper page-wrapper">
      <div class="featured-panel__text-container">
        ${this.sectionTitle ? `<h2 class="featured-panel__title">${this.sectionTitle}</h2>` : ''}
          <p class="featured-panel__body-text">${this.bodyText}</p>

        ${this.btn1Text ? 
          `<div class="featured-panel__btn-container">
          ${this.btn1Text ? `<a class="btn ${this.btnStyle}" href="${this.btn1Link}" ${this.btn1NewTab ? `target="_blank"` : ''}>${this.btn1Text}</a>` : ''}
          ${this.btn2Text ? `<a class="btn ${this.btnStyle}" href="${this.btn2Link}" ${this.btn2NewTab ? `target="_blank"` : ''}>${this.btn2Text}</a>` : ''}
          </div>`
        :
          ''
        }
      </div>
      <div class="featured-panel__img-container">
        <img src="${this.img}" alt="photo of team">
      </div>
      </div>
    </div>
    `;
  }
}

customElements.define('featured-panel', FeaturedPanel);