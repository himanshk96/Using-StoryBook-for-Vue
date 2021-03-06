import Checkbox from './checkbox.jsx';

import { action } from '@storybook/addon-actions';

export default {
    component: Checkbox,
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    title: 'Checkbox',
    //👇 Our events will be mapped in Storybook UI
    argTypes: {

    },
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
        title: 'Blue whale decided to have shrimp',
        disable: false,
    },
};

export const Hyphen = Template.bind({});
Hyphen.args = {
    checkbox: {
        ...Default.args.checkbox,
        title: 'Blue whale decided to have shrimp',
        hyphenated: true,
    },
};
