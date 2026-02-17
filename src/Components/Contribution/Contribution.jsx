import { Table } from "react-bootstrap";

export default function Contribution() {
    const articlesData = [
        {
    id: 1,
    title: "Heads up! Because of the more complicated",
    date: "Friday, 2 January 2026",
    status: "Publish",
    image: "https://www.theasianbanker.com/uploads/tabmanila/img_6937e9f94f2d15.19246745.jpg"
  },
  {
    id: 2,
    title: "Heads up! Because of the more complicated",
    date: "Friday, 2 January 2026",
    status: "Pending",
    image: "https://www.theasianbanker.com/uploads/tabmanila/img_6937e9f94f2d15.19246745.jpg"
  },
  {
    id: 3,
    title: "Heads up! Because of the more complicated",
    date: "Friday, 2 January 2026",
    status: "Reject",
    image: "https://www.theasianbanker.com/uploads/tabmanila/img_6937e9f94f2d15.19246745.jpg"
  },
  {
    id: 4,
    title: "Heads up! Because of the more complicated",
    date: "Friday, 2 January 2026",
    status: "Reject",
    image: "https://www.theasianbanker.com/uploads/tabmanila/img_6937e9f94f2d15.19246745.jpg"
  }
    ]
    return(
       <main>
        <div className="table-wrapper">
            <Table>
               <thead>  
                <tr>
                    <th>Articles image</th>
                    <th>Articles title</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
               </thead>
               <tbody>
                {
                    articlesData.map((data, index) => {
                        return(
                            <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.date}</td>
                    <td>{data.status}</td>
                    <td><img src={data.image} alt={data.title}/></td>
                </tr>
                        )
                    })
                }
                
               </tbody>
            </Table>
        </div>
       </main>
    );
}