import React, { useState } from 'react';
import './New.css';
import api from '../../services/api';

function New(props) {
  const useForm = () => {
    const [values, setValues] = useState({});

    const handleImage = (event) => {
      setValues({ image: event.target.files[0] });
    };
    const handleSubmit = async (event) => {
      if (event) event.preventDefault();
      const data = new FormData();

      data.append('image', values.image);
      data.append('author', values.author);
      data.append('place', values.place);
      data.append('description', values.description);
      data.append('hashtags', values.hashtags);

      await api.post('posts', data);

      props.history.push('/');
    };

    const handleChange = (event) => {
      event.persist();

      setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    return {
      handleChange,
      handleSubmit,
      values,
      handleImage,
    };
  };

  const {
    handleChange, handleSubmit, values, handleImage,
  } = useForm();
  return (
    <form id="new-post" onSubmit={handleSubmit}>
      <input type="file" onChange={handleImage} />
      <input
        type="text"
        name="author"
        placeholder="Autor do Post"
        onChange={handleChange}
        value={values.author}
      />

      <input
        type="text"
        name="place"
        placeholder="Local do Post"
        onChange={handleChange}
        value={values.place}
      />

      <input
        type="text"
        name="description"
        placeholder="Descrição do Post"
        onChange={handleChange}
        value={values.description}
      />

      <input
        type="text"
        name="hashtags"
        placeholder="Hashtags do Post"
        onChange={handleChange}
        value={values.hashtags}
      />

      <button type="submit" onSubmit={handleSubmit}>
				Enviar
      </button>
    </form>
  );
}

export default New;
