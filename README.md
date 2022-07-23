# @tomsd/tag

# Installation
``` shell
npm install @tomsd/tag
```

# Usage
``` html
<script src="https://cdn.jsdelivr.net/npm/screen-animation"></script>
```

``` javascript
document.body.appendChild(
  new Tag("a")
    .create(
      {
        href: "https://www.google.com/",
        target: "_blank"
      },
      {
        color: "red"
      }
    )
).innerHTML = "link text";
```
