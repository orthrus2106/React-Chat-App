import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../store/slices/uiSlice';
import i18n from '../../init';

const LanguageController = () => {
  const currentLanguage = useSelector(selectCurrentLanguage);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return null;
};

export default LanguageController;
