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
        email: '',
        password: '',
        emailLabel: 'Email',
        passwordLabel: "Password"
    }
  },
  
  methods: {
    handleSubmit(e:any){
        e.preventDefault()
        console.log('submitted', this.email, this.password)

    }
  }
});