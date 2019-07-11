Vue.component("todo-item", {
  template: "<li>{{todo.text}}</li>",
  props: ["todo"]
});

Vue.component('config-nav', {
  template: `
    <nav>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="#">Notifications</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Manage Configs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/index.html">
            <i class="material-icons">home</i>
          </a>
        </li>
      </ul>
    </nav>
  `
})

var app = new Vue({
  el: "#app",
  data: {
    product: "Config Nota",
    description: "Utility for notifying on configured meters",
    message: "One thing",
    todos: [
      { id: 1, text: "one message" },
      { id: 2, text: "two message" },
      { id: 3, text: "three message" },
      { id: 4, text: "four message" }
    ]
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    getYear() { return new Date().getFullYear(); },
    reverseMessage() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
