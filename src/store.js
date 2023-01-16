import {reactive} from 'vue'

export const store = reactive({
    url:'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien',
    urlcompleto:'https://db.ygoprodeck.com/api/v7/cardinfo.php?',
    urlSecondo:'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardsList: [],
    archetypeList: [],
    
})