export const formatEpochSecondsAsDate = (seconds: number) => {
  const date = new Date(seconds * 1000);

  const UkDateTime = new Intl.DateTimeFormat('en-Gb', {
    dateStyle: 'short',
    timeStyle: 'medium',
    timeZone: 'Europe/London'
  }).format(date)

  return UkDateTime
}