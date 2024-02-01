import dayjs from "dayjs";

export function formatDate(date: string | Date) {
	if (!date) {
		return "";
	}

	return dayjs(date).format("MMM DD, YYYY");
}
