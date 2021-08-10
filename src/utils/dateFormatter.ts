import _format from 'date-fns/format'

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

const shortMonths = [
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

function dateFormatter(date: string, format?: string) {
  const _date = new Date(date)

  return {
    formatted: _format(_date, format ?? 'd MMM, yyyy'),
    ISO: _date.toISOString(),
    dateString: _date.toDateString(),
    utc: _date.toUTCString()
  }
}

export default dateFormatter
