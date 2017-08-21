<template>
  <v-app class="page-overview">

   <div class="row progressBar">
    <span v-if="true">
    <div class="indicatorFilled offset">  </div>
    <div class="indicatorFilled offset one"> </div>
    <div class="indicatorEmpty offset two" v-bind:class="{indicatorFilled: isAgeAnswered !== null}" > </div>
    <div class="indicatorEmpty offset three" v-bind:class="{indicatorFilled: isPlaceAnswered}"> </div>
    <div class="indicatorEmpty offset four" v-bind:class="{indicatorFilled: hasAnsweredAll}"> </div> 
    <div class="indicatorEmpty offset five" > </div> 
    </span>
    </div>
    <br>
    <br class="visible-md-up">
    <br class="visible-md-up">

    <div class="row">
      <p class="lead col-sm-8 ml-6 mx-auto "> You would be a great fit for the mPower study! </p>
      <p class="lead tiny light col-sm-8 mx-auto  ml-6"> We'd just like a few more pieces of information to make sure you're eligible </p>
  
      <p class="lead col-12 col-sm-auto text-center ml-6"> I am </p>
      <v-flex class="col-12 col-sm-3">
        <v-text-field  append-icon="fa-calendar-o" name="input-1" label="enter age" id="testing" single-line type="number" pattern="\d*" single-line v-model.number="age"></v-text-field>
      </v-flex>

        <p id="live" class="lead col-sm-auto text-center" v-if="isAgeAnswered !== null" > I live in </p>
        <v-flex class="col-12 col-sm-3" v-if="isAgeAnswered !== null">
        <v-select append-icon="map" v-bind:items="states"
          hide-details auto suffix="zipcode" single-line pattern="\d*" name="input-1" label="5-digit zipcode" id="placeField" type="number" v-model="place"></v-select>
        <!--<v-select
          v-bind:items="states"
          v-model="e1"
          label="Select"
          single-line
          auto
          prepend-icon="map"
          hide-details
        ></v-select>-->

      </v-flex>
  
    </div>
    
    <div id="option" class="row" v-if="isPlaceAnswered">
      <p class="lead col-12 text-center col-sm-auto ml-6 ">
        and I feel </p>
      <v-select label="Select" single-line append-icon="fa-mobile" bottom id="comfortable" class="col-sm-3 col-12" v-bind:items="phoneChoices" v-model="selectedOptionForPhone"></v-select>
      </select>
      <p class="lead col-12 text-center col-sm-auto"> using my phone </p>
      <div class="col-12 text-center " v-if="hasAnsweredAll">
        <v-btn light v-on:click="clicked" v-bind:class="{dim: !hasAnsweredAll}" v-focus="hasAnsweredAll" id="submit" class="large" > Submit </v-btn>
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
        place: '',
        selectedOptionForPhone: null,
        isAgeAnswered: null,
        isPlaceAnswered: null,
        hasChosenOption: false,
        isEligible: false,
        phoneChoices: ['comfortable', 'uncomfortable'],
        states: [
          'Outside the US', 'Alabama', 'Alaska', 'American Samoa', 'Arizona',
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
        underage: null,
        isFromUS: null,
        isComfortable: null,
        hasAnsweredAll: null
      }
    },
    watch: {
      age: function (newAge) {
        this.setIsUnderage()
        this.underage = this.age < 18
      },
      place: function (newZip) {
        this.setIsPlaceAnswered()
        this.isFromUS = (this.place !== 'Outside the US')
      },
      selectedOptionForPhone: function (newOption) {
        this.setHasChosenOption()
        this.isComfortable = (this.selectedOptionForPhone === 'comfortable')
        this.setHasAnsweredAll()
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
        } else {
          this.$router.data = {
            underage: this.age < 18,
            isFromUS: (this.place !== 'Outside the US'),
            isComfortable: (this.selectedOptionForPhone === 'comfortable')
          }
          this.$router.push('Ineligible') // TODO: Flip to the top of the next page
        }
      },
      setIsUnderage: _.debounce(
        function () {
          if (this.age === '') {
            this.isAgeAnswered = null
          } else {
            this.isAgeAnswered = this.age > 0
          }
          if (!this.isAgeAnswered) {
            this.scrollPage('#live')
          } else {
            this.scrollPage('#live')
          }
        }, 500
      ),
      setIsPlaceAnswered: _.debounce(
        function () {
          this.isPlaceAnswered = (this.place !== '')
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
      setHasAnsweredAll: _.debounce(
        function () {
          this.hasAnsweredAll = this.isAgeAnswered && this.isPlaceAnswered && this.hasChosenOption
          this.isEligible = !this.underage && this.isFromUS && this.isComfortable
          this.scrollPage('#submit')
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
