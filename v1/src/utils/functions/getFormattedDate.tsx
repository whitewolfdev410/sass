const getFormattedDate = (date: string | undefined) => {
	if (date) {
		let timeArray = new Date(date).toUTCString().toString().split(" ");
		return `${timeArray[1]} ${timeArray[2]} ${timeArray[3]}`;
	}
};

export default getFormattedDate;
