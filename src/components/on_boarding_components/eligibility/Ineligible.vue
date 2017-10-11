<template>
    <v-app class="page-overview fadeBackground">
        <div class="row progressBar">
            <div class="indicatorFilled offset"> </div>
            <div class="indicatorFilled offset one"> </div>
            <div class="indicatorFilled offset two"> </div>
            <div class="indicatorFilled offset three"> </div>
            <div class="indicatorFilled offset four"> </div>
            <div class="indicatorFilled offset five"> </div>
        </div>
        <br>
    
        <div class="row">
            <div class="col-sm-8 mx-auto">
                <p class="white--text text-center"> Sorry, you are not eligible</p>
                <p class="white--text text-center tiny">
                    You must 
                        {{isUnderage ? "be at least 18" + getProperCharacter(0): "" }} 
                        {{isNotComfortable ? "have an iPhone 5 or higher"
                        + getProperCharacter(1): "" }} 
                        {{isNotFromUS ? "live in the United States.": "" }} 
                </p>
                    
    
                <br>
                <p class="white--text tiny text-center">
                    You can still help by telling others about the study
                </p>
            </div>
            <br>
            <div class="col-12 text-center">
                <v-btn  class="roundBtn orange"> 
                    <v-icon medium class="white--text">fa-facebook</v-icon>
                </v-btn>
                <v-btn  class="roundBtn orange">
                    <v-icon medium class="white--text">fa-twitter</v-icon>
                </v-btn>
                <v-btn class="roundBtn orange"> 
                    <v-icon medium class="white--text">message</v-icon>
                </v-btn>
                <v-btn class="roundBtn orange"> 
                    <v-icon medium class="white--text">fa-envelope</v-icon>
                </v-btn>
            </div>

        </div>
        <br>
        <br>
        <div class="row">
            <div class="mx-auto">
                <v-btn large class="white text-capitalize" :to="{name: 'YourStory'}">  
                    Go Back
                </v-btn>
            </div>
        </div>
    </v-app>
</template>


<script>
  export default {
    name: 'congratulations',
    data: function () {
      return {
        isUnderage: null,
        isNotFromUS: null,
        isNotComfortable: null,
        personStates: []
      }
    },
    mounted: function () {
      this.isUnderage = this.$router.data.isUnderage
      this.isNotFromUS = this.$router.data.isNotFromUS
      this.isNotComfortable = this.$router.data.isNotComfortable
      this.personStates = [this.isUnderage, this.isNotComfortable, this.isNotFromUS]
    },
    methods: {
      getProperCharacter: function (index) {
        if (this.personStates[index]) {
          var count = 0
          index = index + 1
          for (var i = index; i < this.personStates.length; i++) {
            if (this.personStates[i]) {
              count = count + 1
            }
          }
          if (count === 2) {
            return ','
          } else if (count === 1) {
            return ' and'
          } else {
            return '.'
          }
        }
      }
    }
  }
</script>

<style lang="scss">

    .roundBtn {
        border-radius: 50px !important;
        width: 50px;
        height: 50px;
    }

</style>
