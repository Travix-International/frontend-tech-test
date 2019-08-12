import enLang from './entries/en-US';
import duLang from './entries/nl_DU';
import {addLocaleData} from 'react-intl';

const AppLocale = {
  en: enLang,
  nl: duLang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.nl.data);

export default AppLocale;
