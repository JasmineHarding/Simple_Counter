import React from 'react';
import Counter from './components/Counter';
import ProfileCard from './components/ProfileCard';
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
      <div>
        <ProfileCard
          name="Jane Doe"
          bio="A passionate developer with a love for creating beautiful and functional applications."
          profilePicture="https://via.placeholder.com/100"
        />
      </div>
    </div>
  );
}

export default App;
