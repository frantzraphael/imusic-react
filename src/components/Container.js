import React from 'react';

class Container extends React.Component {
	render() {
		return(
			<div className="container">
				<h1>{this.props.text}</h1>
			</div>
		);
	}
}

export default Container;