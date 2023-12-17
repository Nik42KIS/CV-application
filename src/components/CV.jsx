import { Col, Container, Row } from 'react-bootstrap';
import '../styles/App.css';

function CV(props) {
  const data = props.savedCV;
  return (
    <section className="cv_wrap">
      <Container>
        <Col>
          <Row>
            <Col>
              <h2 className="first_name">{data.inputName}</h2>
            </Col>
            <Col>
              <span className="email">{data.inputEmail}</span>
              <span className="phone_number">{data.inputPhoneNumber}</span>
            </Col>
          </Row>
          <Row>
            <ul>
              <li>
                <span className="school">{data.inputSchool}</span>
              </li>
              <li>
                <span className="title_study">{data.inputTitleOfStudy}</span>
              </li>
              <li>
                <span className="date_study">{data.inputDateOfStudy}</span>
              </li>
            </ul>
          </Row>
          <Row>
            <Col>
              <span className="company">{data.inputCompanyName}</span>
            </Col>
            <Col>
              <span className="position">{data.inputPositionTitle}</span>
              <span className="responsibility">{data.inputMainResponsibility}</span>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  );
}

export default CV;
