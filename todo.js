let input = prompt('What would you like to do?');
const todos = ['Exercise', 'Shopping'];
while(input !== 'quit' && input !== 'Q'){
    if(input==='new'){
        const newTodo = prompt('Add a new todo');
        todos.push(newTodo);
    }
    else if(input==='list'){
        for(let i=0; i<todos.length; i++){
        console.log(`${i}: ${todos[i]}`);
        }
    }
    else if(input==='delete'){
        const index = parseInt(prompt('Enter the index'));
        let deleted = todos.splice(index,1);
        console.log(`deleted ${deleted}!!`);
    }
    // else{
    //     input = prompt('Command not detected!');
    // }
    input = prompt('What would you like to do?');
}

console.log('You Quit!!!');
