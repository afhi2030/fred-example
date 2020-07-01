import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from '../components/Dashboard/Graph';
import { useHistory, useParams } from 'react-router-dom';
import { API_KEY } from '../config';

function handleRequestUrl(indexName) {
  return `/fred/series/observations?series_id=${indexName}&api_key=${API_KEY}&file_type=json`;
}

export default function Dashboard() {
  const params = useParams();
  const history = useHistory();
  const [currentData, setCurrentData] = useState([]);
  const [currentIndexName, setCurrentIndexName] = useState('');
  const [XAxisMax, setXAixMax] = useState(0);

  useEffect(() => {
    const { category: indexName } = params;
    
    const requestUrl = handleRequestUrl(indexName);
    axios.get(requestUrl)
      .then(({ data }) => {
        if (indexName === 'NASDAQCOM') {
          setXAixMax(13000);
        } else if (indexName === 'DJIA') {
          setXAixMax(33000);
        } else if (indexName === 'SP500') {
          setXAixMax(4500);
        }
        setCurrentIndexName(indexName);
        setCurrentData(data.observations);
      })
      .catch((err) => {
        if (err) {
          history.push('/');
        }
      });
  }, [params]);

  return (
    <>
      <h1>{currentIndexName}</h1>
      <Graph
        XAxisMax={XAxisMax}
        data={currentData} />
    </>
  )
}
