import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	title: '',
		description: '',
		file: '/images/empty.png',
		leftColor: '33C4FF',
		rightColor: '336BFF',
		src: '/images/empty.png'
	};

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFile (evt) {
  	this.setState({src: URL.createObjectURL(event.target.files[0])})
  }
  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });

  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
  	console.log(event.target);

  	fetch('/skills/add', {
    	method: 'POST',
    	body: data,
    });
    this.props.onSubmitForm();
    location.reload();
  }

  render() {
    return (
    <div className="row mt-5">
    	<div className="col-md-6">
    		<div className="container circles-before" style={{backgroundImage: `linear-gradient(to right, #${this.state.leftColor}, #${this.state.rightColor})`}}>
    			<div className="circles">
    				<div className="row">
            			<div className="col-md-6 text-right">
            				
            				<img className="image-center pt-3 ml-5 pl-5" src={this.state.src} />
            			</div>
            			<div className="col-md-6 text-center mt-4">
            				
	                		<h2>{this.state.title}</h2>
	                		<h6>{this.state.description}</h6>
            			</div>
            		</div>
    				
    			</div>
    		</div>
    	</div>
    	<div className="col-md-6">
    		<form onSubmit={this.handleSubmit}>
    			<div className="form-group">
		          	<input placeholder="Title" className="form-control" type="text" name="title"  onChange={this.handleChange} />
    			</div>
    			<div className="form-group">
		          	<input placeholder="Description" className="form-control" type="text" name="description"  onChange={this.handleChange} />
    			</div>
    			<div className="form-group">
		        	<label className="control-label">
		          		Image:
		        	</label>
		          	<input className="form-control" type="file" name="file"  onChange={this.handleChange} onChange={this.handleChangeFile} />
    			</div>
    			<div className="form-group row">
    				<div className="col-md-6">
    					<input className="form-control"  onChange={this.handleChange} type="text" placeholder="leftColor" name="leftColor"/>
    				</div>
    				<div className="col-md-6">
    					<input className="form-control"  onChange={this.handleChange} type="text" placeholder="rightColor" name="rightColor"/>
    				</div>
    			</div>
    			<div className="form-group row mb-12">
					<div className="col-md-12">
						<button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-lg fa-check-circle"></i>
							Save
						</button>
					</div>
				</div>
	      </form>
    	</div>
    </div>
    );
  }
}
export default Form;