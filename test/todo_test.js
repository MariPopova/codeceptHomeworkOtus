Feature('To Do list');

const text = new DataTable(['new_todo_text']);
text.add(['Horniman Museum']);
text.add(['shitake mushrooms']);

Scenario('create todo without parametrise', (I) => {
    I.amOnPage('http://todomvc.com/examples/emberjs/');
    I.fillField('#new-todo', 'text');
    I.pressKey('Enter');
    I.see('text', 'label')
    I.see('1 item left');
});

Data(text).Scenario('create todo with parametrise', (I, current) => {
    const {new_todo_text} = current;
    I.amOnPage('http://todomvc.com/examples/emberjs/');
    I.fillField('#new-todo', new_todo_text);
    I.pressKey('Enter');
    I.see(new_todo_text, 'label')
    I.see('1 item left');
})