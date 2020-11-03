<template>
  <div class="home-content">
    <div>
      <h1>Welcome to the Rick and Morty finder</h1>
      <p>
        This app was made with Vue3 and all the datas come from the
        <a href="https://rickandmortyapi.com/documentation" target="_blank"
          >Rick and Morty API</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-family: "Roboto", sans-serif;
  font-weight: 200;
}

.home-content {
  font-family: "Roboto", sans-serif;
  width: 100%;
  padding: 40px 0;
  text-align: center;
  font-weight: 200;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-content > div {
  background-color: #34495e;
  box-shadow: 22px 22px 30px #1e2b37, -22px -22px 30px #3a5169;
  padding: 10px 20px;
  border-radius: 5px;
}

a {
  text-decoration: none;
  background-color: #2c3e50;
  padding: 2px 4px;
  border-radius: 2px;
}
</style>