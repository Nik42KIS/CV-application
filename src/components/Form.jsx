
function Form() {
  return (
    <form>

      <section className="form_general_info">
        <div>
            <label htmlFor="inputName">First name: </label>
            <input value="" type="text" id="inputName" />
        </div>
        <div>
            <label htmlFor="inputEmail">Email: </label>
            <input value="" type="email" id="inputEmail" />
        </div>
        <div>
            <label htmlFor="inputPhoneNumber">Phone number: </label>
            <input value="" type="tel" id="inputPhoneNumber" />
        </div>
    </section>

      <section className="form_education_info">
        <div>
            <label htmlFor="inputSchool">School name: </label>
            <input value="" type="text" id="inputSchool" />
        </div>
        <div>
            <label htmlFor="inputTitleOfStudy">Title of study: </label>
            <input value="" type="text" id="inputTitleOfStudy" />
        </div>
        <div>
            <label htmlFor="inputDateOfStudy">Date of study: </label>
            <input value="" type="text" id="inputDateOfStudy" />
        </div>
    </section>

      <section className="form_practice_info">
        <div>
            <label htmlFor="inputCompanyName">Company name: </label>
            <input value="" type="text" id="inputCompanyName" />
        </div>
        <div>
            <label htmlFor="inputPositionTitle">Position title: </label>
            <input value="" type="text" id="inputPositionTitle" />
        </div>
        <div>
            <label htmlFor="inputMainResponsibility">Main responsibility: </label>
            <input value="" type="text" id="inputMainResponsibility" />
        </div>
    </section>

    <button className="reset_form">Clear</button>
    <button className="save_form">Save</button>
    </form>
  )
}

export default Form