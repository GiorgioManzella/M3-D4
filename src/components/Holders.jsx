import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import data from "../scifi.json"

const Holder = () => {
    return(

        
        data.map(name => (
        <div className='container'>
        <div className='row'>
            <div className='col-2'>
     <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={name.img} />
             <Card.Body>
              <Card.Title>{name.title} </Card.Title>
              <Card.Text>  {name.category}
            </Card.Text>
         <Button variant="primary">Buy</Button>
     </Card.Body>
    </Card>
    </div>
    </div>
    </div>
        
    ))

    )
}

export default Holder 