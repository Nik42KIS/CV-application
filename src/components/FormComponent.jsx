import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/App.css';

function FormComponent({ formData, getFormData, editSavedCV, cleanForm }) {
  return (
    <Form className="cv_form">
      <section className="form_general_info">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputName">First name: </Form.Label>
          <Form.Control
            onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputName}
            type="text"
            id="inputName"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputEmail">Email: </Form.Label>
          <Form.Control
            onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputEmail}
            type="email"
            id="inputEmail"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputPhoneNumber">Phone number: </Form.Label>
          <Form.Control
            onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputPhoneNumber}
            type="tel"
            id="inputPhoneNumber"
          />
        </Form.Group>
      </section>

      <section className="form_education_info">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputSchool">School name: </Form.Label>
          <Form.Control
            onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputSchool}
            type="text"
            id="inputSchool"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputTitleOfStudy">Title of study: </Form.Label>
          <Form.Control
            onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputTitleOfStudy}
            type="text"
            id="inputTitleOfStudy"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputDateOfStudy">Date of study: </Form.Label>
          <Form.Control
            onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputDateOfStudy}
            type="text"
            id="inputDateOfStudy"
          />
        </Form.Group>
      </section>

      <section className="form_practice_info">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputCompanyName">Company name: </Form.Label>
          <Form.Control
            onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputCompanyName}
            type="text"
            id="inputCompanyName"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputPositionTitle">Position title: </Form.Label>
          <Form.Control
            onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputPositionTitle}
            type="text"
            id="inputPositionTitle"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputMainResponsibility">Main responsibility: </Form.Label>
          <Form.Control
            onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputMainResponsibility}
            type="text"
            id="inputMainResponsibility"
          />
        </Form.Group>
      </section>

      <Button
        variant="outline-danger"
        size="lg"
        type="submit"
        onClick={(e) => {
          cleanForm(e);
        }}
        className="reset_form_btn  btn gap-2">
        Clean
      </Button>

      <Button
        variant="outline-success"
        size="lg"
        type="submit"
        onClick={(e) => {
          editSavedCV(e);
        }}
        className=" btn save_form_btn">
        Save
      </Button>
    </Form>
  );
}

export default FormComponent;
