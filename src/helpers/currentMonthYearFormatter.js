module.exports = function (additionalDays = 0) {

    const date = new Date();

    date.setDate(date.getDate() + additionalDays);

    const month = date.getMonth() + 1;
    const monthFormatted = (month < 10 ? '0' : '') + month;

    const formattedDate = date.getFullYear() + '.' + monthFormatted;

    return formattedDate;
}
