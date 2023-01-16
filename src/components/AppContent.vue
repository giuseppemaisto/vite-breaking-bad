<script>
import CharacterList from './CharacterList.vue';
import {store} from "../store.js"
export default {
  data(){
    return {
        store
    }
  },
  components:{
    CharacterList
  }
}
</script>
<template lang="">
<main>
    <div class="container">
        <div class="container-select">
            <select name="alien" id="">
                <option value="alien">alien</option>
            </select>
        </div>
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

        .container-select{
            width: 1400px;
            padding: 1rem 0;

            .select{
                border: none;
                padding: 1rem;
                width: 100px;
                font-size: 1rem;
            }
        }
    }
</style>