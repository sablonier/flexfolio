### Content types for this theme

>With flexfolio theme install you got a subfolder `config-examples` with example configuration files in your flexfolio folder. With quick install this examples are already active at the right place, in case of an expert install you will need to move this files to your Bolt CMS folder `app/config` and rename the files (remove `.~~example~~.` in the filename).

For this theme working correctly you will need 3 contenttypes in your database. IT DOES NOT WORK CORRECTLY with default contenttypes of Bolt CMS. It doesn't break your install but you will see alerts that you need to install the right contenttypes or required extensions.

When followed quick or expert install of flexfolio theme you will notice that this contenttypes/fields/definitions needs to be available in your Bolt CMS `app/config/contenttypes.yml`:

####Content types required, examples:
####[Settings](contenttypes-settings.html)
####[Pages](contenttypes-pages.html)
####[Works](contenttypes-settings.html)