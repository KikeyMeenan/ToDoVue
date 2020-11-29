import Vue from 'vue'

new Vue({
  data: {
    hello: 'hi there xccx'
  },
  template: '<div id="app">{{ hello }}</div>'
}).$mount('#app')

if (module.hot) {
  module.hot.accept()
}
