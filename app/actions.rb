# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  content_type :json
  Contact.all.to_json
end

post '/contacts' do
  content_type :json
  contact = Contact.find(params[:id]).to_json
end

get '/contacts/:id' do
  content_type :json
  contact = Contact.find(params[:id]).to_json
end