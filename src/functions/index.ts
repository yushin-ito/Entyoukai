export const formatByDot = (date: string, type: string) => {
  const current = new Date(date);

  const year = current.getFullYear();
  const month = current.getMonth() + 1;
  const day = current.getDate();

  return type
    .replace("yyyy", String(year))
    .replace("yy", String(year).slice(-2))
    .replace("MM", String(month).padStart(2, "0"))
    .replace("M", String(month))
    .replace("dd", String(day).padStart(2, "0"))
    .replace("d", String(day))
    .replace("年", "年")
    .replace("月", "月")
    .replace("日", "日");
};

export const formatByDistance = (date: string) => {
  const current = new Date();
  const prev = new Date(date);

  const diff = current.getTime() - prev.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years}年前`;
  if (months > 0) return `${months}ヶ月前`;
  if (weeks > 0) return `${weeks}週間前`;
  if (days > 0) return `${days}日前`;
  if (hours > 0) return `${hours}時間前`;
  if (minutes > 0) return `${minutes}分前`;
  return `${seconds}秒前`;
};
