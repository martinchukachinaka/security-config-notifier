Vue.component("todo-item", {
  template: "<li>{{todo.text}}</li>",
  props: ["todo"]
});

var app = new Vue({
  el: "#app",
  data: {
    product: "Service Config Notifier",
    description: "Utility for notifying on configured meters",
    message: "One thing",
    todos: [
      { id: 1, text: "one message" },
      { id: 2, text: "two message" },
      { id: 3, text: "three message" },
      { id: 4, text: "four message" }
    ]
  },
  computed:{
    reversedMessage(){
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
