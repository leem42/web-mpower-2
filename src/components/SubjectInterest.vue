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
  
    <div class="row" id="controller">
      <v-btn id="next" class="darkPurple mx-auto" @click.native="handleController()" > Next </v-btn>
    </div>
    <div class="row">
      <p class="robot lead col-sm-8 ml-6 "> Why are you interested in joining mPower? </p>
      <br>
      <br>
  
      <p id="interest" class="francisco tiny lead col-sm-8 ml-6"> I'm interested in joining mPower because I </p>
      
      <span v-if="firstClick || first" class="ml-6"> 
          <v-btn v-if="selectedChoice[0]" class="round lower darkPurple"> Want to help myself 
          </v-btn>
      
          <v-btn v-if="selectedChoice[1]" class="round lower long darkPurple"> Want to help a loved one 
          </v-btn>
      
          <v-btn v-if="selectedChoice[2]" class="round lower darkPurple"> help others 
          </v-btn>
      
          <v-btn v-if="selectedChoice[3]" class="round lower darkPurple"> Am curious 
          </v-btn>
          
          <v-btn v-if="selectedChoice[4]" class=" round lower darkPurple"> another reason 
          </v-btn>
          <v-btn  class="blue white--text text-capitalize" @click.native="handleEdit(0)" > {{firstEdit ? "Edit": "Hide"}} </v-btn>
      </span>

      <v-checkbox v-if="!firstClick || !firstEdit" label="want to help myself" v-model="selectedChoice[0]" class="ml-6 col-12 customCheck darkPurple--text"></v-checkbox>
      <v-checkbox v-if="!firstClick || !firstEdit" label="want to help a loved one" v-model="selectedChoice[1]" class="ml-6 col-12 customCheck darkPurple--text"></v-checkbox>
      <v-checkbox v-if="!firstClick || !firstEdit" label="want to help others" v-model="selectedChoice[2]" class="ml-6 col-12 customCheck darkPurple--text"></v-checkbox>
      <v-checkbox v-if="!firstClick || !firstEdit" label="am curious" v-model="selectedChoice[3]" class="ml-6 col-12 customCheck darkPurple--text"></v-checkbox>
      <v-checkbox v-if="!firstClick || !firstEdit" label="another reason" v-model="selectedChoice[4]" class="ml-6 col-12 customCheck darkPurple--text"></v-checkbox>

      
      <br class="visible-md-up">
      <br class="visible-md-up">
    </div>


    <div class="row" v-if="containsValue(0,5)">
  
      <p class="col-md-8 ml-6 text-left lead"> I'd be willing to try  </p>
  
      <span v-if="secondClick || clickedTwice" class="ml-6">
        <v-btn v-if="selectedChoice[5]" class="round lower darkPurple"> finger tapping activity 
        </v-btn>
        <v-btn v-if="selectedChoice[6]" class="round lower darkPurple"> hand tremor activity 
        </v-btn>
        <v-btn v-if="selectedChoice[7]" class="round lower darkPurple"> balance activity 
        </v-btn>
        <v-btn v-if="selectedChoice[8]" class="round lower darkPurple"> brain teaser activity 
        </v-btn>
        <v-btn v-if="selectedChoice[9]" class="round lower darkPurple"> surveys 
        </v-btn>

        <v-btn class="blue white--text text-capitalize" v-on:click="handleEdit(1)"> {{secondEdit ? "Edit": "Hide"}} </v-btn>
      </span>

      <v-checkbox v-if="!secondClick || !secondEdit" label="finger tapping activity" v-model="selectedChoice[5]" class="ml-6 col-12 customCheck darkPurple--text"></v-checkbox>
      <v-checkbox v-if="!secondClick || !secondEdit" label="hand tremor activity" v-model="selectedChoice[6]" class="ml-6 col-12 customCheck darkPurple--text"></v-checkbox>
      <v-checkbox v-if="!secondClick || !secondEdit" label="balance activity" v-model="selectedChoice[7]" class="ml-6 col-12 customCheck darkPurple--text"></v-checkbox>
      <v-checkbox v-if="!secondClick || !secondEdit" label="brain teaser activity" v-model="selectedChoice[8]" class="ml-6 col-12 customCheck darkPurple--text"></v-checkbox>
      <v-checkbox v-if="!secondClick || !secondEdit" label="surveys" v-model="selectedChoice[9]" class="ml-6 col-12 customCheck darkPurple--text"></v-checkbox>

  
      <br class="visible-md-up">
      <br class="visible-md-up">
    </div>
    <div class="row" v-if="thirdClick">

    <p v-if="containsValue(4,6)" class="col-md-8 ml-6 text-left lead"> I'd be willing to do this/these activities: </p>
    <!--<v-flex v-if="containsValue(4,6)" class="col-sm-2 ml-6 col-4">
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
    </v-flex>-->

    </div>
  
    <!--<br class="visible-md-up" v-if="containsValue(7,9)">-->
    <div class="row" v-if="radioChoice !== ''">
      <p id="userRequest" class="col-md-8 ml-6 lead"> What would you like from us? </p>
      <v-btn v-model="selectedChoice[7].color" class="ml-6 round lower x-long lightPurple" v-bind:class="{ 'lightPurple': selectedChoice[7].color === 'lightPurple' , 'darkPurple': selectedChoice[7].color === 'darkPurple'}"> Updates on the study 
        <v-icon v-bind:class="{ 'custom-purple': selectedChoice[7].color === 'lightPurple', 'white--text': selectedChoice[7].color === 'darkPurple' }" center>
          {{selectedChoice[7].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[8].color" class="ml-6-restricted round lower lightPurple" v-bind:class="{ 'lightPurple': selectedChoice[8].color === 'lightPurple' , 'darkPurple': selectedChoice[8].color === 'darkPurple'}"> Stats on participation 
        <v-icon v-bind:class="{ 'custom-purple': selectedChoice[8].color === 'lightPurple', 'white--text': selectedChoice[8].color === 'darkPurple' }" center>
          {{selectedChoice[8].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="selectedChoice[9].color" class="round lower lightPurple ml-6-restricted " v-bind:class="{ 'lightPurple': selectedChoice[9].color === 'lightPurple' , 'darkPurple': selectedChoice[9].color === 'darkPurple'}"> Personal performace 
        <v-icon v-bind:class="{ 'custom-purple': selectedChoice[9].color === 'lightPurple', 'white--text': selectedChoice[9].color === 'darkPurple' }" center>
          {{selectedChoice[9].color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
    <br>
    <br>
    </div>
    <div class="row" v-if="false">
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
      selectedChoice: [false, false, false, false, false, false, false, false, false, false, false],
      firstClick: false,
      first: false,
      secondClick: false,
      second: false,
      thirdClick: false,
      third: false,
      firstEdit: true,
      secondEdit: true
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
    handleEdit: function (index) {
      if (index === 0) {
        this.firstEdit = !this.firstEdit
      } else if (index === 1) {
        this.secondEdit = !this.secondEdit
      }
    },
    handleClick: function (index) {
      this.selectedChoice[index] = !this.selectedChoice[index]
    },
    handleController: function () {
      if (this.firstClick) {
        this.secondClick = true
        this.second = true
      } else if (this.secondClick) {
        this.thirdClick = true
        this.third = true
      } else {
        this.firstClick = true
        this.first = true
      }
    },
    containsValue: function (start, stop) {
      for (var i = start; i < stop; i++) {
        if (this.selectedChoice[i] && this.firstClick) {
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
