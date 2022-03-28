import React, { useEffect, useState } from 'react';
import axios from 'axios';



import './App.scss';
import 'antd/dist/antd.css';

function App() {

  const [testTable, setTestTable] = useState(null);

  useEffect(() => {
    const fetchTestTable = async () => {
      const response = await axios.get('http://localhost:8080/api/test');
      console.log(response);
      if (response.data.results.length > 0) {
        setTestTable(response.data.results);
      }
    }
    fetchTestTable();
  }, [])

  return (
    <div className="App">
      <h1>React App</h1>
      {testTable && testTable.map(
        (record) => {
          return (
            <div key={record.id}>
              <h2>{record.name}</h2>
              <h4>{record.description}</h4>
            </div>
          )
        }
      )

      }
    </div>
  );
}

export default App;
