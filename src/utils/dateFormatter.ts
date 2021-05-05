const months = [
  'January',
  'February',
  'March',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

/**
 *
 * @param date string
 * @reference https://github.com/you-dont-need/You-Dont-Need-Momentjs#string--date-format
 */

function dateFormatter(date: string) {
  const _date = new Date(date)

  return {
    formatted: `${months[_date.getMonth() - 1]}, ${_date.getDate()} ${_date.getFullYear()}`,
    ISO: _date.toISOString(),
    dateString: _date.toDateString(),
    utc: _date.toUTCString()
  }
}

export default dateFormatter
