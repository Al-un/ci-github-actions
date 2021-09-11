import MyCard from "@/components/MyCard.vue";
import { mount } from "@vue/test-utils";

describe("components/MyCard", () => {
  it.each([[true], [false]])("renders with padded: %s", (padded) => {
    const wrapper = mount(MyCard, {
      props: { padded },
      slots: { default: "Helloworld" },
    });

    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });
});
