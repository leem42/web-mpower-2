<template >
  <v-app>
    <br>
    <br>
    <br>
    <div class="row">
        <img src="../../../images/warning-icon.png" class="mx-auto" alt="image of an exclamation point inside of a yellow triangle symbolizing hazard">  
        </img>
    </div>

    <div class="row">
      <p class="mx-auto largeTitle white--text">
        You're almost there!
      </p>
    </div>
    <div class="row">
      <p class="mx-auto col-md-8  text-center medium-small white--text">
        You answered one or more questions incorrectly. 
        We want to make sure that you understand what this study is about 
        and what is involved before you proceed. 
        Please review the sections again.       
      </p>
    </div>

    <div class="row">

      <div class="col-md-8 mx-auto white">
        <div class="row">
          <div class="col-12 text-center stencilBorder  black--text"> 
            <div class="row">
              <div class="col-1 mr-2 verticalCenter">
                <img src="../../../images/check-mark.png"> </img>
              </div>
              <div class="col-10">
                <div class="row lightLead smallText mt-1">
                  QUESTION 1
                </div>
                <div class="row default medium-small">
                  What is the purpose of this study?
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 text-center stencilBorder  black--text"> 
            <div class="row">
              <div class="col-1 mr-2 verticalCenter">
                <img src="../../../images/check-mark.png"> </img>
              </div>
              <div class="col-10">
                <div class="row lightLead smallText">
                  QUESTION 2
                </div>
                <div class="row default medium-small">
                  Will my name be stored with my study data?
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 text-center stencilBorder  black--text"> 
            <div class="row">
              <div class="col-1 mr-2 verticalCenter">
                <img src="../../../images/check-mark.png"> </img>
              </div>
              <div class="col-10">
                <div class="row lightLead smallText">
                  QUESTION 3
                </div>
                <div class="row default medium-small text-left">
                  If I decide to share my data with qualified researchers and then I change my mind, can my data be deleted from their studies?
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 text-center stencilBorder  black--text"> 
            <div class="row">
              <div class="col-1 mr-2 verticalCenter">
                <img src="../../../images/check-mark.png"> </img>
              </div>
              <div class="col-10">
                <div class="row lightLead smallText">
                  QUESTION 4
                </div>
                <div class="row default medium-small">
                  The survey questions may be stressful for some people
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 text-center stencilBorder  black--text"> 
            <div class="row">
              <div class="col-1 mr-2 verticalCenter">
                <img src="../../../images/check-mark.png"> </img>
              </div>
              <div class="col-10">
                <div class="row lightLead smallText">
                  QUESTION 5
                </div>
                <div class="row default medium-small">
                  I can pause / resume participating at any time
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


    </div>
    
    <br>
    <br>

  </v-app>

</template>

<script>
import { requirements } from '../../../requirements/requirements'
import { questionResults } from '../../../requirements/questionResults'

export default {
  data () {
    return {
      questionResults: questionResults,
      requirements: requirements
    }
  }
}
</script>
