const joursFeries = [
    // 2023
    '2023-01-01',
    '2023-04-09',
    '2023-04-10',
    '2023-05-01',
    '2023-05-08',
    '2023-05-18',
    '2023-05-29',
    '2023-07-14',
    '2023-08-15',
    '2023-11-01',
    '2023-11-11',
    '2023-12-25',
    // 2025 (jours fériés nationaux)
    '2025-01-01',
    '2025-04-21',
    '2025-05-01',
    '2025-05-08',
    '2025-05-29',
    '2025-06-09',
    '2025-07-14',
    '2025-08-15',
    '2025-11-01',
    '2025-11-11',
    '2025-12-25',
    // 2026 (jours fériés nationaux)
    '2026-01-01',
    '2026-04-06',
    '2026-05-01',
    '2026-05-08',
    '2026-05-14',
    '2026-05-25',
    '2026-07-14',
    '2026-08-15',
    '2026-11-01',
    '2026-11-11',
    '2026-12-25',
];

export const getHour = (str: string): number => {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ':') return parseInt(res);
        else res += str[i];
    }
    return 0;
};

export const getMinu = (str: string): number => {
    let res = [];
    let str1 = str.split('').reverse();
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == ':') {
            let tmp = res.reverse();
            let phr = tmp.join('');
            return parseInt(phr);
        } else res.push(str1[i]);
    }
    return 0;
};
export const getPrice = (dis: { value: number }, day: string, time: string): string => {
    const distanceKm = dis.value / 1000;

    // Determine date characteristics
    const dateObj = new Date(day);
    const dayOfWeek = dateObj.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const isSunday = dayOfWeek === 0;
    const isHoliday = joursFeries.some((jour) => jour === day);

    const hour = getHour(time);

    // Night / weekend / holiday tariff condition
    const isNightOrWeekendOrHoliday =
        isHoliday ||
        isSunday ||
        hour < 7 ||
        hour >= 19;

    const ratePerKm = isNightOrWeekendOrHoliday ? 2.84 : 2.0;

    const baseFee = 8; // €8 fixed
    const variablePart = distanceKm * ratePerKm;
    const total = baseFee + variablePart;

    return total.toFixed(2);
};