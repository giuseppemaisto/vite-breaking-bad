    <script>
    import axios from 'axios'
    import AppHeader from './components/AppHeader.vue';
    import AppContent from './components/AppContent.vue';
    import AppLoader from './components/AppLoader.vue';
    import CharacterList from './components/CharacterList.vue'
    import {store} from './store.js'
    export default {
      components: {
        AppHeader,
        CharacterList,
        AppContent,
        AppLoader
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
            store.loading = false
          })

          axios.get(store.urlSecondo).then((response)=>{
            store.archetypeList = response.data 
          })
        }
      },
      
    }
    </script>
<template lang="">
  <div v-if="store.loading">
    <AppLoader></AppLoader>
  </div>
  <div v-else>
    <AppHeader></AppHeader>
    <AppContent></AppContent>
    
  </div>
  
</template>
<style lang="scss">
  @use '../src/assets/styles/generals.scss'
</style>