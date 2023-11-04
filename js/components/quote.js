class Quote extends HTMLElement {
  constructor() {
    super();
    this.quote = this.getAttribute('quote');
    this.author = this.getAttribute('author');
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="quote">
      <div class="quote__wrapper page-wrapper">
        <div class="quote__text">“${this.quote}”</div>
        <div class="quote__author">${this.author}</div>
      </div>
    </div>
    `;
  }
}

customElements.define('quote-section', Quote);