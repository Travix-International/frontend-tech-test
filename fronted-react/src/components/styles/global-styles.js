import { injectGlobal } from 'styled-components';
import simplonRegularEOT from '../../assets/fonts/simplon/simplonbp-regular-webfont.eot'
import simplonRegularWOFF from '../../assets/fonts/simplon/simplonbp-regular-webfont.woff'
import simplonRegularTTF from '../../assets/fonts/simplon/simplonbp-regular-webfont.ttf'
import simplonRegularSVG from '../../assets/fonts/simplon/simplonbp-regular-webfont.svg'

injectGlobal`
  @font-face {
    font-family: 'SimplonRegular';
    src: 
    url(${simplonRegularEOT}); 
    src: 
    url(${simplonRegularEOT + '?#iefix'}) format('embedded-opentype'),
    url(${simplonRegularWOFF}) format('woff'),
    url(${simplonRegularTTF}) format('truetype'),
    url(${simplonRegularSVG}) format('svg');
    font-weight: 400;
    font-style: normal;
  }
`;