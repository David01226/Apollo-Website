class Quote extends HTMLElement {
  constructor() {
    super();
    this.quote = this.getAttribute('quote');
    this.author = this.getAttribute('author');
    this.sectionMarginClasses = this.getAttribute('sectionMarginClasses');
    this.bgColor = this.getAttribute('bgColor');
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="quote ${this.bgColor} ${this.sectionMarginClasses ? `${this.sectionMarginClasses}` : ''}">
      <div class="quote__wrapper page-wrapper">
        <div class="quote__text">“${this.quote}”</div>
        <div class="quote__author">${this.author}</div>
      </div>
    </div>
    `;
  }
}

customElements.define('quote-section', Quote);