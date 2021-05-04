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

const Template = args => ({
    components: { Checkbox },
    setup() {
        return { args, ...actionsData };
    },
    template: '<Checkbox v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {
    checkbox: {

        title: 'Check box with a tick',
        state: 'CHECKBOX_DEFAULT',
    },
};



export const Hyphen = Template.bind({});
Hyphen.args = {
    checkbox: {
        ...Default.args.checkbox,
        title: 'Checkbox with a hyphen',
        state: 'CHECKBOX_HYPHEN',
    },
};
