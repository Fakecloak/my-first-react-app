import { Component } from "react";
import "./App.css";
import ClassInputCount from "./ClassInputCount.jsx";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat({ text: state.inputVal, isEditing: false }),
      inputVal: "",
    }));
  }

  // handleDelete(todo) {
  //   this.setState((state) => ({
  //     todos: state.todos.filter((currentTodo) => currentTodo !== todo)
  //   }))
  // }

  handleDelete(index) {
    this.setState((state) => ({
      todos:state.todos.filter( (currentTodo, currentIndex) => currentIndex !== index )
    }))
  }

  handleEdit(indexToEdit) {

    const updatedTodos = this.state.todos.map( 
      (todo, currentIndex) => {
        if (currentIndex === indexToEdit) {
          return ({ 
            ...todo, 
            isEditing: !todo.isEditing });
        }
        return todo;
      }
    );

    this.setState({ todos: updatedTodos });
  }

  handleEditChange(e, indexToEdit) {

    const updatedTodos = this.state.todos.map(
      (todo, currentIndex) => {
        if(currentIndex === indexToEdit) {
          return ({ 
            ...todo,
             text: e.target.value
         });
        }
        return todo;
      }
    )
    this.setState({todos: updatedTodos});
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            id="task-entry"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo,index) => (
            <li key={index}>
              {todo.isEditing ? (
                <input type="text" value={todo.text} onChange={(e) => this.handleEditChange(e, index)} />

              ): (
                <span>{todo.text}</span>
              )}
              
              <button className="delete-btn" onClick={() => this.handleDelete(index)}>
                Delete
              </button>
              <button className="edit-btn" onClick={() => this.handleEdit(index)}>
                {todo.isEditing ? "Save" : "Edit"}
              </button>
            </li>           
          ))}
        </ul>
        <ClassInputCount count={this.state.todos.length} />
      </section>
    );
  }
}

export default ClassInput;
