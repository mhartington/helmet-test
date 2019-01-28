import { hasAttributes, hasChildren, isTextNode } from './util';
import { createElement } from './dom';

export function title(node: Element, head: HTMLElement) {
  const existingElement = head.querySelector(`title`);
  if (existingElement !== null) {
    return [createElement(node), existingElement];
  } else {
    return [createElement(node)];
  }
}

export function meta(node: Element, head: HTMLElement) {
  if (hasAttributes(node.attributes, ['name', 'content'])) {
    const existingElement = head.querySelector(
      `meta[name="${node.attributes['name']}"]`
    );
    console.log(existingElement);

    if (existingElement !== null) {
      return [createElement(node), existingElement];
    } else {
      return createElement(node);
    }
  }
}

export function link(node: Element) {
  if (!hasChildren(node)) return createElement(node);
}

export function style(node: Element) {
  console.log(node)
  // if (hasChildren(node) && isTextNode(node.vchildren[0])) {
  //   return createElement(node);
  // }
}
//
// export function script(node: Element) {
//   if (hasChildren(node) || hasAttributes(node)) {
//     return createElement(node);
//   }
// }
//
// export function base(node: Element) {
//   if (!hasChildren(node) && hasAttributes(node)) {
//     return createElement(node);
//   }
// }
//
// export const template = createElement;
// export const noscript = createElement; // SSR only
