type templateOptions = {
  attributes?: any;
  styles?: any;
};

export class Tag {
  protected name: string;
  protected attributesTemplate: any;
  protected stylesTemplate: any;
  constructor(
    name: string,
    { attributes, styles }: templateOptions = {}
  ) {
    this.name = name;
    this.attributesTemplate = attributes || {};
    this.stylesTemplate = styles || {};
  }
  protected mergeAttributes(attributes: any){
    return {
      ...this.attributesTemplate,
      ...attributes
    };
  }
  protected mergeStyles(styles: any){
    return {
      ...this.stylesTemplate,
      ...styles
    };
  }
  public get(attributes: any = {}, styles: any = {}) {
    return Array
      .from(
        document.getElementsByTagName(this.name)
      )
        .filter(
          element => Object.entries(
            this.mergeAttributes(attributes)
          )
            .every(
              ([key, value]) =>
                key in element && element[key] == value
            )
        )
        .filter(
          (element: any) => Object.entries(
            this.mergeStyles(styles)
          )
            .every(
              ([key, value]) =>
                key in element.style && element.style[key] == value
            )
        );
  }
  public create(attributes: any = {}, styles: any = {}) {
    const element = document.createElement(this.name);

    Object.entries(
      this.mergeAttributes(attributes)
    )
      .forEach(([key, value]) => {
        element.setAttribute(key, value as string);
      });

    Object.entries(
      this.mergeStyles(styles)
    )
      .forEach(([key, value]) => {
        element.style[key] = value;
      });

    return element;
  }
}
