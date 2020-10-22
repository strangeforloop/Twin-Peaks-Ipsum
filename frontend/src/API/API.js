import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API = () => {
  const [result, setResult] = useState('');
  const {loremType, number} = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetch(`http://localhost:5000/api/${loremType}/${number}`);
      console.log({response});
      const data = await response.json();
      setResult(data);
    };

    const makeDefaultRequest = async () => {
      const response = await fetch(`http://localhost:5000/api/${loremType}`);
      console.log({response});
      const data = await response.json();
      setResult(data);
    };

    if (!number) {
      console.log('calling makeDefaultRequest');
      makeDefaultRequest();
    } else {
      console.log('calling makeRequest');
      makeRequest();
    }
  }, [loremType, number]);

  return (
    <div>
      { result
        ?
        <div>
          { loremType === 'words'
            ?
            result.map(word => {
              return word + ' ';
            })
            :
            result.map(paragraph => {
              return <p>{ paragraph }</p>;
            })
          }
        </div>
        :
        <div></div>
      }
    </div>
  );
}

export default API;
