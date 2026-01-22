import {Card, Row, Col} from 'react-bootstrap';
import { CardBody, CardTitle } from 'reactstrap';
export default function MyAccount() {
    return(
        <main>
            <div>
                <Row>
                    <Col className='' lg="12" sm="12" md="12">
                        <Card>
                            <CardBody>
                                <div className='d-flex gap-2 align-items-center'>
                                    <img src="https://github.com/shadcn.png" alt="Avatar" className="rounded-circle" style={{ width: "48px", height: "48px" }} />
                                <div className="align-items-center gap-2" style={{fontSize: 20}}>
                                    <span className="text-dark fw-medium">Good day,</span>
                                    <span className="text-primary fw-semibold">Davin</span>
                                </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </main>
    )
}