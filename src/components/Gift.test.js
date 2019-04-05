import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {
  const gift = shallow(<Gift />);

  it("renders properly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initializes a person and gift in `state`", () => {
    expect(gift.state()).toEqual({ person: "", gift: "" });
  });

  describe("when typing into the `person` input", () => {
    const person = "uncle";

    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: person, name: "person" } });
    });

    it("updates the `person` in `state`", () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe("when typing into the `gift` input", () => {
    const giftitem = "whiskey";

    beforeEach(() => {
      gift
        .find(".input-gift")
        .simulate("change", { target: { value: giftitem, name: "gift" } });
    });

    it("updates the `gift` in `state`", () => {
      expect(gift.state().gift).toEqual(giftitem);
    });
  });
});
