overlay.opacity = 0
searchdialog.opacity = 0
columnopts.opacity = 0
colselected.opacity = 0
newfiltercol.opacity = 0
newfilterop.opacity = 0
valueopts.opacity = 0
valselected.opacity = 0
filledfiltervalue.opacity = 0
columnopts2.opacity = 0
colselected2.opacity = 0
newcol2.opacity = 0
newval2.opacity = 0
opopts.opacity = 0
selected3.opacity = 0
morethan.opacity = 0
cursor.opacity = 0
char3.opacity = 0
char0.opacity = 0
blank.opacity = 0
resultstable.opacity = 0
newfiltervalue.opacity = 0

page = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false 
	scrollVertical: false

discrepancytable.parent = page.content

ScrollComp = new ScrollComponent
layer = new Layer
   parent: ScrollComp.content
   x: 338
   y: 314
   width: 220
   height: 406
   
scroll = ScrollComponent.wrap(columnopts2)
scroll.scrollHorizontal = false
columnopts2.draggable.overdrag = false

overlay.stateSwitch "default"
searchdialog.stateSwitch "default"

# for i in [0..24]
# 	new Layer
# 		name: 'hover' + i
# 		parent: bg
# 		x: 1
# 		y: 1 + (31 * i)
# 		height: 31
# 		width: 218
# 		backgroundColor: "#FFFFFF"
# 
# hover1.onMouseOver (event, layer) ->
# 	hovered.animate
# 		backgroundColor: "#EEEEEE"
# 		options:
# 			time: 0
# 			curve: Bezier.ease

searchoptions.onClick (event, layer) ->
# 	overlay.stateSwitch "init"

	overlay.animate
		opacity: 1
		options:
			time: .3
			curve: Bezier.ease
			
	Utils.delay .25, ->
		searchdialog.animate
			opacity: 1
			options:
				time: .1
				curve: Bezier.ease

filtercol.onClick (event, layer) ->
	columnopts.animate
		opacity: 1
		options:
			time: .3
			curve: Bezier.ease

colselected.onClick (event, layer) ->
	colselected.opacity = 1
	Utils.delay .1, ->
		columnopts.destroy()
		newfiltercol.opacity = 1
		newfilterop.opacity = 1
		newfiltervalue.opacity = 1
		
newfiltervalue.onClick (event, layer) ->
	valueopts.opacity = 1

valselected.onClick (event, layer) ->
	valselected.opacity = 1
	Utils.delay .1, ->
		valueopts.destroy()
		filledfiltervalue.opacity = 1

page.addPage(discrepancytable2)

addfilter.onClick (event, layer) ->
	page.snapToPage(discrepancytable2, true, time: 0)
	
filtercolumn2.onClick (event, layer) ->
	columnopts2.opacity = 1
	
colselected2.onClick (event, layer) ->
	colselected2.opacity = 1
	Utils.delay .1, ->
		columnopts2.destroy()
		newcol2.opacity = 1
		newval2.opacity = 1
		
filterop2.onClick (event, layer) ->
	opopts.opacity = 1

selected3.onClick (event, layer) ->
	selected3.opacity = 1
	Utils.delay .1, ->
		opopts.destroy()
		morethan.opacity = 1

newval2.onClick (event, layer) ->
	blank.opacity = 1
	cursor.opacity = 1
	Utils.delay .5, ->
		cursor.x = cursor.x + 8
		char3.opacity = 1
	Utils.delay .7, ->
		cursor.x = cursor.x + 8
		char0.opacity = 1

page.addPage(discrepancytable3)

searchit.onClick (event, layer) ->
	page.snapToPage(discrepancytable3, true, time: 0)
	Utils.delay .5, ->
		resultstable.opacity = 1

# overlay.onClick (event, layer) ->
# 	overlay.opacity = 0
# 	searchdialog.opacity = 0
	