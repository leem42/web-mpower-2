<template>
  <v-app>
    <div class="row progressBar">
      <div class="indicatorEmpty offset"> </div>
      <div class="indicatorEmpty offset one"> </div>
      <div class="indicatorEmpty offset two"> </div>
      <div class="indicatorEmpty offset three"> </div>
      <div class="indicatorEmpty offset four"> </div>
      <div class="indicatorEmpty offset five"> </div>
    </div>
    <br>
    <br>
  
    <div class="row" id="nextBtn">
      <v-btn class="controller darkPurple mx-auto" @click.native="handleController()"> {{radioChoice === '' ? "Next": "Submit"}} </v-btn>
    </div
    >
    <div class="row" id="backBtn">
      <v-btn class="controller darkPurple mx-auto" @click.native="handleController()"> Back </v-btn>
    </div>

    <div class="row">
      <p class="robot lead col-sm-8 ml-6 "> Why are you interested in joining mPower? </p>
      <p id="interest" class="francisco tiny lead col-sm-8 ml-6"> I'm interested in joining mPower because I </p>  
  
      <span v-if="firstClick && firstEdit" class="ml-6 mr-6">
        <v-btn flat v-if="selectedChoice[0]" @click.native="handleEdit(0)"  class="light-blue--text text-capitalize clickableLink francisco">  Want to help myself  
        </v-btn>
        <!--<span> {{ getPlacementText(0,5)}} </span>-->
        <v-btn flat v-if="selectedChoice[1]" @click.native="handleEdit(0)"  class="francisco light-blue--text text-capitalize clickableLink" >  Want to help a loved one 
        </v-btn>
        <!--<span> {{ getPlacementText(1,5)}} </span>  -->
        <v-btn flat v-if="selectedChoice[2]" @click.native="handleEdit(0)"  class="francisco light-blue--text text-capitalize clickableLink" >  help others
        </v-btn>
        <!--<span> {{ getPlacementText(2,5)}} </span>-->
        <v-btn flat v-if="selectedChoice[3]" @click.native="handleEdit(0)"  class="francisco light-blue--text text-capitalize clickableLink" >  Am curious
        </v-btn>
        <!--<span> {{ getPlacementText(3,5)}} </span>-->
        <v-btn flat v-if="selectedChoice[4]" @click.native="handleEdit(0)"  class="francisco light-blue--text text-capitalize clickableLink">  another reason 
        </v-btn>
      </span>
    </div>

    <v-btn v-if="first" v-bind:class="{'ml-6': firstEdit}" class="francisco ml-6 light-blue--text clickableLink white--text text-capitalize" @click.native="handleEdit(0)"> {{firstEdit ? "(Edit choices)": "Undo"}} </v-btn>
    
    <div class="row">
      <v-checkbox v-if="!firstClick || !firstEdit" label="want to help myself" v-model="selectedChoice[0]" class="ml-6 col-sm-3 customCheck darkPurple--text"></v-checkbox>
    </div>
    <div class="row">    
      <v-checkbox v-if="!firstClick || !firstEdit" label="want to help a loved one" v-model="selectedChoice[1]" class="ml-6 col-sm-3 customCheck darkPurple--text"></v-checkbox>
    </div>
    <div class="row">
      <v-checkbox v-if="!firstClick || !firstEdit" label="want to help others" v-model="selectedChoice[2]" class="ml-6 col-sm-3 customCheck darkPurple--text"></v-checkbox>
    </div>
    <div class="row">
      <v-checkbox v-if="!firstClick || !firstEdit" label="am curious" v-model="selectedChoice[3]" class="ml-6 col-sm-3 customCheck darkPurple--text"></v-checkbox>
    </div>
    <div class="row">
      <v-checkbox v-if="!firstClick || !firstEdit" label="another reason" v-model="selectedChoice[4]" class="ml-6 col-sm-3 customCheck darkPurple--text"></v-checkbox>
    </div>
    <span v-if="firstClick">
      <div class="row">
        <p class="col-md-8 ml-6 text-left lead"> I would be willing to try </p>
    
        <span v-if="secondClick || second" class="ml-6">
          <v-btn flat v-if="selectedChoice[5]" class="light-blue--text text-capitalize clickableLink francisco"> finger tapping activity
          </v-btn>
          <!--<span> {{ getPlacementText(5,10)}} </span>-->
          <v-btn flat v-if="selectedChoice[6]" class="light-blue--text text-capitalize clickableLink francisco"> hand tremor activity
          </v-btn>
          <!--<span> {{ getPlacementText(6,10)}} </span>-->
          <v-btn flat v-if="selectedChoice[7]" class="light-blue--text text-capitalize clickableLink francisco"> balance activity
          </v-btn>
          <!--<span> {{ getPlacementText(7,10)}} </span>-->
          <v-btn flat v-if="selectedChoice[8]" class="light-blue--text text-capitalize clickableLink francisco"> brain teaser activity
          </v-btn>
          <!--<span> {{ getPlacementText(8,10)}} </span>-->
          <v-btn flat v-if="selectedChoice[9]" class="light-blue--text text-capitalize clickableLink francisco"> surveys
          </v-btn>
        <v-btn class="light-blue--text white--text text-capitalize" v-on:click="handleEdit(1)"> {{secondEdit ? "Edit Choices": "Undo"}} </v-btn>
      </span>
      </div>
  
      <div class="row">
        <v-checkbox v-if="!secondClick || !secondEdit" label="finger tapping activity" v-model="selectedChoice[5]" class="ml-6 col-sm-3 customCheck darkPurple--text"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!secondClick || !secondEdit" label="hand tremor activity" v-model="selectedChoice[6]" class="ml-6 col-sm-3 customCheck darkPurple--text"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!secondClick || !secondEdit" label="balance activity" v-model="selectedChoice[7]" class="ml-6 col-sm-3 customCheck darkPurple--text"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!secondClick || !secondEdit" label="brain teaser activity" v-model="selectedChoice[8]" class="ml-6 col-sm-3 customCheck darkPurple--text"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!secondClick || !secondEdit" label="surveys" v-model="selectedChoice[9]" class="ml-6 col-sm-3 customCheck darkPurple--text"></v-checkbox>
      </div>
    </div>
    </span>    
    <br v-if="!secondClick">
    <br v-if="!secondClick">
    <br v-if="!secondClick">
    <span v-if="secondClick">
      <div class="row">
        <p class="col-md-8 ml-6 text-left lead"> I'd be willing to do this/these activities:</p>
      </div>
      <div class="row">
        <v-flex class="col-sm-2 ml-6 ">
          <v-radio class="light-blue--text" label="Daily" value="radio-1" v-model="radioChoice"></v-radio>
        </v-flex>
      </div>
      <div class="row">
        <v-flex class="col-sm-2 ml-6">
          <v-radio class="light-blue--text"  value="3x per week" label="3x/week" v-model="radioChoice"></v-radio>
        </v-flex>
      </div>
      <div class="row">
        <v-flex class="col-sm-2 ml-6">
          <v-radio class="light-blue--text"  value="2x per week" label="2x/week" v-model="radioChoice"></v-radio>
        </v-flex>
      </div>
      <div class="row">
        <v-flex class="col-sm-2 ml-6">
          <v-radio class="light-blue--text"  value="weekly" label="weekly" v-model="radioChoice"></v-radio>
        </v-flex>
      </div>    
    </span>
    <br v-if="!thirdClick">
    <br v-if="!thirdClick">
    <br v-if="!thirdClick">

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
      if (this.firstClick && !this.secondClick) {
        this.secondClick = true
        this.second = true
      } else if (this.secondClick) {
        this.thirdClick = true
      } else {
        this.firstClick = true
        this.first = true
      }
    },
    containsValue: function (start, stop) {
      for (var i = start; i < stop; i++) {
        if (this.selectedChoice[i]) {
          return true
        }
      }
      return false
    },
    getPlacementText: function (start, stop) {
      // am I open and is there a single space to the right or a multi space
      if (this.selectedChoice[start]) {
        var count = 0
        for (var i = start + 1; i < stop; i++) {
          if (this.selectedChoice[i]) {
            count = count + 1
          }
        }
        if (count === 1) {
          return 'and'
        } else if (count > 1) {
          return ','
        }
        // else on choice and return nothing
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
