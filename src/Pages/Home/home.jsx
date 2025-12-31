import { Container, Row, Col } from 'reactstrap';
import Sidebar from '../../Components/Sidebar/sidebar';

export default function Home() {
    return (
        <>
        <Container>
                <Row>
                   <Col lg="4" sm="12" md="4">
                    <Sidebar/>
                   </Col>
                   <Col lg="8" sm="12" md="8">
                    <Sidebar/>
                   </Col>
                </Row>
            </Container>
        </>
    )
}
