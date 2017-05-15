export const fetchBenches = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/benches',
    err: (err) => console.log(err)
  });
};
