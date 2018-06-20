customElements.define('x-greeting', class extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('x-greeting connected', this, this.textContent);

    ///
    // This line requires babelPolyfill.js in IE9/10
    //
    // console.log(`x-greeting excited? ${this.textContent.includes('!')}`);

    ///
    // This is the same as the above line but works without polyfill
    //
    // console.log('Are you excited? ' + ('Hi!'.indexOf('!') < 0).toString());
  }
});
