import { shallowMount } from "@vue/test-utils";
import Sponsors from "@/components/Sponsors.vue";

describe("Sponsors.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Sponsors, {
      propsData: { msg }
    });
    // expect(wrapper.text()).toMatch(msg);
  });
});
