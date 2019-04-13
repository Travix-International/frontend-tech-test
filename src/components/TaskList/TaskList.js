import React, { Component } from "react";

import TaskModal from "../TaskModal";
import Icon from "../Icon";

import styles from "./TaskList.scss";

class TaskList extends Component {
  state = {
    showModal: false,
    edit: false,
  };

  openEditModal = () => this.setState({ showModal: true, edit: true });

  openViewModal = () => this.setState({ showModal: true, edit: false });

  closeModal = () => this.setState({ showModal: false, edit: false });

  onEdit = () => {
    console.log("edit Task");
  };

  onDelete = () => {
    console.log("delete Task");
  };

  render() {
    const { showModal, edit } = this.state;

    return (
      <div className={styles.taskList}>
        <div className={styles.taskContainer}>
          <section className={styles.task} onClick={this.openViewModal}>
            <h4 className={styles.title}>Something here as a title</h4>
            <p className={styles.description}>
              Whatever description for task, whatever description for task,
              whatever description for task, whatever description for task,
              dsafsagfagasf ,sa gdasgf, asdg,sa gd,sdg, asdg, asdg, as,dg sdg
              ,sa,dg s,dg ,sad g,sdg ,sad g,s dg, sd,agas,dgsadgsadgsadg, sdg,
              sadg, sdg, sagd, dasfasdgasgasgg sgdas gd sagd sadg, sdg, sagd,
              dasfasdgasgasgg sgdas gd sagd
            </p>
          </section>
          <div className={styles.actions}>
            <button className={styles.iconButton} onClick={this.onDelete}>
              <Icon glyph="trash" />
            </button>
            <button className={styles.iconButton} onClick={this.openEditModal}>
              <Icon glyph="pencil" />
            </button>
            <TaskModal
              isOpen={showModal}
              onClose={this.closeModal}
              onSuccess={this.onEdit}
              edit={edit}
              changeView={this.openEditModal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
