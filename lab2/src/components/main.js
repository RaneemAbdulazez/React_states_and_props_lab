import React from "react";
import HornedBeast from "./HornedBeast";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
<<<<<<< HEAD


=======
import Form from 'react-bootstrap/Form';

>>>>>>> d4dcfca (finished lab4)
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            updatedData:this.props.data,
        }
    }



    ChangeNumberOfHorns = (e) => {
     
        if (e.target.value){
        let newHorns = parseInt(e.target.value)
        
    
   
        console.log("reset data", this.state.data);
        let updatedHorns = this.state.data.filter(e => e.horns === newHorns ? e : false);
        console.log("updated Horns ", updatedHorns);
        
     this.setState({
        updatedData:updatedHorns
     })
    }
    
         else{
            this.setState({
                updatedData:this.props.data
             })
             
             console.log("all is working ");
         }

    }

    
  









    render() {
        return (

        return (

            <div>
<<<<<<< HEAD

                <div >
                    {this.state.data.map((element) => (
                        <HornedBeast key={element._id} title={element.title} width={500} image_url={element.image_url} description={element.description} 
                       viewBeast={this.props.handlingshow} />
                        ))}
                    
=======
                <Form onSubmit={this.submitForm}>
                    <Form.Control onClick={this.ChangeNumberOfHorns} name="programming_language" as="select" >
                        <option value="" >all</option>

                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>100</option>

                    </Form.Control>


                </Form>
                <div >
                    {this.state.updatedData.map((element) => (
                        <HornedBeast handlingshow={this.props.handlingshow} key={element._id} title={element.title} width={500} image_url={element.image_url} description={element.description}

                        />
                    ))}

>>>>>>> d4dcfca (finished lab4)
                </div>
            </div>






        )

    };
}


export default Main;