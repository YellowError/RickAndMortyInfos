<template>
  <div>
    <router-link class="router-link" to="/">Home</router-link>
    <router-link class="router-link" to="/characters">Characters</router-link>
    <router-link class="router-link" to="/episodes">Episodes</router-link>
    <router-link class="router-link" to="/locations">Locations</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap");
div {
  background-color: #2c3e50;
  padding: 15px 0;
  min-height: 60px;
  display: flex;
  justify-content: center;
}

.router-link {
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  background: #2c3e50;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 10px;
  transition: 0.2s ease-in;
}

.router-link:hover {
  box-shadow: 3px 3px 9px #1e2b37, -3px -3px 9px #3a5169;
}

.router-link:active {
  box-shadow: inset 3px 3px 9px #1e2b37, inset -3px -3px 9px #3a5169;
}
</style>