<template>
  <v-app class="page-overview">

   <div class="row">
    <span v-if="!isEligible">
    <div class="indicatorEmpty"> . </div>
    <div class="indicatorEmpty offset-2"> .</div>
    <div class="indicatorEmpty offset-4" > .</div>
    <div class="indicatorEmpty offset-6 " > .</div>
    <div class="indicatorEmpty offset-8"> .</div> 
    <div class="indicatorEmpty offset-10" > .</div> 
    </span>
    <div class="indicatorEmpty green" v-if="false"></div>
    <br>
    </div>

    <div class="row">
      <p class="lead col-md-8 offset-md-2"> You would be a great fit for the mPower study! </p>
      <p class="lead tiny light col-md-8 offset-md-2"> We'd just like a few more pieces of information to make sure you're eligible </p>
  
      <p class="col-4 col-sm-auto offset-4 offset-sm-2"> I am </p>
      <v-flex class="col-12 col-sm-4">
        <v-text-field suffix="years old" name="input-1" label="enter age" id="testing" type="number" pattern="\d*" single-line v-model.number="age" class="pb-4"></v-text-field>
      </v-flex>
      <v-flex class="col-6 col-sm-auto offset-3 offset-sm-0" v-if="isUnderage !== null && !isUnderage">
        <p> I live in </p>
      </v-flex>
      <v-flex class="col-md-3" v-if="isUnderage !== null && !isUnderage">
        <v-text-field suffix="zipcode" single-line pattern="\d*" bottom name="input-1" label="5-digit zipcode" id="placeField" type="number" v-model.number="zipCode"></v-text-field>
      </v-flex>
  
      <div v-if="isPlaceAnswered !== null && !isPlaceAnswered" class="alert lead light alert-danger col-md-4 offset-md-4" role="alert" id="zipError">
        <strong>Sorry.</strong> Zipcodes must contain at least 5 numbers, if there is a mistake please email sagebase.org
      </div>
  
    </div>
  
    <div v-if="isUnderage" class="alert alert-danger col-md-4 offset-md-4" id="ageError" role="alert">
      <strong>Sorry.</strong> Participants must be at least 18 years of age to register.
    </div>
  
    <div id="option" class="row" v-if="isPlaceAnswered">
      <p class="col-6 offset-3 col-sm-auto offset-md-2 mr-4">
        and I feel </p>
      <v-select bottom id="comfortable" class="col-md-4 col-12" label="Select" v-bind:items="phoneChoices" v-model="selectedOptionForPhone"></v-select>
      </select>
      <p> using my phone </p>
    </div>
  
    <br>
    <div class="row">
      <br>
      <br>
      <div class="col-md-12" v-if="isEligible">
        <button v-on:click="clicked" v-bind:class="{dim: !isEligible}" v-focus="isEligible" id="next"> Submit </button>
      </div>
    </div>
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
        phoneChoices: ['comfortable', 'uncomfortable']
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
          this.isPlaceAnswered = (this.zipCode !== '' && this.zipCode >= 10000)
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
