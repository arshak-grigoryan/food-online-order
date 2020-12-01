import { useState } from 'react';

import useMount from './useMount';

const cache = new Map()

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
        console.error(err)
    }
}

const useFetch = (url) => {
    const [data, setData] = useState({});

    useMount(() => {
        (async () => {
           const result = await cachableFetch(url);
           setData(result);
        })();
    });

    return data;
}

export default useFetch