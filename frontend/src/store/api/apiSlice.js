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
    tagTypes: ['Message', 'Channel'],
    endpoints: (builder) => ({
        getChannels: builder.query({
            query: () => routes.channelsPath(),
            providesTags: ['Channel'],
        }),
        addChannel: builder.mutation({
            query: (name) => ({
                url: routes.channelsPath(),
                method: 'POST',
                body: { name },
            }),
            invalidatesTags: ['Channel'],
        }),
        renameChannel: builder.mutation({
            query: (channel) => ({
                url: `${routes.channelsPath()}/${channel.id}`,
                method: 'PATCH',
                body: { name: channel.name },
            }),
        }),
        getMessages: builder.query({
            query: () => routes.messagesPath(),
            providesTags: ['Message']
        }),
        addMessage: builder.mutation({
            query: (message) => ({
                url: routes.messagesPath(),
                method: 'POST',
                body: message,
            }),
            invalidatesTags: ['Message']
        }),
    })
})

export const { useGetChannelsQuery, useGetMessagesQuery, useAddMessageMutation, useAddChannelMutation, useRenameChannelMutation } = api
export default api