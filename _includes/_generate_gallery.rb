require 'json'

json_file = File.join(File.dirname(__FILE__), 'gallery.json')
data = JSON.load_file(json_file)

output_file = File.join(File.dirname(__FILE__), 'gallery.html')
File.open(output_file, 'w') { |f|
f.puts '<!-- This file was generated automatically. If any updates are necessary, re-run the site locally -->'
data['galeria'].each do |foto|
f.puts '<div class="col-sm-6 col-md-4 item">'
f.puts '<a href="images/gallery/'+foto["foto_caminho"]+'" data-lightbox="photos" data-title="'+foto["foto_legenda"]+'"><img class="img-fluid" src="images/gallery/'+foto["foto_caminho"]+'"></a>'
f.puts '</div>'
end }