json.benches do
  json.array! @benches do |b|
    json.id b.id
    json.descriptions b.descriptions
    json.lat b.lat
    json.lng b.lng
  end
end

# success = (data) => {
# console.log(data);
# }
# $.ajax({
# url: "http://localhost:3000/api/benches",
# type: "get",
# success
# });
