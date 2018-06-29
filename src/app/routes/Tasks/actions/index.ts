import fetch from './Tasks.fetch.action';
import { cancel as createCancel, start as createStart, submit as createSubmit } from './Tasks.create.actions';
import { cancel as updateCancel, start as updateStart, submit as updateSubmit } from './Tasks.update.actions';
import { cancel as deleteCancel, start as deleteStart, submit as deleteSubmit } from './Tasks.delete.actions';

export {
    fetch,

    createCancel,
    createStart,
    createSubmit,

    updateCancel,
    updateStart,
    updateSubmit,

    deleteCancel,
    deleteStart,
    deleteSubmit
}