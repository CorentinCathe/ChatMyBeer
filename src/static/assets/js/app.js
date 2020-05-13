import useAPI from "./useApi.js";

Vue.component("app", {
  template: ` <div id="app"> 
                    <search  @search-done="searchCompleted($event)"></search>
                    <websocket :roomId="roomId" v-if="roomId"></websocket>
                </div>`,
  data: function() {
    return {
      brewery: null,
      roomId: null
    };
  },
  methods: {
    searchCompleted: function(data) {
      this.roomId = data.id;
    }
  }
});
