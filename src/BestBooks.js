
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import React ,{ Component } from 'react';

class BestBooks extends Component {


    constructor(props) {

        super(props);
        this.state = {
            book: [],
            showBookCompenent: false,
            server: 'http://localhost:3065',
            name: '',
            description: '',
            image_url: '',
            status: '',
            modal: false

        }
    }

    componentDidMount = async () => {

        const book = await axios.get(`${this.state.server}/books`, { params: { email: this.props.auth0.user.email } });
        // const cats = await axios.get(`${this.state.server}/cat?name=${this.state.name}`);
        this.setState({
            book: book.data,
            showBookComponent: true
        });
    }


        newDesc = (event) => {
            this.setState({
                description: event.target.value
            })
        }


        newName = (event) => {
            this.setState({
                name: event.target.value
            })
        }

        newUrl = (event) => {
            this.setState({
                image_url: event.target.value
            })
        }

        newStatus = (event) => {
            this.setState({
                status: event.target.value
            })
        }

        close = () => {
            this.setState({
                modal: false
            })
        }


        show = () => {
            this.setState({
                modal: true
            })
        }

        getBook = async (event) => {
            event.preventDefault();
            const BookFormModal = {
                name: this.state.name,
                image_url: this.state.image_url,
                email: this.props.auth0.user.email,
                status: this.state.status,
                description: this.state.description,
            }

            const newBook = await axios.post(`${this.state.server}/addbook`, BookFormModal)
            this.setState({
                book: newBook.data,
                modal:false
            });


        }


        deleteHandle = async (index) => {
            const email = {
                email: this.props.auth0.user.email,
            }

            let newBook = await axios.delete(`${this.state.server}/deletebook/${index}`, { params: email })
            this.setState({
                book: newBook.data,
            })
        }

        render() {
            return (

                <div>
                    <Button variant="primary" onClick={this.show}>
                        add book
                    </Button>
                    <Modal show={this.state.modal} onHide={this.close}>
                        <Modal.Dialog>
                            <Modal.Header closeButton />
                            <Modal.Title class="text-left">book form</Modal.Title>
                            <Modal.Body>
                                <Form onSubmit={(e) => this.getBook(e)}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="title" onChange={(e) => this.newName(e)} />

                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>description</Form.Label>
                                        <Form.Control type="text" placeholder="description" onChange={(e) => this.newDesc(e)} />

                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>status</Form.Label>
                                        <Form.Control as="select" placeholder="status" onChange={(e) => this.newStatus(e)} >

                                        <option>drama</option>
                                        <option>life changing</option>
                                        <option>Reccomended to me</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>image</Form.Label>
                                        <Form.Control type="text" placeholder="image_url" onChange={(e) =>this.newUrl(e)} />

                                    </Form.Group>
                                    <Button variant="primary" onClick={this.getBook}>
                                        Add book
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal.Dialog>

                    </Modal>
{console.log( this.state.book)}
                    {this.state.showBookComponent && this.state.book.map((item, index) => {
                        return (


                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image_url} alt='' />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        <p>{item.description}</p>
                                        <p>{item.status}</p>
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => this.deleteHandle(index)}>
                                        Delete book
                                    </Button>
                                </Card.Body>
                            </Card>

                        )
                    })}
                </div>
            )
        }

    }


    export default withAuth0(BestBooks);