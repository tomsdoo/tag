type templateOptions = {
  attributes?: any;
  styles?: any;
};

export class Tag {
  protected _name: string;
  protected _attributesTemplate: any;
  protected stylesTemplate: any;
  constructor(
    name: string,
    { attributes, styles }: templateOptions = {}
  ) {
    this._name = name;
    this._attributesTemplate = attributes || {};
    this.stylesTemplate = styles || {};
  }
  public get name(){
    return this._name;
  }
  public get attributesTemplate(){
    return this._attributesTemplate;
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
                // @ts-ignore
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
        // @ts-ignore
        element.style[key] = value;
      });

    return element;
  }
}
