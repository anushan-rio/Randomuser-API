import React,{useState,useEffect} from "react"
import { Container,Row,Col } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import MyCard from "./MyCard";
import  Axios  from 'axios';



function App(){


const [details,setDetails]=useState({})

const fetchDetails=async()=>{
    const response=await Axios.get('https://randomuser.me/api/');
    const responsedata=response.data;
    console.log("response----",responsedata)

    const details=responsedata.results[0];
    setDetails(details)
}

useEffect(()=>{
  fetchDetails()
},[])

return(
<Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details} />
        </Col>
      </Row>
    </Container>
)

}
export default App




