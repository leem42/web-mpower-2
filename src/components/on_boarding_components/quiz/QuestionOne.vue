<template>
    <v-app>

        <div class="row">
            <p class="ml-6 pl-2 lightLead tiny text-uppercase"> Question 1 </p>
        </div>

        <div class="row">
            <p class="ml-6 pl-2 default"> What is the purpose of this study? </p>
        </div>
        
        <div class="row ml-6 mt-4">
             <v-radio-group v-model="questionResults.questionOne" class="col-12">
                <div class="row"> 
                    <v-radio class="col-md-10 col-12  customPadding mb-3 mb-sm-0 stencilBorder stencilBorderTop pt-sm-3 mt-0 pb-5 pt-3 wrapLabel lightGrayText pr-0" value=true label="Understand the fluctuations of Parkinson’s disease symptoms">  </v-radio>
                    <v-radio class="col-md-10 col-12  customPaddingTwo  mt-sm-0 stencilBorder pt-sm-2 mt-0 pb-5 wrapLabel lightGrayText pr-0" value=false label="Give medical advice and diagnose people with Parkinson’s disease">  </v-radio>
                </div>
             </v-radio-group> 
        </div>
    

    </v-app>
</template>

<script>
    import { questionResults } from '../../../requirements/questionResults'

    export default {
      data () {
        return {
          questionResults: questionResults
        }
      }
    }
</script>

<style>
    @media(max-width: 425px) {
        .customPadding {
            padding-bottom: 100px !important;
        }
    }
    @media(max-width: 470px) {
        .customPaddingTwo {
            padding-bottom: 95px !important;
        }
    }
</style>
