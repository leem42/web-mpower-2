<template>
  <v-app class="page-overview">

    <div class="row text-center anchorBottom customRowHeight">

        <div class="col-8 customCenterAlign col-md-10 mx-auto">
            <div clas="row text-center">
                <p class="col-11  mx-auto text-left tiny  mb-0 lightLead"> 
                   {{ getProgress()}}
                </p>
                <v-progress-linear class="col-11 text-center mx-auto pr-0  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
            </div>
        </div>
        
        <div class="col-4 p-0 marginTop50 hideOnLarge text-center">
            <v-btn
            v-bind:class="[currentVowSectionHasValues() ? '': 'lowOpacity', indexInVowSection === 5 ? ['medium-small',''] : 'medium' ]"
             class="navyBlue white--text" v-on:click="handleController()"> {{indexInVowSection === 5? 'Review': 'Next'}} </v-btn>
        </div>

        
        <div class="marginTop50 col-2 hideOnSmall">
            <v-btn

            v-bind:class="[currentVowSectionHasValues() ? '': 'lowOpacity', indexInVowSection === 5 ? ['medium-small','font-weight-bold'] : 'medium' ]"
             class="navyBlue largeButton small ml-0  white--text" v-on:click="handleController()"> {{indexInVowSection === 5? 'Review Responses': 'Next'}}
            </v-btn>
        </div>


    </div>

    <div class="row mt-3">
      <p id="greatFit" class="lead font-weight-bold  text-center col-md-10 col-lg-8 mx-auto lato "> Let's find out if you're eligible </p>
    </div>
    <div class="row mt-3">

    </div>
    <div class="row mt-sm-4">
      <div class=" col-md-10 col-lg-8 mx-auto text-center">
        <div class="row">
          <p class="lead col-auto mx-auto mediumLarge customCenterAlign pb-0 lato mx-md-0"> I am </p>
          <v-flex class="col-md-3">
            <v-text-field suffix="years old" name="input-1" placeholder="45" id="testing"  pattern="\d*" auto-grow v-model.number="personInfo.age">
            </v-text-field>
          </v-flex>

          <p class="lead col-auto mx-auto mediumLarge customCenterAlign lato mx-md-0" v-if="isUnderage !== null && personInfo.age !== ''" > I live in </p>
          <v-flex class="col-12 mb-3 col-md-4" v-if="isUnderage !== null && personInfo.age != ''">
            <v-select autocomplete class="d-none d-sm-inline-block eligibility" v-bind:items="states" hide-details auto single-line  name="input-1" label="select where" id="placeField" v-model="personInfo.stateChosen"></v-select>
            <v-select class="eligibility d-sm-none" v-bind:items="states" hide-details auto single-line  name="input-1" label="select where" id="placeField" v-model="personInfo.stateChosen"></v-select>
          </v-flex>
          
        </div>
      </div>
    </div>

    <div id="option" class="row mt-2" v-if="isResident !== null && personInfo.stateChosen !== '' ">
      <div class=" col-md-10 col-lg-8 mx-auto text-center text-md-left">
        <div class="row">
          <p class="lead col-12 mediumLarge customCenterAlign col-md-auto lato text-center text-md-left">
            and I feel </p>
          <v-select single-line id="comfortable" class="ml-md-0 col-12 col-md-6 mx-auto" label="Select" v-bind:items="phoneChoices" v-model="personInfo.selectedOptionForPhone"></v-select>
          </v-select>
        </div>
      </div>
    </div>

   
    <div class="row" style="height: 400px;" > </div>
  </v-app>
</template>

<script>
  import {Focus} from '@/directives/focus.js'
  import {requirements} from '../../../requirements/requirements'
  import {personInfo} from '../../../requirements/personInfo'
  import _ from 'lodash'
  import CheckboxSmooth from '@/custom_components/checkbox/CheckboxSmooth.vue'

  export default {
    data () {
      return {
        personInfo: personInfo,
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
        requirements: requirements,
        progress: (100.0 / 3),
        progressStep: (100.0 / 3),
        hasCompletedPartOne: false,
        partOneIsEligible: false,
        partTwo: false,
        partThree: false,
        progressIndex: 0,
        hasAnswered: [false, false, false],
        radioChoice: '',
        selectedChoice: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        controllerLevel: 0,
        controller: {
          0: {click: false, submit: false, edit: false, page: '#interest'}, // TODO: Remove submit field if its extraneous
          1: {click: false, submit: false, edit: false, page: '#willing'},
          2: {click: false, submit: false, edit: false, page: '#basis'},
          3: {click: false, submit: false, edit: false, page: '#request'}
        },
        radioTexts: ['Daily', 'Weekly', 'Biweekly', 'Monthly', 'Never'],
        indexInVowSection: 1,
        alert: true
      }
    },
    watch: {
      'personInfo.age': function () {
        this.setIsUnderage()
      },
      'personInfo.stateChosen': function () {
        this.setIsPlaceAnswered()
      },
      'personInfo.hasChosenOption': function () {
        this.setHasChosenOption()
      }
    },
    computed: {
      hasFilledPartOneRequirements: function () {
        return this.isUnderage !== null && this.isResident !== null && this.personInfo.selectedOptionForPhone !== null
      },
      hasFilledPartTwoRequirements: function () {
        return false
      },
      hasFilledPartThreeRequirements: function () {
        return false
      },
      notInterestedFromStart: function () {
        return this.selectedChoice[5]
      },
      notInterestedAny: function () {
        // TODO: Get details on the desired functionality for this function
        return this.selectedChoice[11] && this.radioChoice === 'Never'
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
        }
      },
      handleVows () {
        if (!this.currentVowSectionHasValues()) {
          return
        }
        if (this.controllerLevel === 4 && this.notInterestedAny) {
          this.updateRouterState()
        } else if (this.controllerLevel === 4) {
          this.requirements.isOnElgibility = false
          this.requirements.hasCompletedEligibility = true
          this.requirements.isOnConsent = true
          this.$router.push('OverviewEligibility')
        } else if (this.controllerLevel === 0 && this.notInterestedFromStart) {
          this.updateRouterState()
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
      updateRouterState () {
        this.$router.data = {
          notInterestedFromStart: this.notInterestedFromStart,
          notInterestedAny: this.notInterestedAny,
          isUnderage: this.personInfo.age < 18,
          isNotFromUS: !this.isResident,
          isNotComfortable: (this.personInfo.selectedOptionForPhone !== 'comfortable using my phone')
        }
        this.$router.push('Ineligible')
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
      setSelection (index) {
        this.$set(this.selectedChoice, index, !this.selectedChoice[index])
      },
      handleEligibility () {
        this.isNotEligible = (this.personInfo.age < 18) || (!this.isResident) || (this.personInfo.selectedOptionForPhone !== 'comfortable using my phone')
        if (this.isNotEligible) {
          this.updateRouterState()
        } else {
          this.requirements.isOnElgibility = false
          this.requirements.hasCompletedEligibility = true
          this.requirements.isOnConsent = true
          this.$router.push({name: 'OverviewEligibility'})
        }
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
      getProgress () {
        if (this.progressIndex + 1 === 3) {
          return 'ELIGBILITY DONE'
        } else {
          if (this.progressIndex > 2) {
            this.progressIndex = 2
          }
          return 'STEP ' + (this.progressIndex + 1) + ' OF 3'
        }
      },
      setIsUnderage: _.debounce(
        function () {
          if (this.personInfo.age === '') {
            this.isUnderage = null
            console.log('setting to null')
          } else {
            this.isUnderage = this.personInfo.age < 18
            this.addProgress(0)
          }
          this.scrollPage('#placeField')
        }, 500
      ),
      setIsPlaceAnswered: _.debounce(
        function () {
          if (this.personInfo.stateChosen === '') {
            this.isResident = null
            console.log('setting to null')
          } else {
            this.addProgress(1)
            this.scrollPage('#comfortable')
            this.isResident = (this.personInfo.stateChosen !== '' && this.personInfo.stateChosen !== 'I don\'t live in the US')
          }
        }, 500
      ),
      setHasChosenOption: _.debounce(
        function () {
          if (personInfo.selectedOptionForPhone === '') {
            this.hasChosenOption = null
            console.log('setting to null')
          } else {
            this.hasChosenOption = (this.personInfo.selectedOptionForPhone !== '')
            this.addProgress(2)
          }
        }, 500
      ),
      sethasCompletedForm: _.debounce(
        function () {
          this.hasCompletedForm = (!this.personInfo.isUnderage && this.personInfo.stateChosen !== '' && this.personInfo.hasChosenOption)
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
    },
    mounted: function () {
      this.setIsUnderage()
      this.setIsPlaceAnswered()
      this.setHasChosenOption()
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
