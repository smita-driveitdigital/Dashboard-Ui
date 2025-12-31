import './App.css'
import { Container, Row, Col } from 'reactstrap';

import Sidebar from './Components/Sidebar/sidebar';
import DashboardMain from './Components/DashboardMain/dashboardMain';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Container className='dashboard'>
        <Row>
          <Col className='p-0' lg="2" sm="12" md="3">
            <Sidebar />
          </Col>
          <Col className='p-0' lg="10" sm="12" md="9">
            <DashboardMain />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
