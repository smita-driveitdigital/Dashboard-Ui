import React from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import "./userform.css"

export default function UserForm() {
    return (
        <div className='dashboardInner'>
            <div className='userform'>
            <form>
                <Row>
                    <Col lg={2} md={6} sm={12}>
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
                        <FormGroup className=''>
                            <Label>Full Name</Label>
                            <Input className='' type='text' />
                        </FormGroup>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <FormGroup className=''>
                            <Label>Email</Label>
                            <Input className='' type='email' />
                        </FormGroup>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <FormGroup className=''>
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
                    <Col lg={3} md={6} sm={12}>
                        <FormGroup className=''>
                            <Label>Phone No.</Label>
                            <Input className='' type='tel' />
                        </FormGroup>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <FormGroup className=''>
                            <Label>LinkedIn Profile URL</Label>
                            <Input className='' type='text' />
                        </FormGroup>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <FormGroup className=''>
                            <Label>Facebook Profile URL</Label>
                            <Input className='' type='text' />
                        </FormGroup>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <FormGroup className=''>
                            <Label>Twitter Profile URL</Label>
                            <Input className='' type='text' />
                        </FormGroup>
                    </Col>
                </Row>
            </form>
        </div>
        </div>
    )
}
