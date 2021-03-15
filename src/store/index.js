import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    colorCode:'dwdwefrdf',
  },
  mutations: {
    decreaseCounter(state) {
      state.counter--;
    },
    increaseCounter(state, randomNumber) {
      console.log(randomNumber);

      state.counter = randomNumber;
    },
    setColorCode(state,newValue){
      state.colorCode=newValue;
    },
    checkFun(){
      console.log("Call Function");
    }
    


  },
  actions: {
    async decreaseCounter({ commit }) {
      console.log("Action Occured");

      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        console.log(response);
        commit("increaseCounter", response.data);
      });

      console.log("Await done");
    },
    increaseCounter(state) {
      console.log("Action Occured");

      console.log("Await done");
    },
  },
  getters:{
counterSquared(state){
  return state.counter*state.counter
}
  },
  modules: {},
});
