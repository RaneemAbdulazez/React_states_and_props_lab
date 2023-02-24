import React from "react";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/footer";
import dataJson from "./assets/data.json"
import SelectedBeast from "./components/SelectedBeast";
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: dataJson,
      show: false,
      details: ''
    }
  }
  handleClose = (e) => {
    console.log("this  is handeling close");
    this.setState({
      show: false,
      details: ''

    }

    );
  }
  handleShow = (e) => {
    console.log("this is handel show");
    console.log("THIS IS E ",e.target);
    this.setState({
      show: true,
      details: e
    }

    );
  }



  render() {
    return (
      <div>
        <Header />
        <Main data={dataJson}
          handlingshow={this.handleShow} />
        <SelectedBeast
          details={this.state.details}
          handlingshow={this.handleShow}
          showState={this.state.show} 
          handlingClose={this.handleClose}/>
        <Footer />

      </div>

    )
  }
}

export default App;