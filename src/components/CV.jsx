import { Col, Container, Row } from 'react-bootstrap';
import '../styles/App.css';

function CV(props) {
  const data = props.savedCV;
  return (
    <section className="cv_wrap">
      <Container>
        <Col>
          <Row className="main_bio">
            <Col>
              <h2 className="first_name">{data.inputName}</h2>
            </Col>
            <Col>
              <span className="email">
                <b>Email: </b>
                {data.inputEmail}
              </span>
              <br />
              <span className="phone_number">
                <b>Phone number:</b>
                {data.inputPhoneNumber}
              </span>
            </Col>
          </Row>
          <Row className="education_info">
            <div className='wrap_for_section_name'>
              <span className="section_name">Education</span>
            </div>

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
            <div className='wrap_for_section_name'>
              <span className="section_name">Work experience</span>
            </div>

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
