import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ApiCall from "@/components/ApiCall.vue";

describe("ApiCall.vue", () => {
  it("renders h1 tag", () => {
    const wrapper = shallowMount(ApiCall);
    expect(wrapper.find("h1").text()).equal("Services");
  });
});

it("button renders right text", () => {
  const wrapper = shallowMount(ApiCall);
  expect(wrapper.find(".btnEl").text()).equal("Add New Service");
});
