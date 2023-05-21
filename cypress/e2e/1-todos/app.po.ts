export class AppPage {
  navigateTo() {
    return cy.visit('http://localhost:4200/');
  }

  getParagraph() {
    return cy.get('app-root h1');
  }

  getFirstTodo() {
    return cy.get('mat-list-item').first();
  }

  getLastTodo() {
    return cy.get('mat-list-item').last();
  }

  getAddTodo() {
    return cy.get('.mat-mdc-input-element').first();
  }

  getAddTodoButton() {
    return cy.get('.mat-mdc-button').first();
  }

  getFirstTodoCheckbox() {
    return cy.get('mat-checkbox').first();
  }

  getFirstDoneTodo() {
    return cy.xpath('//todo-list[2]//todo-item').first();
  }

  getFirstDoneTodoCheckbox() {
    return cy.xpath('//todo-list[2]//todo-item//mat-checkbox').first();
  }

}
