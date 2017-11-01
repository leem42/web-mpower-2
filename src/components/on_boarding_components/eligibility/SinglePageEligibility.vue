<template>
  <v-app class="page-overview">

    <div class="row text-center anchorBottom customRowHeight">

        <div class="col-6 col-md-8 mt-md-3 mx-auto">
            <div clas="row text-center">
                <p class="col-11  mx-auto text-center tiny mt-md-2  mb-0 lightLead"> Step {{' ' + (progressIndex + 1) + ' of 3' }} </p>
                <v-progress-linear class="col-11 text-center mx-auto pr-0  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
            </div>
        </div>
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn
            v-bind:class="hasFilledPartOneRequirements? '':'lowOpacity'"
             class="navyBlue white--text  medium" v-on:click="handleController()"> Next </v-btn>
        </div>

        
        <div class="marginTop50 col-2 hideOnSmall">
            <v-btn
            v-bind:class="hasFilledPartOneRequirements? '':'lowOpacity'"
             class="navyBlue largeButton medium ml-0  white--text" v-on:click="handleController()"> Next
            </v-btn>
        </div>


    </div>

    <div class="row mt-3">
      <p id="greatFit" class="lead font-weight-bold  text-center col-md-10 col-lg-8 mx-auto  "> Let's find out if you're eligible </p>
    </div>
    <div class="row mt-3">

    </div>
    <div class="row mt-sm-4">
      <div class=" col-md-10 col-lg-8 mx-auto text-left">
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
    <div class="row customRowHeight" style="height: 300px;">

    </div>


  </v-app>
</template>

<script>
  import {Focus} from '@/directives/focus.js'
  import {requirements} from '../../../requirements/requirements'
  import _ from 'lodash'
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
        progress: (100.0 / 3),
        progressStep: (100.0 / 3),
        hasCompletedPartOne: false,
        partTwo: false,
        partThree: false,
        progressIndex: 0,
        hasAnswered: [false, false, false]
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
          this.transitionOutPartOne()
        }
      },
      transitionOutPartOne () {
        this.isNotEligible = (this.age < 18) || (!this.isResident) || (this.selectedOptionForPhone !== 'comfortable using my phone')
        if (!this.isNotEligible) {
          this.requirements.isOnConsent = true
          this.$router.push('SubjectInterest') // TODO: Flip to the top of the next page
        } else {
          this.$router.data = {
            isUnderage: this.age < 18,
            isNotFromUS: this.isResident,
            isNotComfortable: (this.selectedOptionForPhone !== 'comfortable using my phone')
          }
          this.$router.push('Ineligible') // TODO: Flip to the top of the next page
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
          console.log(this.progress)
          console.log(this.progressStep)
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
      )
    },
    directives: {
      Focus
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
