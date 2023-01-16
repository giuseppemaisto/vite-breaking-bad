<script>
import Card from './Card.vue'
import {store} from '../store.js'
export default {
  components:{
    Card
  },
  data() {
    return {
        store
    }
  },
}
</script>
<template lang="">
<div class="container-card">
    <Card v-for="(element, index) in store.cardsList" ::key="index" :card="element"></Card>
</div>
</template>
<style lang="scss">
    .container-card{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 1400px;
        background-color: white;
        padding: 2rem;
    }
</style>
