import MyCardAction from "@/components/MyCardAction.vue";
import { mount } from "@vue/test-utils";

describe("components/MyCardAction", () => {
  it("renders", () => {
    const wrapper = mount(MyCardAction, {
      slots: { default: "Helloworld" },
    });

    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });
});
