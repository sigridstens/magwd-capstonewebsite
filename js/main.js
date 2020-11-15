$(function() {
  $("#main-content").mousewheel(function(event, delta) {
    this.scrollLeft -= (delta);
    event.preventDefault();
  });
});



