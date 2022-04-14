export default {
  name: 'Fcont',
  data() {
    return {
      items: [
        {
          value: 'Ленинградская область, деревня Екатериновка, 8-Марта, 188',
          icon: '<svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.375 15.6875C5.65625 16.125 6.3125 16.125 6.59375 15.6875C11.1562 9.125 12 8.4375 12 6C12 2.6875 9.3125 0 6 0C2.65625 0 0 2.6875 0 6C0 8.4375 0.8125 9.125 5.375 15.6875ZM6 8.5C4.59375 8.5 3.5 7.40625 3.5 6C3.5 4.625 4.59375 3.5 6 3.5C7.375 3.5 8.5 4.625 8.5 6C8.5 7.40625 7.375 8.5 6 8.5Z" fill="#90B845"/> </svg> '
        },
        {
          value: 'Пн-Пт 9:00 - 18:00, Сб-Вс - выходной',
          icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM10.875 10.0312L10.25 10.8125C10.1562 10.9375 10.0312 11.0312 9.84375 11.0312C9.75 11.0312 9.625 10.9688 9.5625 10.9062L7.46875 9.34375C7.15625 9.125 7 8.78125 7 8.375V3.5C7 3.25 7.21875 3 7.5 3H8.5C8.75 3 9 3.25 9 3.5V8L10.8125 9.34375C10.9062 9.4375 11 9.5625 11 9.71875C11 9.84375 10.9375 9.96875 10.875 10.0312Z" fill="#90B845"/> </svg> '
        },
        {
          value: '<a href="tel:+78129420095">+7 (812) 942-00-95</div>',
          icon: '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4062 1.78125L13.1562 1.03125C12.8125 0.9375 12.4375 1.125 12.2812 1.46875L10.7812 4.96875C10.6562 5.28125 10.75 5.625 11 5.84375L12.9062 7.40625C11.7812 9.78125 9.8125 11.7812 7.375 12.9375L5.8125 11.0312C5.59375 10.7812 5.25 10.6875 4.9375 10.8125L1.4375 12.3125C1.09375 12.4688 0.9375 12.8438 1 13.1875L1.75 16.4375C1.84375 16.7812 2.125 17 2.5 17C10.5 17 17 10.5312 17 2.5C17 2.15625 16.75 1.875 16.4062 1.78125Z" fill="#90B845"/> </svg> '
        },
      ]
    }
  },
  props: {
    classParent: String
  }
}
