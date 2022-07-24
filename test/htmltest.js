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

const variables = {
  urls: {
    google: "https://www.google.com/"
  },
  attributes: {
    targetBlank: {
      attributes: {
        target: "_blank"
      }
    }
  },
  styles: {
    colorGreen: {
      styles: {
        color: "green"
      }
    }
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
      variables.attributes.targetBlank
    );
    const element = targetBlankAnchor
      .create({ href: variables.urls.google });

    assert(
      element.getAttribute("target") === "_blank" &&
      element.getAttribute("href") === variables.urls.google,
      "attributesTemplate does not work"
    );
  });

  it("stylesTemplate", () => {
    const greenAnchor = new Tag(
      "a",
      variables.styles.colorGreen
    );
    const element = greenAnchor
      .create({ href: variables.urls.google });

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
            ...variables.attributes.targetBlank.attributes,
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
