 <template>
    <span>
        <input :value="val" @change="updateValue" v-model="checked" :id="uniqueID" type="checkbox" class="showSelectedCheckbox"> </input>
        <label class="pl-2 mb-1 customCenterAlign" tabindex="1" :for="uniqueID">
            <span> </span> 
        </label>
    </span>
 </template>

<script>
    export default {
      name: 'checkbox-smooth',
      props: ['value', 'val', 'label'],
      data: function () {
        return {
          checkedProxy: false
        }
      },
      computed: {
        checked: {
          get () {
            return this.value
          },
          set (val) {
            this.checkedProxy = val
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
        updateValue: function (event) {
          this.$emit('input', this.checkedProxy)
        }
      }
    }
</script>
