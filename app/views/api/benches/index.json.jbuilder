json.benches do
  json.array! @benches do |b|
    json.descriptions b.descriptions
    json.lat b.lat
    json.lng b.lng
  end
end

# ###### AJAX REQUEST FORMAT ON DEVTOOL
# success = (data) => {
# console.log(data);
# }
# $.ajax({
# url: "http://localhost:3000/api/benches",
# type: "get",
# success
# });
