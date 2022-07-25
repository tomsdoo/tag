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

  it("property attributesTemplate", () => {
    const attributes = {
      target: "_blank"
    };

    assert.equal(
      JSON.stringify(
        new Tag("a", { attributes }).attributesTemplate
      ),
      JSON.stringify(attributes)
    );
  });

  it("property stylesTemplate", () => {
    const styles = {
      color: "green"
    };

    assert.equal(
      JSON.stringify(
        new Tag("a", { styles }).stylesTemplate
      ),
      JSON.stringify(styles)
    );
  });

});
