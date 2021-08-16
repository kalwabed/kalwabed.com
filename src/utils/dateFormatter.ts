import _format from 'date-fns/format'

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
