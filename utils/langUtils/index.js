import generalUtils from './../generalUtils';
import langEn from './json/lang_en.json';
import langAr from './json/lang_ar.json';

module.exports = {
	langEn,
	langAr,
	currentEnglish: generalUtils.getCookie('lang') !== 'ar',
	changeLang() {
		this.currentEnglish = !this.currentEnglish;
		const langForCookie = this.currentEnglish ? 'en' : 'ar';
		generalUtils.createCookie('lang', langForCookie, 30);

		if (this.currentEnglish && process.browser) {
			document.body.style.fontFamily = 'Etelka-Light';
		} else {
			document.body.style.fontFamily = 'ITCHandel';
		}

		return this.getLang();
	},
	getLang() {
		return this.currentEnglish ? this.langEn : this.langAr;
	}
};
