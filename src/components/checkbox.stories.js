import Checkbox from './checkbox.jsx';

import { action } from '@storybook/addon-actions';

export default {
    component: Checkbox,
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    title: 'Checkbox',
    //👇 Our events will be mapped in Storybook UI
    argTypes: {
        onCheckboxHyphen: {},

    },
};

export const actionsData = {
    onCheckboxHyphen: action('Hyphen-checkbox'),

};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Checkbox },
    setup() {
        return { args };
    },//v-bind="args"
    template: '<Checkbox v-bind="$props" />',
});
export const Default = Template.bind({});
Default.args = {
    checkbox: {

        title: 'Check box with a tick',
        disable: false,
    },
};



export const Hyphen = Template.bind({});
Hyphen.args = {
    checkbox: {
        ...Default.args.checkbox,
        title: 'Checkbox with a hyphen',
        hyphenated: true,
    },
};
