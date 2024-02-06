import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '77e8243ceemshce3d28378ad8f9dp11fa7bjsn62aa8e3e12ea',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptoNews : builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;