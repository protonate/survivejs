import uuid from 'node-uuid';
import React from 'react';
import Note from './Notes.jsx';


export default class App extends React.Component {
  constructor (props) {
    this.super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundries'
        }
      ]
    };
  }
  render() {
    const notes = this.state.notes;

    return (
      <div>
        <Notes items={notes} />
      </div>
    )
  }
}
