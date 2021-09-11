import MyButton from "./MyButton.vue";

export default {
  title: "Components/MyButton",
  component: MyButton,
  argTypes: {
    disabled: { control: "boolean" },
    size: { control: "select", options: ["large", "medium", "small"] },
  },
  args: {
    disabled: false,
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args">This is some button text</my-button>',
});

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};
