import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const FormilyInputMeta: ComponentMetadata = {
  componentName: 'FormilyInput',
  title: 'FormilyInput',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'formily-antd5-m',
    version: '0.1.0',
    exportName: 'FormilyInput',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [],
    supports: {
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: 'FormilyInput',
    screenshot: '',
    schema: {
      componentName: 'FormilyInput',
      props: {},
    },
  },
];

export default {
  ...FormilyInputMeta,
  snippets,
};
