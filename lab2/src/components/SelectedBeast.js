import React from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{



  render(){
// console.log(this.props.details.target.description);
    if(this.props.showState){
      return(

<div>

<Button variant="primary" >

  view
      </Button>

      <Modal show={this.props.showState} onHide={this.props.handlingClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.details.target.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>"{this.props.details.target.nonce}"</Modal.Body>
        <img alt="" src={this.props.details.target.src}></img>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handlingClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
      </div>
      )
      
      
    }    
else{

  return null

}


}
}
export default SelectedBeast;