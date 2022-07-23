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

describe("Tag", () => {
  it("window.Tag", () => {
    assert(
      window.Tag,
      "window.Tag does not exist"
    );
  });

  it("1 == 1", () => {
    assert.equal(1,1, "ng")
  });
});
