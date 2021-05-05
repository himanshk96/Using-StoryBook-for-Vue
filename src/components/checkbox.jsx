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

    &:indeterminate{
        &:hover{
            outline: none;
        }
        &:focus-visible {
            outline-offset:3px;
            border: 5px solid blue; 
            border-radius: 4px;
        }
    }
    &:checked {
        bg-color: white;
        &::after {
            border: 2px solid white;
        }
        &:focus-visible {
            outline-offset:3px;
            border: 5px solid blue; 
            border-radius: 4px;
        }
        &:hover {
            outline:none;
            box-shadow: 0 0 5px 3px silver;

        }
    }
    &:focus-visible {
        outline-offset:0px;
        background-color: blue;
        border: 5px solid blue; 
        background-color: blue;
    }
    &:hover {
        box-shadow: 0 0 5px 3px silver;
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
    methods: {

        handleChange(e) {
            // console.log(this.checkbox.hyphenated, this.$refs['ci'].checked)
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



