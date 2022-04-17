import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Formulario from './components/FormularioTareas';
import tareas from './tareas.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      titulo: 'Aplicacion de tareas',
      tareas
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleAddTask(tarea) {
    this.setState({
      tareas: [...this.state.tareas, tarea]
    });
  }
  removeTask(index) {
    if (window.confirm("Estas seguro?")) {
      this.setState({
        tareas: this.state.tareas.filter((e, i) => {
          return i !== index
        })
      });

    }
  }
  priorityAdd(priority) {
    switch (priority) {
      case 'Low':
        return (
          <span className='badge badge-pill bg-success' id='badge'>{priority}</span>
        );
      case 'Medium':
        return (
          <span className='badge badge-pill bg-warning' id='badge'>{priority}</span>
        );
      case 'Hight':
        return (
          <span className='badge badge-pill bg-danger' id='badge'>{priority}</span>
        );
    }
  }
  render() {
    const tareas = this.state.tareas.map((tarea, i) => {
      return (
        <div className='col-md-4' key={i}>
          <div className='card mt-4'>
            <div className='card-header'>
              <h3 className='card-title'>
                {tarea.title}
              </h3>
              <div className='span'>
                {this.priorityAdd(tarea.priority)}
              </div>
            </div>
            <div className='card-body'>
              <p className='card-text'>{tarea.description}</p>
              <p className='card-text fw-bolder h3'>{tarea.responsible}</p>
            </div>
            <div className='card-footer center'>
              <button className='btn btn-danger' onClick={this.removeTask.bind(this, i)}>Delete</button>
            </div>
          </div>
        </div>

      )
    });
    return (
      <div className="App pb-4">
        <Navigation titulo={this.state.titulo} ntareas={this.state.tareas.length} logo={logo} >
        </Navigation>
        <div className='container'>
          <div className="row mt-4">
            <div className='col-md-4 mt-4'>
              <Formulario onAddTask={this.handleAddTask} ></Formulario>
            </div>
            {tareas}
          </div>
        </div>
      </div>
    );
  }

}
export default App;
