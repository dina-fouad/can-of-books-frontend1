import Form from 'react-bootstrap/Form';
import React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class UpdateForm extends React.Component {
    render(){
        return(
            <div><Modal show={this.props.updateModal} onHide={this.props.updateClose}>
            <Modal.Dialog>
                <Modal.Header closeButton />
                <Modal.Title class="text-left">update form</Modal.Title>
                <Modal.Body>
                    <Form onSubmit={(e) => this.props.updateForm(e)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="title" onChange={(e) => this.props.newNameInfo(e)} value = {this.props.name} />
                              
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>description</Form.Label>
                            <Form.Control type="text" placeholder="description" onChange={(e) => this.props.newDescInfo(e)} value = {this.props.description}/>

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>status</Form.Label>
                            <Form.Control as="select" placeholder="status" onChange={(e) => this.props.newStatusInfo(e)} value = {this.props.status}>

                            <option>drama</option>
                            <option>life changing</option>
                            <option>Reccomended to me</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>image</Form.Label>
                            <Form.Control type="text" placeholder="image_url" onChange={(e) =>this.props.newUrlInfo(e)} value = {this.props.image_url}/>

                        </Form.Group>
                        <Button variant="primary" type = 'submit'>
                            update
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>

        </Modal></div>
        )

    }

}

export default UpdateForm;