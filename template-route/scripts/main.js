const route = {
  '/home': 'home',
  '/about': 'about',
  '/contact': 'contact'
};

/*
  return template content
*/
async function getTemplateContent(filePath, id) {
  const domParser = new DOMParser();
  const template = document.createElement('template');

  const response =  await fetch(`${filePath}`);
  const bodyText = await response.text();
  const doc = domParser.parseFromString(bodyText, 'text/html');
  const html = doc.querySelector(`${id}`).innerHTML;

  template.innerHTML = html;

  return template.content.cloneNode(true);
}

/*
  nav click
*/
const onLinkClick = (event) => {
  event.preventDefault(); 
  history.pushState({}, event.target.href, event.target.href)
  updatePage();
}

async function appendNav() {
  const container = document.querySelector('#container');
  const nav = container.querySelector('.container__nav');

  const templateContent = await getTemplateContent('/templates/nav.html', '#template-nav');

  container.replaceChild(templateContent, nav);
}

const updatePage = async () => {
  const pathName = window.location.pathname;
  let id = `#${route[pathName]}`;

  if (id === '#undefined') {
    history.pushState({}, '/home', '/home');
    id = '#home';
  }

  const container = document.querySelector('#container');
  const main = container.querySelector('.container__main');

  const templateContent = await getTemplateContent('/templates/template.html', id);

  container.replaceChild(templateContent, main);
};

appendNav();
updatePage();