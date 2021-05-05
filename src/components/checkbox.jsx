import { styled, VueEmotion } from '@egoist/vue-emotion'

import Vue from 'vue'
Vue.use(VueEmotion)

const Label = styled('label')`
    font-size: 24px;
    max-width: 230px;
    font-stretch: expanded;
    margin-left: 8px;
`
const Checkbox = styled('input')
`
    // margin: 0;
    // appearance: none;
    // display: block;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border: 2px solid #aaa;
    border-radius: 4px;
    // outline: none;

    &:checked {
      position: relative;
      background-color: #5290ff;
      border-color: transparent;

      /* The checkmark */
      &::after {
        // box-sizing: border-box;
        content: '';
        position: absolute;
        width: 6px;
        height: 10px;
        // border: 2px solid #fff;
        border-top: none;
        border-left: none;
        // transform-origin: bottom right;
        // transform:
        //   translateX(0)
        //   translateY(1px)
        //   rotate(45deg);
        
      }
    }

    &:focus {
      box-shadow: 0 0 0 3px #8cdaff;
    }
    &:hover {
        box-shadow: 0 0 0 3px #8cdaff;
      }
    // &:hover {
    //     outline:none;
    //     box-shadow: 0 0 2px 2px rgb(200,200,200);
    //     border-radius: 4px;
    // }

    // &:disabled{
    //     border:3px solid rgb(45,92,197);
    // }

    // &:disabled {
    //     border-radius: 4px;
    //     border:3px solid rgb(45,92,197);
    // }

    // &:focus {
    //     border:1px solid rgb(45,92,197);
    //     padding: 10px;
    // }
    // transform: scale(2);
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

    created(){
        
    },
    mounted() {
        this.$nextTick(() => {
            console.log(this);
        console.log(this.$refs);
        console.log(this.$refs.ci);
        // this.$refs['ci'].indeterminate=true;
        
        })
      }
      ,methods:{
        
        handleChange(e){
            // console.log("This change")
            console.log(this.checkbox.hyphenated,this.$refs['ci'].checked)
            
            if (this.checkbox.hyphenated && this.$refs['ci'].checked)
                this.$refs['ci'].indeterminate=true;
        }
      },

    render(){

        return (
                <div>
                    <Checkbox ref="ci" type="checkbox" disabled={this.checkbox.disable} onChange={this.handleChange}>
                        </Checkbox>
                    <Label for="convrrt"> {this.checkbox.title} </Label>
                </div>
        )
    },
  };



