export const fetchBenches = (filters, success) => {
  var a = JSON.stringify(filters.bounds);
  $.ajax({
    method: "GET",
    url: "/api/benches",
    data: {bounds: a},
    success,
    error: () => console.log('error while fetching benches')
  });
};
