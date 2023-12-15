
import './styles/App.css'
import Form from './components/Form'
import { useState } from 'react';
import CV from './components/CV';

function App() {

  const [formData, setformData] = useState({});
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
      <Form formData = {formData} getFormData = {getFormData}/>
      <CV formData = {formData} />
    </main>
  )
}

export default App
