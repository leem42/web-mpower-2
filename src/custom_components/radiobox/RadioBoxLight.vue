 <template>
    <div class="flexDisplay handCursor">  
      <span class="customCenterAlign">
          <!-- <input :value="val" @change="updateValue" v-model="checked" :id="uniqueID" type="radio" class="showSelectedRadio"> </input> -->

          <input type="radio" :value="label" :name="name" v-model="radioButtonValue" :id="uniqueID" class="showSelectedRadio">
          <label class="pl-2 handCursor mb-1 customCenterAlign" tabindex="1" :for="uniqueID">
              <span> </span> 
          </label>
      </span>
      <button v-on:click="update()" class="text-left ml-2 pt-3 pb-3 pb-sm-3 francisco inputColor fullWidth"> {{label}} </button>
    </div>
    
 </template>

<script>
    export default {
      name: 'radio-smooth',
      props: ['name', 'label', 'value'],
      computed: {
        radioButtonValue: {
          get: function () {
            return this.value
          },
          set: function () {
            // Communicate the change to parent component so that selectedValue can be updated
            this.$emit('change', this.label)
          }
        },
        uniqueID: function () {
          var text = ''
          var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
          for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
          }
          return text
        }
      },
      methods: {
        update: function () {
          this.radioButtonValue = this.value
          this.$emit('change', this.label)
        }
      }
    }
</script>
