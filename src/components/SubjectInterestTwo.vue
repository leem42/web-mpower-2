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
      <p class="robot lead col-sm-8 ml-6 "> Why are you interested in joining mPower? </p>
      <p class="robot col-md-10 ml-6 text-left subText dark-lead"> Select your reasons by choosing below. You can remove them by clicking the X. </p>
      <br>
      <br>
        
    </div>
  
    <div class="row">
  
      <br class="visible-md-up">
      <p class="tiny francisco col-md-8 ml-6 text-left lead"> I'd be willing to try </p>
  
      <v-btn v-model="selectedChoice[0].color" class="ml-6 round lower lightPurple" @click="handleClick(0)" v-bind:class="{ 'lightPurple': selectedChoice[0].color === 'lightPurple', 'darkPurple': selectedChoice[0].color === 'darkPurple'}"> Finger Tapping &nbsp;
        <v-icon v-bind:class="{ 'white--text': selectedChoice[0].color === 'darkPurple', 'custom-purple': selectedChoice[0].color === 'lightPurple'}" center>
          {{selectedChoice[0].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[1].color" class=" round lower lightPurple" @click="handleClick(1)" v-bind:class="{ 'lightPurple': selectedChoice[1].color === 'lightPurple', 'darkPurple': selectedChoice[1].color === 'darkPurple'}"> Walking &nbsp;
        <v-icon v-bind:class="{ 'white--text': selectedChoice[1].color === 'darkPurple', 'custom-purple': selectedChoice[1].color === 'lightPurple'}" center>
          {{selectedChoice[1].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[2].color" class="ml-6-restricted  round lower  lightPurple" @click="handleClick(2)" v-bind:class="{ 'lightPurple': selectedChoice[2].color === 'lightPurple', 'darkPurple': selectedChoice[2].color === 'darkPurple'}"> Balance &nbsp;
        <v-icon v-bind:class="{ 'white--text': selectedChoice[2].color === 'darkPurple', 'custom-purple': selectedChoice[2].color === 'lightPurple'}" center>
          {{selectedChoice[2].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <br class="visible-md-up">
      <br class="visible-md-up">
  
      <p id="willing" v-if="containsValues()" class="francisco tiny col-md-8 ml-6 text-left lead"> I'd be willing to do this/these activities: </p>
      
      <v-btn v-if="containsValues()" v-model="selectedChoice[3].color" class="ml-6 round lower lightPurple" @click="handleClick(3)" v-bind:class="{ 'lightPurple': selectedChoice[3].color === 'lightPurple', 'darkPurple': selectedChoice[3].color === 'darkPurple'}"> Daily &nbsp;
        <v-icon v-bind:class="{ 'white--text': selectedChoice[3].color === 'darkPurple', 'custom-purple': selectedChoice[3].color === 'lightPurple'}" center>
          {{selectedChoice[3].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-if="containsValues()" v-model="selectedChoice[4].color" class=" round lower lightPurple" @click="handleClick(4)" v-bind:class="{ 'lightPurple': selectedChoice[4].color === 'lightPurple', 'darkPurple': selectedChoice[4].color === 'darkPurple'}"> 4x/week &nbsp;
        <v-icon v-bind:class="{ 'white--text': selectedChoice[4].color === 'darkPurple', 'custom-purple': selectedChoice[4].color === 'lightPurple'}" center>
          {{selectedChoice[4].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-if="containsValues()" v-model="selectedChoice[5].color" class="ml-6-restricted  round lower  lightPurple" @click="handleClick(5)" v-bind:class="{ 'lightPurple': selectedChoice[5].color === 'lightPurple', 'darkPurple': selectedChoice[5].color === 'darkPurple'}"> 2x/week &nbsp;
        <v-icon v-bind:class="{ 'white--text': selectedChoice[5].color === 'darkPurple', 'custom-purple': selectedChoice[5].color === 'lightPurple'}" center>
          {{selectedChoice[5].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>

      <v-btn v-if="containsValues()" v-model="selectedChoice[6].color" class="ml-6-restricted  round lower  lightPurple" @click="handleClick(6)" v-bind:class="{ 'lightPurple': selectedChoice[6].color === 'lightPurple', 'darkPurple': selectedChoice[6].color === 'darkPurple'}"> Weekly &nbsp;
        <v-icon v-bind:class="{ 'white--text': selectedChoice[6].color === 'darkPurple', 'custom-purple': selectedChoice[6].color === 'lightPurple'}" center>
          {{selectedChoice[6].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
 
    </div>
  
    <div class="row" v-if="containsValues()">
      <v-btn v-on:click="clicked" id="submit" class="robot col-md-2 ml-6 text-capitalize" light> Next </v-btn>
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
      radioChoice: '',
      optionOne: {color: 'lightPurple'},
      optionTwo: {color: 'lightPurple'},
      optionThree: {color: 'lightPurple'},
      optionFour: {color: 'lightPurple'},
      optionFive: {color: 'lightPurple'},
      optionSix: {color: 'lightPurple'},
      optionSeven: {color: 'lightPurple'},
      lightPurpleDisk: 'lightPurple',
      darkPurpleDisk: 'darkPurple',
      turn: false
    }
  },
  computed: {
    selectedChoice: function () {
      return [this.optionOne, this.optionTwo, this.optionThree, this.optionFour, this.optionFive, this.optionSix, this.optionSeven]
    }
  },
  methods: {
    clicked () {
      this.$router.push('InterestThree')
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
        if (index > 2) {
          for (var i = 3; i < 7; i++) {
            if (i !== index) {
              this.selectedChoice[i].color = 'lightPurple'
            }
          }
        }
      }
    },
    containsValues: function () {
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
