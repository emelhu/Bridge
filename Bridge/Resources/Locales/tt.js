﻿Bridge.merge(new System.Globalization.CultureInfo("tt", true), {
    englishName: "Tatar",
    nativeName: "Татар",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "₽",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["якш.","дүш.","сиш.","чәрш.","пәнҗ.","җом.","шим."],
        abbreviatedMonthGenitiveNames: ["гыйн.","фев.","мар.","апр.","май","июнь","июль","авг.","сен.","окт.","нояб.","дек.",""],
        abbreviatedMonthNames: ["гыйн.","фев.","мар.","апр.","май","июнь","июль","авг.","сен.","окт.","нояб.","дек.",""],
        amDesignator: "",
        dateSeparator: ".",
        dayNames: ["якшәмбе","дүшәмбе","сишәмбе","чәршәмбе","пәнҗешәмбе","җомга","шимбә"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dd MMMM yyyy' ел' HH:mm:ss",
        longDatePattern: "dd MMMM yyyy' ел'",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["гыйнвар","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь",""],
        monthNames: ["гыйнвар","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.MM.yyyy",
        shortestDayNames: ["я","д","с","ч","п","җ","ш"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
