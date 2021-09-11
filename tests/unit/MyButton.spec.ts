import MyButton from "@/components/MyButton.vue";
import { mount } from "@vue/test-utils";

describe("components/MyButton", () => {
  it.each([["small"], ["medium"], ["large"]])(
    "renders with size %s",
    (size) => {
      const wrapper = mount(MyButton, {
        props: { size },
        slots: { default: "Helloworld" },
      });

      expect(wrapper.exists()).toBe(true);
      //   expect(wrapper).toMatchSnapshot();
    }
  );
});
