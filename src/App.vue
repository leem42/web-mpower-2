<template>
  <v-app id="app" name="top">

    <v-icon dark class="intercom d-print-md-none" medium >fa-comment</v-icon>
    <v-icon dark class="intercom hideOnSmall" x-large>fa-comment</v-icon>
    <nav class="navbar navbar-fixed-top navbar-light pt-0 pb-0">
      <div class="container-fluid" style="display: block;">
        <div class="row">

          <div class="col-12 pl-1 text-center text-sm-left col-md-4">
            <h1 class="lead light tiny" id="status">  Eligibility </a></h1>
          </div>

          <div class="col-md-8 text-center text-sm-right">
              <img src="./images/check.png" class="img-fluid check" alt="image of a check marked circle"></img>
              <!--<img src="./images/survey.svg" ></img>-->
              <v-icon large class="d-none d-md-inline-block grey--text border">fa-lock</v-icon>
              <v-icon large class="d-none d-md-inline-block grey--text border">fa-lock</v-icon>
              <v-icon large class="d-none d-md-inline-block grey--text border">fa-lock</v-icon>
              <v-icon large class="d-none d-md-inline-block grey--text border">fa-lock</v-icon>
              <v-icon medium class="d-md-none grey--text border small">fa-lock</v-icon>
              <v-icon medium class="d-md-none grey--text border small">fa-lock</v-icon>
              <v-icon medium class="d-md-none grey--text border small">fa-lock</v-icon>
              <v-icon medium class="d-md-none grey--text border small">fa-lock</v-icon>
          </div>

        </div>
      </div>
    </nav>
      <br>
      <br>
    <router-view class="router container-fluid" ></router-view>
    <!--- TODO: must update to make sure application is only single page -->

    <!--<footer class="footer">
      <a href="#top"></a>
      <h2> Copyright 2017 SageBionetworks</h2>
    </footer>-->

  </v-app>
</template>

<style lang="scss">
  @import 'css/bootstrap/bootstrap';
 
 .intercom {
    position: fixed;
    bottom: 40px !important;
    right: 10px !important; 
    background-color: #3DBFA3;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.12), 0 6px 6px 0 rgba(0,0,0,0.24);
    border-radius: 50px;
    height: 80px;
    z-index: 10000 !important;
    width: 80px;
    display: flex !important;
  }

  i.custom-purple {
    color: #31117D !important;
  }
  .robot {
    font-family: 'Roboto' !important;
  }
  @font-face {
    font-family: "San Francisco";
    font-weight: 400;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
  }

  .francisco {
    font-family: 'San Francisco';
  }

  div.btn__content {
    @extend .francisco;
  }

  .awesome {
    font-family: FontAwesome !important;
  }
  #status {    
      font-weight: 400;
      color: white;
      font-size: $font-size-base * 0.9 !important;
      padding-top: 6px ;
      font-family: 'Roboto';
  }

  .border {
    @extend img;
    opacity: 0.9;
    padding-left: 5px !important;
    padding-top: 5px !important;
    padding-right: 15px !important;
    margin-left: 25px !important;
  }

  .border.small {
    padding-left: 5px !important;
    padding-top: 0px !important;
    margin-left: 2px !important;
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
        
    .subText {
      font-size: $font-size-base * 0.65 !important;
    } 
    p {
      color: #31117D;
      font-size: $font-size-base !important;
    }
    .tiny {
      font-size: $font-size-base * 0.8 !important;
    }
    span.chip, div {
        font-size: $font-size-base * 0.80 !important;
    }
    div.btn__content {
      font-size: 20px !important;
    }

    .ml-6 {
      margin-left: 16.66% !important;
    }
  }

  // For button elements that need specific spacing
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

    input#testing, input#placeField {
      min-height: 35px;
      padding-bottom: 10px;
      font-size: $font-size-base * 0.7 !important;
    }

  @media(max-width: 767px) {
    
    .intercom {
        height: 50px;
        width: 50px;
      }

    .intercom.hideOnSmall {
      display: none !important;
    }
    .subText {
      font-size: $font-size-base * 0.45 !important;
    }
    
    input#testing, input#placeField {
      padding-bottom: 10px;
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

    span.chip, div {
      font-size: $font-size-base * 0.60 !important;
    }

    .tiny {
      font-size: $font-size-base * 0.6 !important;
    }

    nav * img {
      height: 30px !important;
      width: 30px !important;
    }

  .border {
      padding-top: 3px;
      padding-right: 13px;
      height: 30px !important;
      width: 30px !important;
  }
  }

.progressBar {
  position: fixed;
  background: linear-gradient(47.41deg, #473B7B 0%, #3584A7 76.33%, #30D2BE 100%);    box-shadow: 0 2px 3px 0 rgba(141, 141, 141, 0.5);
  top: 89px !important;
  width: 100% !important;
  height: 10px !important;
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

.dark-lead {
  color: #4A4A4A !important;
}

  .indicatorEmpty {
      position: fixed;
      top: 89px !important;
      width: 16.55%;
      height: 10px;
      color: transparent;
      opacity: 0.2;
      float: left;
      background-color: rgba(238,238,238,0.7);
      z-index: 1000;
  }
  .indicatorFilled {
    @extend .indicatorEmpty;
    background-color: #68BF60 !important;
    opacity: 1 !important;
  }
    
  #submit {
    background-color: #3A539B;
    border-radius: 5px !important;
    color: white;
    font-weight: 500;
    height: 3.83%;
  }
  
  .greenText {
    color: #68BF60;
    }
  
  .btn__content:before {
    background-color: #F1F0F5 !important;
  }

  .green {
    background-color: #4caf50 !important;
    width: 100% !important;
    opacity: 1 !important; 
  }

  .lightPurple {
    color: #473B7B !important;    
    background-color:#F1F0F5 !important;
  }
  .large {
    min-width: 250px;
  }
  .darkPurple{
    color: white !important;
    background-color: #473B7B !important;  
  }

  .lower {
    text-transform: none;
  }

  nav {

    color: white !important;
    background: linear-gradient(47.41deg, #473B7B 0%, #3584A7 76.33%, #30D2BE 100%);    box-shadow: 0 2px 3px 0 rgba(141, 141, 141, 0.5);
    height: 90px;
    // below is used for aligning the element in the middle vertically
    justify-content: center;

    top: 0px;
    position: fixed !important;
    z-index: 1000 !important;    
    background-color: white;
    width: 100%;

  }

  .border {
      border-radius: 50%;
      // background-color: rgba(65, 73, 90, 0.1);
      background-color: whitesmoke;
      top: 50% !important;
      // padding: 8px;
      padding-top: 3px;
      padding-right: 13px;
      height: 55px;
      width: 55px;
  }
   nav * img {
      border-radius: 50%;
      // background-color: rgba(65, 73, 90, 0.1);
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

  // *:focus {
  //   -webkit-box-shadow: 0px 0px 29px 3px rgba(92,179,253,0.63);
  //   -moz-box-shadow: 0px 0px 29px 3px rgba(92,179,253,0.63);
  //   box-shadow: 0px 0px 29px 3px rgba(92,179,253,0.63);
  // }

  input {
    text-align: center;
  }

  circle {
    fill: lightgray;
    stroke-width: 5;
    box-shadow: 10px 10px 10px #888888;
  }

  select{
      text-align-last:center;
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

  .btn__content:before {
    background-color: #F1F0F5 !important;
  }

  .round {
    font-weight: bold;
    border-radius: 100px !important; 
    text-align: center !important;
    box-shadow: none;
    // font-family: "San Francisco Text" !important;
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
