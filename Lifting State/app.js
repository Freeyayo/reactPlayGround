const root = document.querySelector("#root");

const Tel = (props) => {
	const telStyle = {
		fontSize: "10px",
		fontWeight: 300
	};
	const tel = props.tel;
	return (
		React.createElement(
			"span",
			{
				style: telStyle
			},
			tel
		)
	)
}

class LikeButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: "I'm from child"
		}
	}
	shouldComponentUpdate(nextProps, nextState){
		
	}
	handleClick = () => {
		this.props.onButtonClick(this.state.data)	//receiving method from parent by props then passing an argument(form child state) to it
	}
	render(){
		return React.createElement(
				   "button",
				   {
					   style: {
						   backgroundColor: "red"
					   },
					   onClick: this.handleClick
				   },
				   "click me !"
			   )
	}
}

class ButtonContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text: "hello",
			tel: "222-200-177"
		}
	}
	shouldComponentUpdate(nextProps, nextState){	//if don't write this, UI wouldn't rerender?
		if(nextState.text !== this.state.text){
			return true
		}else{
			return false
		}
	}
	buttonClicked = (message) => {	//once trigger line30 method,this method gonna be called
		this.setState({
			text: message
		})
	}
	render(){
		let text = this.state.text;
		return React.createElement(
					"div",
					{
						style: {
							color: "brown"
						}
					},
					[
						React.createElement(
							"h1",
							{
								key: 1
							},
							[
								text,
								React.createElement(
									Tel,
									{
										key: 1.1,
										tel: this.state.tel
									},
									null
								),
							]
						),
						React.createElement(
							LikeButton,
							{
								key: 2,
								onButtonClick: this.buttonClicked	//passing a method to child 
							},
							null
						)
					]
			   )
	}
}	

ReactDOM.render(
	React.createElement(ButtonContainer),
	root
)