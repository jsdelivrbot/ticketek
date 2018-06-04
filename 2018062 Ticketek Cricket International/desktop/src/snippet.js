// Retrieve the utils library
var utils = window["optimizely"].get('utils');

// Wait for the footer element to appear in the DOM, then change the color
utils.waitForElement('.sectionTitle').then(function(element) {
  $(element).parent().replaceWith(html);
  
  $('#eventsPageContainerInner .tab-item').on('click', function (e) {
    $('#eventsPageContainerInner .tab-item').removeClass('active');
    $(this).addClass('active');
    var current = $(this).data('attr');
    $("#eventsPageContainerInner .match-container").children().removeClass('show').addClass('hide');
    $("#eventsPageContainerInner .match-container").find('#' + current).addClass('show').removeClass('hide');
  });
});