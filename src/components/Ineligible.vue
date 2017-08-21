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
      <div class="col-8 mx-auto">
      <br>
        <p class="orangeText text-center"> We're sorry to say, unfortunately you are not eligible to partipcate
            in this study. </p>
        <p class="lead subText text-center"> Please feel free to follow the study at <a href=" https://parkinsonmpower.org/"> https://parkinsonmpower.org/ </a>
            and recommend the study to friends or family. </p>
      </div>
      <br>
      <div class="col-12 text-center">
        <v-btn class=" sorryRect"> Share &nbsp;
            <v-icon class="white--text">share</v-icon>    
        </v-btn>
      </div>
      <div class="col-12 text-center">

        <v-btn class=" sorryRect"> Text &nbsp;
            <v-icon class="white--text">fa-mobile-phone</v-icon>    
        </v-btn>

      </div>

        <div class="col-12 text-center">
            <v-btn class=" sorryRect"> Email &nbsp;
                <v-icon class="white--text">email</v-icon>
            </v-btn>
        </div>
    </div>

  </div>

</template>


<script>
  export default {
    name: 'congratulations'
  }
</script>
