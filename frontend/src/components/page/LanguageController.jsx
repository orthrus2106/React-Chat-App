import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import i18n from '../../i18n.js'
import { selectCurrentLanguage } from '../../store/slices/uiSlice'

const LanguageController = () => {
  const currentLanguage = useSelector(selectCurrentLanguage)

  useEffect(() => {
    i18n.changeLanguage(currentLanguage)
  }, [currentLanguage])

  return null
}

export default LanguageController