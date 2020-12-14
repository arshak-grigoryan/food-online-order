import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import useMount from './useMount';

const cache = new Map();

export const cachableFetch = async (url) => {
  if (cache.has(url)) {
    return cache.get(url);
  }
  try {
    const res = await fetch(url);
    const data = await res.json();
    cache.set(url, data);
    return data;
  } catch (err) {
    return err;
  }
};

const useFetch = (url) => {
  const history = useHistory();
  const [data, setData] = useState();

  useMount(() => {
    (async () => {
      const result = await cachableFetch(url);
      if (result instanceof Error) {
        history.replace('/notAuthorized');
      } else {
        setData(result);
      }
    })();
  });

  return data;
};

export default useFetch;
