
### Contenttype Pages
The page content type gives you the structure of your website. Every created page will be added automatically to the menu by default. The contenttype `displaymenu` gives a checkbox to choose if the page should give a menu entry or not. The taxonomy `[ pagesort ] ` helps to sort the pages and menu appearance.

For translation to work you will need `locale:` and the hidden language data and slug fields (see in the example `dedata:` / `endata:` and `deslug:`/`enslug:`for a german/english setting.

```yaml
	pages:
	    name: Pages
	    singular_name: Page
	    fields:
		locale:
		    type: locale
		    group: inhalt
		displaymenu:
		    label: Seite als Menü-Eintrag
		    type: checkbox
		    default: true
		    group: inhalt
		title:
		    label: Titel
		    type: text
		    class: large
		    group: inhalt
		    translatable: true
		slug:
		    label: Link
		    type: slug
		    uses: title
		    group: inhalt
		body:
		    label: Text
		    type: html
		    height: 300px
		    group: inhalt
		    translatable: true
		dedata:
		    type: hidden
		deslug:
		    type: locale_data
		    index: true
		endata:
		    type: hidden
		enslug:
		    type: locale_data
		    index: true
	    taxonomy: [ pagesort ]
	    record_template: page.twig
	    recordsperpage: 10
	    default_status: published
	    icon_many: "fa:file-text-o"
	    icon_one: "fa:file-text-o"
 ```
    
    
	            