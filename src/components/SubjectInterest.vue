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
      <v-btn flat class="controller white--text mx-auto text-capitalize" @click.native="handleController()"> {{thirdClick ? "Submit": "Next"}} </v-btn>
    </div>
  
    <!--<div class="row" id="backBtn">
        <v-btn class="controller white--text text-capitalize mx-auto" @click.native="handleController()"> Back </v-btn>
      </div>-->
  
    <!-- Section 1.
  
        I'm interest in joining because
  
      -->
      <br>
    <div class="row">
      <p class="robot hideOnSmall lead col-sm-8 ml-6 "> Why are you interested in joining mPower?
      </p>
      <span id="interest" class="francisco tiny lead col-sm-8 ml-6"> I'm interested in joining mPower because I
  
        <span v-if="firstEdit" class="p-0">
          <v-btn flat v-if="selectedChoice[0]" @click.native="handleEdit(0)" class=" text-capitalize clickableLink middle francisco"> Want to help myself
          </v-btn>
          {{getPlacementText(0,5)}}
          <v-btn flat v-if="selectedChoice[1]" @click.native="handleEdit(0)" class="francisco text-capitalize clickableLink"> Want to help a loved one
          </v-btn>
          {{getPlacementText(1,5)}}
          <v-btn flat v-if="selectedChoice[2]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink"> help others
          </v-btn>
          {{getPlacementText(2,5)}}
          <v-btn flat v-if="selectedChoice[3]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink"> Am curious
          </v-btn>
          {{ getPlacementText(3,5)}}
          <v-btn flat v-if="selectedChoice[4]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink"> another reason
          </v-btn>
        </span>
        <v-btn v-if="firstClick" flat class="francisco clickableLink white--text text-capitalize" @click.native="handleEdit(0)"> {{firstEdit ? "(Edit choices)": "Resubmit"}} </v-btn>
      </span>
    </div>
  
    <span v-if="!firstEdit">
      <div class="row">
        <v-checkbox label="want to help myself" v-model="selectedChoice[0]" class="ml-6 col-sm-6 col-md-5  col-lg-4  customCheck "></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="want to help a loved one" v-model="selectedChoice[1]" class="ml-6 col-sm-7 col-md-6 col-lg-5 customCheck "></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="want to help others" v-model="selectedChoice[2]" class="ml-6 col-sm-5 col-md-5 col-lg-4 customCheck "></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="am curious" v-model="selectedChoice[3]" class="ml-6 col-sm-3 customCheck "></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="another reason" v-model="selectedChoice[4]" class="ml-6 col-sm-4 customCheck "></v-checkbox>
      </div>
    </span>
  
    <br>
    <!-- Section 2.
  
      I would be willing to try
        
      -->
    <span id="willing" v-if="firstClick">
      <div class="row">
        <span class="francisco col-md-8 ml-6 tiny text-left lead"> I would be willing to try
          <span v-if="secondEdit" class="p-0">
            <v-btn flat v-if="selectedChoice[5]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink francisco"> finger tapping activity
            </v-btn>
            {{ getPlacementText(5,10)}}
            <v-btn flat v-if="selectedChoice[6]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink francisco"> hand tremor activity
            </v-btn>
            {{ getPlacementText(6,10)}}
            <v-btn flat v-if="selectedChoice[7]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink francisco"> balance activity
            </v-btn>
            {{ getPlacementText(7,10)}}
            <v-btn flat v-if="selectedChoice[8]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink francisco"> brain teaser activity
            </v-btn>
            {{ getPlacementText(8,10)}}
            <v-btn flat v-if="selectedChoice[9]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink francisco"> surveys
            </v-btn>
          </span>
          <v-btn v-if="secondClick" flat class="clickableLink text-capitalize" v-on:click="handleEdit(1)"> {{secondEdit ? "(Edit Choices)": "Resubmit"}} </v-btn>
        </span>
      </div>
  
      <div class="row">
        <v-checkbox v-if="!secondEdit" label="finger tapping activity" v-model="selectedChoice[5]" class="ml-6 col-sm-7 col-md-6 col-lg-5 customCheck darkPurple--text"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!secondEdit" label="hand tremor activity" v-model="selectedChoice[6]" class="ml-6 col-sm-6 col-md-5  col-lg-4  customCheck darkPurple--text"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!secondEdit" label="balance activity" v-model="selectedChoice[7]" class="ml-6 col-sm-4 customCheck darkPurple--text"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!secondEdit" label="brain teaser activity" v-model="selectedChoice[8]" class="ml-6 col-sm-6 col-md-5  col-lg-4 customCheck darkPurple--text"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!secondEdit" label="surveys" v-model="selectedChoice[9]" class="ml-6 col-sm-3 customCheck darkPurple--text"></v-checkbox>
      </div>
    </span>
  
    <br>
    <!-- Section 3.
  
        On a _____ Basis
  
      -->
    <span id="basis" v-if="secondClick">
      <div class="row">
        <p class="francisco col-md-8 ml-6 tiny text-left lead"> on a {{(thirdClick || third)? "": "_____"}}
          <span class="p-0" v-if="thirdEdit">
            <v-btn v-on:click="handleEdit(2)" flat class=" text-capitalize clickableLink francisco"> {{radioChoice}}
            </v-btn>
          </span>
          basis
          <v-btn v-if="thirdClick" flat class=" white--text text-capitalize clickableLink" v-on:click="handleEdit(2)"> {{thirdEdit ? "(Edit Choice)": "Resubmit"}} </v-btn>
        </p>
      </div>
  
      <v-radio-group v-model="radioChoice">
        <div class="row mb-3" v-if="!thirdEdit">
          <v-flex class="col-sm-2 ml-6 ">
            <v-radio v-on:keyup.enter="handleRadio(0)" class=" francisco" label="Daily" value="Daily"></v-radio>
          </v-flex>
        </div>
        <div class="row mb-3 mt-2" v-if="!thirdEdit">
          <v-flex class="col-sm-3 ml-6">
            <v-radio v-on:keyup.enter="handleRadio(1)" class=" francisco" value="Weekly" label="Weekly"></v-radio>
          </v-flex>
        </div>
        <div class="row mb-3 mt-2" v-if="!thirdEdit">
          <v-flex class="col-sm-3 ml-6">
            <v-radio v-on:keyup.enter="handleRadio(2)" class=" francisco" value="Biweekly" label="Biweekly"></v-radio>
          </v-flex>
        </div>
        <div class="row mb-3 mt-2" v-if="!thirdEdit">
          <v-flex class="col-sm-3 ml-6">
            <v-radio v-on:keyup.enter="handleRadio(3)" class=" francisco" value="Monthly" label="Monthly"></v-radio>
          </v-flex>
        </div>
      </v-radio-group>
    </span>
  
    <!-- Section 4.
  
          What would you like from us
  
      -->
    <span id="request" v-if="thirdClick">
      <div class="row">
        <p class="francisco ml-6 col-sm-8 tiny lead"> I would like to recieve
          <span v-if="fourthEdit">
            <v-btn flat v-if="selectedChoice[10]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink francisco"> Updates on the study
            </v-btn>
            {{ getPlacementText(10,12)}}
            <v-btn flat v-if="selectedChoice[11]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink francisco"> Updates on my progress
            </v-btn>
            {{ getPlacementText(11,12)}}
            <v-btn flat v-if="selectedChoice[12]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink francisco"> Updates on the app
            </v-btn>
          </span>
          <v-btn v-if="fourthClick" flat class="white--text text-capitalize clickableLink" v-on:click="handleEdit(3)"> {{fourthEdit ? "(Edit Choice)": "Resubmit"}} </v-btn>
        </p>
      </div>
  
      <div class="row">
        <v-checkbox v-if="!fourthEdit" label="Updates on the study" v-model="selectedChoice[10]" class="ml-6 col-sm-6 col-md-6  col-lg-4 customCheck darkPurple--text"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!fourthEdit" label="Updates on my progress" v-model="selectedChoice[11]" class="ml-6 col-sm-7 col-md-6 col-lg-5 customCheck darkPurple--text"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!fourthEdit" label="Updates on the app" v-model="selectedChoice[12]" class="ml-6 col-sm-6 col-md-5  col-lg-4 customCheck darkPurple--text"></v-checkbox>
      </div>
  
    </span>
  
    <br>
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
      selectedChoice: [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      firstClick: false,
      first: false,
      secondClick: false,
      second: false,
      thirdClick: false,
      third: false,
      fourthClick: false,
      fourth: false,
      firstEdit: false,
      secondEdit: false,
      thirdEdit: false,
      fourthEdit: false,
      radioTexts: ['Daily', 'Weekly', 'Biweekly', 'Monthly']
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
      } else if (index === 2) {
        this.thirdEdit = !this.thirdEdit
      } else {
        this.fourthEdit = !this.fourthEdit
      }
    },
    handleClick: function (index) {
      this.selectedChoice[index] = !this.selectedChoice[index]
    },
    handleController: function () {
      if (!this.firstClick) {
        this.firstClick = true
        this.firstEdit = true
        this.first = true
        this.scrollPage('#willing')
      } else if (!this.secondClick) {
        this.secondClick = true
        this.second = true
        this.secondEdit = true
        this.scrollPage('#basis')
      } else if (!this.thirdClick) {
        this.thirdClick = true
        this.third = true
        this.thirdEdit = true
        this.scrollPage('#requests')
      } else if (!this.fourthClick) {
        this.fourthClick = true
        this.fourth = true
        this.fourthEdit = true
      } else {
        this.$router.push('Eligibility')
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
    },
    handleRadio (index) {
      this.radioChoice = this.radioTexts[index]
      console.log('radio called')
    }
  },
  directives: {
    Focus
  }
}
</script>

<style>
*:focus {
  box-shadow: 2px; 
  opacity: 0.75;


}
button:focus {
  opacity: 0.8;
}

.dim {
  opacity: 0.5
}
</style>
