/**
 * Returns a time string formatted in hh:mm:ss format.
 * 
 * @param {Date} date - The date to format. 
 */
export const toHHMMSSTimeString = (date) => date.toTimeString().substring(0, 8);
