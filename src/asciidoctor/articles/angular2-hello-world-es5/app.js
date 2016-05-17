var HelloComponent = ng.core
  .Component({
    selector: 'hello',
    template: 'Hello World!'
  })
  .Class({
    constructor: function () {
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  ng.platform.browser.bootstrap(HelloComponent);
});
