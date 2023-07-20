// react
import { React, Component, Children} from "react";


// componentes
import Tasks from "./Tasks";
import Form from "./Form";


// css
import "./list.css";


// <<<COMPONENTE LIST>>>
export default class List extends Component {

  state = {
    newTask: '',
    task: [],
    index: -1,
  }


  componentDidMount(){
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({
      task: tasks,
    })
  }


  componentDidUpdate(preProps, preState){
    const { task } = this.state;

    if(task === preState.task) return;

    localStorage.setItem('tasks', JSON.stringify(task))

  }

  // <<<MANIPULADORES DE EVENTO>>>
  // --------------------------------------------
  handleSubmit = (e) => {
    e.preventDefault();
    const { task, index } = this.state;
    let { newTask } = this.state;

    newTask =  newTask.trim();

    if(task.indexOf(newTask) !== -1) return;

    const newTasks = [...task];

    if(index === -1 ) {
      this.setState({
        task: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        task: [...newTasks],
        index: -1,
      });
    }
  }


  handleInput = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }


  handleEdit = (e, index) => {
    const { task } = this.state;

    this.setState({
      index,
      newTask: task[index]
    })
  }

  handleDelete = (e, index) => {
    const { task } = this.state;
    const newTasks = [ ...task ];

    newTasks.splice(index, 1);

    this.setState({
      task: [...newTasks],
    });
  }
  // ----------------------------------------

  render(){
    const { newTask, task } = this.state;

    return (
      <div className="List">
        <h1>Lista de Tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          newTask={newTask}
        />

        <Tasks
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        >
          {task}
        </Tasks>
      </div>
    )
  }
}
