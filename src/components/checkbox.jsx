import { styled, VueEmotion } from '@egoist/vue-emotion'

import Vue from 'vue'
Vue.use(VueEmotion)

const Label = styled('label')`
    font-size: 24px;
    font-color:red;
`
export default {
   
    name: 'Checkbox',
    
    props: {
        checkbox: {
          type: Object,
          required: true,
          default: () => ({  state: '', title: '' }),
          validator: checkbox => ['state', 'title'].every(key => key in checkbox),
        },
    },
    
    render: function(h){
        return (
                <div>
                    <input type="checkbox" id="convrrt" value="{checkbox.status}">
                        </input>
                    <Label for="convrrt"> Blue whale decided to have shrimp </Label>
                </div>
        )
    },
    
    
  };



