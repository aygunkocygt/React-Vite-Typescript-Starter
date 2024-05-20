export function fNumber(inputValue: number | string, localeProps: { code: string } = { code: 'tr-TR' }): string {
    const { code } = localeProps;
  
    if (!inputValue) return '';
  
    const number = typeof inputValue === 'string' ? Number(inputValue) : inputValue;
  
    const fm = new Intl.NumberFormat(code, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(number);
  
    return fm;
  }
  
  export function fCurrency(inputValue: number | string, currencyCode: string = 'TRY', localeProps: { code: string } = { code: 'tr-TR' }): string {
    const { code } = localeProps;
  
    if (!inputValue) return '';
  
    const number = typeof inputValue === 'string' ? Number(inputValue) : inputValue;
  
    const fm = new Intl.NumberFormat(code, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(number);
  
    return fm;
  }
  
  export function fPercent(inputValue: number | string, localeProps: { code: string } = { code: 'tr-TR' }): string {
    const { code } = localeProps;
  
    if (!inputValue) return '';
  
    const number = typeof inputValue === 'string' ? Number(inputValue) : inputValue;
    const percentage = number / 100;
  
    const fm = new Intl.NumberFormat(code, {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(percentage);
  
    return fm;
  }
  
  export function fShortenNumber(inputValue: number | string, localeProps: { code: string } = { code: 'tr-TR' }): string {
    const { code } = localeProps;
  
    if (!inputValue) return '';
  
    const number = typeof inputValue === 'string' ? Number(inputValue) : inputValue;
  
    const fm = new Intl.NumberFormat(code, {
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(number);
  
    return fm.replace(/[A-Z]/g, (match) => match.toLowerCase());
  }
  
  export function fData(inputValue: number | string): string {
    if (!inputValue) return '';
  
    if (inputValue === 0) return '0 Bytes';
  
    const units = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'];
  
    const decimal = 2;
  
    const baseValue = 1024;
  
    const number = typeof inputValue === 'string' ? Number(inputValue) : inputValue;
  
    const index = Math.floor(Math.log(number) / Math.log(baseValue));
  
    const fm = `${parseFloat((number / Math.pow(baseValue, index)).toFixed(decimal))} ${units[index]}`;
  
    return fm;
  }
  