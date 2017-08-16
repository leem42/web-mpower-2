<template>
  <div id="app">

    <nav class="navbar navbar-fixed-top navbar-light">
      <div class="navbar-header">
        <div class="row">
          <div class="col-12 text-center text-md-left col-md-4">
            <!-- making the name a hyperlink is for dev purposes.
            so that getting to main page is easy, will replace or change
            at a later time -->
            <h1><a href="#"> mPower </a></h1>
          </div>

          <div class="col-md-8 text-md-right text-center">
            <img src="./images/check.png" class="img-fluid check" alt="image of a check marked circle"></img>
            <img src="./images/survey.svg" class="board"></img>
            <img src="./images/ic_lock_black_48px.svg"></img>
            <img src="./images/ic_lock_black_48px.svg"></img>
            <img src="./images/ic_lock_black_48px.svg"></img>
          </div>
        </div>
      </div>
    </nav>

    <router-view class="router container-fluid"></router-view>
    <!--- TODO: must update to make sure application is only single page -->

    <footer class="footer">
      <h2> Copyright 2017 SageBionetworks</h2>
    </footer>

  </div>
</template>

<!--<style src="./style_guide.css"></style>-->

<style lang="scss">
  @import 'css/bootstrap/bootstrap';

  .router {
    margin-top: 50px;
  }

  nav {
    box-shadow: 0 2px 3px 0 rgba(141, 141, 141, 0.5);
    img {
      border-radius: 50%;
      background-color: rgba(65, 73, 90, 0.1);
      margin-left: 2px;
      margin-right: 2px;
      height: 45px;
      width: 45px;
    }
  }

  select, input {
    border-style: none none solid none !important;
    &:focus {
      /*box-shadow: 0px 1px 0px #5cb3fd;*/
      -webkit-box-shadow: 0px 0px 29px 3px rgba(92,179,253,0.63);
      -moz-box-shadow: 0px 0px 29px 3px rgba(92,179,253,0.63);
      box-shadow: 0px 0px 29px 3px rgba(92,179,253,0.63);
      /*background-color: yellow !important;*/
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

  button {
    @media (max-width: 767px) {
      margin-left: 30% !important;
      width: 40%;
      bottom: 20px;
      position: fixed;
      z-index: 1000;
    }

    border-radius: 5px;
    background-color: #31117D;
    border: thin;
    color: white;
    padding: 15px 32px;
    text-transform: uppercase;
  }

  footer {
    display: none;
  }

  .lead {
    color: #3b4a63;
  }
</style>
