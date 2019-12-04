import consumer from "./consumer"
console.log("anything")
consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("welcome to the room!")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    
    alert(data.foo)
  }
});
