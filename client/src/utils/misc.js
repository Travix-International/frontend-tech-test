export function validateTransfer(sourceType, targetType) {
    switch(sourceType) {
        case 'DRAFT':
            return targetType === 'IN_PROGRESS';
        case 'IN_PROGRESS':
                return targetType === 'COMPLETED';
        default:
            return false
    }
}