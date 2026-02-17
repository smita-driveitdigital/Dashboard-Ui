import {Card, Row, Col} from 'react-bootstrap';
import { CardBody, CardTitle } from 'reactstrap';
import { MessageSquare , Mail, CircleFadingPlus, Bookmark } from 'lucide-react';
import './MyAccount.css';
export default function MyAccount() {
    const myAccountlist = [
        {
            id: "my-conversations",
            icon: MessageSquare,
            label: "My Conversations",
            href: "/",
        },
        {
            id: "bookmarks",
            icon: Bookmark,
            label: "Bookmarks",
            href: "/",
        },
        {
            id: "newsletters",
            icon: Mail,
            label: "Newsletters",
            href: "/",
        },
        {
            id: "get-connected",
            icon: CircleFadingPlus ,
            label: "Get Connected",
            href: "/",
        },
    ]
    return(
        <main>
            <div>
                <Row>
                    <Col className='mb-4' lg="12" sm="12" md="12">
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
                    <Col className='' lg="12" sm="12" md="12">
                        <Row>
                            {myAccountlist.map((item, index) => {
                        return(
                            <Col key={index} className='' lg="3" sm="12" md="6">
                        <Card>
                            <CardBody>
                                <div className='infoCard'>
                                    <div className='p-3 icon-box border rounded-circle mb-4'>
                                        <item.icon className='' size={25} />
                                    </div>
                                    <div>
                                        <p className='infoTitle'>{item.label}</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                        )
                    })}
                        </Row>
                    </Col>
                    
                   
                </Row>
            </div>
        </main>
    )
}