export class Tag {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  public get(attributes: any = {}, styles: any = {}) {
    return Array
      .from(
        document.getElementsByTagName(this.name)
      )
        .filter(
          element => Object.entries(attributes)
            .every(
              ([key, value]) =>
                key in element && element[key] == value
            )
        )
        .filter(
          (element: any) => Object.entries(styles)
            .every(
              ([key, value]) =>
                key in element.style && element.style[key] == value
            )
        );
  }
  public create(attributes: any = {}, styles: any = {}) {
    const element = document.createElement(this.name);

    Object.entries(attributes)
      .forEach(([key, value]) => {
        element.setAttribute(key, value as string);
      });

    Object.entries(styles)
      .forEach(([key, value]) => {
        element.style[key] = value;
      });

    return element;
  }
}
