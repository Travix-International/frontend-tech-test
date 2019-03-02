import React from 'react';
import { Button, Icon } from 'antd';
import styles from './app.module.scss';


class Task  extends React.PureComponent{

    handleEditAction = () => {
        const { task, handleEdit } = this.props;
        handleEdit(task);
    }

    handleDeleteAction = () => {
        const { task, handleDelete } = this.props;
        handleDelete(task);
    }

    render(){
        const { task = {} } = this.props;
        const  { title = '', description='', isDeleted = false } = task;
        return( 
             <React.Fragment>
                {isDeleted && (<div className={styles.task }>
                                <div>
                                    <Icon type="bars" />  
                                    <span className={styles.title}><strike> {title}  </strike></span>
                                    </div>
                                    <div className={styles.taskButtonHolder}>
                                            <Button type="default" disabled icon="check"/>
                                    </div>
                                </div>
                    )
                }
                {!isDeleted && ( <div className={styles.task}>
                                    <div>
                                        <Icon type="bars" />  
                                        <span id="title" className={styles.title}> {title} </span>
                                        <span id="description" className={styles.description}>{description}</span>
                                    </div>
                                    <div className={styles.taskButtonHolder}>
                                        <Button type="default" icon="edit" onClick={this.handleEditAction} />
                                        <Button type="primary" icon="delete" onClick={this.handleDeleteAction} />
                                    </div>
                                </div>
                    )
                }
            </React.Fragment>
      )
    }
};

export default Task;
