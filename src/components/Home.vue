<template>
  <div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ul id="multistep-progress">
          <li class="multistep-progress-active">Step 1</li>
          <li v-bind:class="{ 'multistep-progress-active': state === '/State2' || state === '/State3' || state === '/State4'}">Step 2</li>
          <li v-bind:class="{ 'multistep-progress-active': state === '/State3' || state === '/State4'}">Step 3</li>
          <li v-bind:class="{ 'multistep-progress-active': state === '/State4'}">Step 4</li>
        </ul>
      </div>
    </div>
  </div>

    <!-- 
      Components, components, and components. Another way would have been a simple if and else statement or routing. The below
      type of component rendering is good, because it allows us easily nest different components. The bad side is that we need
      to add the official Vue.js router and route handling to handle the browser back and forth button. I do not recommend the 
      below way to handle states. This problem was known for all Angular 1.x developers even with supported nested view routings.
      I left the props in child components for the below solution as a remainder.
    -->
    <!-- v-bind:is="state" -->
    <!--
    <State1 v-if="state==='State1'"></State1> 
    <State2 v-if="state==='State2'"></State2>
    <State3 v-if="state==='State3'"></State3>
    <State4 v-if="state==='State4' && person !== null" v-bind:person="person" v-bind:chosenVideo="chosenVideo" v-bind:selectedSex="selectedSex"></State4>
    -->

    <!-- Below, we are using router-view so that we can properly handle child states more easily. This type of configuration is
    necessary for enterprise applications, since they are constantly changing and can grow to major proportions. We are also
    using animate.css combined with transition effects. -->
    <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
      <router-view></router-view>
    </transition>
  
  </div>
</template>
<script>
import { bus } from "../main";

export default {
  name: "Home",

  data() {
    return {
      state: this.$route.fullPath,
      chosenVideo: null,
      selectedSex: null,
      person: null
    };
  },

  /*  We could use watchers, observers, broadcasters, routeparams, queries or any other type of solution for
      knowing the current state of the application. The below solution only serves as an example of one way to 
      implement a state change observation 
  */
  watch: {
    $route(to, from) {
      this.state = to.fullPath;
    }
  },

  created() {
    // In the below $on, we are receiving the next state from child components.
    /*bus.$on("next", message => {
      this.state = message;
    }); */

    // In the below $on, we are receiving the next state from child components.
    bus.$on("chosenVideo", message => {
      this.chosenVideo = message;
    });

    bus.$on("selectedSex", message => {
      this.selectedSex = message;
    });

    bus.$on("person", message => {
      this.person = message;
    });
  },

  methods: {
    // State. I didn't really need a method since inside the button I could have used "state++".
    /* changeState: function() {
      if (this.state === 1) {
        this.state = 2;
      } else {
        this.state = 3;
      }
    } */
  }
};
</script>
