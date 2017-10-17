<template>
  <v-app class="page-overview">

    <!-- <div class="row progressBar">
      <span v-if="true">
        <div class="indicatorFilled offset"> </div>
        <div class="indicatorFilled offset one"> </div>
        <div class="indicatorEmpty offset two" v-bind:class="{indicatorFilled: isUnderage !== null && !isUnderage}"> </div>
        <div class="indicatorEmpty offset three" v-bind:class="{indicatorFilled: isResident}"> </div>
        <div class="indicatorEmpty offset four" v-bind:class="{indicatorFilled: hasCompletedForm}"> </div>
        <div class="indicatorEmpty offset five"> </div>
      </span>
    </div> -->

    <div class="row anchorBottom customRowHeight">
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn class="navyBlue white--text medium"> < </v-btn>
        </div>

        <div class="marginTop50 col-2 hideOnSmall ml-0 mr-0">
            <v-btn class="navyBlue largeButton medium white--text"> Back
            </v-btn>
        </div>

        <div class="col-6 col-md-8 mt-md-3">
            <div clas="row text-center">
                <p class="col-11  mx-auto text-center tiny mt-md-2  mb-0 lightLead"> Step {{' ' + (clicks + 1) + ' of 3' }} </p>
                <v-progress-linear class="col-11 text-center mx-auto pr-0  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
            </div>
        </div>
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn class="navyBlue white--text  medium" v-on:click="handleController()"> > </v-btn>
        </div>

        
        <div class="marginTop50 col-2 hideOnSmall">
            <v-btn class="navyBlue largeButton medium ml-0  white--text" v-on:click="handleController()"> {{clicks >= 2? 'Submit': 'Next'}}
            </v-btn>
        </div>


    </div>

    <div class="row mt-3">
      <p id="greatFit" class="lead col-sm-8 ml-6 mx-auto "> Let's see if you're eligible for the mPower study </p>
      <p class="lead tiny light col-sm-8 mx-auto  ml-6"> We just need a few pieces of information to make sure you would be a good fit for the study </p>
    </div>
    <div class="row">
      <div class="ml-6 col-12">
        <div class="row">
          <p class="lead col-auto mx-auto mx-md-0"> I am </p>
          <v-flex class="col-md-3">
            <v-text-field suffix="years old" name="input-1" label="enter age" placeholder="45" id="testing" type="number" pattern="\d*" auto-grow v-model.number="age">
            </v-text-field>
          </v-flex>

          <p class="lead col-auto mx-auto mx-md-0" v-if="isUnderage !== null"> I live in </p>
          <v-flex class="col-12 mb-3 col-md-4" v-if="isUnderage !== null && !isUnderage">
            <v-select class="eligibility" v-bind:items="states" hide-details auto single-line pattern="\d*" name="input-1" label="select where" id="placeField" v-model="stateChosen"></v-select>
          </v-flex>
          
        </div>
      </div>
    </div>

    <div id="option" class="row mt-2 text-center text-sm-auto" v-if="clicks >= 2">
      <p class="lead col-12 col-md-auto ml-6">
        and I feel </p>
      <v-select single-line id="comfortable" class="col-md-5 col-12" label="Select" v-bind:items="phoneChoices" v-model="selectedOptionForPhone"></v-select>
      </v-select>
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
        zipCode: '',
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
        clicks: 0,
        progress: (100.0 / 3)
      }
    },
    methods: {
      scrollPage: _.debounce(
        function (arg1) {
          this.$scrollTo(arg1, 750, {easing: 'linear', offset: -150})
        }
        , 200),
      handleController () {
        if (this.clicks === 0) {
          this.setIsUnderage()
        } else if (this.clicks === 1) {
          this.setIsPlaceAnswered()
        } else if (this.clicks === 2) {
          this.setHasChosenOption()
          this.sethasCompletedForm()
          this.clicked()
        }
        this.clicks = this.clicks + 1
        this.progress = this.progress + (100.0 / 3)
      },
      clicked () {
        this.isNotEligible = (this.age < 18) || (!this.isResident) || (this.selectedOptionForPhone !== 'comfortable using my phone')
        if (!this.isNotEligible) {
          this.requirements.hasCompletedEligibility = true
          this.requirements.isOnConsent = true
          this.$router.push('OverviewEligibility') // TODO: Flip to the top of the next page
        } else {
          this.$router.data = {
            isUnderage: this.age < 18,
            isNotFromUS: this.isResident,
            isNotComfortable: (this.selectedOptionForPhone !== 'comfortable using my phone')
          }
          this.$router.push('Ineligible') // TODO: Flip to the top of the next page
        }
      },
      setIsUnderage: _.debounce(
        function () {
          if (this.age === '') {
            this.isUnderage = null
          } else {
            this.isUnderage = this.age < 1
          }
          this.scrollPage('#placeField')
        }, 500
      ),
      setIsPlaceAnswered: _.debounce(
        function () {
          console.log(this.stateChosen)
          this.isResident = (this.stateChosen !== '' && this.stateChosen !== 'I don\'t live in the US')
          console.log(this.isResident)
          this.scrollPage('#comfortable')
        }, 500
      ),
      setHasChosenOption: _.debounce(
        function () {
          this.hasChosenOption = (this.selectedOptionForPhone !== '')
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
