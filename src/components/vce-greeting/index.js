import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

Vue.use(vueCustomElement);

Vue.customElement('vce-greeting', {
  template: `
    <div class="vce-greeting">
      Greeting: <slot></slot>
    </div>
  `
}, {
  connectedCallback() {
    console.log('vce-greeting connected', this, this.textContent);

    ///
    // This line requires babelPolyfill.js in IE9/10
    //
    // console.log(`vce-greeting excited? ${this.textContent.includes('!')}`);

    ///
    // This is the same as the above line but works without polyfill
    //
    // console.log('Are you excited? ' + ('Hi!'.indexOf('!') < 0).toString());
  }
});
