# This script automatically generates the page people.html everytime the website is run locally

require 'json'

json_file = File.join(File.dirname(__FILE__), 'people.json')
data = JSON.load_file(json_file)

output_file = File.join(File.dirname(__FILE__), 'people.html')
File.open(output_file, 'w') { |f|
  f.puts '<!-- This file was generated automatically. If any updates are necessary, re-run the site locally -->'
  data['categorias'].each do |categoria|
    f.puts '<h2 class="mt-5">' + categoria['nome'] + '</h2>'
    f.puts '<div class="row">'
    categoria['membros'].each do |membro|
      f.puts '<div class="col-lg-3 col-md-4 col-6 mx-auto">'
      f.puts '<img src="'+membro['imagem']+'" class="material_image mb-2 mt-4" /><br>'
      f.puts '<b>'+membro['nome']+'</b><br>'
      f.puts '<a>'+membro['cargo']+'</a>'
      if membro['perfil_url'] then
        f.puts '<br><a href="'+membro['perfil_url']+'" target="_blank" rel="noopener noreferrer">Ver perfil</a>'
      end
      f.puts '</div>'
    end
    f.puts '</div>'
  end 
}