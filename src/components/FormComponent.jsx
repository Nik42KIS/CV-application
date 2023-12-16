import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function FormComponent({formData, getFormData,editSavedCV,cleanForm}) {
 
  
  return (
    <Form className="cv_form">
      <section className="form_general_info">
        <div>
          <label htmlFor="inputName">First name: </label>
          <input
            onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputName}
            type="text"
            id="inputName"
          />
        </div>
        <div>
          <label htmlFor="inputEmail">Email: </label>
          <input
            onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputEmail} 
            type="email"
            id="inputEmail"
          />
        </div>
        <div>
          <label htmlFor="inputPhoneNumber">Phone number: </label>
          <input
           onChange={(event) => {
            getFormData(event.target);
          }}
          value={formData.inputPhoneNumber}
          type="tel" id="inputPhoneNumber" />
        </div>
      </section>

      <section className="form_education_info">
        <div>
          <label htmlFor="inputSchool">School name: </label>
          <input onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputSchool} type="text" id="inputSchool" />
        </div>
        <div>
          <label htmlFor="inputTitleOfStudy">Title of study: </label>
          <input  onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputTitleOfStudy}  type="text" id="inputTitleOfStudy" />
        </div>
        <div>
          <label htmlFor="inputDateOfStudy">Date of study: </label>
          <input onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputDateOfStudy} type="text" id="inputDateOfStudy" />
        </div>
      </section>

      <section className="form_practice_info">
        <div>
          <label htmlFor="inputCompanyName">Company name: </label>
          <input onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputCompanyName} type="text" id="inputCompanyName" />
        </div>
        <div>
          <label htmlFor="inputPositionTitle">Position title: </label>
          <input onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputPositionTitle} type="text" id="inputPositionTitle" />
        </div>
        <div>
          <label htmlFor="inputMainResponsibility">Main responsibility: </label>
          <input onChange={(event) => {
              getFormData(event.target);
            }}
            value={formData.inputMainResponsibility} type="text" id="inputMainResponsibility" />
        </div>
      </section>

      <Button variant="primary" type="submit" onClick={(e)=>{
        cleanForm(e)}} className="reset_form">Clean</Button>
        
      <Button variant="primary" type="submit" onClick={(e)=>{
        editSavedCV(e)}} className="save_form">Save</Button>
    </Form>
  );
}

export default FormComponent;
