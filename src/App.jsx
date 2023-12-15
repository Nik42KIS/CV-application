
import './styles/App.css'
import Form from './components/Form'
import { useState } from 'react';
import CV from './components/CV';

function App() {

  const [formData, setformData] = useState({});
  const [savedCV, setSavedCV] = useState('')

function editSavedCV (event){
  event.preventDefault()
  setSavedCV(formData)
}


  function getFormData(targetInput) {
    console.log('before',formData);
    setformData({
      ...formData,
      [targetInput.id]: targetInput.value,
    });
    console.log(formData);
  }

  return (
    <main>
      <Form formData = {formData} editSavedCV ={editSavedCV} getFormData = {getFormData}/>
      <CV savedCV = {savedCV}/>
    </main>
  )
}

export default App
