var HelloComponent = ng.core
  .Component({
    selector: 'hello',
    template: '<p>Hello World!</p>'
  })
  .Class({
    constructor: function () {
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  ng.platform.browser.bootstrap(HelloComponent);
});
