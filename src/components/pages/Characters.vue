<template>
  <div class="list-character">
    <div v-for="character in characters.results" :key="character.id">
      <CardCharacter :character="character"></CardCharacter>
    </div>
  </div>
  <div class="page-changer">
    <button class="btn-change-page" v-if="pageCurr > 1"  @click.prevent="pageDown()">prev</button>
    <span>{{ pageCurr }}</span>
    <button class="btn-change-page" v-if="pageCurr < characters.infos.pages" @click.prevent="pageUp()">next</button>
  </div>
</template>

<script>
import CardCharacter from "../ui/CardCharacter";
export default {
  name: "Characters",
  data() {
    return {
      pageCurr: 1,
    };
  },
  components: {
    CardCharacter,
  },
  inject: ["characters"],
  methods: {
    pageDown() {
      if(this.pageCurr>1)
        this.pageCurr--;
        this.pageChanged();
    },
    pageUp() {
      if(this.pageCurr < this.characters.infos.pages)
        this.pageCurr++;
        this.pageChanged();
    },
    pageChanged(){
        this.$emit("page-changed", this.pageCurr);
    }

  },
  emits:["page-changed"]
};
</script>

<style scoped>

.list-character {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 40px;
}

.page-changer{
  text-align: center;
  margin-top: 50px;
}

.btn-change-page{
  background-color: #2c3e50;
  height: 30px;
  width: 50px;
  border: none;
  margin: 0 10px;
  margin-bottom: 40px;
  text-transform: uppercase;
  border-radius: 2px;
}

.btn-change-page:focus{
  outline: none;
}
</style>