<template>
  <v-app class="page-overview">

   <div class="row progressBar">
    <span v-if="true">
    <div class="indicatorFilled offset">  </div>
    <div class="indicatorFilled offset one"> </div>
    <div class="indicatorEmpty offset two" v-bind:class="{indicatorFilled: isUnderage !== null && !isUnderage}" > </div>
    <div class="indicatorEmpty offset three" v-bind:class="{indicatorFilled: isPlaceAnswered}"> </div>
    <div class="indicatorEmpty offset four" v-bind:class="{indicatorFilled: isEligible}"> </div> 
    <div class="indicatorEmpty offset five" > </div> 
    </span>
    </div>
    <br>
    <br class="visible-md-up">
    <br class="visible-md-up">

    <div class="row">
      <p id="greatFit" class="lead col-sm-8 ml-6 mx-auto "> You would be a great fit for the mPower study! </p>
      <p class="lead tiny light col-sm-8 mx-auto  ml-6"> We'd just like a few more pieces of information to make sure you're eligible </p>
  
      <p class="lead col-12 col-sm-auto text-center ml-6"> I am </p>
      <v-flex class="col-12 col-sm-3">
        <v-text-field  suffix="years old" name="input-1" label="enter age" id="testing" single-line type="number" pattern="\d*" single-line v-model.number="age"></v-text-field>
      </v-flex>

        <p id="placeField" class="lead col-sm-auto text-center" v-if="isUnderage !== null && !isUnderage" > I live in </p>
        <v-flex class="col-12 col-sm-3" v-if="isUnderage !== null && !isUnderage">
        <v-text-field suffix="zipcode" single-line pattern="\d*" bottom name="input-1" label="5-digit zipcode" type="number" v-model.number="zipCode"></v-text-field>
      </v-flex>
  
    </div>
  
    <div id="option" class="row" v-if="isPlaceAnswered">
      <p class="lead col-12 text-center col-sm-auto ml-6 ">
        and I feel </p>
      <v-select single-line id="comfortable" class="col-sm-3 col-12" label="Select" v-bind:items="phoneChoices" v-model="selectedOptionForPhone"></v-select>
      </v-select>
      <!--<p class="lead col-12 text-center col-sm-auto"> using my phone </p>-->
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
        phoneChoices: ['comfortable using my phone', 'uncomfortable using my phone']
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
        this.isNotEligible = (this.age < 18) || (this.zipCode < 10000) || (this.selectedOptionForPhone === 'comfortable')
        if (!this.isNotEligible) {
          this.$router.push('Congratulations') // TODO: Flip to the top of the next page
        } else {
          this.$router.data = {
            underage: this.age < 18,
            isFromUS: (this.zipCode > 1000),
            isComfortable: (this.selectedOptionForPhone === 'comfortable')
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
          if (!this.isUnderage) {
            this.scrollPage('#placeField')
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

<style>

  div.menu__content {
    z-index: 1000 !important;
  }

  button:disabled {
    opacity: 0.5;
  }
  /* Work around for diabled button interfering with when the button gets focused in on*/
  .dim {
      opacity: 0.5    
  }
</style>
