

function CV(props){
    
    const data = props.formData;
    return(
        <section className="cv_wrap">


            <div className="first_name">{data.inputName}</div>
            <div className="email">{data.inputEmail}</div>
            <div className="phone_number">{data.inputPhoneNumber}</div>

            <div className="school">{data.inputSchool}</div>
            <div className="title_study">{data.inputTitleOfStudy}</div>
            <div className="date_study">{data.inputDateOfStudy}</div>

            <div className="company">{data.inputCompanyName}</div>
            <div className="position">{data.inputPositionTitle}</div>
            <div className="responsibility">{data.inputMainResponsibility}</div>

        </section>
    )
}

export default CV