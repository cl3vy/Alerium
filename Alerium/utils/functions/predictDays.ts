/**
 * @returns {Array<{ hoursFromNow: number, name: string }>} days - An array of objects representing days, where hoursFromNow describes the hours from now till the end of the specified day and name the name of the day
 */
const predictDays = () => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const today = new Date();
  const todayIndex = today.getDay();
  const currentHour = today.getHours();
  const currentMinute = today.getMinutes();
  const currentHourInDecimal = Number(
    (currentHour + currentMinute / 60).toFixed(1)
  );

  const orderedWeekDays = [
    { name: "Today", hoursFromNow: 24 - currentHourInDecimal },
    { name: "Tomorrow", hoursFromNow: 24 + (24 - currentHourInDecimal) },
  ].concat(
    weekDays.slice((todayIndex + 2) % 7).map((day, index) => ({
      name: day,
      hoursFromNow: 48 + (24 - currentHourInDecimal) + 24 * index,
    })),
    weekDays.slice(0, (todayIndex + 2) % 7).map((day, index) => ({
      name: day,
      hoursFromNow:
        48 +
        (24 - currentHourInDecimal) +
        24 * ((todayIndex + 2) % 7) +
        24 * index,
    }))
  );

  orderedWeekDays.splice(-2);

  return orderedWeekDays;
};

export default predictDays;
