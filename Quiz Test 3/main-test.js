if($('ul#filter_list').length){		// Check to see if the ul news filter exists...

		$('ul#filter_list a').click(function(e){	// When click on filter button...
			e.preventDefault();		// Disables anchor tag so that it won't go back to the top of the page.

			var className = $(this).attr('class').split(" ")[0];		// Assigns the tag (the FIRST class in the anchor tag)

			$('ul#filter_list a.'+ className).toggleClass('active');  // Toggles checkmark on ALL filter anchor tags w/ that id on the page (in case the page has multiple )
			$('article.' + className).toggleClass('hide');  // Toggles hide class for all articles of selected school

		});//END $('a.lcas_button').click
}
