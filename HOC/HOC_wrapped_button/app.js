const root = document.querySelector("#root");

const ButtonData = {
	LIKE: {
		color: "white",
		backgroundColor: "blue",
		text: "Like ^ ^"
	},
	DISLIKE: {
		color: "white",
		backgroundColor: "red",
		text: "Dislike = ="
	}
}

function buttonWrapper(WrappedComponent,selectData){
	return class Core extends React.Component{
		constructor(props){
			super(props);
			this.state = ButtonData[selectData];
		}
		render(){
			return(
				React.createElement(
					WrappedComponent,
					{
						...this.state
					},
					null
				)
			)
		}

	}
}

class Button extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			React.createElement(
				"button",
				{
					style:{
						backgroundColor: this.props.backgroundColor,
						color: this.props.color
					}
				},
				this.props.text
			)
		)
	}
}

const wrappedLikeButton = buttonWrapper(Button,"LIKE");
const wrappedDislikeButton = buttonWrapper(Button,"DISLIKE");

class Container extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			React.createElement(
				"div",
				{},
				[
					React.createElement(
						wrappedLikeButton,
						{},
						null
					),
					React.createElement(
						wrappedDislikeButton,
						{},
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