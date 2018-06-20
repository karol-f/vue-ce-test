import 'document-register-element/build/document-register-element';
import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

Vue.use(vueCustomElement);

Vue.customElement('x-greeting', {
  template: `
    <div class="x-greeting">
      Greeting: <slot></slot>
    </div>
  `
}, {
  constructorCallback() {
    console.log('constructed', this, this.textContent);
  },
  connectedCallback() {
    console.log('connected', this, this.textContent);

    ///
    // This line requires babelPolyfill.js in IE9/10
    //
    // console.log(`Are you excited? ${this.textContent.includes('!')}`);

    ///
    // This is the same as the above line but works without polyfill
    //
    // console.log('Are you excited? ' + ('Hi!'.indexOf('!') < 0).toString());
  }
});
