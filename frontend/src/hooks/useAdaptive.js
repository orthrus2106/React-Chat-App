import { useMediaQuery } from 'react-responsive'

const useAdaptive = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  return { isMobile }
}

export default useAdaptive
