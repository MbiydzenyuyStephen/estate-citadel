import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardImage1 from "../../assets/second_card_image1.png";
import CardImage2 from "../../assets/second_card_image2.png";
import CardImage3 from "../../assets/second_card_image3.png";
import "./secondcard.css";

const SecondCard = () => {
  return (
    <div className="container">
      <div className="row">
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default SecondCard;
