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
    width: 20px;
    height: 20px;
    background-color: silver;
    border: 2px solid silver;
    border-radius: 4px;
    
    &:checked {
        bg-color: white;
        &::after {
            border: 2px solid white;
        }
        &:focus {
            outline: 5px solid #0375FF;
            border-color:white;
        }
        &:hover {
            outline:none;
            box-shadow: 0 0 0 3px silver;
        }
    }
    &:focus {
      border: 5px solid silver; 
    }
    &:hover {
        box-shadow: 0 0 0 3px silver;
    }
`

export default {

    name: 'Checkbox',

    props: {
        checkbox: {
            type: Object,
            required: true,
            default: () => ({ title: '', disable: '' }),
            validator: checkbox => ['title', 'disable'].every(key => key in checkbox),
        },
    },

    created() {

    },
    mounted() {
        this.$nextTick(() => {
            console.log(this);
            console.log(this.$refs);
            console.log(this.$refs.ci);
            // this.$refs['ci'].indeterminate=true;

        })
    }
    , methods: {

        handleChange(e) {
            // console.log("This change")
            console.log(this.checkbox.hyphenated, this.$refs['ci'].checked)

            if (this.checkbox.hyphenated && this.$refs['ci'].checked)
                this.$refs['ci'].indeterminate = true;
        }
    },

    render() {

        return (
            <div>
                <Checkbox ref="ci" type="checkbox" disabled={this.checkbox.disable} onChange={this.handleChange}>
                </Checkbox>
                <Label for="convrrt"> {this.checkbox.title} </Label>
            </div>
        )
    },
};



