import { useState } from 'react';

function useForm() {
  const [values, setValues] = useState('');

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues('');
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
