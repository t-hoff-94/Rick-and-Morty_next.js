export default function reverseAcronym(acronym) {
  // console.log(acronym)
  const arr = acronym.split('');
  const season = arr.slice(2,3).join('');
  let episode = '0'
  if(arr.slice(4)[0] === '0') {
    episode = arr.slice(5,6).join('');
  } else {
    episode = arr.slice(4).join('');
  }

  return `Season ${season}, Episode ${episode}`;
}
