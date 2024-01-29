import { mount, VueWrapper } from "@vue/test-utils";
import HelloWorld from "src/components/HelloWorld.vue";
import { beforeAll, describe, expect, it } from "vitest";

describe("HelloWorld.vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: VueWrapper<any>;

  const message = "Happy people";

  beforeAll(() => {
    wrapper = mount(HelloWorld, {
      props: { message },
      global: {
        plugins: [],
      },
    });
  });

  it("should renders page content correctly", () => {
    expect(wrapper.text()).toContain(message);
  });
  it("is a Vue instance", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should increment counter when btnIncrement is pressed", () => {
    wrapper.get({ ref: "btnIncrement" }).trigger("click");

    expect(wrapper.vm.count).toBe(1);
  });
});
