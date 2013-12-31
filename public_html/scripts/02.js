$(document).ready(function() {
    $('#selected-plays > li').addClass('horizontal');
    $('#selected-plays li:not(.horizontal)').addClass('sub-level');
    
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink');
    $('a[href^="http"][href*="henry"]').addClass('henrylink');
    
//    $('tr:even').addClass('alt');
    $('tr:nth-child(odd)').addClass('alt');
//    $('td:contains(Henry)').addClass('highlight');
//    $('td:contains(Henry)').next().addClass('highlight');
//    $('td:contains(Henry)').nextAll().addClass('highlight');
//    $('td:contains(Henry)').nextAll().addBack().addClass('highlight');
//    $('td:contains(Henry)').parent().children().addClass('highlight');
    $('td:contains(Henry)')         // Find every cell containing Henry
            .parent()               // Select its parent
            .find('td:eq(1)')       // Find the 2nd descendant cell
            .addClass('highlight')  // Add the "highlight" class
            .end()                  // Return to the parent of the cell containing Henry
            .find('td:eq(2)')       // Find the 3rd descendant cell
            .addClass('highlight'); // Add the "highlight" class
    
    $('a').filter(function() {
        return this.hostname && this.hostname !== location.hostname;
    }).addClass('external');
});

