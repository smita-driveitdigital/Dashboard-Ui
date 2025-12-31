import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'

export default function UserForm() {
    return (
        <div className='userform'>
            <form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Salutation</Label>
                            <Input type='select'>
                                <option>Mr</option>
                                <option>Ms</option>
                                <option>Mrs</option>
                                <option>Prof</option>
                                <option>Dr</option>
                                <option>Sir</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <FormGroup className='form-group'>
                            <Label>Full Name</Label>
                            <Input className='form-control' type='text' />
                        </FormGroup>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <FormGroup className='form-group'>
                            <Label>Email</Label>
                            <Input className='form-control' type='text' />
                        </FormGroup>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <FormGroup className='form-group'>
                            <Label>Country</Label>
                            <Input type='select'>
                                <option>India</option>
                                <option>United States</option>
                                <option>United Kingdom</option>
                                <option>Canada</option>
                                <option>Australia</option>
                                <option>Germany</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <FormGroup className='form-group'>
                            <Label>First Name</Label>
                            <Input className='form-control' type='text' />
                        </FormGroup>
                    </Col>
                </Row>
            </form>
        </div>
    )
}
