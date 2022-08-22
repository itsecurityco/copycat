import React from "react";
import ReactDOM from "react-dom";
import {CopyCat} from "./components/CopyCat";

class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true,
      input: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }
  
  toggleTape() {
    this.setState({ copying: !this.state.copying });
  }

  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const value = this.state.input;
    const handleChange = this.handleChange;

    return (
      <CopyCat 
        toggleTape={toggleTape} 
        copying={copying} 
        value={value}
        handleChange={handleChange}
        name={"Juan"}
      />
    );
  }
}

ReactDOM.render(<CopyCatContainer />, document.getElementById("app"));
