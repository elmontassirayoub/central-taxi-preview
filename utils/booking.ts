const joursFeries = [
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
export const getPrice = (dis:{value: number}, day: string, time: string): string => {
    if (joursFeries.some((jour) => jour === day))
        return ((dis.value / 1000) * 2.48).toFixed(2);
    if (getHour(time) === 18) {
        if (getMinu(time) >= 55) return ((dis.value / 1000) * 2.48).toFixed(2);
        else return ((dis.value / 1000) * 1.74).toFixed(2);
    } else if (getHour(time) >= 19 || getHour(time) < 7)
        return ((dis.value / 1000) * 2.48).toFixed(2);
    else return ((dis.value / 1000) * 1.74).toFixed(2);
};