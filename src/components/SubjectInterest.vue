<template>
  <v-app>
    <!--<div class="row progressBar">
        <div class="indicatorEmpty offset"> </div>
        <div class="indicatorEmpty offset one"> </div>
        <div class="indicatorEmpty offset two"> </div>
        <div class="indicatorEmpty offset three"> </div>
        <div class="indicatorEmpty offset four"> </div>
        <div class="indicatorEmpty offset five"> </div>
    </div>-->  
    <div class="row">
      <p class="col-sm-8 ml-6 "> Why are you interested in joining mPower? </p>
      <p class="col-md-10 ml-6 text-left tiny lead"> Select your reasons by choosing below. You can remove them by clicking the X. </p>
      <br>
      <br>
  
      <p class="lead col-sm-8 ml-6"> I'm interested in the joining mPower because I </p>
      <v-btn v-model="selectedChoices" class="ml-6 round lower long lightPurple" @click="handleClick(0)" v-bind:class="{ 'lightPurple': isLightPurple(0), 'darkPurple': isDarkPurple(0)}"> Want to help myself
  
        <v-icon v-bind:class="{ 'dark': isLightPurple(0)}" center>
          {{isLightPurple(0) ? 'add_circle_outline': 'remove_circle_outline'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoices" class="ml-6-restricted round lower x-long lightPurple" @click="handleClick(1)" v-bind:class="{ 'lightPurple': isLightPurple(1), 'darkPurple': isDarkPurple(1)}"> Want to help a loved one
        <v-icon v-bind:class="{ 'dark': isLightPurple(1)}" center>
          {{isLightPurple(1) ? 'add_circle_outline': 'remove_circle_outline'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoices" class="ml-6-restricted-x round lower lightPurple" @click="handleClick(2)" v-bind:class="{ 'lightPurple': isLightPurple(2), 'darkPurple': isDarkPurple(2)}"> help others
        <v-icon v-bind:class="{ 'dark': isLightPurple(2)}" center>
          {{isLightPurple(2) ? 'add_circle_outline': 'remove_circle_outline'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoices" class=" round lower lightPurple ml-6-restricted" @click="handleClick(3)" v-bind:class="{ 'lightPurple': isLightPurple(3), 'darkPurple': isDarkPurple(3)}"> Am curious
        <v-icon v-bind:class="{ 'dark': isLightPurple(3)}" center>
          {{isLightPurple(3) ? 'add_circle_outline': 'remove_circle_outline'}}
        </v-icon>
      </v-btn>
      <br class="visible-md-up">
      <br class="visible-md-up">
    </div>
  
    <div class="row" v-if="findValues(0,4)">
  
      <br class="visible-md-up">
      <p class="col-md-8 ml-6 text-left lead"> I'd be willing to try </p>
  
      <v-btn v-model="selectedChoices" class="ml-6 round lower x-long lightPurple" @click="handleClick(4)" v-bind:class="{ 'lightPurple': isLightPurple(4), 'darkPurple': isDarkPurple(4)}"> Finger Tapping
        <v-icon v-bind:class="{ 'dark': isLightPurple(4)}" center>
          {{isLightPurple(4) ? 'add_circle_outline': 'remove_circle_outline'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoices" class=" round lower lightPurple" @click="handleClick(5)" v-bind:class="{ 'lightPurple': isLightPurple(5), 'darkPurple': isDarkPurple(5)}"> Walking
        <v-icon v-bind:class="{ 'dark': isLightPurple(5)}" center>
          {{isLightPurple(5) ? 'add_circle_outline': 'remove_circle_outline'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoices" class="ml-6-restricted  round lower  lightPurple" @click="handleClick(6)" v-bind:class="{ 'lightPurple': isLightPurple(6), 'darkPurple': isDarkPurple(6)}"> Balance
        <v-icon v-bind:class="{ 'dark': isLightPurple(6)}" center>
          {{isLightPurple(6) ? 'add_circle_outline': 'remove_circle_outline'}}
        </v-icon>
      </v-btn>
  
      <br class="visible-md-up">
      <br class="visible-md-up">
  
      <p v-if="findValues(4,6)" class="col-md-8 ml-6 text-left lead"> I'd be willing to do this/these activities: </p>
      <v-flex v-if="findValues(4,6)" class="col-sm-2 ml-6 col-4">
        <v-radio label="Daily" value="radio-1" v-model="ex8"></v-radio>
      </v-flex>
      <v-flex v-if="findValues(4,6)" class="col-sm-2 col-8">
        <v-radio value="3x per week" label="3x/week" v-model="ex8"></v-radio>
      </v-flex>
      <v-flex v-if="findValues(4,6)" class="col-sm-2 col-6">
        <v-radio value="2x per week" label="2x/week" v-model="ex8"></v-radio>
      </v-flex>
      <v-flex v-if="findValues(4,6)" class="col-sm-2 col-6">
        <v-radio value="weekly" label="weekly" v-model="ex8"></v-radio>
      </v-flex>
  
    </div>
  
    <!--<br class="visible-md-up" v-if="findValues(7,9)">-->
    <div class="row" v-if="ex8 !== ''">
      <p class="col-md-8 ml-6 lead"> What would you like from us? </p>
      <v-btn v-model="selectedChoices" class="ml-6 round lower x-long lightPurple" @click="handleClick(7)" v-bind:class="{ 'lightPurple': isLightPurple(7), 'darkPurple': isDarkPurple(7)}"> Updates on the study
        <v-icon v-bind:class="{ 'dark': isLightPurple(7)}" center>
          {{isLightPurple(7) ? 'add_circle_outline': 'remove_circle_outline'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoices" class="ml-6-restricted round lower lightPurple" @click="handleClick(8)" v-bind:class="{ 'lightPurple': isLightPurple(8), 'darkPurple': isDarkPurple(8)}"> Stats on participation
        <v-icon v-bind:class="{ 'dark': isLightPurple(8)}" center>
          {{isLightPurple(8) ? 'add_circle_outline': 'remove_circle_outline'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoices" class="round lower lightPurple ml-6-restricted " @click="handleClick(9)" v-bind:class="{ 'lightPurple': isLightPurple(9), 'darkPurple': isDarkPurple(9)}"> Personal performace
        <v-icon v-bind:class="{ 'dark': isLightPurple(9)}" center>
          {{isLightPurple(9) ? 'add_circle_outline': 'remove_circle_outline'}}
        </v-icon>
      </v-btn>
  
    </div>
    <br>
    <div class="row" v-if="findValues(7,9)">
      <br class="visible-sm-up">
      <br class="visible-sm-up">
      <v-btn v-on:click="clicked" id="submit" class="col-md-2 ml-6" light> Submit</v-btn>
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
      interestChoices: [
        'want to help myself',
        'want to help a loved one',
        'help others',
        'am curious'],
      willingChoices: [
        'finger tapping',
        'walk',
        'balance',
        'finger to nose',
        'short surveys'
      ],
      frequencyChoices: [
        'daily',
        '3x per week',
        '2x per week',
        'weekly'
      ],
      returnChoices: [
        'updates on the study',
        'stats on participation',
        'personal performance'
      ],
      phoneChoices: [
        'comfortable',
        'weary',
        'uncomfortable'
      ],
      ex8: '',
      selectedChoices: ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
      lightPurpleDisk: 'g',
      darkPurpleDisk: 'b',
      turn: false
    }
  },
  watch: {
    selectedChoices: function () {
      this.setIsInterested()
    }
  },
  methods: {
    clicked () {
      this.$router.push('Eligibility')
    },
    findValues: function (start, stop) {
      var inUse = 0
      for (var i = start; i < stop; i++) {
        if (this.selectedChoices[i] === 'b') {
          inUse++
        }
      }
      return (inUse > 0)
    },
    scrollPage: _.debounce(
      function (arg1) {
        this.$scrollTo(arg1, 1500, { easing: 'linear' })
      }
    , 200),
    handleClick: function (index) {
      this.turn = !this.turn
      this.turn ? this.selectedChoices[index] = this.darkPurpleDisk : this.selectedChoices[index] = this.lightPurpleDisk
    },
    isLightPurple: function (index) {
      return (this.selectedChoices[index] === this.lightPurpleDisk)
    },
    isDarkPurple: function (idx1) {
      return !(this.turn == null) && (this.selectedChoices[idx1] === this.darkPurpleDisk)
    },
    isInitial: function (index) {
      if (this.intial[index]) {
        this.intial[index] = false
        return true
      } else {
        return this.intial[index]
      }
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
