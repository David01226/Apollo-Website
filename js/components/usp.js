class USP extends HTMLElement {
  constructor() {
    super();
    this.sectionIdentifier = this.getAttribute('sectionIdentifier');
    this.sectionColor = this.getAttribute('sectionColor');
    this.sectionTitle = this.getAttribute('sectionTitle');
    this.sectionSubTitle = this.getAttribute('sectionSubTitle');
    this.items = JSON.parse(this.getAttribute('items'))
    this.btnStyle = this.getAttribute('btnStyle')
    this.btnText = this.getAttribute('btnText');
    this.btnLink = this.getAttribute('btnLink');
  }

  connectedCallback() {
    console.log(this.sectionIdentifier)
    this.innerHTML = `
    <style>
    .${this.sectionIdentifier}.usp__item-container {grid-template-columns: repeat(${this.items.length}, 1fr);}
    @media only screen and (max-width: 767px) {
      .${this.sectionIdentifier}.usp__item-container {grid-template-columns: repeat(2, 1fr); gap: 40px 0;}
      .solar-suitable.usp__item-container {grid-template-columns: repeat(1, 1fr);}
    }
    </style>
    <div class="usp__container ${this.sectionColor}">
      <div class="usp__wrapper page-wrapper">
        <div class="usp__title-container">
          ${this.sectionTitle ? `<h2 class="usp__section-title">${this.sectionTitle}</h2>` : '' }
          ${this.sectionSubTitle ? `<h4 class="usp__section-sub-title">${this.sectionSubTitle}</h4>` : '' }
        </div>
        <div class="usp__item-container ${this.sectionIdentifier}">
        ${this.items.map((item) => {
          return (
            `
              <div class="usp__item">
                ${item.img ? `<img src="${this.img}" alt="">` : '' }
                ${item.svg ? item.svg : '' }
                ${item.title ? `<div class="usp__item-title">${item.title}</div>` : '' }
                ${item.body ? `<div class="usp__item-body">${item.body}</div>` : '' }
              </div>
            `
          )
        }).join("")}
        </div>
        ${this.btnText ? `<a class="btn ${this.btnStyle}" href="${this.btnLink}">${this.btnText}</a>` : '' }
        
      </div>
    </div>
    `;
  }
}

customElements.define('usp-panel', USP);