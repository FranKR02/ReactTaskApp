import React, { Component } from 'react';

class Formulario extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'Low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    };
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTask(this.state);
    }
    render() {
        return (
            <div className='card'  >
                <form className='card-body' id='card-form' onSubmit={this.handleSubmit} >
                    <div id='inputs-form'>
                        <div className="form-group">
                            <input type="text" name='title' className='form-control' onChange={this.handleInput} placeholder='Title' required />
                        </div>
                        <div className="form-group">
                            <input type="text" name='responsible' className='form-control' onChange={this.handleInput} placeholder='Responsible' required/>
                        </div>
                        <div className="form-group">
                            <input type="text" name='description' className='form-control' onChange={this.handleInput} placeholder='Description' required />
                        </div>
                        <div className="form-group">
                            <div className='input-group' id='select'>
                                <select className="custom-select" name='priority' onChange={this.handleInput}>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hight">Hight</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id='btn-form p-3' >
                        <button type="submit" className="btn btn-primary btn-lg">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;