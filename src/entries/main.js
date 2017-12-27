import 'travix-ui-kit/dist/theme.css';
import 'travix-ui-kit/dist/ui-bundle.css';
import mount from './template';
import Routes from '../routes/main';
import rootReducer from '../reducers/main';
import './global.scss';

mount(Routes, rootReducer);
