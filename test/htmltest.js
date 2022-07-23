const assert = (condition, message) => {
  if(!condition){
    throw new Error(message);
  }
};

assert.equal = (a,b,message) => {
  if(a != b){
    throw new Error(message);
  }
};

describe("Tag Class", () => {
  it("Tag class exists", () => {
    assert(
      window.Tag,
      "window.Tag does not exist"
    );
  });

  it("attributesTemplate", () => {
    const targetBlankAnchor = new Tag(
      "a",
      {
        attributes: {
          target: "_blank"
        }
      }
    );
    const url = "https://www.google.com";
    const element = targetBlankAnchor
      .create({ href: url });

    assert(
      element.getAttribute("target") === "_blank" &&
      element.getAttribute("href") === url,
      "attributesTemplate does not work"
    );
  });

  it("stylesTemplate", () => {
    const greenAnchor = new Tag(
      "a",
      {
        styles: {
          color: "green"
        }
      }
    );
    const url = "https://www.google.com";
    const element = greenAnchor
      .create({ href: url });

    assert(
      "color" in element.style &&
      element.style.color === "green",
      "stylesTemplate does not work"
    );
  });

  it("extending class", () => {
    class ATag extends Tag {
      constructor(){
        super("a");
      }
    }

    class BlankATag extends ATag {
      constructor(){
        super();
      }
      create(attributes, styles){
        return super.create(
          {
            target: "_blank",
            ...attributes
          },
          styles
        );
      }
    }

    assert.equal(
      new BlankATag()
        .create()
        .getAttribute("target"),
      "_blank",
      "target _blank is not set"
    );
  });
});
