import { defineComponent } from 'vue';
import LoginInput from './LoginInput/LoginInput.vue'

export default defineComponent({
  name: 'LoginForm',
  components: { LoginInput },
  setup() {
    return {}
  },
  data() {
    return {
        text: '',
        
    }
  },
  
  methods: {
    handleSubmit(e:any){
        e.preventDefault()
        console.log('submitted', this.text)

    },
    
   
  },
  props: ['text']
});