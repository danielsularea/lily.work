page = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false 
	scrollVertical: false

page1.parent = page.content
page.addPage(page2)
page.addPage(page3)
page.addPage(page4)
page.addPage(page5)
page.addPage(page6)
page.addPage(page7)
page.addPage(page8)
page.addPage(page9)
page.addPage(page10)
page.addPage(page11)
page.addPage(page12)
page.addPage(page13)
page.addPage(page14)
page.addPage(page15)

p1autocomplete.opacity = 0
p1cursor.opacity = 0
p1blank.opacity = 0
p4options.opacity = 0
p7rows.opacity = 0
p9options.opacity = 0
p15rows.opacity = 0

p1searchbar.onClick (event, layer) ->
	p1autocomplete.opacity = 1
	p1cursor.opacity = 1
	p1blank.opacity = 1
	Utils.delay 1, ->
		page.snapToPage(page2, true, time: 0)
	Utils.delay 1.25, ->
		page.snapToPage(page3, true, time: 0)
	Utils.delay 1.5, ->
		page.snapToPage(page4, true, time: 0)
	Utils.delay 2, ->
		p4options.opacity = 1
	Utils.delay 2.5, ->
		page.snapToPage(page5, true, time: 0)
	Utils.delay 2.75, ->
		page.snapToPage(page6, true, time: 0)
	Utils.delay 3.5, ->
		page.snapToPage(page7, true, time: 0)
	Utils.delay 4, ->
		p7rows.opacity = 1
	Utils.delay 4.75, ->
		page.snapToPage(page8, true, time: 0)
	Utils.delay 5, ->
		page.snapToPage(page9, true, time: 0)
	Utils.delay 5.5, ->
		p9options.opacity = 1
	Utils.delay 6, ->
		page.snapToPage(page10, true, time: 0)
	Utils.delay 6.25, ->
		page.snapToPage(page11, true, time: 0)
	Utils.delay 7, ->
		page.snapToPage(page12, true, time: 0)
	Utils.delay 8, ->
		page.snapToPage(page13, true, time: 0)
	Utils.delay 8.25, ->
		page.snapToPage(page14, true, time: 0)
	Utils.delay 8.5, ->
		page.snapToPage(page15, true, time: 0)
	Utils.delay 9.5, ->
		p15rows.opacity = 1
