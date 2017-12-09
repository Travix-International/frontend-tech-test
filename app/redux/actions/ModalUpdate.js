export const MODAL_UPDATE = 'MODAL_UPDATE'

export function ModalUpdate (TODO) {
    return {
    	open: true,
        type: MODAL_UPDATE,
        TODO: TODO
    }
}