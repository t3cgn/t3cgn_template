# Require any additional compass plugins here.
require 'sass-css-importer'

# Set this to the root of your project when deployed:
http_path = '/'
css_dir = '../../Resources/Public/Css'
sass_dir = '../../Resources/Private/Design/Scss'
images_dir = '../../Resources/Private/Design/Images'
generated_images_dir = '../../Resources/Public/Images'
http_generated_images_path = '../Images'
fonts_dir = '../../Resources/Public/Fonts'
javascripts_dir = '../../Resources/Public/JavaScript'
http_javascripts_path = '../JavaScript'

# add_import_path '../../Resources/Private/Design/Vendor/bootstrap/scss'
additional_import_paths = ['../../Resources/Private/Design/Vendor/bootstrap/scss']

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
asset_cache_buster :none

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass