import MyCardAction from "./MyCardAction.vue";

export default {
  title: "Components/MyCardAction",
  component: MyCardAction,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyCardAction },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-card-action v-bind="args">Some text here</my-card>',
});

export const Default = Template.bind({});
