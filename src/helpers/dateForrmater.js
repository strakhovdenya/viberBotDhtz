module.exports = function (additionalDays = 0) {

    const date = new Date();

    date.setDate(date.getDate() + additionalDays);

    const day = date.getDate();
    const dayForatted = (day < 10 ? '0' : '') + day;

    const month = date.getMonth() + 1;
    const monthForatted = (month < 10 ? '0' : '') + month;

    const formattedDate = dayForatted + '.' + monthForatted + '.' + date.getFullYear();

    return formattedDate;
}