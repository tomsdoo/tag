import {describe, it } from "mocha";
import { Tag } from "../src/tag";
import { strict as assert } from "assert";

describe("Tag class", () => {
  it("property name", () => {
    const tagName = "a";
    assert.equal(
      new Tag(tagName).name,
      tagName
    );
  });

});
