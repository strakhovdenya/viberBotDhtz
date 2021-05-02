module.exports = function (additionalDays = 0) {

    const date = new Date();

    date.setDate(date.getDate() + additionalDays);

    const day = date.getDate();
    const dayFormatted = (day < 10 ? '0' : '') + day;

    const month = date.getMonth() + 1;
    const monthFormatted = (month < 10 ? '0' : '') + month;

    const formattedDate = dayFormatted + '.' + monthFormatted + '.' + date.getFullYear();

    return formattedDate;
}
