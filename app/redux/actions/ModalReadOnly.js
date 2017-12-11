export const MODAL_READONLY = 'MODAL_READONLY'

export function ModalReadOnly (TODO) {
    return {
    	open: true,
        type: MODAL_READONLY,
        TODO: TODO
    }
}