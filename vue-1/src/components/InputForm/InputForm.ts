// import { defineComponent } from "vue";

import type { Player } from "@/types"
import { defineComponent, ref } from "vue"


export default defineComponent({
    name: "inputForm",
    components: {},
    setup(){
        const players = ref<Player[]>([
            {name: 'Phawkman', weapon: 'M416', id: "1"},
            {name: 'Ekkann', weapon: 'SLR', id: "2"},
            {name: 'McWonder', weapon: 'SKS', id: "3"},
            {name: 'Lirapub', weapon: 'Berryl', id: "4"},
            
        ])
        return{ players

        }
    },

   
    data(){
        return{
            message: 'hello world',
            text: '',
            password: '',
        }
    },
    
    methods:{
        handleSubmit()  {
            console.log(this.text, this.password)
            
        }
    }






})

