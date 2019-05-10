import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FormHeader from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("<FormHeader />", () => {
  const wrapper = shallow(<FormHeader />);

  it("renders component successfully", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("component name is 'header'", () => {
    expect(wrapper.name()).toEqual("header");
  });
});
