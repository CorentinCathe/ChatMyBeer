import useApi from "./useApi.js";

Vue.component("search", {
  template: ` <form  @submit.prevent="handleSubmit" class="input-field">
					<input type="text" v-model="breweryName" id="searchBrewery" v-on:keyup="handleKeyUp()"/>
					<input type="submit" value="SEARCH" class="btn"/>
					<div v-if="searching" class="progress">
						<div class="indeterminate"></div>
					</div>
				</form>`,
  data: function() {
    return {
      breweryName: "",
      alreadySearched: [],
      instanceAutoComplete: null,
      autoCompleteData: {},
      searching: false
    };
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      const searchBreweryElement = document.querySelector("#searchBrewery");
      const options = {
        minLength: 2,
        data: this.autoCompleteData,
        sortFunction: (a, b) => a.localeCompare(b),
        onAutocomplete: this.onAutoCompleteHandler
      };
      this.instanceAutoComplete = M.Autocomplete.init(
        searchBreweryElement,
        options
      );
    });
  },
  methods: {
    handleKeyUp: function() {
      if (
        this.breweryName.length > 1 &&
        !this.alreadySearched.includes(this.breweryName)
      ) {
        useApi.forAutoComplete(this.breweryName).then(data => {
          data.forEach(predict => {
            this.autoCompleteData[predict.breweries] = null;
            this.instanceAutoComplete.updateData(this.autoCompleteData);
            this.instanceAutoComplete.open();
          });
        });
      }
    },
    handleSubmit: function() {
      this.searching = true;
      useApi
        .forSearch(this.breweryName)
        .then(data => {
          if (data.length) this.$emit("search-done", data[0]);
          this.searching = false;
        })
        .catch(err => console.log(err));
    },
    onAutoCompleteHandler: function(data) {
      this.breweryName = data;
      this.handleSubmit();
    }
  }
});
