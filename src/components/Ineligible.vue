<template>


  <div class="page-overview">
    <div class="row progressBar">
    <div class="indicatorFilled offset">  </div>
    <div class="indicatorFilled offset one"> </div>
    <div class="indicatorFilled offset two" > </div>
    <div class="indicatorFilled offset three"> </div>
    <div class="indicatorFilled offset four"> </div> 
    <div class="indicatorFilled offset five" > </div>     <br>
    </div>
    <br>
    <br>
    <div class="row">

        <div class=" text-center col-12">
          
        <img src="../images/unhappy_face.png" class="img-fluid"  alt="image of a check marked circle">
      </div>
      <div class="col-sm-8 mx-auto">
      <br>
        <p class="orangeText text-sm-center"> We're sorry to say, unfortunately you are not eligible to partipcate
            in this study. </p>
        <ul class="lead tiny"> The reason were:
            <li v-if="underage"> Participants must be at least 18 years of age </li>
            <li v-if="!isFromUS"> Participants must live in the US </li>
            <li v-if="!isComfortable"> Partipcants have to be comfortable using their phone  </li>
        </ul>

        <p class="lead subText"> 
            *If this information doesn't seem correct
            please email sage.org or try entering your infomation in the study again. </p>
            
        <br>
        <p class="lead text-sm-center"> 
            Please feel free to follow the study at <a href=" https://parkinsonmpower.org/"> parkinsonmpower.org </a>
            and recommend the study to friends or family. 
        </p>
      </div>
      <br>
      <div class="col-12 text-center">
        <v-btn class=" sorryRect"> Share &nbsp;
            <v-icon class="white--text">share</v-icon>    
        </v-btn>
        <v-btn class=" sorryRect"> Text &nbsp;
            <v-icon class="white--text">fa-mobile-phone</v-icon>    
        </v-btn>
        <v-btn class=" sorryRect"> Email &nbsp;
            <v-icon class="white--text">email</v-icon>
        </v-btn>
        
      </div>
    </div>
  </div>

</template>


<script>
  export default {
    name: 'congratulations',
    data: function () {
      return {
        underage: null,
        isFromUS: null,
        isComfortable: null
      }
    },
    mounted: function () {
      this.underage = this.$router.data.underage
      this.isFromUS = this.$router.data.isFromUS
      this.isComfortable = this.$router.data.isComfortable
    }
  }
</script>

