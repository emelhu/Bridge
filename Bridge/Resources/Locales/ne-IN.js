﻿Bridge.merge(new System.Globalization.CultureInfo("ne-IN", true), {
    englishName: "Nepali (India)",
    nativeName: "नेपाली (भारत)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 0,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 2,
        percentNegativePattern: 1,
        currencySymbol: "₹",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 0,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["आइत","सोम","मङ्गल","बुध","बिही","शुक्र","शनि"],
        abbreviatedMonthGenitiveNames: ["जन","फेब","मार्च","अप्रि","मे","जुन","जुला","अग","सेप्ट","अक्टो","नोभे","डिसे",""],
        abbreviatedMonthNames: ["जन","फेब","मार्च","अप्रि","मे","जुन","जुला","अग","सेप्ट","अक्टो","नोभे","डिसे",""],
        amDesignator: "पूर्वाह्न",
        dateSeparator: "-",
        dayNames: ["आइतवार","सोमवार","मङ्गलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "yyyy MMMM d, dddd HH:mm:ss",
        longDatePattern: "yyyy MMMM d, dddd",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["जनवरी","फरवरी","मार्च","अप्रेल","मई","जुन","जुलाई","अगस्त","सेप्टेम्बर","अक्टोबर","नोभेम्बर","दिसम्बर",""],
        monthNames: ["जनवरी","फरवरी","मार्च","अप्रेल","मई","जुन","जुलाई","अगस्त","सेप्टेम्बर","अक्टोबर","नोभेम्बर","दिसम्बर",""],
        pmDesignator: "अपराह्न",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["आइत","सोम","मङ्गल","बुध","बिही","शुक्र","शनि"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
