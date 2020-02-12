
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("/getSkills")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error: 'error'
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container mt-5">
        	<div className="row justify-content-center">
	            {items.map(item => (
	                <div key={item.title} className="col-md-7 mt-5" style={{backgroundImage: `linear-gradient(to right, #${item.leftColor}, #${item.rightColor})`}} >
	                	<div className="main-circle">
	                		<div className="row">
	                			<div className="col-md-6 text-right">
	                				
	                				<img className="image-center pt-3 ml-5 pl-5" src={'/images/skill_' + item.id + '.png'} />
	                			</div>
	                			<div className="col-md-6 text-center mt-4">
	                				
			                		<h2>{item.title}</h2>
			                		<h6>{item.description}</h6>
	                			</div>
	                		</div>
	                	</div>
	                </div>
	            ))}
            </div>
    	
        </div>

      );
    }
  }
}

export default List;

if (document.getElementById('list')) {
    ReactDOM.render(<List />, document.getElementById('list'));
}
