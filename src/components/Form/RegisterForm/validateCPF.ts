export const validateCPF = (cpf: string): boolean => {
  let sum = 0;
  let remainder;
  const replaceCPF = cpf
    .replace('.', '')
    .replace('-', '')
    .replace(/\D/g, '')
    .trim();
  console.log(replaceCPF);
  if (
    replaceCPF === '' ||
    replaceCPF.length !== 11 ||
    replaceCPF === '00000000000' ||
    replaceCPF === '11111111111' ||
    replaceCPF === '22222222222' ||
    replaceCPF === '33333333333' ||
    replaceCPF === '44444444444' ||
    replaceCPF === '55555555555' ||
    replaceCPF === '66666666666' ||
    replaceCPF === '77777777777' ||
    replaceCPF === '88888888888' ||
    replaceCPF === '99999999999'
  ) {
    return false;
  }

  let allEqual = true;
  for (let i = 0; i < replaceCPF.length - 1; i++) {
    if (cpf[i] !== cpf[i + 1]) allEqual = false;
  }
  if (allEqual) return false;

  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(replaceCPF.substring(i - 1, i)) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder == 10 || remainder == 11) remainder = 0;
  if (remainder != parseInt(replaceCPF.substring(9, 10))) return false;
  sum = 0;

  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(replaceCPF.substring(i - 1, i)) * (12 - i);
  remainder = (sum * 10) % 11;
  if (remainder == 10 || remainder == 11) remainder = 0;
  if (remainder != parseInt(replaceCPF.substring(10, 11))) return false;

  return true;
};
