<template>
  <v-app>
    <div class="row progressBar">
        <div class="indicatorFilled offset"> </div>
        <div class="indicatorFilled offset one"> </div>
        <div class="indicatorEmpty offset two"> </div>
        <div class="indicatorEmpty offset three"> </div>
        <div class="indicatorEmpty offset four"> </div>
        <div class="indicatorEmpty offset five"> </div>
    </div>
    <br>
    <br>
    <div class="row">
      <p class="robot col-sm-8 ml-6 lead"> Why are you interested in joining mPower? </p>
      <br>
      <br>
    </div>
  
    <div class="row">
      <p class="francisco tiny col-md-8 ml-6 lead"> I would like to recieve </p>
  
      <v-select class="ml-6
        col-sm-6" label="Select" v-model="userRequestsChosen" v-bind:items="userRequests" multiple chips single-line >
      </v-select>

    </div>
    <br>
    <div class="row" v-if="containsValues()">
      <v-btn v-on:click="clicked" id="submit" class="col-md-2 ml-6" light> Next </v-btn>
    </div>
    </div>
  </v-app>
</template>



<script>
import { Focus } from '../directives/focus.js'
import _ from 'lodash'
export default {
  name: 'subjectInterest',
  data () {
    return {
      userRequests: ['Updates on the study', 'Stats on particpation', 'Personal Performance'],
      userRequestsChosen: [],
      optionOne: {color: 'lightPurple'},
      optionTwo: {color: 'lightPurple'},
      optionThree: {color: 'lightPurple'},
      lightPurpleDisk: 'lightPurple',
      darkPurpleDisk: 'darkPurple',
      turn: false
    }
  },
  computed: {
    selectedChoice: function () {
      return [this.optionOne, this.optionTwo, this.optionThree]
    }
  },
  methods: {
    clicked () {
      this.$router.push('Eligibility')
    },
    scrollPage: _.debounce(
      function (arg1) {
        this.$scrollTo(arg1, 1500, { easing: 'linear' })
      }
    , 200),
    handleClick: function (index) {
      if (this.selectedChoice[index].color === 'darkPurple') {
        this.selectedChoice[index].color = 'lightPurple'
      } else {
        this.selectedChoice[index].color = 'darkPurple'
      }
    },
    containsValues: function () {
      return this.userRequests.length > 0
    }
  },
  directives: {
    Focus
  }
}
</script>

<style>
button:disabled {
  opacity: 0.5;
}

.dim {
  opacity: 0.5
}
</style>
