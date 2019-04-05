export const getDate = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const today = new Date();
    const d = today.getDate();
    const month = monthNames[today.getMonth()];
    const yyyy = today.getFullYear();

    return `${d} ${month} ${yyyy}`;
};

export const getWeekday = () => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const today = new Date();
    return dayNames[today.getDay()];
};
