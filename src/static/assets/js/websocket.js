Vue.component("websocket", {
  props: ["roomId"],
  template: `	<div id="websocket">
						<form @submit.prevent="submitData">
						  <input v-if="!sendAMsg" type="text" v-model="name" placeholder="Username" />
						  <label v-if="sendAMsg" for="text">{{this.name}}</label>
						  <input type="text" id="text" v-model="msg" placeholder="message" />
						  <input type="submit" value="Envoyer"/>
					  </form>
					  <messages v-for="message in content" v-bind:key="message.user+message.date" :message=message></messages>  
				  </div>`,
  data: function() {
    return {
      content: [],
      name: "",
      msg: "",
      socket: null,
      sendAMsg: false
    };
  },
  mounted() {
    this.socket = io();

    this.socket.on("init-data", data => {
      data.forEach(message => {
        this.addToContent(message);
      });
    });

    this.socket.on("broadcast-new-data", data => this.addToContent(data));

    this.socket.emit("join-room", this.roomId);
  },
  methods: {
    addToContent: function(message) {
      this.content.push(message);
    },
    submitData: function() {
      if (this.name && this.msg) {
        let message = {
          user: this.name,
          text: this.msg,
          date: Date.now()
        };
        this.addToContent(message);
        let data = {
          room: this.roomId,
          message: message
        };

        this.socket.emit("new-data", data);
        this.msg = "";
        this.sendAMsg = true;
      }
    },
    updateRoom: function() {
      this.socket.emit("leave-room", this.sendAMsg ? this.name : "");
      this.content = [];
      this.sendAMsg = false;
      this.socket.emit("join-room", this.roomId);
    }
  },
  watch: {
    roomId: function(newVal, oldVal) {
      this.updateRoom();
    }
  }
});
