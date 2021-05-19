const Title = furonto.create('h1', { class: 'title', innerText: 'Hello Furonto!'})

const LinkContainer = furonto.div({ class: 'link-container'}, 
  furonto.link({ href: 'https://www.google.com/', target: '_blank', innerText: 'Go to furonto page' })
)

const MainDiv = furonto.create('div', {}, 
  Title,
  LinkContainer,
);

furonto.registerComponent(MainDiv);