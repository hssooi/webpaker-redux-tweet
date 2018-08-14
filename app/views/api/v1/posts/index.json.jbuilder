# json.array! @data, :id, :content
#
json.array! @data do |data|
  json.id data.id
  json.content  data.content
  json.user do
    json.extract!(data.user, :name, :email, :image_name)
  end
end