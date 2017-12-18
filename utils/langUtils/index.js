import generalUtils from './../generalUtils';
import langEn from './json/lang_en.json';
import langAr from './json/lang_ar.json';

module.exports = {
	langEn,
	langAr,
	currentEnglish: generalUtils.getCookie('lang') !== 'ar',
	updateDomFont() {
		if (process.browser) {
			// document.body.style.fontFamily = this.currentEnglish ? 'Etelka-Light' : 'ITCHandel';
		}
	},
	changeLang() {
		this.currentEnglish = !this.currentEnglish;
		const langForCookie = this.currentEnglish ? 'en' : 'ar';
		generalUtils.createCookie('lang', langForCookie, 30);
		this.updateDomFont();
		return this.getLang();
	},
	getLang() {
		this.updateDomFont();
		return this.currentEnglish ? this.langEn : this.langAr;
	}
};
