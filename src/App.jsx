import './App.css'
import { Container, Row, Col } from 'reactstrap';

import Sidebar from './Components/Sidebar/sidebar';
import DashboardMain from './Components/DashboardMain/DashboardMain';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [activePage, setActivePage] = useState("my-account");

  return (
    <BrowserRouter>
      <Container className='dashboard'>
        <Row>
          <Col className='p-0' lg="2" sm="12" md="3">
            <Sidebar activePage={activePage} setActivePage={setActivePage} />
          </Col>
          <Col className='p-0' lg="10" sm="12" md="9">
            <DashboardMain activePage={activePage} />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
