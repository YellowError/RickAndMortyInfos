<template>
  <div class="wrapper">
    <div class="imgHeader"></div>
    <NavBar class="nav-bar"></NavBar>
    <router-view @page-changed="pageChanged"></router-view>
  </div>
</template>

<script>
import NavBar from "./components/layout/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      lastPageCharacter: 1,
      characters: {
        infos: {},
        results: [],
      },
      locations: [],
      episodes: [],
    };
  },
  provide() {
    return {
      characters: this.characters,
      locations: this.locations,
      episodes: this.episodes,
    };
  },
  mounted() {
    let getCharacters = async (route) => {
      let response = await (await fetch(route)).json();
      let result = response.results;
      let info = response.info;
      result.forEach((element) => {
        this.characters.results.push(element);
      });
      this.characters.infos = { ...info };
      console.log(this.characters);
    };

    getCharacters("https://rickandmortyapi.com/api/character");

    let getLocations = async (route) => {
      let response = await (await fetch(route)).json();
      let data = response.results;
      // console.log(data)
      data.forEach((element) => {
        this.locations.push(element);
      });
    };

    getLocations("https://rickandmortyapi.com/api/location");

    let getEpisodes = async (route) => {
      let response = await (await fetch(route)).json();
      let data = response.results;
      // console.log(data)
      data.forEach((element) => {
        this.episodes.push(element);
      });
    };

    getEpisodes("https://rickandmortyapi.com/api/episode");
  },
  methods: {
    async pageChanged(payload) {
      this.characters.results = [];
      let response;
      if (payload > this.lastPageCharacter) {
        response = await (await fetch(this.characters.infos.next)).json();
      } else {
        response = await (await fetch(this.characters.infos.prev)).json();
      }
      this.characters.infos = {};
      let result = response.results;
      let info = response.info;
      result.forEach((element) => {
        this.characters.results.push(element);
      });
      this.characters.infos = { ...info };
      this.lastPageCharacter = payload;

      console.log(this.characters);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  color: white;
  font-family: "Roboto", sans-serif;
}
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.imgHeader {
  height: 300px;
  background-image: url("./assets/rickandmortyBG.png");
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 25%;
  flex: 0 1 auto;
}
.nav-bar {
  flex: 0 1 auto;
}
</style>
