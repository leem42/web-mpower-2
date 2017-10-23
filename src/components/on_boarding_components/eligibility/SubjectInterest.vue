<template>
  <v-app>

    <div class="row anchorBottom customRowHeight">
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn v-if="indexInStack > 1" class="navyBlue white--text medium" v-on:click="handleClickBack()"> Back </v-btn>
        </div>

        <div class="marginTop50 col-2 hideOnSmall ml-0 mr-0">
            <v-btn v-if="indexInStack > 1" class="navyBlue largeButton medium white--text" v-on:click="handleClickBack()"> Back
            </v-btn>
        </div>

        <div class="col-6 col-md-8 mt-md-3">
            <div clas="row text-center">
                <p class="col-11  mx-auto text-center tiny mt-md-2  mb-0 lightLead"> Step {{indexInStack === 5? "4": indexInStack}} of 4 </p>

                <v-progress-linear class="col-11 text-center mx-auto pr-0  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
            </div>
        </div>
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn
            v-bind:class="currentStageHasValues() ? '':'lowOpacity'"
            class="navyBlue white--text  medium" v-on:click="handleController()"> {{indexInStack === 5? 'Submit': 'Next'}} </v-btn>
        </div>

        
        <div class="marginTop50 col-2 hideOnSmall">
            <v-btn
              v-bind:class="currentStageHasValues() ? '':'lowOpacity'"
             class="navyBlue largeButton medium ml-0  white--text" v-on:click="handleController()"> {{indexInStack === 5? 'Submit': 'Next'}}
            </v-btn>
        </div>


    </div>



      <!-- Section 1.
        I'm interest in joining because  
      -->
     
    <div class="row">
      <p class="lead d-none d-md-inline-block font-weight-bold col-sm-6 col-lg-8 largeTitle mx-auto text-left pt-0 pt-md-0"> Why are you interested in joining mPower?
      </p>
    </div>

    <div class="row">
      <span id="interest" class="francisco lato mediumLarge default pt-sm-0 col-md-6 col-sm-7 col-lg-8 text-left mx-auto mb-4"> I'm interested in joining mPower because I
  
        <span v-if="controller[0].edit" class="ml-0 p-0">
          <v-btn flat :ripple="false" v-if="selectedChoice[0]" @click.native="handleEdit(0)" class=" text-capitalize clickableLink pl-0 middle francisco"> Want to help myself         
          </v-btn>
            {{getPlacementText(0,6)}}
          <v-btn flat :ripple="false" v-if="selectedChoice[1]" @click.native="handleEdit(0)" class="francisco text-capitalize clickableLink pl-0"> Want to help a loved one 
              {{getPlacementText(1,6)}}
          </v-btn>
          <v-btn flat :ripple="false" v-if="selectedChoice[2]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> help others
          </v-btn>
          {{getPlacementText(2,6)}}
          <v-btn flat :ripple="false" v-if="selectedChoice[3]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> Am curious
          </v-btn>
          {{getPlacementText(3,6)}}
          <v-btn flat :ripple="false" v-if="selectedChoice[4]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> another reason
          </v-btn>
          {{ getPlacementText(4,6)}}
          <v-btn flat :ripple="false" v-if="selectedChoice[5]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> none of the above
          </v-btn>
        </span>
        <!--<v-btn v-if="controller[0].submit" flat class="francisco clickableLink white--text text-capitalize pl-0" @click.native="handleEdit(0)"> {{controller[0].edit ? "(Add More)": "Resubmit"}} </v-btn>-->
      </span>
    </div>
  
    <template v-if="!controller[0].edit">
      <div class="row">
        <v-checkbox label="want to help myself" v-model="selectedChoice[0]" class="mx-auto text-left pt-3 pb-3  stencilBorderTop stencilBorder col-sm-7 col-md-6 col-lg-8 customCheck "></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="want to help a loved one" v-model="selectedChoice[1]" class="mx-auto text-left pt-3 pb-3 pb-sm-3  stencilBorder mb-4 mb-sm-0 col-sm-7 col-md-6 col-lg-8 customCheck wrapLabel"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="want to help others" v-model="selectedChoice[2]" class="mx-auto text-left pt-sm-3 pt-0 pb-3  stencilBorder col-sm-7 col-md-6 col-lg-8 customCheck "></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="am curious" v-model="selectedChoice[3]" class="mx-auto text-left pt-3 pb-3  stencilBorder col-sm-7 col-md-6 customCheck col-lg-8 "></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="another reason" v-model="selectedChoice[4]" class="mx-auto text-left pt-3 pb-3  stencilBorderBottom col-sm-7 col-md-6 customCheck col-lg-8"></v-checkbox>
      </div>
      <div class="row">
        <v-checkbox label="none of the above" v-model="selectedChoice[5]" class="mx-auto text-left pt-3 pb-3  stencilBorderBottom col-sm-7 col-md-6 customCheck col-lg-8"></v-checkbox>
      </div>
    </template>
  
    
    <!-- Section 2.
  
      I would be willing to try
        
      -->
    <span id="willing" v-if="controller[0].click">
      <div class="row">
        <span class="mx-auto text-left col-sm-7 col-md-6 col-lg-8 francisco mediumTitle mb-4 text-left lead"> I would be willing to try
          <span v-if="controller[1].edit" class="p-0">
            
            <v-btn flat :ripple="false" v-if="selectedChoice[6]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> finger tapping activity
            </v-btn>
            {{ getPlacementText(6,12)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[7]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> hand tremor activity
            </v-btn>
            {{ getPlacementText(7,12)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[8]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> balance activity
            </v-btn>
            {{ getPlacementText(8,12)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[9]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> brain teaser activity
            </v-btn>
            {{ getPlacementText(9,12)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[10]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> surveys
            </v-btn>
            {{ getPlacementText(10,12)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[11]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> none of the above
            </v-btn>
          </span>
          <!--<v-btn v-if="controller[1].click" flat class="clickableLink pl-0 text-capitalize" v-on:click="handleEdit(1)"> {{controller[1].edit ? "(Add Choices)": "Resubmit"}} </v-btn>-->
        </span>
      </div>

      <template v-if="!controller[1].edit">
          <div class="row">
            <v-checkbox label="finger tapping activity" v-model="selectedChoice[6]" class="stencilBorderTop stencilBorder pt-3 pb-3  col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
          </div>
          <div class="row">
            <v-checkbox label="hand tremor activity" v-model="selectedChoice[7]" class="  stencilBorder pt-3 pb-3 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
          </div>
          <div class="row">
            <v-checkbox label="balance activity" v-model="selectedChoice[8]" class=" stencilBorder pt-3 pb-3 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
          </div>
          <div class="row">
            <v-checkbox label="brain teaser activity" v-model="selectedChoice[9]" class=" stencilBorder pt-3 pb-3 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
          </div>
          </div>
          <div class="row">
            <v-checkbox label="surveys" v-model="selectedChoice[10]" class=" stencilBorderTop stencilBorder pt-3 pb-3 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
          </div>
          <div class="row">
            <v-checkbox label="none of the above" v-model="selectedChoice[11]" class=" stencilBorderTop stencilBorder pt-3 pb-3 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></v-checkbox>
          </div>
      </template>

    </span>
  
    <!-- Section 3.
  
        On a _____ Basis
  
      -->
    <span id="basis" v-if="controller[1].click">
      <div class="row">
        <p class="francisco col-sm-7 col-md-6 col-lg-8 mediumTitle mx-auto text-left lead"> on a {{(controller[2].click)? "": "_____"}}
          <span class="p-0" v-if="controller[2].edit">
            <v-btn v-on:click="handleEdit(2)" flat class=" text-capitalize pl-0 clickableLink francisco"> {{radioChoice}}
            </v-btn>
          </span>
          basis
          <!--<v-btn v-if="controller[2].click" flat class=" white--text text-capitalize pl-0 clickableLink" v-on:click="handleEdit(2)"> {{controller[2].edit ? "(Edit Choice)": "Resubmit"}} </v-btn>-->
        </p>
      </div>
  
      <v-radio-group v-model="radioChoice" v-if="!controller[2].edit">
        <div class="row mb-3">
          <v-flex class="col-sm-7 col-md-6 col-lg-8 mx-auto text-left ">
            <v-radio v-on:keyup.enter="handleRadio(0)" class=" francisco stencilBorderTop stencilBorder pt-2 pb-2" label="Daily" value="Daily"></v-radio>
          </v-flex>
        </div>
        <div class="row mb-3 mt-2">
          <v-flex class="col-sm-7 col-md-6 col-lg-8 mx-auto text-left">
            <v-radio v-on:keyup.enter="handleRadio(1)" class=" francisco stencilBorder pt-2 pb-2" value="Weekly" label="Weekly"></v-radio>
          </v-flex>
        </div>
        <div class="row mb-3 mt-2">
          <v-flex class="col-sm-7 col-md-6 col-lg-8 mx-auto text-left">
            <v-radio v-on:keyup.enter="handleRadio(2)" class=" francisco stencilBorder pt-2 pb-2" value="Biweekly" label="Biweekly"></v-radio>
          </v-flex>
        </div>
        <div class="row mb-3 mt-2">
          <v-flex class="col-sm-7 col-md-6 col-lg-8 mx-auto text-left">
            <v-radio v-on:keyup.enter="handleRadio(3)" class=" francisco stencilBorder pt-2 pb-2" value="Monthly" label="Monthly"></v-radio>
          </v-flex>
        </div>
        <div class="row mb-3 mt-2">
          <v-flex class="col-sm-7 col-md-6 col-lg-8 mx-auto text-left">
            <v-radio v-on:keyup.enter="handleRadio(4)" class=" francisco stencilBorder pt-2 pb-2" value="None of the above" label="None of the above"></v-radio>
          </v-flex>
        </div>
      </v-radio-group>
    </span>
  
    <!-- Section 4.
  
          What would you like from us
  
      -->
    <span id="request" v-if="controller[2].click">
      <div class="row">
        <p class="francisco col-sm-7 col-md-6 col-lg-8 mx-auto text-left mediumTitle lead"> I would like to recieve
          <span v-if="controller[3].edit">
            <v-btn flat :ripple="false" v-if="selectedChoice[12]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Updates on the study
            </v-btn>
            {{ getPlacementText(12,16)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[13]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Updates on my progress
            </v-btn>
            {{ getPlacementText(13,16)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[14]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Updates on the app
            </v-btn>
            {{ getPlacementText(14,16)}}
            <v-btn flat :ripple="false" v-if="selectedChoice[15]" v-on:click="handleEdit(4)" class=" text-capitalize clickableLink pl-0 francisco"> None of the above
            </v-btn>
          </span>
          <!--<v-btn v-if="controller[3].click" flat class="white--text text-capitalize clickableLink pl-0" v-on:click="handleEdit(3)"> {{controller[3].edit ? "(Add Choices)": "Resubmit"}} </v-btn>-->
        </p>
      </div>
  
      <template v-if="!controller[3].edit">
        <div class="row">
          <v-checkbox label="Updates on the study" v-model="selectedChoice[12]" class="stencilBorderTop stencilBorder pt-3 pb-3 col-sm-7 col-md-6 col-lg-8 mx-auto text-left  customCheck darkPurple--text"></v-checkbox>
        </div>
        <div class="row">
          <v-checkbox id="updates" label="Updates on my progress" v-model="selectedChoice[13]" class="stencilBorder pt-3 pb-5 pb-sm-3 col-sm-7 col-md-6 col-lg-8 mx-auto text-left mb-sm-0 customCheck darkPurple--text wrapLabel"></v-checkbox>
        </div>
        <div class="row">
          <v-checkbox label="Updates on the app" v-model="selectedChoice[14]" class="stencilBorder pt-3 pb-3 col-sm-7 col-md-6 col-lg-8 mx-auto text-left  customCheck darkPurple--text"></v-checkbox>
        </div>
        <div class="row">
          <v-checkbox label="none of the above" v-model="selectedChoice[15]" class="stencilBorder pt-3 pb-3 col-sm-7 col-md-6 col-lg-8 mx-auto text-left  customCheck darkPurple--text"></v-checkbox>
        </div>
      </template>
  
    </span>
  
    <br>
    <br>
    <br>
    <br>
  
    </div>
  </v-app>
</template>

<script>
import { Focus } from '@/directives/focus.js'
import _ from 'lodash'
export default {
  name: 'subjectInterest',
  data () {
    return {
      radioChoice: '',
      selectedChoice: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      controllerLevel: 0,
      controller: {
        0: {click: false, submit: false, edit: false, page: '#interest'}, // TODO: Remove submit field if its extraneous
        1: {click: false, submit: false, edit: false, page: '#willing'},
        2: {click: false, submit: false, edit: false, page: '#basis'},
        3: {click: false, submit: false, edit: false, page: '#request'}
      },
      radioTexts: ['Daily', 'Weekly', 'Biweekly', 'Monthly', 'None of the above'],
      indexInStack: 1,
      multiple5: 100.0 / 4,
      progress: 100.0 / 4,
      alert: true
    }
  },
  methods: {
    clicked () {
      this.$router.push('Eligibility')
    },
    scrollPage: _.debounce(
      function (arg1) {
        this.$scrollTo(arg1, 1500, { easing: 'linear', offset: -90 })
      }
      , 200),
    handleEdit: function (index) {
      this.controller[index].edit = !this.controller[index].edit
    },
    handleClickBack () {
      // must set behind open and current closed
      // if its prior to submitting then we set current and back, otherwise just the front
      let lastChoice = (this.controllerLevel === 4)
      let page = ''
      if (this.controllerLevel !== 4) {
        levelObj = this.controller[this.controllerLevel - 1]
        levelObj.click = false
        levelObj.edit = false
        page = levelObj.page
      } else {
        this.controllerLevel -= 1
        page = this.controller[this.controllerLevel].page
      }

      let levelObj = this.controller[this.controllerLevel]
      levelObj.click = false
      levelObj.edit = false
      this.progress -= this.multiple5
      this.indexInStack -= 1

      if (!lastChoice) {
        this.controllerLevel -= 1
      }
      if (this.controllerLevel !== 4) {
        this.scrollPage(page)
      }
    },
    handleController: function () {
      if (!this.currentStageHasValues()) {
        return
      }
      if (this.controllerLevel === 4) {
        this.$router.push('Eligibility')
      } else {
        let levelObj = this.controller[this.controllerLevel]
        levelObj.click = true
        levelObj.edit = true
        this.progress += this.multiple5
        this.indexInStack += 1
        this.controllerLevel += 1

        if (this.controllerLevel !== 4) {
          this.scrollPage(levelObj.page)
        }
      }
    },
    currentStageHasValues () {
      if (this.controllerLevel === 0) {
        return this.hasAnsweredAny(0, 6)
      } else if (this.controllerLevel === 1) {
        return this.hasAnsweredAny(6, 12)
      } else if (this.controllerLevel === 2) {
        return this.radioChoice !== ''
      } else if (this.controllerLevel === 3) {
        return this.hasAnsweredAny(12, 16)
      } else {
        return true
      }
    },
    hasAnsweredAny: function (start, stop) {
      for (var i = start; i < stop; i++) {
        if (this.selectedChoice[i]) {
          return true
        }
      }
      return false
    },
    getPlacementText: function (start, stop) {
      // am I open and is there a single space to the right or a multi space
      if (this.selectedChoice[start]) {
        var count = 0
        for (var i = start + 1; i < stop; i++) {
          if (this.selectedChoice[i]) {
            count = count + 1
          }
        }
        if (count === 1) {
          return 'and'
        } else if (count > 1) {
          return ','
        }
        // else on choice and return nothing
      }
    },
    handleRadio (index) {
      this.radioChoice = this.radioTexts[index]
    }
  },
  directives: {
    Focus
  }
}
</script>

<style lang="scss">

  .clickableLink.pl-0 > div.btn__content{
    padding-left: 0px !important;
    padding-right: 2px !important;
  }

  .addedHeight {
    height: 50px;
  }

  #updates > label {
    max-width: 80% !important;
  }

  .centerVertical {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  // Align tabbing over to use background color
  div[role=checkbox].input-group--tab-focused >  div.input-group__input {
    background-color: rgba(59,74,99,0.1) !important;
  }
  
  div[role=checkbox].input-group--tab-focused >  div.input-group__input {
    background-color: rgba(59,74,99,0.1) !important;
  }
  
  .customCheck:hover > div.input-group__input{
    background-color: rgba(59,74,99,0.1) !important;
  }

  button.clickableLink:focus{
    background-color: rgba(59,74,99,0.1) !important;
  }
  div.btn__content:hover {
    background-color: rgba(59,74,99,0.1) !important;
  }


  .inheritHeight {
    min-height: 50px;
    height: inherit !important;
  }

  i.icon {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .customCheck > div.input-group__input {
      height: inherit;
  }


  button:focus {
    opacity: 0.8;
  }

  .dim {
    opacity: 0.5
  }
</style>
