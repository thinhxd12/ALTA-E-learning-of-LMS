import FormNote from "@shared/components/FormNote";
import { Input } from "antd";
import Form, { Rule } from "antd/lib/form";
import lodash from "lodash";
import { NamePath } from "rc-field-form/lib/interface";
import React from "react";
import { ReactNode } from "react";
import { IntlShape } from "react-intl";

export interface IFormContent {
  label?: string | React.ReactNode,
  name: string,
  render?: (placeholder: string | any, item?: IFormContent) => ReactNode | undefined,
  readOnly?: boolean;
  hidden?: boolean;
  rules?: Rule[];
  dependencies?: Array<NamePath>;
  maxLength?:number;
}

export class FormContent implements IFormContent {
  label: string | React.ReactNode;
  name: string;
  readOnly?: boolean;
  rules?: Rule[];
  private pPender?: (placeholder: string, item?: IFormContent) => ReactNode | undefined;
  render: (intl: IntlShape) => ReactNode;
  hidden?: boolean;
  maxLength:number;

  constructor(data: IFormContent) {
    Object.assign(this, data);
    this.pPender = data.render;
    this.render = this._render.bind(this);
  }

  private _render(intl: IntlShape) {
    const placeholder = this.placeholder(intl);
    if (this.pPender == undefined) {
      return <Input placeholder={placeholder} readOnly={this.readOnly} hidden={this.hidden} maxLength={this.maxLength||100} />;
    }

    return this.pPender && this.pPender(placeholder, this);
  }


  private placeholder(intl: IntlShape) {
    if (this.label == null) {
      return undefined;
    }
    if (typeof this.label == "string") {
      return intl.formatMessage({ id: "common.input.placeholder" }, { label: intl.formatMessage({ id: this.label, defaultMessage: this.label }).toLocaleLowerCase() });
    }
    return "";

  }

}

export function renderForm(items: IFormContent[], intl: IntlShape, note: boolean = true): React.ReactNode {
  if (lodash.isEmpty(items)) {
    console.error("không thể render form", items);
    return null;
  }
  return <>
    {items.map((item: IFormContent) => {
      const renderItem = new FormContent(item);
      let label = item?.label;
      if (typeof item?.label == "string") {
        label = intl.formatMessage({ id: item?.label });
      }
      return (<Form.Item
        key={item.name}
        label={label}
        name={item?.name}
        rules={item.rules}
        dependencies={item.dependencies}
        hidden={item.hidden}
      >
        {renderItem.render(intl)}
      </Form.Item>)
    })}
    <FormNote text={intl.formatMessage({ id: "common.formNote" })}></FormNote>
  </>
}