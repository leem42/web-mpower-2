<template>
  <v-app>
    <div class="row progressBar">
        <div class="indicatorEmpty offset" > </div>
        <div class="indicatorEmpty offset one"> </div>
        <div class="indicatorEmpty offset two"> </div>
        <div class="indicatorEmpty offset three"> </div>
        <div class="indicatorEmpty offset four"> </div>
        <div class="indicatorEmpty offset five"> </div>
    </div>  
    <br>
    <br>
    <div class="row">
      <p class="col-sm-8 ml-6 "> Why are you interested in joining mPower? </p>
      <p class="col-md-10 ml-6 text-left tiny lead"> Select your reasons by choosing below. You can remove them by clicking the X. </p>
      <br>
      <br>
  
      <p id="interest" class="lead col-sm-8 ml-6"> I'm interested in joining mPower because I </p>
      <v-btn v-model="selectedChoice[0].color" class="ml-6 round lower long lightPurple" @click="handleClick(0)" v-bind:class="{ 'lightPurple': selectedChoice[0].color === 'lightPurple', 'darkPurple': selectedChoice[0].color === 'darkPurple'}"> Want to help myself &nbsp;
  
        <v-icon v-bind:class="{ 'dark': selectedChoice[0].color === 'lightPurple', 'white--text': selectedChoice[0].color === 'darkPurple' }" center>
          {{selectedChoice[0].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[1].color" class="ml-6-restricted round lower x-long lightPurple" @click="handleClick(1)" v-bind:class="{ 'lightPurple': selectedChoice[1].color === 'lightPurple' , 'darkPurple': selectedChoice[1].color === 'darkPurple'}"> Want to help a loved one &nbsp;
        <v-icon v-bind:class="{ 'dark': selectedChoice[1].color === 'lightPurple', 'white--text': selectedChoice[1].color === 'darkPurple' }" center>
          {{selectedChoice[1].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[2].color" class="ml-6-restricted-x round lower lightPurple" @click="handleClick(2)" v-bind:class="{ 'lightPurple': selectedChoice[2].color === 'lightPurple' , 'darkPurple': selectedChoice[2].color === 'darkPurple'}"> help others &nbsp;
        <v-icon v-bind:class="{ 'dark': selectedChoice[2].color === 'lightPurple', 'white--text': selectedChoice[2].color === 'darkPurple' }" center>
          {{selectedChoice[2].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[3].color" class=" round lower lightPurple ml-6-restricted" @click="handleClick(3)" v-bind:class="{ 'lightPurple': selectedChoice[3].color === 'lightPurple' , 'darkPurple': selectedChoice[3].color === 'darkPurple'}"> Am curious &nbsp;
        <v-icon v-bind:class="{ 'dark': selectedChoice[3].color === 'lightPurple', 'white--text': selectedChoice[3].color === 'darkPurple' }" center>
          {{selectedChoice[3].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
      <br class="visible-md-up">
      <br class="visible-md-up">
    </div>
  
    <div class="row" v-if="containsValue(0,4)">
  
      <br class="visible-md-up">
      <p class="col-md-8 ml-6 text-left lead"> I'd be willing to try  </p>
  
      <v-btn v-model="selectedChoice[4].color" class="ml-6 round lower x-long lightPurple" @click="handleClick(4)" v-bind:class="{ 'lightPurple': selectedChoice[4].color === 'lightPurple' , 'darkPurple': selectedChoice[4].color === 'darkPurple'}"> Finger Tapping &nbsp;
        <v-icon v-bind:class="{ 'dark': selectedChoice[4].color === 'lightPurple', 'white--text': selectedChoice[4].color === 'darkPurple' }" center>
          {{selectedChoice[4].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[5].color" class=" round lower lightPurple" @click="handleClick(5)" v-bind:class="{ 'lightPurple': selectedChoice[5].color === 'lightPurple' , 'darkPurple': selectedChoice[5].color === 'darkPurple'}"> Walking &nbsp;
        <v-icon v-bind:class="{ 'dark': selectedChoice[5].color === 'lightPurple', 'white--text': selectedChoice[5].color === 'darkPurple' }" center>
          {{selectedChoice[5].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[6].color" class="ml-6-restricted  round lower  lightPurple" @click="handleClick(6)" v-bind:class="{ 'lightPurple': selectedChoice[6].color === 'lightPurple' , 'darkPurple': selectedChoice[6].color === 'darkPurple'}"> Balance &nbsp;
        <v-icon v-bind:class="{ 'dark': selectedChoice[6].color === 'lightPurple', 'white--text': selectedChoice[6].color === 'darkPurple' }" center>
          {{selectedChoice[6].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <br class="visible-md-up">
      <br class="visible-md-up">
  
      <p v-if="containsValue(4,6)" class="col-md-8 ml-6 text-left lead"> I'd be willing to do this/these activities: </p>
      <v-flex v-if="containsValue(4,6)" class="col-sm-2 ml-6 col-4">
        <v-radio label="Daily" value="radio-1" v-model="radioChoice"></v-radio>
      </v-flex>
      <v-flex v-if="containsValue(4,6)" class="col-sm-2 col-8">
        <v-radio value="3x per week" label="3x/week" v-model="radioChoice"></v-radio>
      </v-flex>
      <v-flex v-if="containsValue(4,6)" class="col-sm-2 col-6">
        <v-radio value="2x per week" label="2x/week" v-model="radioChoice"></v-radio>
      </v-flex>
      <v-flex v-if="containsValue(4,6)" class="col-sm-2 col-6">
        <v-radio value="weekly" label="weekly" v-model="radioChoice"></v-radio>
      </v-flex>
  
    </div>
  
    <!--<br class="visible-md-up" v-if="containsValue(7,9)">-->
    <div class="row" v-if="radioChoice !== ''">
      <p id="userRequest" class="col-md-8 ml-6 lead"> What would you like from us? </p>
      <v-btn v-model="selectedChoice[7].color" class="ml-6 round lower x-long lightPurple" @click="handleClick(7)" v-bind:class="{ 'lightPurple': selectedChoice[7].color === 'lightPurple' , 'darkPurple': selectedChoice[7].color === 'darkPurple'}"> Updates on the study &nbsp;
        <v-icon v-bind:class="{ 'dark': selectedChoice[7].color === 'lightPurple', 'white--text': selectedChoice[7].color === 'darkPurple' }" center>
          {{selectedChoice[7].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[8].color" class="ml-6-restricted round lower lightPurple" @click="handleClick(8)" v-bind:class="{ 'lightPurple': selectedChoice[8].color === 'lightPurple' , 'darkPurple': selectedChoice[8].color === 'darkPurple'}"> Stats on participation &nbsp;
        <v-icon v-bind:class="{ 'dark': selectedChoice[8].color === 'lightPurple', 'white--text': selectedChoice[8].color === 'darkPurple' }" center>
          {{selectedChoice[8].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[9].color" class="round lower lightPurple ml-6-restricted " @click="handleClick(9)" v-bind:class="{ 'lightPurple': selectedChoice[9].color === 'lightPurple' , 'darkPurple': selectedChoice[9].color === 'darkPurple'}"> Personal performace &nbsp;
        <v-icon v-bind:class="{ 'dark': selectedChoice[9].color === 'lightPurple', 'white--text': selectedChoice[9].color === 'darkPurple' }" center>
          {{selectedChoice[9].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
    <br>
    <br>
    </div>
    <div class="row" v-if="containsValue(7,9)">
      <v-btn v-on:click="clicked" id="submit" class="col-md-2 ml-6" light> Submit</v-btn>
    </div>
    <br>
    <br>
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
      selectedChoice: {
        0: {color: 'lightPurple'},
        1: {color: 'lightPurple'},
        2: {color: 'lightPurple'},
        3: {color: 'lightPurple'},
        4: {color: 'lightPurple'},
        5: {color: 'lightPurple'},
        6: {color: 'lightPurple'},
        7: {color: 'lightPurple'},
        8: {color: 'lightPurple'},
        9: {color: 'lightPurple'}
      }
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
    containsValue: function (start, stop) {
      for (var i = start; i < stop; i++) {
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
