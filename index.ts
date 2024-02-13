import { createTemplate } from './template';
import { createReactivity } from './reactivity';
import { useEffect } from './lifecycle';

const AppTemplate = createTemplate((state: any, props: any) => {
  const { updateState, mount, subscribe, render } = createReactivity(state, AppTemplate);

  useEffect(() => {
    mount();
  });

  subscribe(() => {
    console.log('State changed:', state);
  });

  return h('div', [
    h('h1', state.count),
    h('button', { on: { click: () => updateState({ count: state.count + 1 }) } }, 'Add'),
  ]);
});

const h = require('snabbdom/h').default;

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  container.appendChild(AppTemplate({ count: 0 }));
});
