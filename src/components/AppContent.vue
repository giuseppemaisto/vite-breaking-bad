<script>
import CharacterList from './CharacterList.vue';
import AppSelect from './AppSelect.vue'
import {store} from "../store.js"
import axios from 'axios'
export default {
  data(){
    return {
        store
    }
  },
  components:{
    CharacterList,
    AppSelect
  },
  methods:{
    selectArch(archetipo){
        let newUrl = store.urlcompleto + 'archetype=' + archetipo
        axios.get(newUrl).then((response)=>{
            store.cardsList = response.data.data
        })
    }
  }
}
</script>
<template lang="">
<main>
    <div class="container">
       <AppSelect @selectArchName="selectArch" :option="store.archetypeList"></AppSelect>
        <CharacterList></CharacterList>
    </div>
</main>
</template>
<style lang="scss">

    .container{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #d48f38;

       
    }
</style>