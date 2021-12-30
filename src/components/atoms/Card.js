import React from "react"
import { Modal, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


function VerticallyAlignedModal(props) {
  return (
    <Modal
      {...props}
      size='xl'
      fullscreen = 'md-down'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modalHeader"         
      style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.title}
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody"
      >
        <h6>{props.date_}</h6>
        <h6>
          {props.description_}
        </h6>
        <img src={props.img} alt="about" className="img-fluid" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Card = ({ heading, paragraph, imgUrl, projectLink, date, description}) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>

        <Button variant="primary" className="btn"  onClick={() => setModalShow(true)}>
        Learn More
        </Button>


      <VerticallyAlignedModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title= {heading}
        description_ = {description}
        date_ = {date}
        img = {imgUrl}
      />

      
      </div>
    </div>
  )
}

export default Card
