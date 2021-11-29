export const formatClock = (val) => {
  let mins = 0;
  let secs = 0;

  mins = Math.floor(val / 60);
  secs = val % 60;

  return `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
};

export const formatMins = (val) => {
  let mins = 0;

  mins = Math.floor(val / 60);

  return `${mins < 10 ? `0${mins}` : mins}`;
};
