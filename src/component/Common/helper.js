export const getCurrentDate = () => {
    const date = new Date();
    const isoString = date.toISOString();
    return isoString.split('T')[0];
}