// place files you want to import through the `$lib` alias in this folder.

export function getElementFromHtml(html: string, selector: string): Element | null {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.querySelector(selector);
}