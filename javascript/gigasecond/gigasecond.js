//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//

export const gigasecond = (currentDate) => {
  const gigasecInMilisec = 10 ** 9 * 1000; 
  const endDate = new Date(currentDate.getTime() + gigasecInMilisec);

  return endDate;
};
