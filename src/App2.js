function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
     Nombre de jours
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: false}
    this.handleToggleClick = this.handleToggleClick.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit = (event) => {
	event.preventDefault();
	
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
						Nombre de jours :
						<input type="text" value={this.state.N} onChange={this.handleChange}/>	
					</label>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          Submit
        </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);