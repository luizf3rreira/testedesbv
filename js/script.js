

var userName = ('#username');


function loadUser(){

$.getJSON( "https://api.github.com/repos/" + username , function( data ) {
  
  var items = [];

  $.each( data, function( userName, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

}