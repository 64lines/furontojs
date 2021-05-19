const INNER_TEXT = 'innerText';

const furonto = {
  create(tagName, attributes, ...children) {
    const component = document.createElement(tagName);
    const filteredAttributes = Object.entries(attributes).filter(([key]) => key !== INNER_TEXT);

    filteredAttributes.forEach(([key, value]) => {
      component.setAttribute(key, value);
    });

    if (Object.keys(attributes).includes(INNER_TEXT)) {
      component.innerText = attributes[INNER_TEXT];
    }

    children.forEach((child) => {
      component.append(child);
    });

    return component;
  },
  div(attributes, ...children) {
    return this.create('div', attributes, ...children);
  },
  link(attributes, ...children) {
    return this.create('a', attributes, ...children);
  },
  registerComponent(component) {
    const main = document.getElementById('app');
    main.append(component)
  }
};
  