export const commentDate = (date: string | Date) => {
  const currentDate = new Date();
  const createdAt = new Date(date);

  const calc = 1000 * 24 * 60 * 60;

  const daysAgo = Math.floor(
    (currentDate.getTime() - createdAt.getTime()) / calc
  );

  const monthsAgo = Math.floor(daysAgo / 30);
  if (daysAgo < 30) {
    if (daysAgo === 0) {
      return 'hoje';
    }
    return `${'há ' + daysAgo + ' dias'}`;
  }

  return `${'há ' + monthsAgo + ' mês'}`;
};
