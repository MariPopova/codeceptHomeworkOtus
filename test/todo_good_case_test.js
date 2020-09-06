Feature('To Do tests');

Before((I) => { // or Background
    I.amOnPage('http://todomvc.com/examples/emberjs/');
    I.fillField('#new-todo', 'text');
    I.pressKey('Enter');
    I.see('text', 'label');
    I.waitForText('1 item left');
});

Scenario('Check and uncheck todo', (I) => {
    I.click('.toggle');
    I.see('0 items left');
    I.click('.toggle');
    I.see('1 item left');
});

Scenario('Add one more todo', (I) => {
    I.fillField('#new-todo', 'new todo');
    I.pressKey('Enter');
    I.see('new todo', 'label');
    I.see('2 items left');
});

Scenario('Check active and unactive todo', (I) => {
    I.fillField('#new-todo', 'new todo');
    I.pressKey('Enter');
    I.see('new todo', 'label');
    I.see('2 items left');
    I.click('li:nth-child(1) .toggle');
    I.click('Active');
    I.see('new todo');
    I.see('1 item left');
    I.click('Completed');
    I.see('text');
    I.see('1 item left');
});

Scenario('Clear completed todo', (I) => {
    I.click('.toggle');
    I.see('0 items left');
    I.click('Completed');
    I.see('text');
    I.click('Clear completed');
    I.dontSee('text');
});

Scenario('Edit todo', (I) => {
    I.doubleClick('li:nth-child(1)');
    I.waitForText('text', 1, 'label');
    I.fillField('label', ' new');
    I.pressKey('Enter');
    I.see('text new', 'label');
    I.waitForText('1 item left');
});