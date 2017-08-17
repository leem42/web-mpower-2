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
      <p class="col-sm-8 ml-6 lead"> Why are you interested in joining mPower? </p>
      <p class="col-md-10 ml-6 text-left subText dark-lead"> Select your reasons by choosing below. You can remove them by clicking the X. </p>
      <br>
      <br>
    </div>
  
    <div class="row">
      <p class="tiny col-md-8 ml-6 lead"> I would like to recieve </p>
      <v-btn v-model="selectedChoice[0].color" class="ml-6 round lower x-long lightPurple" @click="handleClick(0)" v-bind:class="{ 'lightPurple': selectedChoice[0].color === 'lightPurple', 'darkPurple': selectedChoice[0].color === 'darkPurple'}"> Updates on the study &nbsp;
        <v-icon v-bind:class="{ 'white--text': selectedChoice[0].color === 'darkPurple', 'dark': selectedChoice[0].color === 'lightPurple'}" center>
          {{selectedChoice[0].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[1].color" class="ml-6-restricted round lower lightPurple" @click="handleClick(1)" v-bind:class="{ 'lightPurple': selectedChoice[1].color === 'lightPurple', 'darkPurple': selectedChoice[1].color === 'darkPurple'}"> Stats on participation &nbsp;
        <v-icon v-bind:class="{ 'white--text': selectedChoice[1].color === 'darkPurple', 'dark': selectedChoice[1].color === 'lightPurple'}" center>
          {{selectedChoice[1].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[2].color" class="round lower lightPurple ml-6 " @click="handleClick(2)" v-bind:class="{ 'lightPurple': selectedChoice[2].color === 'lightPurple', 'darkPurple': selectedChoice[2].color === 'darkPurple'}"> Personal performace &nbsp;
        <v-icon v-bind:class="{ 'white--text': selectedChoice[2].color === 'darkPurple', 'dark': selectedChoice[2].color === 'lightPurple'}" center>
          {{selectedChoice[2].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
    </div>
    <br>
    <div class="row" v-if="containsValues()">
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
