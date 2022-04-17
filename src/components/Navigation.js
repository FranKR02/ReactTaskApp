import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className='container' id='container-navbar'>
                    <img src={this.props.logo} className="App-logo navbar-brand p-0 m-0" alt="logo" />
                    <a href='#' className='text-white navbar-brand'>
                        {this.props.titulo}
                    </a>
                    <h4><span className='badge badge-pill bg-secondary'>{this.props.ntareas}</span></h4>
                </div>
            </nav>
        );
    }
}

export default Navigation;