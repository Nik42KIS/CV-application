
import './styles/App.css'
import Form from './components/Form'
import { useState } from 'react';
import CV from './components/CV';

function App() {

  const [formData, setFormData] = useState({});
  const [savedCV, setSavedCV] = useState('')

function editSavedCV (event){
  event.preventDefault()
  setSavedCV(formData)
}
function cleanForm(event){
  setFormData({})
  event.target.parentElement.reset()
  event.preventDefault()
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
      <Form cleanForm={cleanForm} formData = {formData} editSavedCV ={editSavedCV} getFormData = {getFormData}/>
      <CV savedCV = {savedCV}/>
    </main>
  )
}

export default App
