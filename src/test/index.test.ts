import { describe, it, expect } from 'vitest';
import { getElementFromHtml } from '../lib/index.svelte';

describe('getElementFromHtml', () => {
  const html = `
    <div>
      <h1>Test HTML</h1>
      <div id="main-content">
        <p class="greeting">Hello, World!</p>
        <p class="greeting">Hello, again!</p>
      </div>
    </div>
  `;
  
  it('should find an element by its Id', () => {
    const element = getElementFromHtml(html, '#main-content');
    expect(element).not.toBeNull();
    expect(element?.tagName).toBe('DIV');
  });
  
  it('should find the first element by its class', () => {
    const element = getElementFromHtml(html, '.greeting');
    expect(element).not.toBeNull();
    expect(element?.textContent).toBe('Hello, World!');
  });
  
  it('should return null if no element is found', () => {
    const element = getElementFromHtml(html, '#non-existent-element');
    expect(element).toBeNull();
  });
});
