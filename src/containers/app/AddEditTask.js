import React from 'react';
import PropTypes from 'prop-types';
import styles from './app.module.scss';
import { EMPTY_OBJECT } from '../../constants';
const DESCRIPTION_ERROR = "Description can't be blank";
const TITLE_ERROR = "Title can't be blank";

class AddEditTask  extends React.PureComponent{

    onChangeAction = (event) => {
        const {updateFormValues} = this.props;
        const {target} = event;
        let value = {
            [target.id]: target.value,
        }
        updateFormValues({...value});
    }

    render(){
        const { formValues:{title = '', description=''}, formErrors} = this.props;
        return(
            <form name="taskAddEdit" className={styles.formContainer}>
               <div className={styles.formItem}>
                 <label htmlFor="title" >Title</label>
                 <input type="text" value={title} autoFocus id="title" maxLength={20} onChange={this.onChangeAction}/>
                 { formErrors.title && <span id="titleError" className={styles.error}>{TITLE_ERROR}</span> } 
              </div>
              <div className={styles.formItem}>
                  <label htmlFor="description"> Description</label>
                  <input type="text" value={description} id="description" maxLength={60} onChange={this.onChangeAction} />
                  { formErrors.description && <span id="descriptionError" className={styles.error}>{DESCRIPTION_ERROR}</span> } 
              </div>
             </form>
        )
    }
}

AddEditTask.propTypes = {
   formValues: PropTypes.object.isRequired,
   formErrors: PropTypes.object.isRequired,
};

AddEditTask.defaultProps = {
   formValues: EMPTY_OBJECT,
   formErrors: EMPTY_OBJECT,
}

export default AddEditTask;