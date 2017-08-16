<template>
  <v-app class="page-overview"> 
    <div class="row">
      <p class="lead col-sm-8 ml-6 mx-auto "> You would be a great fit for the mPower study! </p>
      <p class="lead tiny light col-sm-8 mx-auto  ml-6"> We'd just like a few more pieces of information to make sure you're eligible </p>
  
      <p class="col-12 col-sm-auto text-center ml-6"> I am </p>
      <v-flex class="col-12 col-sm-3">
        <v-text-field  suffix="years old" name="input-1" label="enter age" id="testing" single-line type="number" pattern="\d*" v-model.number="age"></v-text-field>
      </v-flex>

        <p class="col-sm-auto text-center" v-if="isUnderage !== null && !isUnderage" > I live in </p>
        <v-flex v-if="isUnderage !== null && !isUnderage">
            <v-select type="text"
              v-bind:items="states"
              v-model="zipCode"
              label="Select Stated"
              autocomplete
            ></v-select>
          </v-flex>
        
      <div v-if="isPlaceAnswered !== null && !isPlaceAnswered" class="alert text-center lead light alert-danger col-sm-3" role="alert" id="zipError">
        <strong>Sorry.</strong> Zipcodes must contain at least 5 numbers, if there is a mistake please email sagebase.org
      </div>
  
    </div>
  
    <div v-if="isUnderage" class="alert alert-danger col-sm-3" id="ageError" role="alert">
      <strong>Sorry.</strong> Participants must be at least 18 years of age to register.
    </div>
  
    <div id="option" class="row" v-if="true">
      <p class="col-12 text-center col-sm-auto ml-6 ">
        and I feel </p>
      <v-select bottom id="comfortable" class="col-sm-3 col-12" label="Select" v-bind:items="phoneChoices" v-model="selectedOptionForPhone"></v-select>
      </select>
      <p class="col-12 text-center col-sm-auto"> using my phone </p>
      <div class="col-12 text-center " v-if="isEligible">
        <v-btn light v-on:click="clicked" v-bind:class="{dim: !isEligible}" v-focus="isEligible" id="submit" class="large" > Submit </v-btn>
      </div>
    </div>
  
    <br>
  </v-app>
</template>

<script>
  import {Focus} from '@/directives/focus.js'
  import _ from 'lodash'
  export default {
    data () {
      return {
        age: '',
        zipCode: '',
        selectedOptionForPhone: null,
        isUnderage: null,
        isPlaceAnswered: null,
        hasChosenOption: false,
        isEligible: false,
        phoneChoices: ['comfortable', 'uncomfortable'],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
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
        ]
      }
    },
    watch: {
      age: function (newAge) {
        this.setIsUnderage()
      },
      zipCode: function (newZip) {
        this.setIsPlaceAnswered()
      },
      selectedOptionForPhone: function (newOption) {
        this.setHasChosenOption()
        this.setIsEligible()
      }
    },
    methods: {
      scrollPage: _.debounce(
        function (arg1) {
          this.$scrollTo(arg1, 750, { easing: 'linear' })
        }
      , 200),
      clicked () {
        if (this.isEligible) {
          this.$router.push('Congratulations') // TODO: Flip to the top of the next page
        }
      },
      setIsUnderage: _.debounce(
        function () {
          if (this.age === '') {
            this.isUnderage = null
          } else {
            this.isUnderage = this.age < 18
          }
          if (!this.isUnderage) {
            this.scrollPage('#live')
          } else {
            this.scrollPage('#ageError')
          }
        }, 500
      ),
      setIsPlaceAnswered: _.debounce(
        function () {
          this.isPlaceAnswered = (this.zipCode !== '')
          if (this.isPlaceAnswered) {
            this.scrollPage('#comfortable')
          } else {
            this.scrollPage('#zipError')
          }
        }, 500
      ),
      setHasChosenOption: _.debounce(
        function () {
          this.hasChosenOption = (this.selectedOptionForPhone !== '')
        }, 500
      ),
      setIsEligible: _.debounce(
        function () {
          this.isEligible = (!this.isUnderage && this.isPlaceAnswered && this.hasChosenOption)
          if (this.isEligible) {
            this.scrollPage('#next')
          }
        }, 500
      )
    },
    directives: {
      Focus
    }
  }
</script>

<style scoped>
  button:disabled {
    opacity: 0.5;
  }
  /* Work around for diabled button interfering with when the button gets focused in on*/
  .dim {
      opacity: 0.5    
  }
</style>
