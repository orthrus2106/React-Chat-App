import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useGetChannelsQuery } from '../store/api/apiSlice'
import { setCurrentChannel, selectCurrentChannelId, setCanvas } from '../store/slices/uiSlice'

const useActiveChannel = () => {
  const dispatch = useDispatch()
  const { data: channels = [], isLoading, isError } = useGetChannelsQuery()
  const currentChannelId = useSelector(selectCurrentChannelId)
  const activeChannel = channels.find(c => c.id === currentChannelId) ?? null

  useEffect(() => {
    if (!isLoading && !isError && channels.length > 0 && currentChannelId === null) {
      dispatch(setCurrentChannel(channels[0].id))
    }
  }, [channels, currentChannelId, dispatch, isLoading, isError])

  const onSelectChannel = (id) => {
    dispatch(setCurrentChannel(id))
    dispatch(setCanvas(false))
  }

  return {
    channels, currentChannelId, activeChannel, isLoading, isError, onSelectChannel,
  }
}

export default useActiveChannel
