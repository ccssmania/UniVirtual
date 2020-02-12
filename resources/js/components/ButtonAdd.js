import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form'


class ButtonAdd extends React.Component{
	constructor() {
    super(); 
    this.state = { showForm: false }
  }
  _showForm = (bool) => {
    this.setState({
      showForm: bool
    });
  }
	render() {
	    return (
	        <div className="container mt-5">
	            <div className="row justify-content-center">
	                <div className="col-md-2">
	                    <button className="add" onClick={this._showForm.bind(true)}> <img src="/images/add.png" alt="Logo" /></button>
	                </div>
	            </div>
	        	{ this.state.showForm&& <Form onSubmitForm={this._showForm.bind(false)} /> }
	        </div>
	    );
	}
}

export default ButtonAdd;

if (document.getElementById('add')) {
    ReactDOM.render(<ButtonAdd />, document.getElementById('add'));
}
