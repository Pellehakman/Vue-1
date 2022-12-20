import { computed, defineComponent, ref } from "vue";
import jsonData from '../../data/calender.json'
import type {Calender} from '../../models/Calender'

export default defineComponent({
 
data(){

    let data = jsonData


    



    console.log(data)
    


    return{
        data, 
        fruits: [
            { name: 'Orange', amount: 3 },
            { name: 'Apple', amount: 5 },
          ],
          
    }
},


    setup(){

       

        
    },
    methods: {
        // handleDays(){
        //     for (let i = 0; i < this.data.Apr.days
        //         ; i++) {
               
        //            this.dagar.push({i})
        //       }
              handleDays() {
                for (let i = 0; i < this.data.Apr.days; i++)
                this.fruits.push({ name: 'Banana', amount: 4 });
               

        }
    }
   

})