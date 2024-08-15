import React from 'react';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <h1>React Assessment Tasks</h1>
            <Counter />
            <div>
                <h2>Text Input Section</h2>
                <TextInput />
            </div>
            <div>
                <h2>Todo List Section</h2>
                <TodoList />
            </div>
        </div>
    );
}

export default App;