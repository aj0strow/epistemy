import React from "react"
import Home from "website/home"
import { shallow } from "enzyme"

describe("Home", () => {
  it("should render", () => {
    shallow(<Home />)
  })
})
