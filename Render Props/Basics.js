const root = document.querySelector("#root");

class Toggle extends React.Component{	//defining some states and methods which will be used in the parent component by RENDER PROPS
	constructor(props){
		super(props);
		this.state = {
			name: "cai",
			age: 27
		}
	}
	toggleName = () => {
		this.setState({
			name: this.state.name === "cai" ? "cco" : "cai"
		})
	}
	render(){
		const { render } = this.props;
		return (
			React.createElement(
				"div",
				{},
				render({
					...this.state,
					toggleName: this.toggleName		//passing some arguments 
				})
			)
		)
	}
}

class Container extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			show: true
		}
	}
	handleClick = () => {
		this.setState({
			show: !this.state.show
		})
	}
	render(){
		let text = this.state.show === true ? "I'm a render props!": "";
		return (
			React.createElement(
				"div",
				{},
				[
					React.createElement(
						Toggle,		//using toggle
						{
							render: ({name, age, toggleName}) => {	//receiving arguments
								return React.createElement(
											"h1",
											{},
											[
												text + name + age,
												React.createElement(
													"button",
													{
														onClick: toggleName,
														style: {
															display: "block"
														}
													},
													"button"
												)
											]
										)
							}
						},
						null
					),
					React.createElement(	//another RENDER PROPS
						Toggle,
						{
							render: ({name, age, toggleName}) => {
								return React.createElement(
											"p",
											{},
											[
												text + name + age,
												React.createElement(
													"button",
													{
														onClick: toggleName,
														style: {
															display: "block"
														}
													},
													"button"
												)
											]
										)
							}
						},
						null
					)
				]
			)
		)
	}
}	

ReactDOM.render(
	React.createElement(Container),
	root
)