<template>
  <v-app  id="start">
    <div class="row progressBar">
    <span v-if="!isEligiblePartTwo">
    <div class="indicatorEmpty offset" v-bind:class="{indicatorFilled: isInterested}">  </div>
    <div class="indicatorEmpty offset one" v-bind:class="{indicatorFilled: selectedOptionTwo.length !== 0 || selectedOptionThree !== ''}"> </div>
    <div class="indicatorEmpty offset two" v-bind:class="{indicatorFilled: isWilling}"> </div>
    <div class="indicatorEmpty offset three" v-bind:class="{indicatorFilled: hasAnsweredWouldLike}"> </div>
    <div class="indicatorEmpty offset four" v-bind:class="{indicatorFilled: isPlaceAnswered}"> </div> 
    <div class="indicatorEmpty offset five" v-bind:class="{indicatorFilled: hasChosenOption}"> </div> 
    </span>
    </div>
    <br>
    <div class="row">    
    <p class="col-sm-8 ml-6 "> Why are you interested in joining mPower? </p>
    <p class="col-md-10 ml-6 text-left tiny lead"> Select your reasons by selecting them below. You can remove them by clicking the X. </p>
    

     <v-btn v-model="selectedChoices"  class="ml-6 round long lightPurple" @click="handleClick(0)"
    v-bind:class="{ 'lightPurple': isLightPurple(0), 'darkPurple': isDarkPurple(0)}"> Want to help myself
      <v-icon v-bind:class="{ 'dark': isLightPurple(0)}" center>
      {{isLightPurple(0) ? 'remove_circle_outline': 'add_circle_outline'}}
      </v-icon>
    </v-btn>


    <!--viewport < 1024px-->
     <v-btn v-model="selectedChoices"  class="ml-6-restricted round x-long lightPurple" @click="handleClick(1)"
    v-bind:class="{ 'lightPurple': isLightPurple(1), 'darkPurple': isDarkPurple(1)}"> Want to help a loved one
      <v-icon v-bind:class="{ 'dark': isLightPurple(1)}" center>
      {{isLightPurple(1) ? 'remove_circle_outline': 'add_circle_outline'}}
      </v-icon>
    </v-btn>


     <v-btn v-model="selectedChoices"  class="ml-6-restricted-x round lightPurple" @click="handleClick(2)"
    v-bind:class="{ 'lightPurple': isLightPurple(2), 'darkPurple': isDarkPurple(2)}"> help others
      <v-icon v-bind:class="{ 'dark': isLightPurple(2)}" center>
      {{isLightPurple(2) ? 'remove_circle_outline': 'add_circle_outline'}}
      </v-icon>
    </v-btn>


    <!--TODO: FIX 768 PX VIEWPORT-->
    <!---->
     <v-btn v-model="selectedChoices" class=" round lightPurple ml-6-restricted" @click="handleClick(3)"
    v-bind:class="{ 'lightPurple': isLightPurple(3), 'darkPurple': isDarkPurple(3)}"> Am curious 
      <v-icon v-bind:class="{ 'dark': isLightPurple(3)}" center>
      {{isLightPurple(3) ? 'remove_circle_outline': 'add_circle_outline'}}
      </v-icon>
    </v-btn>
      <br class="visible-md-up">
      <br class="visible-md-up">
    </div>

    <div class="row">
  
      <br class="visible-md-up">
      <p class="col-md-8 ml-6 text-left"> I'd be willing to try </p>

      <v-btn v-model="selectedChoices"  class="ml-6 round x-long lightPurple" @click="handleClick(4)"
          v-bind:class="{ 'lightPurple': isLightPurple(4), 'darkPurple': isDarkPurple(4)}"> Finger Tapping
            <v-icon v-bind:class="{ 'dark': isLightPurple(4)}" center>
            {{isLightPurple(4) ? 'remove_circle_outline': 'add_circle_outline'}}
            </v-icon>
          </v-btn>


          <v-btn v-model="selectedChoices" class=" round lightPurple" @click="handleClick(5)"
          v-bind:class="{ 'lightPurple': isLightPurple(5), 'darkPurple': isDarkPurple(5)}"> Walking
            <v-icon v-bind:class="{ 'dark': isLightPurple(5)}" center>
            {{isLightPurple(5) ? 'remove_circle_outline': 'add_circle_outline'}}
            </v-icon>
          </v-btn>


          <v-btn v-model="selectedChoices" class="ml-6-restricted  round  lightPurple" @click="handleClick(6)"
          v-bind:class="{ 'lightPurple': isLightPurple(6), 'darkPurple': isDarkPurple(6)}"> balance
            <v-icon v-bind:class="{ 'dark': isLightPurple(6)}" center>
            {{isLightPurple(6) ? 'remove_circle_outline': 'add_circle_outline'}}
            </v-icon>
          </v-btn>
      
      <br class="visible-md-up">
      <br class="visible-md-up">
      
      <p class="col-md-8 ml-6 text-left"> I'd be willing to do this/these activities: </p>
      <v-flex class="col-sm-2 ml-6 col-4" >
        <v-radio label="Daily" value="radio-1" v-model="ex8" ></v-radio>
      </v-flex>
      <v-flex class="col-sm-2 col-8">
        <v-radio value="3x per week" label="3x/week" v-model="ex8" ></v-radio>
      </v-flex>
      <v-flex class="col-sm-2 col-6">
        <v-radio value="2x per week" label="2x/week" v-model="ex8" ></v-radio>
      </v-flex>
      <v-flex class="col-sm-2 col-6">
        <v-radio value="weekly" label="weekly" v-model="ex8" ></v-radio>
      </v-flex>

      <!--<v-select class="col-12 ml-6 col-md-4" label="Select frequency" v-bind:items="frequencyChoices" v-model="selectedOptionThree" chips hint="remove choices by clicking the X" persistent-hint></v-select>-->
    
    </div>

    <br class="visible-md-up">
    <div class="row"> 
      <p class="col-md-8 ml-6"> What would you like from us? </p>
       <v-btn v-model="selectedChoices" round class="ml-6 round x-long lightPurple" @click="handleClick(7)"
          v-bind:class="{ 'lightPurple': isLightPurple(7), 'darkPurple': isDarkPurple(7)}"> Updates on the study
            <v-icon v-bind:class="{ 'dark': isLightPurple(7)}" center>
            {{isLightPurple(7) ? 'remove_circle_outline': 'add_circle_outline'}}
            </v-icon>
          </v-btn>

          <!--viewport less < 1024-->
          <v-btn v-model="selectedChoices" round class="ml-6-restricted round lightPurple" @click="handleClick(8)"
          v-bind:class="{ 'lightPurple': isLightPurple(8), 'darkPurple': isDarkPurple(8)}"> Stats on participation
            <v-icon v-bind:class="{ 'dark': isLightPurple(8)}" center>
            {{isLightPurple(8) ? 'remove_circle_outline': 'add_circle_outline'}}
            </v-icon>
          </v-btn>


          <v-btn v-model="selectedChoices" round class=" round  lightPurple ml-6 " @click="handleClick(9)"
          v-bind:class="{ 'lightPurple': isLightPurple(9), 'darkPurple': isDarkPurple(9)}"> Personal performace
            <v-icon v-bind:class="{ 'dark': isLightPurple(9)}" center>
            {{isLightPurple(9) ? 'remove_circle_outline': 'add_circle_outline'}}
            </v-icon>
          </v-btn>
      <!--<v-select id="wouldLike" class="col-md-8 ml-6" label="Select choices" v-bind:items="returnChoices" v-model="selectedOptionFour" multiple chips hint="remove choices by clicking the X" persistent-hint></v-select>-->
    
      </div>
      <br>
      <div class="row">
        <br>
        <br>
          <v-btn v-on:click="clicked" id="submit" class="col-md-2 ml-6" light> Submit</v-btn>          
          <!--<button v-on:click="clicked" v-bind:class="{dim: !isEligiblePartTwo}" v-focus="isEligiblePartTwo" id="next"> Submit </button>-->
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
      selectedOptionOne: [],
      selectedOptionTwo: [],
      selectedOptionThree: '',
      selectedOptionFour: [],
      isInterested: false,
      isWilling: false,
      hasAnsweredWouldLike: false,
      isEligiblePartOne: false,
      age: '',
      zipCode: '',
      selectedOptionForPhone: '',
      isUnderage: null,
      isPlaceAnswered: null,
      hasChosenOption: false,
      isEligiblePartTwo: false,
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
      ex8: 'radio-1',
      turn: false,
      selectedChoices: [null, null, null, null, null, null, null, null, null],
      lightPurpleDisk: 'g',
      darkPurpleDisk: 'b',
      moves: []
    }
  },
  watch: {
    selectedChoices: function () {
      this.setIsInterested()
    },
    selectedOptionTwo: function (newOption) {
      this.setIsWilling()
    },
    selectedOptionThree: function (newOption) {
      this.setIsWilling()
    },
    selectedOptionFour: function (newOption) {
      this.setHasAnsweredWouldLike()
    },
    hasAnsweredWouldLike: function (newValue) {
      this.setIsEligiblePartOne()
    },
    age: function (newAge) {
      this.setIsUnderage()
    },
    zipCode: function (newZip) {
      this.setIsPlaceAnswered()
    },
    selectedOptionForPhone: function (newOption) {
      this.setHasChosenOption()
    },
    hasChosenOption: function () {
      this.setIsEligiblePartTwo()
    }
  },
  methods: {
    clicked () {
      // if (this.isEligiblePartOne && this.isEligiblePartTwo) {
      this.$router.push('Eligibility')
      // }
    },
    findValues (start, stop) {
      var inUse = 0
      for (var i = start; i < stop; i++) {
        if (this.selectedChoices[i] !== null) {
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
    setIsInterested: _.debounce(
      function () {
        this.isInterested = this.findValues(0, 4)
        console.log(this.isInterested)
        if (this.isInterested) {
          this.scrollPage('#willing')
        }
      },
    1500),
    setIsWilling: _.debounce(
      function () {
        this.isWilling = (this.isInterested && this.selectedOptionTwo.length >= 1 && this.selectedOptionThree.length >= 1)
        if (this.isWilling) {
          this.scrollPage('#wouldLike')
        }
      },
    1500),
    setHasAnsweredWouldLike: _.debounce(
      function () {
        this.hasAnsweredWouldLike = this.selectedOptionFour !== ''
      },
    500),
    setIsEligiblePartOne: _.debounce(
      function () {
        this.isEligiblePartOne = (this.isWilling && this.isInterested && this.hasAnsweredWouldLike)
        if (this.isEligiblePartOne) {
          this.scrollPage('#partTwo')
        }
      }, 250
    ),
    setIsUnderage: _.debounce(
      function () {
        if (this.age === '') {
          this.isUnderage = null
        } else {
          this.isUnderage = this.age < 18
        }
        if (!this.isUnderage) {
          this.scrollPage('#live')
        }
      }, 1000
    ),
    setIsPlaceAnswered: _.debounce(
      function () {
        this.isPlaceAnswered = (this.zipCode !== '' && this.zipCode >= 10000)
        if (this.isPlaceAnswered) {
          this.scrollPage('#option')
        } else {
          this.scrollPage('#zipError')
        }
      }, 2000
    ),
    setHasChosenOption: _.debounce(
      function () {
        this.hasChosenOption = (this.selectedOptionForPhone !== '')
      }, 1000
    ),
    setIsEligiblePartTwo: _.debounce(
      function () {
        this.isEligiblePartTwo = (!this.isUnderage && this.isPlaceAnswered && this.hasChosenOption)
        if (this.isEligiblePartTwo) {
          this.scrollPage('#btn')
        }
      }, 500
    ),
    handleClick: function (index) {
      this.turn = !this.turn
      this.turn ? this.selectedChoices[index] = this.darkPurpleDisk : this.selectedChoices[index] = this.lightPurpleDisk
    },
    isLightPurple: function (index) {
      return (this.selectedChoices[index] === this.lightPurpleDisk)
    },
    isDarkPurple: function (idx1) {
      return !(this.turn == null) && (this.selectedChoices[idx1] === this.darkPurpleDisk)
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
