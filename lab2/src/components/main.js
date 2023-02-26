import React from "react";
import HornedBeast from "./HornedBeast";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Form from 'react-bootstrap/Form';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }


    render() {

        return (

            <div>
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

                </div>
            </div>






        )

    };
}


export default Main;