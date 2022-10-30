history.scrollRestoration = "manual"

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage'],
        sectionsColor: ['#C63D0F', '#1BBC9B'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page']
	});

});