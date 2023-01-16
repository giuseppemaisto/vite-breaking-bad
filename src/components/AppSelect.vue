        <script>
        import{ store } from '../store' 
        export default {
            props:{
                option: Object
            },
            data(){
                return{
                    arch: '',
                    store
                }
            }
        }
        </script>
<template lang="">
   <div class="container-select">
    <select class="select-style" name="alien" id="" v-model="arch" @change="$emit('selectArchName', arch)">
    <option value="">seleziona un Archetipo</option>
    <option v-for="(element,index) in option" :value="element.archetype_name">{{element.archetype_name}}</option>
    </select>
    <div class="container-num">
        <h4>{{store.cardsList.lenght}} carte trovate </h4>
    </div>
   </div>
</template>
<style lang="scss" scoped>
.container-select{
    width: 1200px;
    height: 100px;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    color:white;

    .container-num{
        display: flex;
        align-items: center;
        padding: 0 1rem;
        background-color: black;
        color: white;
        height: 100%;

        h4{
            color: white;
        }

    }

    .select-style{
        background-color: black;
        width: 300px;
        height: 100%;
        color: white;
        border: none;
        padding: 1rem;
    }
}
    
</style>