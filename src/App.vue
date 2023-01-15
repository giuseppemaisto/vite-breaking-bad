    <script>
    import axios from 'axios'
    import AppHeader from './components/AppHeader.vue';
    import AppContent from './components/AppContent.vue';
    import CharacterList from './components/CharacterList.vue'
    import {store} from './store.js'
    export default {
      components: {
        AppHeader,
        CharacterList,
        AppContent
      }, 
      data(){
        return {
          store
        }
      },
      created(){

        this.getCardList()
      },
      methods: {
        getCardList(){
          axios.get(store.url).then((response) => {
            store.cardsList = response.data.data
          })
        }
      },
      
    }
    </script>
<template lang="">
  <div>
    
  </div>
</template>
<style lang="scss">
  @use '../src/assets/styles/generals.scss'
</style>