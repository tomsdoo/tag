import {describe, it } from "mocha";
import { Tag } from "../src/tag";
import { strict as assert } from "assert";
import { JSDOM } from "jsdom";
import * as path from "path";

const htmlText = `
<!DOCTYPE html>
<html>
  <body></body>
</html>
`;

describe("Tag class", () => {
  beforeEach(async () => {
    global.document = new JSDOM(htmlText).window.document;
  });

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

  it("attributesTemplate", () => {
    const elementId = "my-id";
    const elementValue = "element-value";
    document.body.appendChild(
      new Tag(
        "a",
        {
          attributes: { id: elementId }
        }
      ).create()
    ).innerHTML = elementValue;

    assert.equal(
      (document.getElementById(elementId) as HTMLElement).innerHTML,
      elementValue
    );
  });

  it("stylesTemplate", () => {
    const elementId = "my-id";
    const elementValue = "elemnet-value";
    const elementWidth = "56px";
    document.body.appendChild(
      new Tag(
        "a",
        {
          attributes: { id: elementId },
          styles: { width: elementWidth }
        }
      ).create()
    ).innerHTML = elementValue;

    assert.equal(
      (document.getElementById(elementId) as HTMLElement).style.width,
      elementWidth
    );
  });

  it("Custom class", () => {
    const valueChanged = "value-changed";
    class CustomAnchor extends Tag {
      constructor(){
        super("a");
      }
      public create(){
        const element = super.create();
        element.addEventListener("click", (event) => {
          // @ts-ignore
          event.target.innerHTML = valueChanged;
        });
        return element;
      }
    }

    document.body.appendChild(new CustomAnchor().create());
    Array.from(document.querySelectorAll("a"))
      .forEach(element => element.click());

    assert.equal(
      (document.querySelector("a") as HTMLElement).innerHTML,
      valueChanged
    );
  });

});
