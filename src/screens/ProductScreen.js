import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Row, Col, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'

function ProductScreen({ match }) {
    const product = products.find((p) => p._id === match.params.id)
    return (
        <div>
            <Link to='/' className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h4>{product.name}</h4>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            Price : ${product.price}
                        </ListGroup.Item>                        
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                        <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' disabled={product.countInStock === 0} type='button'>Add to Cart</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
                
            </Row>
        </div>
    )
}

export default ProductScreen
