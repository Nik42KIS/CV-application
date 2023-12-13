
import './styles/App.css'
import Form from './components/Form'
import { useState } from 'react';

function App() {

  const [formData, setformData] = useState({});
  function getFormData(targetInput) {
    setformData({
      ...formData,
      [targetInput.id]: targetInput.value,
    });
    console.log(formData);
  }

  return (
    <main>
      <Form formData = {formData} getFormData = {getFormData}/>
    </main>
  )
}

export default App
