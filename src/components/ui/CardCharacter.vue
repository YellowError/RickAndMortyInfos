<template>
  <div class="card">
    <img :src="character.image" alt="" />
    <div class="description">
      <div class="group-desc">
        <p class="title-desc">name :</p>
        <h3>{{ character.name }}</h3>
      </div>
      <div class="group-desc">
        <p class="title-desc">type :</p>
        <span v-if="character.species === 'Human'" class="human-badge">{{
          character.species
        }}</span>
        <span v-else class="alien-badge">{{ character.species }}</span>
      </div>
      <div class="group-desc">
        <p class="title-desc">gender :</p>
        <h3>{{ character.gender }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCaracter",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

.card{
    display: flex;
    background-color: #2c3e50;
    margin: 10px;
    border-radius: 4px;
    overflow: hidden;
    padding: 0;
    min-width: 350px;
    width: 400px;
    font-family: 'Roboto', sans-serif;
}

.title-desc{
    font-weight: 400;
    color: #4a6581;
}

.human-badge{
    background-color: #2980b9;
    padding: 0 2px;
    border-radius: 2px;
}

.alien-badge{
    background-color: #27ae60;
    padding: 0 2px;
    border-radius: 2px;
}

.card:hover{
    box-shadow: 0 0 60px 15px #517192;
    border: 1px solid #6885a0;
}

img{
    height: 200px;
    min-height: 190px;
    margin-right: 10px;
}

</style>