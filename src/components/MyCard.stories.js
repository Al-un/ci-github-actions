import MyCard from "./MyCard.vue";

export default {
  title: "Components/MyCard",
  component: MyCard,
  argTypes: {
    padded: { control: "boolean" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyCard },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-card v-bind="args">Some card text</my-card>',
});

export const Padded = Template.bind({});
Padded.args = {
  padded: true,
};

export const Default = Template.bind({});
Default.args = {
  padded: false,
};
