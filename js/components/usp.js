class USP extends HTMLElement {
  constructor() {
    super();
    this.sectionIdentifier = this.getAttribute('sectionIdentifier');
    this.sectionLayout = this.getAttribute('sectionLayout');
    this.sectionMarginClasses = this.getAttribute('sectionMarginClasses');
    this.sectionColor = this.getAttribute('sectionColor');
    this.sectionTitle = this.getAttribute('sectionTitle');
    this.sectionSubTitle = this.getAttribute('sectionSubTitle');
    this.items = JSON.parse(this.getAttribute('items'))
    this.btnStyle = this.getAttribute('btnStyle')
    this.btnText = this.getAttribute('btnText');
    this.btnLink = this.getAttribute('btnLink');
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    #${this.sectionIdentifier} .usp__item-container {grid-template-columns: repeat(${this.items.length}, 1fr);}
    @media only screen and (max-width: 1024px) {
      #${this.sectionIdentifier} .usp__item-container {grid-template-columns: repeat(3, 1fr); gap: 40px 10px;}
    }
    @media only screen and (max-width: 767px) {
      #${this.sectionIdentifier} .usp__item-container {grid-template-columns: repeat(2, 1fr); gap: 40px 0;}
    }
    </style>
    <div ${this.sectionIdentifier ? `id="${this.sectionIdentifier}"` : '' } class="usp__container ${this.sectionColor} ${this.sectionMarginClasses ? `${this.sectionMarginClasses}` : ''}">
      <div class="usp__wrapper page-wrapper">
        <div class="usp__title-container">
          ${this.sectionTitle ? `<h2 class="usp__section-title">${this.sectionTitle}</h2>` : '' }
          ${this.sectionSubTitle ? `<h4 class="usp__section-sub-title">${this.sectionSubTitle}</h4>` : '' }
        </div>
        <div class="usp__item-container${this.sectionLayout ? ` ${this.sectionLayout}` : '' }">
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
        ${this.btnText ? `<a class="btn ${this.btnStyle}" href="${this.btnLink}" aria-label="Link button to ${this.btnText}">${this.btnText}</a>` : '' }
        
      </div>
    </div>
    `;
  }
}

customElements.define('usp-panel', USP);