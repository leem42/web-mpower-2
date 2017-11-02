<template>
  <v-app class="page-overview">

    <div class="row text-center anchorBottom customRowHeight">

        <div class="col-6 col-md-8 mt-md-3 mx-auto">
            <div clas="row text-center">
                <p class="col-11  mx-auto text-center tiny mt-md-2  mb-0 lightLead"> Step {{' ' + (progressIndex + 1) + ' of 7' }} </p>
                <v-progress-linear class="col-11 text-center mx-auto pr-0  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
            </div>
        </div>
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn
            v-bind:class="currentVowSectionHasValues() ? '':'lowOpacity'"
             class="navyBlue white--text  medium" v-on:click="handleController()"> {{indexInVowSection === 5? 'Submit': 'Next'}} </v-btn>
        </div>

        
        <div class="marginTop50 col-2 hideOnSmall">
            <v-btn
            v-bind:class="currentVowSectionHasValues() ? '':'lowOpacity'"
             class="navyBlue largeButton medium ml-0  white--text" v-on:click="handleController()"> {{indexInVowSection === 5? 'Submit': 'Next'}}
            </v-btn>
        </div>


    </div>

    <div class="row mt-3">
      <p id="greatFit" class="lead font-weight-bold  text-center col-md-10 col-lg-8 mx-auto  "> Let's find out if you're eligible </p>
    </div>
    <div class="row mt-3">

    </div>
    <div class="row mt-sm-4">
      <div class=" col-md-10 col-lg-8 mx-auto text-center">
        <div class="row">
          <p class="lead col-auto mx-auto mx-md-0"> I am </p>
          <v-flex class="col-md-3">
            <v-text-field suffix="years old" name="input-1" placeholder="45" id="testing" type="number" pattern="\d*" auto-grow v-model.number="age">
            </v-text-field>
          </v-flex>

          <p class="lead col-auto mx-auto mx-md-0" v-if="isUnderage !== null" > I live in </p>
          <v-flex class="col-12 mb-3 col-md-4" v-if="isUnderage !== null">
            <v-select class="eligibility" v-bind:items="states" hide-details auto single-line pattern="\d*" name="input-1" label="select where" id="placeField" v-model="stateChosen"></v-select>
          </v-flex>
          
        </div>
      </div>
    </div>

    <div id="option" class="row mt-2" v-if="isResident !== null">
      <div class=" col-md-10 col-lg-8 mx-auto text-center text-md-left">
        <div class="row">
          <p class="lead col-12 col-md-auto">
            and I feel </p>
          <v-select single-line id="comfortable" class="ml-md-0 col-12 col-md-8 mx-auto" label="Select" v-bind:items="phoneChoices" v-model="selectedOptionForPhone"></v-select>
          </v-select>
        </div>
      </div>
    </div>

    <!--For extra padding-->
    <template v-if="partOneIsEligible">
    
        <!-- Section 1.
          I'm interest in joining because  
        -->
      
      <div class="row mt-5">
        <p class="lead font-weight-bold col-sm-6 col-lg-8 largeTitle mx-auto text-center pt-0 pt-md-0"> Why are you interested in joining mPower?
        </p>
      </div>

      <div class="row">
        <p id="understandInterest" class="lead col-md-8 col-lg-8 medium mx-auto text-left pt-0 pt-md-0"> 
          Understanding what interests you and what you are willing to do helps us shape an experience that aligns with your expectations.
        </p>
      </div>

      <div class="row mt-3">
        <span id="interest" class="francisco lato mediumLarge default pt-sm-0 col-md-6 col-sm-7 col-lg-8 text-left mx-auto mb-4"> I'm interested in joining mPower because I 
    
          <span v-if="controller[0].edit" class="ml-0 p-0">
            <v-btn flat :ripple="false" v-if="selectedChoice[0]" @click.native="handleEdit(0)" class=" text-capitalize clickableLink pl-0 middle francisco"> Want to help myself         
            </v-btn>
              {{getPlacementText(0,6)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[1]" @click.native="handleEdit(0)" class=" pb-3 francisco text-capitalize clickableLink pl-0"> Want to help a loved one 
                {{getPlacementText(1,6)}}
            </v-btn>
            <v-btn flat :ripple="false" v-if="selectedChoice[2]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> help others
            </v-btn>
            {{getPlacementText(2,6)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[3]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> Am curious
            </v-btn>
            {{getPlacementText(3,6)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[4]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> another reason
            </v-btn>
            {{ getPlacementText(4,6)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[5]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> not interested
            </v-btn>
          </span>
          <v-btn v-if="!controller[0].edit && controller[0].submit" flat class="francisco clickableLink white--text text-capitalize pl-0" @click.native="handleEdit(0)"> {{controller[0].edit ? "(Add More)": "Resubmit"}} </v-btn>
        </span>
      </div>
    
      <template v-if="!controller[0].edit">
        <!-- <div class="row">
          <checkbox-smooth label="I want to help myself" class="mx-auto text-left pt-3 pb-3 pb-sm-3  stencilBorder mb-4 mb-sm-0 col-sm-7 col-md-6 col-lg-8"  v-model="selectedChoice[0]"></checkbox-smooth>         
        </div> -->
        <div class="row">
          <v-checkbox label="want to help myself" v-model="selectedChoice[0]" class="mx-auto text-left pt-3 pb-3  stencilBorderTop stencilBorder col-sm-7 col-md-6 col-lg-8 customCheck "></v-checkbox>
        </div>
        <div class="row">
          <v-checkbox label="want to help a loved one" v-model="selectedChoice[1]" class="mx-auto text-left pt-3 pb-5 pb-sm-3  stencilBorder mb-4 mb-sm-0 col-sm-7 col-md-6 col-lg-8 customCheck wrapLabel"></v-checkbox>
        </div>
        <div class="row">
          <v-checkbox label="want to help others" v-model="selectedChoice[2]" class="mx-auto text-left pt-sm-3 pt-0 pb-3  stencilBorder col-sm-7 col-md-6 col-lg-8 customCheck "></v-checkbox>
        </div>
        <div class="row">
          <v-checkbox label="am curious" v-model="selectedChoice[3]" class="mx-auto text-left pt-3 pb-3  stencilBorder col-sm-7 col-md-6 customCheck col-lg-8 "></v-checkbox>
        </div>
        <div class="row">
          <v-checkbox label="another reason" v-model="selectedChoice[4]" class="mx-auto text-left pt-3 pb-3  stencilBorderBottom col-sm-7 col-md-6 customCheck col-lg-8"></v-checkbox>
        </div>
        <div class="row">
          <v-checkbox label="not interested" v-model="selectedChoice[5]" class="mx-auto text-left pt-3 pb-3  stencilBorderBottom col-sm-7 col-md-6 customCheck col-lg-8"></v-checkbox>
        </div>
      </template>
    
      
      <!-- Section 2.
    
        I would be willing to try
          
        -->
      <span id="willing" v-if="controller[0].click">
        <div class="row">
          <span class="mx-auto text-left col-sm-7 col-md-6 col-lg-8 francisco mediumTitle mb-4 text-left lead"> I would be willing to try
            <span v-if="controller[1].edit" class="p-0">
              
              <v-btn flat :ripple="false" v-if="selectedChoice[6]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> finger tapping activity
              </v-btn>
              {{ getPlacementText(6,12)}}
              <v-btn flat :ripple="false" v-if="selectedChoice[7]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> hand tremor activity
              </v-btn>
              {{ getPlacementText(7,12)}}
              <v-btn flat :ripple="false" v-if="selectedChoice[8]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> balance activity
              </v-btn>
              {{ getPlacementText(8,12)}}
              <v-btn flat :ripple="false" v-if="selectedChoice[9]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> brain teaser activity
              </v-btn>
              {{ getPlacementText(9,12)}}
              <v-btn flat :ripple="false" v-if="selectedChoice[10]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> surveys
              </v-btn>
              {{ getPlacementText(10,12)}}
              <v-btn flat :ripple="false" v-if="selectedChoice[11]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> none of the above
              </v-btn>
            </span>
            <v-btn v-if="!controller[1].edit && controller[1].submit" flat class="clickableLink pl-0 text-capitalize" v-on:click="handleEdit(1)"> {{controller[1].edit ? "(Add Choices)": "Resubmit"}} </v-btn>
          </span>
        </div>

        <template v-if="!controller[1].edit">
            <div class="row">
              <v-checkbox label="finger tapping activity" v-model="selectedChoice[6]" class="stencilBorderTop stencilBorder pt-3 pb-3  col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
            </div>
            <div class="row">
              <v-checkbox label="hand tremor activity" v-model="selectedChoice[7]" class="  stencilBorder pt-3 pb-3 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
            </div>
            <div class="row">
              <v-checkbox label="balance activity" v-model="selectedChoice[8]" class=" stencilBorder pt-3 pb-3 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
            </div>
            <div class="row">
              <v-checkbox label="brain teaser activity" v-model="selectedChoice[9]" class=" stencilBorder pt-3 pb-3 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
            </div>
            </div>
            <div class="row">
              <v-checkbox label="surveys" v-model="selectedChoice[10]" class=" stencilBorderTop stencilBorder pt-3 pb-3 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
            </div>
            <div class="row">
              <v-checkbox label="none of the above" v-model="selectedChoice[11]" class=" stencilBorderTop stencilBorder pt-3 pb-3 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
            </div>
        </template>

      </span>
    
      <!-- Section 3.
    
          On a _____ Basis
    
        -->
      <span id="basis" v-if="controller[1].click">
        <div class="row">
          <p class="francisco col-sm-7 col-md-6 col-lg-8 mediumTitle mx-auto text-left lead"> on a {{(controller[2].click)? "": "_____"}}
            <span class="p-0" v-if="controller[2].edit">
              <v-btn v-on:click="handleEdit(2)" flat class=" text-capitalize pl-0 clickableLink francisco"> {{radioChoice}}
              </v-btn>
            </span>
            basis
            <v-btn v-if="!controller[2].edit && controller[2].submit" flat class=" white--text text-capitalize pl-0 clickableLink" v-on:click="handleEdit(2)"> {{controller[2].edit ? "(Edit Choice)": "Resubmit"}} </v-btn>
          </p>
        </div>
    
        <v-radio-group v-model="radioChoice" v-if="!controller[2].edit">
          <div class="row mb-3">
            <v-flex class="col-sm-7 col-md-6 col-lg-8 mx-auto text-left ">
              <v-radio v-on:keyup.enter="handleRadio(0)" class=" francisco stencilBorderTop stencilBorder pt-2 pb-2" label="Daily" value="Daily"></v-radio>
            </v-flex>
          </div>
          <div class="row mb-3 mt-2">
            <v-flex class="col-sm-7 col-md-6 col-lg-8 mx-auto text-left">
              <v-radio v-on:keyup.enter="handleRadio(1)" class=" francisco stencilBorder pt-2 pb-2" value="Weekly" label="Weekly"></v-radio>
            </v-flex>
          </div>
          <div class="row mb-3 mt-2">
            <v-flex class="col-sm-7 col-md-6 col-lg-8 mx-auto text-left">
              <v-radio v-on:keyup.enter="handleRadio(2)" class=" francisco stencilBorder pt-2 pb-2" value="Biweekly" label="Biweekly"></v-radio>
            </v-flex>
          </div>
          <div class="row mb-3 mt-2">
            <v-flex class="col-sm-7 col-md-6 col-lg-8 mx-auto text-left">
              <v-radio v-on:keyup.enter="handleRadio(3)" class=" francisco stencilBorder pt-2 pb-2" value="Monthly" label="Monthly"></v-radio>
            </v-flex>
          </div>
          <div class="row mb-3 mt-2">
            <v-flex class="col-sm-7 col-md-6 col-lg-8 mx-auto text-left">
              <v-radio v-on:keyup.enter="handleRadio(4)" class=" francisco stencilBorder pt-2 pb-2" value="None of the above" label="None of the above"></v-radio>
            </v-flex>
          </div>
        </v-radio-group>
      </span>
    
      <!-- Section 4.
    
            What would you like from us
    
        -->
      <span id="request" v-if="controller[2].click">
        <div class="row">
          <p class="francisco col-sm-7 col-md-6 col-lg-8 mx-auto text-left mediumTitle lead"> I would like to recieve
            <span v-if="controller[3].edit">
              <v-btn flat :ripple="false" v-if="selectedChoice[12]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Updates on the study
              </v-btn>
              {{ getPlacementText(12,16)}}
              <v-btn flat :ripple="false" v-if="selectedChoice[13]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Updates on my progress
              </v-btn>
              {{ getPlacementText(13,16)}}
              <v-btn flat :ripple="false" v-if="selectedChoice[14]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Updates on the app
              </v-btn>
              {{ getPlacementText(14,16)}}
              <v-btn flat :ripple="false" v-if="selectedChoice[15]" v-on:click="handleEdit(4)" class=" text-capitalize clickableLink pl-0 francisco"> None of the above
              </v-btn>
            </span>
            <v-btn v-if="!controller[3].edit && controller[3].submit" flat class="white--text text-capitalize clickableLink pl-0" v-on:click="handleEdit(3)"> {{controller[3].edit ? "(Add Choices)": "Resubmit"}} </v-btn>
          </p>
        </div>
    
        <template v-if="!controller[3].edit">
          <div class="row">
            <v-checkbox label="Updates on the study" v-model="selectedChoice[12]" class="stencilBorderTop stencilBorder pt-3 pb-3 col-sm-7 col-md-6 col-lg-8 mx-auto text-left  customCheck darkPurple--text"></v-checkbox>
          </div>
          <div class="row">
            <v-checkbox id="updates" label="Updates on my progress" v-model="selectedChoice[13]" class="stencilBorder pt-3 pb-5 pb-sm-3 col-sm-7 col-md-6 col-lg-8 mx-auto text-left mb-sm-0 customCheck darkPurple--text wrapLabel"></v-checkbox>
          </div>
          <div class="row">
            <v-checkbox label="Updates on the app" v-model="selectedChoice[14]" class="stencilBorder pt-3 pb-3 col-sm-7 col-md-6 col-lg-8 mx-auto text-left  customCheck darkPurple--text"></v-checkbox>
          </div>
          <div class="row">
            <v-checkbox label="none of the above" v-model="selectedChoice[15]" class="stencilBorder pt-3 pb-3 col-sm-7 col-md-6 col-lg-8 mx-auto text-left  customCheck darkPurple--text"></v-checkbox>
          </div>
        </template>
    
      </span>

    </template>
    <div class="row" style="height: 400px;" > </div>
  </v-app>
</template>

<script>
  import {Focus} from '@/directives/focus.js'
  import {requirements} from '../../../requirements/requirements'
  import _ from 'lodash'
  import CheckboxSmooth from '@/custom_components/checkbox/CheckboxSmooth.vue'

  export default {
    data () {
      return {
        age: '',
        selectedOptionForPhone: null,
        isUnderage: null,
        isResident: null,
        hasChosenOption: false,
        hasCompletedForm: false,
        phoneChoices: ['comfortable using my phone', 'uncomfortable using my phone'],
        states: [
          'I don\'t live in the US', 'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ],
        stateChosen: '',
        requirements: requirements,
        progress: (100.0 / 7),
        progressStep: (100.0 / 7),
        hasCompletedPartOne: false,
        partOneIsEligible: false,
        partTwo: false,
        partThree: false,
        progressIndex: 0,
        hasAnswered: [false, false, false],
        radioChoice: '',
        selectedChoice: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        controllerLevel: 0,
        controller: {
          0: {click: false, submit: false, edit: false, page: '#interest'}, // TODO: Remove submit field if its extraneous
          1: {click: false, submit: false, edit: false, page: '#willing'},
          2: {click: false, submit: false, edit: false, page: '#basis'},
          3: {click: false, submit: false, edit: false, page: '#request'}
        },
        radioTexts: ['Daily', 'Weekly', 'Biweekly', 'Monthly', 'None of the above'],
        indexInVowSection: 1,
        alert: true
      }
    },
    watch: {
      age: function () {
        this.setIsUnderage()
      },
      stateChosen: function () {
        this.setIsPlaceAnswered()
      },
      hasChosenOption: function () {
        this.setHasChosenOption()
      }
    },
    computed: {
      hasFilledPartOneRequirements: function () {
        return this.isUnderage !== null && this.isResident !== null && this.selectedOptionForPhone !== null
      },
      hasFilledPartTwoRequirements: function () {
        return false
      },
      hasFilledPartThreeRequirements: function () {
        return false
      }
    },
    methods: {
      scrollPage: _.debounce(
        function (arg1) {
          this.$scrollTo(arg1, 750, {easing: 'linear', offset: -150})
        }
        , 200),
      handleController () {
        if (this.getCurrentStage() === 'Part One') {
          // handle first three questions
          this.handleEligibility()
        } else {
          // handle remaining questions of vows
          this.handleVows()
        }
      },
      handleVows () {
        if (!this.currentVowSectionHasValues()) {
          return
        }
        if (this.controllerLevel === 4) {
          this.requirements.isOnElgibility = false
          this.requirements.hasCompletedEligibility = true
          this.requirements.isOnConsent = true
          this.$router.push('OverviewEligibility')
        } else {
          let levelObj = this.controller[this.controllerLevel]
          levelObj.click = true
          levelObj.edit = true
          levelObj.submit = true
          this.indexInVowSection += 1
          this.controllerLevel += 1
          this.progress += this.progressStep
          this.progressIndex += 1
          levelObj = this.controller[this.controllerLevel]
          if (this.controllerLevel !== 4) {
            this.scrollPage(levelObj.page)
          }
        }
      },
      currentVowSectionHasValues () {
        if (this.hasFilledPartOneRequirements && !this.hasCompletedPartOne) {
          return true
        } else if (this.controllerLevel === 0) {
          return this.hasAnsweredAny(0, 6)
        } else if (this.controllerLevel === 1) {
          return this.hasAnsweredAny(6, 12)
        } else if (this.controllerLevel === 2) {
          return this.radioChoice !== ''
        } else if (this.controllerLevel === 3) {
          return this.hasAnsweredAny(12, 16)
        } else {
          return true
        }
      },
      handleEligibility () {
        this.isNotEligible = (this.age < 18) || (!this.isResident) || (this.selectedOptionForPhone !== 'comfortable using my phone')
        if (this.isNotEligible) {
          this.$router.data = {
            isUnderage: this.age < 18,
            isNotFromUS: this.isResident,
            isNotComfortable: (this.selectedOptionForPhone !== 'comfortable using my phone')
          }
          this.$router.push('Ineligible') // TODO: Flip to the top of the next page
        } else {
          this.scrollPage('#understandInterest')
          this.partOneIsEligible = true
        }
        // TODO
        // this.partOne = true
        // this.requirements.isOnConsent = true
        // this.$router.push('SubjectInterest') // TODO: Flip to the top of the next page
      },
      getCurrentStage () {
        // we look to see thtat
        if (this.hasFilledPartOneRequirements && !this.hasCompletedPartOne) {
          this.hasCompletedPartOne = true
          return 'Part One'
        } else if (this.hasFilledPartTwoRequirements && !this.hasCompletedPartTwo) {
          this.partTwo = true
          return 'Part Two'
        } else if (this.hasFilledPartThreeRequirements && !this.hasCompletedPartThree) {
          this.partThree = true
          return 'Part Three'
        } else {
          return 'None'
        }
      },
      addProgress (index) {
        if (!this.hasAnswered[index]) {
          this.hasAnswered[index] = true
          this.progressIndex += 1
          this.progress += this.progressStep
        }
      },
      setIsUnderage: _.debounce(
        function () {
          if (this.age === '') {
            this.isUnderage = null
          } else {
            this.isUnderage = this.age < 18
            this.addProgress(0)
          }
          this.scrollPage('#placeField')
        }, 500
      ),
      setIsPlaceAnswered: _.debounce(
        function () {
          if (this.stateChosen !== '') {
            this.addProgress(1)
          }
          this.isResident = (this.stateChosen !== '' && this.stateChosen !== 'I don\'t live in the US')
          this.scrollPage('#comfortable')
        }, 500
      ),
      setHasChosenOption: _.debounce(
        function () {
          this.hasChosenOption = (this.selectedOptionForPhone !== '')
          if (this.stateChosen !== '') {
            this.addProgress(2)
          }
        }, 500
      ),
      sethasCompletedForm: _.debounce(
        function () {
          this.hasCompletedForm = (!this.isUnderage && this.stateChosen !== '' && this.hasChosenOption)
          if (this.hasCompletedForm) {
            this.scrollPage('#submit')
          }
        }, 500
      ),
      hasAnsweredAny: function (start, stop) {
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
      },
      handleEdit: function (index) {
        this.controller[index].edit = !this.controller[index].edit
      }
    },
    directives: {
      Focus
    },
    components: {
      'checkbox-smooth': CheckboxSmooth
    }
  }
</script>

<style lang="scss">

  div.menu__content {
    z-index: 1000 !important;
    min-width: 290px !important;
  }

  button:disabled {
    opacity: 0.5;
  }
  /* Work around for diabled button interfering with when the button gets focused in on*/
  .dim {
      opacity: 0.5    
  }

  label {
    color: #3a539b !important;
   }

  @media(max-width: 992px) {
    .ml-6-restricted {
      margin-left: 16.66% !important;
    }
  }

  
</style>
