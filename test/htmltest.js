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
  it("window.Tag", () => {
    assert(
      window.Tag,
      "window.Tag does not exist"
    );
  });

  it("extending", () => {
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
