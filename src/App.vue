<template>
  <v-app id="app" name="top">
    <router-view class="router container-fluid"></router-view>
  
    <v-card height="200px" class="bottom-custom-nav">
      <v-bottom-nav shift v-bind:class="{shrunk: shrunkCalled, expand: !shrunkCalled}" class="bottom-custom-nav">
        <v-btn flat light class="white--text" @click="click()" @click.native="e1 = 1" :value="e1 === 1">
          <span v-bind:class="{shrunk: shrunkCalled}"> Shrink </span>
          <v-icon v-if="!shrunkCalled">trending_down</v-icon>
          <v-icon x-large v-if="shrunkCalled">trending_up</v-icon>
        </v-btn>
        
        <v-btn flat light class="white--text" @click.native="e1 = 1" :value="e1 === 1">
          <span v-bind:class="{shrunk: shrunkCalled}">mPower</span>
          <v-icon v-if="!shrunkCalled">home</v-icon>
          <v-icon x-large  v-if="shrunkCalled">home</v-icon>

        </v-btn>
        <v-btn flat light class="white--text" @click.native="e1 = 1"  :value="e1 === 1">
          <span v-bind:class="{shrunk: shrunkCalled}">Help?</span>
          <v-icon v-if="!shrunkCalled">message</v-icon>
          <v-icon x-large v-if="shrunkCalled">message</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  
  </v-app>
</template>

<style lang="scss">
@import 'css/bootstrap/bootstrap';

.shrunkTxt {
  color: transparent !important;
}
.shrunk {
  height: 105px !important;
  color: #31117D !important;
  padding-bottom:   0px !important;
  padding-top: 50px;
}

.expand {
  height: 140px !important;
}


.bottom-custom-nav {
  background-color: #31117D;
  border-style: none !important;
  box-shadow: none;
  padding-bottom: 50px;
}

#status {
  font-weight: 400;
  color: white;
  font-size: $font-size-base !important;
}


label {
  color: black !important;
  font-size: $font-size-base * 0.85 !important;
}

input {
  font-size: $font-size-base * 0.85 !important;
  margin-bottom: 3px !important;
}

div.input-group__hint {
  font-size: $font-size-base * 0.45 !important;
}

.custom-fig {
  display: inline-block;
}

@media(min-width: 767px) {
  p {
    color: #31117D;
    font-size: $font-size-base !important;
  }
  .tiny {
    font-size: $font-size-base * 0.7 !important;
  }
  span.chip,
  div {
    font-size: $font-size-base * 0.80 !important;
  }
  div.btn__content {
    font-size: 20px !important;
  }

  .ml-6 {
    margin-left: 16.66% !important;
  }
} // For button elements that need specific spacing
@media(min-width: 767px) and (max-width: 1023px) {
  .ml-6-restricted {
    margin-left: 16.66% !important;
  }
}

@media(min-width: 769px) and (max-width: 1339px) {
  .ml-6-restricted-x {
    margin-left: 16.66% !important;
  }
}

@media(max-width: 767px) {
  input#testing,
  input#placeField {
    // padding-bottom: 20px;
    min-height: 50px !important; 
    text-align: center !important
  }

  input#comfortable {
    text-align: center !important;
  }

  p {
    color: #31117D;
    font-size: $font-size-base * 0.8 !important;
  }
  div.btn__content {
    font-size: 18px !important;
  }

  span.chip,
  div {
    font-size: $font-size-base * 0.60 !important;
  }

  .tiny {
    font-size: $font-size-base * 0.6 !important;
  }

  nav * img {
    height: 30px !important;
    width: 30px !important;
  }
}

.progressBar {
  position: fixed;
  background: linear-gradient(47.41deg, #473B7B 0%, #3584A7 76.33%, #30D2BE 100%);
  box-shadow: 0 2px 3px 0 rgba(141, 141, 141, 0.5);
  top: 89px !important;
  width: 100% !important;
  height: 16px !important;
  z-index: 1000;
}

.offset {
  opacity: 1 !important;
  &.one {
    margin-left: 16.74%;
  }

  &.two {
    margin-left: 33.48%;
  }

  &.three {
    margin-left: 50.22%;
  }

  &.four {
    margin-left: 66.96%;
  }

  &.five {
    margin-left: 83.7%;
  }
}

.indicatorEmpty {
  position: fixed;
  top: 90px !important;
  width: 16.55%;
  height: 15px;
  color: transparent;
  opacity: 0.2;
  float: left;
  background-color: rgba(238, 238, 238, 0.7);
  z-index: 1000;
}

.indicatorFilled {
  @extend .indicatorEmpty;
  background-color: #68BF60 !important;
  opacity: 1 !important;
}

#submit {
  border-radius: 5px !important;
  background-color: #31117D !important;
  color: white;
  font-weight: 500;
  height: 3.83%;
}

.greenText {
  color: #68BF60;
}


.green {
  background-color: #4caf50 !important;
  width: 100% !important;
  opacity: 1 !important;
}

.lightPurple {
  color: #473B7B !important;
  background-color: rgba(71, 59, 123, 0.08) !important;
}

.large {
  min-width: 250px;
}

.darkPurple {
  color: white !important;
  background-color: #473B7B !important;
}

.lower {
  text-transform: none;
}

nav {

  color: white !important;
  background: linear-gradient(47.41deg, #473B7B 0%, #3584A7 76.33%, #30D2BE 100%);
  box-shadow: 0 2px 3px 0 rgba(141, 141, 141, 0.5);
  height: 90px; // below is used for aligning the element in the middle vertically
  justify-content: center;

  top: 0px;
  position: fixed !important;
  z-index: 1000 !important;
  background-color: white;
  width: 100%;
}


nav * img {
  border-radius: 50%; // background-color: rgba(65, 73, 90, 0.1);
  background-color: whitesmoke;
  margin-left: 4px;
  margin-right: 4px;
  top: 50% !important;
  height: 55px;
  width: 55px;
  &.check {
    box-shadow: 0 0 12px 0 #D5D5D5;
  }
}

input {
  text-align: center;
}

circle {
  fill: lightgray;
  stroke-width: 5;
  box-shadow: 10px 10px 10px #888888;
}

select {
  text-align-last: center;
  padding-right: 29px;
  direction: ltr;
  &.customizedSelect {
    min-height: 75px;
  }
}

.custom-input {
  display: inline !important;
}

.phoneInput {
  @media(max-width: 767px) {
    max-width: 80%;
    margin-left: 10%;
  }
}

footer {
  display: none;
}

.round {
  font-weight: bold;
  border-radius: 100px !important;
  text-align: center !important;
  font-family: "San Francisco Text" !important;
}

.lead {
  color: #3b4a63;
  font-weight: normal;
}

.long {
  width: 295px;
}

.x-long {
  width: 385px !important;
}

.large {
  height: 50px !important;
}

.light {
  font-weight: 300;
}
</style>

<script>
  export default {
    data () {
      return {
        e1: 1,
        p: true,
        shrunkCalled: false
      }
    },
    methods: {
      click () {
        console.log('was clicked')
        console.log(this.shrunkCalled)
        this.shrunkCalled = !this.shrunkCalled
      }
    }
  }
</script>
