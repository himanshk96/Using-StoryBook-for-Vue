import Checkbox from './checkbox.jsx';

import { action } from '@storybook/addon-actions';

export default {
    component: Checkbox,
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    title: 'Checkbox',
    //👇 Our events will be mapped in Storybook UI
    argTypes: {
        onCheckboxRound: {},
        onPinTask: {},
        onArchiveTask: {},
    },
};

export const actionsData = {
    onCheckboxRound: action('round-checkbox'),
    onPinTask: action('pin-task'),
    onArchiveTask: action('archive-task'),
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

        title: 'Test Task',
        state: 'TASK_INBOX',
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    checkbox: {
        ...Default.args.checkbox,
        state: 'TASK_PINNED',
    },
};

export const Round = Template.bind({});
Round.args = {
    checkbox: {
        ...Default.args.checkbox,
        state: 'CHECKBOX_ROUND',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    checkbox: {
        ...Default.args.checkbox,
        state: 'TASK_ARCHIVED',
    },
};