import { styled, VueEmotion } from '@egoist/vue-emotion'

import Vue from 'vue'
Vue.use(VueEmotion)

const Label = styled('label')`
    font-size: 24px;
    max-width: 230px;
    font-stretch: expanded;
    margin-left: 8px;
`
const Checkbox = styled('input')`
    &:hover {
        outline:none;
        box-shadow: 0 0 2px 2px rgb(200,200,200);
        border-radius: 4px;
    }

    &:disabled{
        border:3px solid rgb(45,92,197);
    }

    &:focus {
        border-radius: 4px;
        border:1px solid rgb(45,92,197);
    }

    transform: scale(2);
    

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
                    <Label for="convrrt"> {this.checkbox.title} </Label>
                </div>
        )
    },
    
    
  };



