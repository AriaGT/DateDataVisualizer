export const getDayOfWeek = (day: number, month: number, year: number) => {
  let zellerMonth = month;
  let zellerYear = year;
  if (zellerMonth < 3) {
    zellerMonth += 12;
    zellerYear -= 1;
  }
  const q = day,
    m = zellerMonth,
    k = zellerYear % 100,
    j = Math.floor(zellerYear / 100),
    f = Math.floor((13 * (m + 1)) / 5),
    s = Math.floor(k / 4),
    t = Math.floor(j / 4),
    u = 5 * j,
    dayOfWeek = (q + f + k + s + t + u) % 7;

  return [
    "Sábado",
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
  ][dayOfWeek];
}

export const getIsLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

export const getMonthName = (month: number) => [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
][month - 1]

export const getMonthDays = (month: number) => [
  31, // January
  getIsLeapYear(month)
    ? 29
    : 28, // February
  31, // March
  30, // April
  31, // May
  30, // June
  31, // July
  31, // August
  30, // September
  31, // October
  30, // November
  31, // December
][month - 1]

export const isToday = (day: number, month: number, year: number) => {
  var fechaActual = new Date();
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1;
  var añoActual = fechaActual.getFullYear();
  return day === diaActual && month === mesActual && year === añoActual
}

export const getMonthData = (day: number, month: number) => {
  let monthData = { month: "", zodiac_sign: "" };
  switch (month) {
    case 1:
      monthData.month = 'Enero';
      if (day <= 20) {
        monthData.zodiac_sign = 'Capricornio';
      } else {
        monthData.zodiac_sign = 'Acuario';
      }
      break;
    case 2:
      monthData.month = 'Febrero';
      if (day <= 19) {
        monthData.zodiac_sign = 'Acuario';
      } else {
        monthData.zodiac_sign = 'Piscis';
      }
      break;
    case 3:
      monthData.month = 'Marzo';
      if (day <= 21) {
        monthData.zodiac_sign = 'Piscis';
      } else {
        monthData.zodiac_sign = 'Aries';
      }
      break;
    case 4:
      monthData.month = 'Abril';
      if (day <= 20) {
        monthData.zodiac_sign = 'Aries';
      } else {
        monthData.zodiac_sign = 'Tauro';
      }
      break;
    case 5:
      monthData.month = 'Mayo';
      if (day <= 21) {
        monthData.zodiac_sign = 'Tauro';
      } else {
        monthData.zodiac_sign = 'Geminis';
      }
      break;
    case 6:
      monthData.month = 'Junio';
      if (day <= 21) {
        monthData.zodiac_sign = 'Geminis';
      } else {
        monthData.zodiac_sign = 'Cancer';
      }
      break;
    case 7:
      monthData.month = 'Julio';
      if (day <= 23) {
        monthData.zodiac_sign = 'Cancer';
      } else {
        monthData.zodiac_sign = 'Leo';
      }
      break;
    case 8:
      monthData.month = 'Agosto';
      if (day <= 23) {
        monthData.zodiac_sign = 'Leo';
      } else {
        monthData.zodiac_sign = 'Virgo';
      }
      break;
    case 9:
      monthData.month = 'Septiembre';
      if (day <= 23) {
        monthData.zodiac_sign = 'Virgo';
      } else {
        monthData.zodiac_sign = 'Libra';
      }
      break;
    case 10:
      monthData.month = 'Octubre';
      if (day <= 23) {
        monthData.zodiac_sign = 'Libra';
      } else {
        monthData.zodiac_sign = 'Escorpio';
      }
      break;
    case 11:
      monthData.month = 'Noviembre';
      if (day <= 22) {
        monthData.zodiac_sign = 'Escorpio';
      } else {
        monthData.zodiac_sign = 'Sagitario';
      }
      break;
    case 12:
      monthData.month = 'Diciembre';
      if (day <= 22) {
        monthData.zodiac_sign = 'Sagitario';
        return;
      }
      monthData.zodiac_sign = 'Capricornio';
      break;
    default:
      console.log('Número de mes inválido');
  }
  return monthData
}