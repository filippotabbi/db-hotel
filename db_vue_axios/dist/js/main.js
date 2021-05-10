/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  index: 0,
  data: {
    stanze: [],
    stanza: []
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('http://localhost/database/db-hotel/db_vue_axios/call.php').then(function (response) {
      _this.stanze = response.data.response;
    });
  },
  methods: {
    get_specific: function get_specific(id) {
      var _this2 = this;

      axios.get("http://localhost/database/db-hotel/db_vue_axios/call.php?id=".concat(id)).then(function (response) {
        _this2.stanza = response.data.response;
        console.log(_this2.stanza);
      });
    }
  }
});
/******/ })()
;