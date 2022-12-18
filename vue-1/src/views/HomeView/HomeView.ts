

import InputForm from "@/components/InputForm/InputForm.vue";
import { defineComponent, ref } from "vue";



export default defineComponent({
    setup() {
        const count = ref(0)
        return { count }
    },
    data(){
        return{
            textInput: ''

        }
    },

    methods: {
        handleSubmit(){
            console.log(this.textInput)
        }

    },
    components: {
        InputForm
    }
        
});