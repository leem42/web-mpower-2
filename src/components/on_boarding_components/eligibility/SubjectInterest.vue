<template>
  <v-app>

    <div class="row anchorBottom customRowHeight">
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn class="navyBlue white--text medium" v-on:click="navigate(0)"> < </v-btn>
        </div>

        <div class="marginTop50 col-2 hideOnSmall ml-0 mr-0">
            <v-btn class="navyBlue largeButton medium white--text" v-on:click="navigate(0)"> Back
            </v-btn>
        </div>

        <div class="col-6 col-md-8 mt-md-3">
            <div clas="row text-center">
                <p class="col-11  mx-auto text-center tiny mt-md-2  mb-0 lightLead"> Step {{' ' + indexInStack }} </p>
                <v-progress-linear class="col-11 text-center mx-auto pr-0  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
            </div>
        </div>
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn class="navyBlue white--text  medium" v-on:click="handleController()"> > </v-btn>
        </div>

        
        <div class="marginTop50 col-2 hideOnSmall">
            <v-btn class="navyBlue largeButton medium ml-0  white--text" v-on:click="handleController()"> {{indexInStack === 5? 'Submit': 'Next'}}
            </v-btn>
        </div>


    </div>



      <!-- Section 1.
        I'm interest in joining because  
      -->
      <div class="row">
        <p class="lead font-weight-bold col-sm-8 largeTitle ml-6 pt-0 pt-md-0"> Why are you interested in joining mPower?
        </p>
        <p class="lightGrayText col-sm-6 tiny  ml-6 pt-0 pt-md-0 mb-3">
          Understanding what interests you and what you are willing to do helps us shape an experience that aligns with your expectations.
        </p>
    </div>
    <div class="row">
      <span id="interest" class="francisco lato mediumLarge default pt-sm-0 col-sm-6 ml-6 mb-4"> I'm interested in joining mPower because I
  
        <span v-if="firstEdit" class="ml-0 p-0">
          <v-btn flat :ripple="false" v-if="selectedChoice[0]" @click.native="handleEdit(0)" class=" text-capitalize clickableLink pl-0 middle francisco"> Want to help myself         
          </v-btn>
            {{getPlacementText(0,5)}}
          <v-btn flat :ripple="false" v-if="selectedChoice[1]" @click.native="handleEdit(0)" class="francisco text-capitalize clickableLink pl-0"> Want to help a loved one 
              {{getPlacementText(1,5)}}
          </v-btn>
          <v-btn flat :ripple="false" v-if="selectedChoice[2]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> help others
          </v-btn>
          {{getPlacementText(2,5)}}
          <v-btn flat :ripple="false" v-if="selectedChoice[3]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> Am curious
          </v-btn>
          {{getPlacementText(3,5)}}
          <v-btn flat :ripple="false" v-if="selectedChoice[4]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> another reason
          </v-btn>
          {{ getPlacementText(4,5)}}
        </span>
        <v-btn v-if="firstClick" flat class="francisco clickableLink white--text text-capitalize pl-0" @click.native="handleEdit(0)"> {{firstEdit ? "(Add More)": "Resubmit"}} </v-btn>
      </span>
    </div>
  
    <span v-if="!firstEdit" class="ml-3">
      <div class="row">
        <v-checkbox label="want to help myself" v-model="selectedChoice[0]" class="ml-6 pt-3 pb-3  stencilBorderTop stencilBorder col-sm-7 col-md-6  col-lg-5  customCheck "></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="want to help a loved one" v-model="selectedChoice[1]" class="ml-6 pt-3 pb-5 pb-sm-3  stencilBorder mb-4 mb-sm-0 col-sm-7 col-md-6 col-lg-5 customCheck wrapLabel"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="want to help others" v-model="selectedChoice[2]" class="ml-6 pt-sm-3 pt-0 pb-3  stencilBorder col-sm-7 col-md-6 col-lg-5 customCheck "></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="am curious" v-model="selectedChoice[3]" class="ml-6 pt-3 pb-3  stencilBorder col-sm-7 col-md-6 customCheck col-lg-5 "></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="another reason" v-model="selectedChoice[4]" class="ml-6 pt-3 pb-3  stencilBorderBottom col-sm-7 col-md-6 customCheck col-lg-5"></v-checkbox>
      </div>
    </span>
  
    
    <!-- Section 2.
  
      I would be willing to try
        
      -->
    <span id="willing" v-if="firstClick">
      <div class="row">
        <span class="francisco col-md-6  ml-6 mediumTitle mb-4 text-left lead"> I would be willing to try
          <span v-if="secondEdit" class="p-0">
            
            <v-btn flat :ripple="false" v-if="selectedChoice[5]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> finger tapping activity
            </v-btn>
            {{ getPlacementText(5,10)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[6]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> hand tremor activity
            </v-btn>
            {{ getPlacementText(6,10)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[7]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> balance activity
            </v-btn>
            {{ getPlacementText(7,10)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[8]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> brain teaser activity
            </v-btn>
            {{ getPlacementText(8,10)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[9]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> surveys
            </v-btn>
          </span>
          <v-btn v-if="secondClick" flat class="clickableLink pl-0 text-capitalize" v-on:click="handleEdit(1)"> {{secondEdit ? "(Add Choices)": "Resubmit"}} </v-btn>
        </span>
      </div>
  
        <div class="row">
          <v-checkbox v-if="!secondEdit" label="finger tapping activity" v-model="selectedChoice[5]" class="ml-6 stencilBorderTop stencilBorder pt-3 pb-3  col-sm-6 col-lg-4 customCheck darkPurple--text"></v-checkbox>
        </div>
        <div class="row">
          <v-checkbox v-if="!secondEdit" label="hand tremor activity" v-model="selectedChoice[6]" class="ml-6   stencilBorder pt-3 pb-3 col-sm-6 col-lg-4 customCheck darkPurple--text"></v-checkbox>
        </div>
        <div class="row">
          <v-checkbox v-if="!secondEdit" label="balance activity" v-model="selectedChoice[7]" class="ml-6  stencilBorder pt-3 pb-3 col-sm-6 col-lg-4 customCheck darkPurple--text"></v-checkbox>
        </div>
        <div class="row">
          <v-checkbox v-if="!secondEdit" label="brain teaser activity" v-model="selectedChoice[8]" class="ml-6  stencilBorder pt-3 pb-3 col-sm-6 col-lg-4 customCheck darkPurple--text"></v-checkbox>
        </div>
        </div>
        <div class="row">
          <v-checkbox v-if="!secondEdit" label="surveys" v-model="selectedChoice[9]" class="ml-6  stencilBorderTop stencilBorder pt-3 pb-3 col-sm-6 col-lg-4 customCheck darkPurple--text"></v-checkbox>
        </div>
    </span>
  
    <!-- Section 3.
  
        On a _____ Basis
  
      -->
    <span id="basis" v-if="secondClick">
      <div class="row">
        <p class="francisco col-md-8 ml-6 mediumTitle text-left lead"> on a {{(thirdClick || third)? "": "_____"}}
          <span class="p-0" v-if="thirdEdit">
            <v-btn v-on:click="handleEdit(2)" flat class=" text-capitalize pl-0 clickableLink francisco"> {{radioChoice}}
            </v-btn>
          </span>
          basis
          <v-btn v-if="thirdClick" flat class=" white--text text-capitalize pl-0 clickableLink" v-on:click="handleEdit(2)"> {{thirdEdit ? "(Edit Choice)": "Resubmit"}} </v-btn>
        </p>
      </div>
  
      <v-radio-group v-model="radioChoice" v-if="!thirdEdit">
        <div class="row mb-3">
          <v-flex class="col-sm-3 ml-6 ">
            <v-radio v-on:keyup.enter="handleRadio(0)" class=" francisco stencilBorderTop stencilBorder pt-2 pb-2" label="Daily" value="Daily"></v-radio>
          </v-flex>
        </div>
        <div class="row mb-3 mt-2">
          <v-flex class="col-sm-3 ml-6">
            <v-radio v-on:keyup.enter="handleRadio(1)" class=" francisco stencilBorder pt-2 pb-2" value="Weekly" label="Weekly"></v-radio>
          </v-flex>
        </div>
        <div class="row mb-3 mt-2">
          <v-flex class="col-sm-3 ml-6">
            <v-radio v-on:keyup.enter="handleRadio(2)" class=" francisco stencilBorder pt-2 pb-2" value="Biweekly" label="Biweekly"></v-radio>
          </v-flex>
        </div>
        <div class="row mb-3 mt-2">
          <v-flex class="col-sm-3 ml-6">
            <v-radio v-on:keyup.enter="handleRadio(3)" class=" francisco stencilBorder pt-2 pb-2" value="Monthly" label="Monthly"></v-radio>
          </v-flex>
        </div>
      </v-radio-group>
    </span>
  
    <!-- Section 4.
  
          What would you like from us
  
      -->
    <span id="request" v-if="thirdClick">
      <div class="row">
        <p class="francisco ml-6 col-sm-6 mediumTitle lead"> I would like to recieve
          <span v-if="fourthEdit">
            <v-btn flat :ripple="false" v-if="selectedChoice[10]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Updates on the study
            </v-btn>
            {{ getPlacementText(10,12)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[11]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Updates on my progress
            </v-btn>
            {{ getPlacementText(11,12)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[12]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Updates on the app
            </v-btn>
          </span>
          <v-btn v-if="fourthClick" flat class="white--text text-capitalize clickableLink pl-0" v-on:click="handleEdit(3)"> {{fourthEdit ? "(Add Choices)": "Resubmit"}} </v-btn>
        </p>
      </div>
  
      <div class="row">
        <v-checkbox v-if="!fourthEdit" label="Updates on the study" v-model="selectedChoice[10]" class="stencilBorderTop stencilBorder pt-3 pb-3 ml-6 col-sm-6 col-lg-5  customCheck darkPurple--text"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!fourthEdit" id="updates" label="Updates on my progress" v-model="selectedChoice[11]" class="stencilBorder pt-3 pb-5 pb-sm-3 ml-6  col-sm-6 col-lg-5 mb-sm-0 customCheck darkPurple--text wrapLabel"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox v-if="!fourthEdit" label="Updates on the app" v-model="selectedChoice[12]" class="stencilBorder pt-3 pb-3 ml-6  col-sm-6 col-lg-5  customCheck darkPurple--text"></v-checkbox>
      </div>
  
    </span>
  
    <br>
    <br>
    <br>
  
    </div>
  </v-app>
</template>

<script>
import { Focus } from '@/directives/focus.js'
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
      radioTexts: ['Daily', 'Weekly', 'Biweekly', 'Monthly'],
      indexInStack: 1,
      multiple5: 100.0 / 5,
      progress: 100.0 / 5
    }
  },
  methods: {
    clicked () {
      this.$router.push('Eligibility')
    },
    scrollPage: _.debounce(
      function (arg1) {
        this.$scrollTo(arg1, 1500, { easing: 'linear', offset: -90 })
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
        this.progress += this.multiple5
        this.indexInStack += 1
        this.scrollPage('#willing')
      } else if (!this.secondClick) {
        this.secondClick = true
        this.second = true
        this.secondEdit = true
        this.progress += this.multiple5
        this.indexInStack += 1
        this.scrollPage('#basis')
      } else if (!this.thirdClick) {
        this.thirdClick = true
        this.third = true
        this.thirdEdit = true
        this.progress += this.multiple5
        this.indexInStack += 1
        this.scrollPage('#request')
      } else if (!this.fourthClick) {
        this.fourthClick = true
        this.fourth = true
        this.fourthEdit = true
        this.progress += this.multiple5
        this.indexInStack += 1
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
    }
  },
  directives: {
    Focus
  }
}
</script>

<style lang="scss">

  .clickableLink.pl-0 > div.btn__content{
    padding-left: 0px !important;
    padding-right: 2px !important;
  }

  .addedHeight {
    height: 50px;
  }

  #updates > label {
    max-width: 80% !important;
  }

  .centerVertical {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  // Align tabbing over to use background color
  div[role=checkbox].input-group--tab-focused >  div.input-group__input {
    background-color: rgba(59,74,99,0.1) !important;
  }
  
  div[role=checkbox].input-group--tab-focused >  div.input-group__input {
    background-color: rgba(59,74,99,0.1) !important;
  }
  
  .customCheck:hover > div.input-group__input{
    background-color: rgba(59,74,99,0.1) !important;
  }

  button.clickableLink:focus{
    background-color: rgba(59,74,99,0.1) !important;
  }
  div.btn__content:hover {
    background-color: rgba(59,74,99,0.1) !important;
  }


  .inheritHeight {
    min-height: 50px;
    height: inherit !important;
  }

  i.icon {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .customCheck > div.input-group__input {
      height: inherit;
  }


  button:focus {
    opacity: 0.8;
  }

  .dim {
    opacity: 0.5
  }
</style>
