<template>
  <v-app>
    <div class="row progressBar">
        <div class="indicatorFilled offset"> </div>
        <div class="indicatorEmpty offset one"> </div>
        <div class="indicatorEmpty offset two"> </div>
        <div class="indicatorEmpty offset three"> </div>
        <div class="indicatorEmpty offset four"> </div>
        <div class="indicatorEmpty offset five"> </div>
    </div>
    <br>
    <br>
  
    <div class="row">
      <p class="robot lead col-sm-8 ml-6 "> Why are you interested in joining mPower? </p>
      <p class="robot col-md-10 ml-6 text-left subText dark-lead"> <strong> Select your reason(s) by choosing below. </strong> You can remove them by clicking the X. </p>
      <br>
      <br>
  
      <p id="interestedIn" class="francisco tiny lead col-sm-8 ml-6"> I'm interested in joining mPower because I </p>
        
      <v-select class="ml-6 col-sm-6"
          label="Select"
          v-bind:items="interestReasons"
          v-model="interestReasonsPicked"
          multiple
          chips
          single-line
        ></v-select>

      <br class="visible-md-up">
      <br class="visible-md-up">
    </div>

     <div class="row" v-if="containsValue()">
      <v-btn v-on:click="clicked" id="submit" class="text-capitalize col-md-2 ml-6" light> Next </v-btn>
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
      interestReasons: ['want to help myself', 'want to help a loved one', 'help others', 'am curious'],
      interestReasonsPicked: [],
      optionOne: {color: 'lightPurple'},
      optionTwo: {color: 'lightPurple'},
      optionThree: {color: 'lightPurple'},
      optionFour: {color: 'lightPurple'},
      lightPurpleDisk: 'lightPurple',
      darkPurpleDisk: 'darkPurple',
      turn: false
    }
  },
  computed: {
    selectedChoice: function () {
      return [this.optionOne, this.optionTwo, this.optionThree, this.optionFour]
    }
  },
  methods: {
    clicked () {
      this.$router.push('InterestTwo')
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
    containsValue: function () {
      return this.interestReasonsPicked.length > 0
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
