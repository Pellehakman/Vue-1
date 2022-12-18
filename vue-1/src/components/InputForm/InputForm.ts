// import { defineComponent } from "vue";

import { defineComponent } from "vue"
const [count, setCount] = useState<string>('')
console.log(count)
export default defineComponent({

    name: 'InputForm',
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
            setCount(this.text)
        }
    }






})

function useState<T>(arg0: string): [any, any] {
    throw new Error("Function not implemented.")
}
