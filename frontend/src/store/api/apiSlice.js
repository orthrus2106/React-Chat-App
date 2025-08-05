import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import routes from '../../api/routes'

const api = createApi({
    reducerPath: 'channelsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        prepareHeaders: ((headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        })
    }),
    endpoints: (builder) => ({
        getChannels: builder.query({
            query: () => routes.channelsPath(),
        }),
        getMessages: builder.query({
            query: () => routes.messagesPath(),
        }),
    })
})

export const { useGetChannelsQuery, useGetMessagesQuery } = api
export default api