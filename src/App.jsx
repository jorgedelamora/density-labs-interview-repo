import axios from 'axios';

import { Form, Input, Button, message } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

function App() {

  const submitMovieReview = (values) => {
    console.log(values);
    axios.post('http://localhost:8080/api/insert-movie-review', values)
      .then((res) => {
        console.log(res.data);
        message.success('review saved in database!');
      })
      .catch((error) => {
        console.error(error);
        message.error('something went wrong!');
      })
  }

  return (
    <div className="App">
      <h1>CRUD</h1>
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
  );
}

export default App;
