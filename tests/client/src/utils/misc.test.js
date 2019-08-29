const expect = require('expect');
import {
    validateTransfer
} from 'client/src/utils/misc';

describe('Misc Test Suite', () => {

    it('P_Should_TestValidateTransferofTasks_1', () => {
        expect(validateTransfer('DRAFT', 'IN_PROGRESS')).toBeTruthy();
    });
    it('P_Should_TestValidateTransferofTasks_2', () => {
        expect(validateTransfer('IN_PROGRESS', 'DRAFT')).toBeFalsy();
    });
    it('P_Should_TestValidateTransferofTasks_3', () => {
        expect(validateTransfer('IN_PROGRESS', 'COMPLETED')).toBeTruthy();
    });
    it('P_Should_TestValidateTransferofTasks_4', () => {
        expect(validateTransfer('COMPLETED', 'IN_PROGRESS')).toBeFalsy();
    });
});
