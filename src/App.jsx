import { useState, useRef } from 'react';
import axios from 'axios';


import { Form, Input, Button, message } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

function App() {

  const [selectedMovieReviews, setselectedMovieReviews] = useState(null);
  const movieInputRef = useRef();


  const submitMovieReview = (values) => {
    console.log(values);
    axios.post('http://localhost:8080/api/movie-reviews', values)
      .then((res) => {
        console.log(res.data);
        message.success('review saved in database!');
      })
      .catch((error) => {
        console.error(error);
        message.error('something went wrong!');
      })
  }

  const getMovieReview = (name) => {
    if (!name) {
      message.error('Type the movie name on the input to get it');
      return;
    }
    console.log(name);
    axios.get('http://localhost:8080/api/movie-reviews/' + name)
      .then((res) => {
        console.log(res);
        if (!res.data.length) {
          message.error('Movie Review Not found!');
          movieInputRef.current.value = '';
        }
        console.log(res.data[0]);
        setselectedMovieReviews(res.data);
      })
      .catch((error) => {
        console.error(error);
        message.error('something went wrong!');
      })
  }

  const getAllMovies = () => {
    axios.get('http://localhost:8080/api/movie-reviews')
      .then((res) => {
        console.log(res);
        if (!res.data.length) {
          message.error('something went wrong!');
        }
        console.log(res.data);
        setselectedMovieReviews(res.data);
      })
      .catch((error) => {
        console.error(error);
        message.error('something went wrong!');
      })
  }

  return (
    <div className="App">
      <h1>CRUD</h1>
      <div className="form-container">
        <Form
          onFinish={(values) => { submitMovieReview(values) }}
        >
          <h2>Movie Title</h2>
          <Form.Item
            name='movieTitle'
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <Input />
          </Form.Item>
          <h2>Review description</h2>
          <Form.Item
            name='description'
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit'>
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </div>
      {selectedMovieReviews &&
        selectedMovieReviews.map((movieRev) => {
          return (
            <div className="selected-movie-reviews" key={movieRev.id}>
              <h3>name</h3>
              <p>
                {movieRev.name}
              </p>
              <h3>Review</h3>
              <p>
                {movieRev.description}
              </p>
            </div>
          )
        })
      }
      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', height: '200px', justifyContent: 'space-evenly' }}>
        <input type="text" ref={movieInputRef} /* onChange={(e) => { setMovieReviewInput(e.target.value) }} */ />
        <Button onClick={() => { getMovieReview(movieInputRef.current.value) }}>
          Get Movie review
        </Button>
        <Button onClick={() => { getAllMovies() }}>
          Get all movies
        </Button>
      </div>
    </div>
  );
}

export default App;
