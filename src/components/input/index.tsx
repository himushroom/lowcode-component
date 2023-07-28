import { FormItem, Input } from '@formily/antd-v5';
import { createForm } from '@formily/core';
import { createSchemaField, FormProvider, ISchema } from '@formily/react';
import React, { createElement } from 'react';

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

const FormilyInput: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
    </FormProvider>
  );
};

FormilyInput.displayName = 'FormilyInput';

export default FormilyInput;
