import React from "react";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/footer";
import dataJson from "./assets/data.json"
import SelectedBeast from "./components/SelectedBeast";
<<<<<<< HEAD
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
=======
class App extends React.Component{

constructor(props){
  super(props);

  this.state={
    show:false,
    currentBeast:'',
  }
}
 handleClose = () => {
  this.setState({
    show:false}

  );
 }
 handleShow = (e) => {
  // console.log("-------------",e.target.name);
  this.setState({
    show:true,
    currentBeast :e
  }
    
  );
 }



    render(){
        return(
      <div>
        <Header/>

        <Main data={dataJson} 
        handlingshow={this.handleShow}/>
        <SelectedBeast 
        currentBeast={this.state.currentBeast}
        handlingClose={this.handleClose} 
        handlingshow={this.handleShow} 
        showState={this.state.show}/>



        <Footer/>
>>>>>>> d4dcfca (finished lab4)

      </div>

    )
  }
}

export default App;