# This script automatically generates the page copyright.html everytime the website is run locally

require 'date'

year = Date.today.year.to_s

print(year)

output_file = File.join(File.dirname(__FILE__), 'copyright.html')
File.open(output_file, 'w') { |f|
f.puts '<!-- This file was generated automatically. If any updates are necessary, re-run the site locally -->'
f.puts '<div class="copyright_section">'
f.puts '<div class="container">'
f.puts '<p class="copyright_text">'+year+' All Rights Reserved. Design by <a href="https://html.design" target="_blank" rel="noopener noreferrer">Free html Templates</a> Distributed by <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a></p>'
f.puts '</div>'
f.puts '</div>'
}