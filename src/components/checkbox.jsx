import { styled, VueEmotion } from '@egoist/vue-emotion'

import Vue from 'vue'
Vue.use(VueEmotion)

const Label = styled('label')`
    font-size: 24px;
    height: 4em;
`
const Checkbox = styled('input')`
    &:hover {
        outline:none;
        box-shadow: 0 0 2px 2px rgba(235, 239, 243);
        border-radius: 10px;
    }

    &:disabled{
        border:3px solid rgb(45,92,197);
    }

    &:focus {
        border-radius: 4px;
        border:1px solid rgb(45,92,197);
    }

    transform: scale(2);
    margin-right: 8px;
    &:checked {
        background-image: url("./assets/logo.png");
        background-size: 90%;
        background-position: right center;
        background-repeat: no-repeat;
   }
`

export default {
   
    name: 'Checkbox',
    
    props: {
        checkbox: {
          type: Object,
          required: true,
          default: () => ({   title: '',disable:'' }),
          validator: checkbox => ['title','disable'].every(key => key in checkbox),
        },
    },
    
    render(){
        return (
                <div>
                    <Checkbox type="checkbox" disabled={this.checkbox.disable} >
                        </Checkbox>
                    <Label for="convrrt"> Blue whale decided to have shrimp </Label>
                </div>
        )
    },
    
    
  };



