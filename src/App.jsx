import './App.css'
import { Container, Row, Col } from 'reactstrap';

import Sidebar from './Components/Sidebar/sidebar';
import DashboardMain from './Components/DashboardMain/dashboardMain';

function App() {
 

  return (
    <>
    <Container>
                <Row>
                   <Col lg="3" sm="12" md="3">
                    <Sidebar/>
                   </Col>
                   <Col lg="9" sm="12" md="9">
                      <DashboardMain/>
                   </Col>
                </Row>
            </Container>
    </>
  )
}

export default App
