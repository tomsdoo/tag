# @tomsd/tag

It is a tag generator class.

# Installation
``` shell
npm install @tomsd/tag
```

# Usage
``` html
<script src="https://cdn.jsdelivr.net/npm/@tomsd/tag"></script>
```

``` javascript
// ad hoc use
document.body.appendChild(
  new Tag("a")
    .create({ href: "https://www.google.com/" })
).innerHTML = "link text";
```

``` javascript
// instance with templates
const myAnchor = new Tag(
  "a",
  {
    attribltes: {
      target: "_blank"
    },
    styles: {
      color: "green"
    }
  }
);

document.body.appendChild(
  myAnchor.create({ href: "https://www.google.com/" })
).innerHTML = "google";

document.body.appendChild(
  myAnchor.create({ href: "https://www.yahoo.com/" })
).innerHTML = "yahoo";

```

``` javascript
// extending as you like
class MyAnchor extends Tag {
  clickedCount;
  constructor(options){
    super("a", options);
    this.clickedCount = 0;
  }
  create(attributes, styles, onClicked){
    const element = super.create(attributes, styles);
    element.addEventListener("click", (event) => {
      onClicked({
        event,
        clickedCount: this.clickedCount
      });
      this.clickedCount++;
    });
    return element;
  }
}

const myAnchor = new MyAnchor({
  attributes: {
    target: "_blank"
  }
});

const outLog = ({ clickedCount }) => {
  console.log({ clickedCount });
};

document.body.appendChild(
  myAnchor.create(
    { href: "https://www.google.com/" },
    {},
    outLog
  )
).innerHTML = "google";

document.body.appendChild(
  myAnchor.create(
    { href: "https://www.yahoo.com/" },
    {},
    outLog
  )
).innerHTML = "yahoo";

```
