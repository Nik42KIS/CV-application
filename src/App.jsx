import './styles/App.css';
import Form from './components/FormComponent';
import { useState } from 'react';
import CV from './components/CV';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

function App() {
  const [formData, setFormData] = useState({});
  const [savedCV, setSavedCV] = useState('');

  function editSavedCV(event) {
    event.preventDefault();
    setSavedCV(formData);
  }
  function cleanForm(event) {
    setFormData({});
    event.target.parentElement.reset();
    event.preventDefault();
  }

  function getFormData(targetInput) {
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [targetInput.id]: targetInput.value,
      };
      console.log('updated formData', updatedFormData);
      return updatedFormData;
    });
  }

  return (
    <main>
      <Row>
        <Col>
          <Container>
            <Form
              cleanForm={cleanForm}
              formData={formData}
              editSavedCV={editSavedCV}
              getFormData={getFormData}
            />
          </Container>
        </Col>
        <Col sm={7}>
          <CV savedCV={savedCV} />
        </Col>
      </Row>
    </main>
  );
}

export default App;
