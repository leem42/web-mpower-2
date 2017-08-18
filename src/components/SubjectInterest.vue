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
  
      <p class="francisco tiny lead col-sm-8 ml-6"> I'm interested in joining mPower because I </p>
      <v-btn v-model="selectedChoice[0].color" class="ml-6 round lower long lightPurple" @click="handleClick(0)" v-bind:class="{ 'lightPurple': selectedChoice[0].color === 'lightPurple', 'darkPurple': selectedChoice[0].color === 'darkPurple'}"> Want to help myself &nbsp;
        <v-icon v-bind:class="{ 'custom-purple': selectedChoice[0].color === 'lightPurple', 'white--text': selectedChoice[0].color == 'darkPurple'}" center>
          {{selectedChoice[0].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[1].color" class="ml-6-restricted round lower x-long lightPurple" @click="handleClick(1)" v-bind:class="{ 'lightPurple':  selectedChoice[1].color == 'lightPurple', 'darkPurple': selectedChoice[1].color == 'darkPurple'}"> Want to help a loved one &nbsp;
        <v-icon v-bind:class="{ 'custom-purple': selectedChoice[1].color === 'lightPurple', 'white--text': selectedChoice[1].color == 'darkPurple'}" center>
          {{selectedChoice[1].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[2].color" class="ml-6-restricted-x round lower lightPurple" @click="handleClick(2)" v-bind:class="{ 'lightPurple':  selectedChoice[2].color == 'lightPurple', 'darkPurple': selectedChoice[2].color == 'darkPurple'}"> help others &nbsp;
        <v-icon v-bind:class="{ 'custom-purple': selectedChoice[2].color === 'lightPurple', 'white--text': selectedChoice[2].color == 'darkPurple'}" center>
          {{selectedChoice[2].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[3].color" class=" round lower lightPurple ml-6-restricted" @click="handleClick(3)" v-bind:class="{ 'lightPurple':  selectedChoice[3].color == 'lightPurple', 'darkPurple': selectedChoice[3].color == 'darkPurple'}"> Am curious &nbsp;
        <v-icon v-bind:class="{ 'custom-purple': selectedChoice[3].color === 'lightPurple', 'white--text': selectedChoice[3].color == 'darkPurple'}" center>
          {{selectedChoice[3].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
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
      for (var i = 0; i < this.selectedChoice.length; i++) {
        if (this.selectedChoice[i].color === 'darkPurple') {
          return true
        }
      }
      return false
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
