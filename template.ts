import { VNode } from 'snabbdom';

export type TemplateFunction = (state: any, props: any) => VNode;

export function createTemplate(templateFunction: TemplateFunction) {
  return templateFunction;
}
