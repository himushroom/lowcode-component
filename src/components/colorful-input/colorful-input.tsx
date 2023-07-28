import * as React from 'react';
import { createElement } from 'react';
import { Input } from '@alifd/next';
import { bizCssPrefix } from '../../variables';
import './index.scss';
import { FormButtonGroup, FormItem, Input, Submit } from '@formily/antd-v5';
import { createForm } from '@formily/core';
import { createSchemaField, FormProvider, ISchema } from '@formily/react';

export interface ColorfulInputProps {
  color?: string;
  style?: object;
}

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
});

const form = createForm();

const schema: ISchema = {
  type: 'object',
  properties: {
    input: {
      type: 'string',
      title: '输入框',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      required: true,
      'x-component-props': {
        style: {
          width: 240,
        },
      },
    },
    textarea: {
      type: 'string',
      title: '文本框',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
      'x-component-props': {
        style: {
          width: 400,
        },
      },
    },
  },
};

const ColorfulInput: React.FC<ColorfulInputProps> = function ColorfulInput({
  color,
  style = {},
  ...otherProps
}) {
  const _style = style || {};
  if (color) {
    _style.backgroundColor = color;
  }
  const _otherProps = otherProps || {};
  _otherProps.style = _style;
  return (
    // <Input { ..._otherProps } />
    <FormProvider form={form}>
      <SchemaField schema={schema} />
    </FormProvider>
  );
};

export default ColorfulInput;
