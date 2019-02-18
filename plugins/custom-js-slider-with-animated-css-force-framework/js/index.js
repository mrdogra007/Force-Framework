// Custom JS slider with animated CSS
// Custom JS slider with animated CSS for the stats type data widget
// Crafted on: Force Framework
// Created: 09/02/2019
// Updated: 09-02-2019
// Author: Nishant Dogra
// Twitter: @mrdogra007
// http://dograsweblog.com/drive/force-framework/

$('.tab-listing a').click(function(){
	// remove the pre active class
	$('.tab-data').removeClass('active');
	$('.tab-listing a').removeClass('active');
	// activate the tab by the href="tab ID"
	var active = $(this).attr('href');
	// display the active tab data div
	$('div' + active).addClass('active');
	// Set current tab link to active
	$(this).addClass('active');
	return false;
});