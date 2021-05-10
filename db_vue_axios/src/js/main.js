Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  index: 0,
  data: {
    stanze:[],
    stanza: [],
  },
mounted() {
      axios.get('http://localhost/database/db-hotel/db_vue_axios/call.php')
      .then((response) => {
    this.stanze = response.data.response;
      });
    },
methods: {
  get_specific: function(id) {
    axios.get( `http://localhost/database/db-hotel/db_vue_axios/call.php?id=${id}`  )
    .then((response) => {
  this.stanza = response.data.response;
  console.log(this.stanza);
    });
  }
}
  })
