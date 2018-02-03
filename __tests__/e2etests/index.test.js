/* global describe, it, browser */
const { expect } = require('chai');

const localHostURL = 'http://localhost:9001/';

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url(localHostURL);
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo App');
  });

  it('Should allow me to create a Todo', () => {
    const todoTextTitle = 'Test title';
    const todoTextDescription = 'Test description';
    browser.url(localHostURL);
    browser.element('.ui-input_add-title-text').setValue(todoTextTitle);
    browser.element('.ui-input_add-description-text').setValue(todoTextDescription);
    browser.click('.ui-button_submit-todo');
    const actualTitle = browser.element('.ui-input_add-title-text').getText();
    const actualDescription = browser.element('.ui-input_add-description-text').getText();

    expect(actualTitle).to.equal(todoTextTitle);
    expect(actualDescription).to.equal(todoTextDescription);
  });
});
