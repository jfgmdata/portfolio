var mymap = L.map('map').setView([43.61092, 3.87723], 3);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVhbmZjb2dtdG5leiIsImEiOiJja255OWtnc2MwM2NrMm9xbjU5aGU5YWtvIn0.gIaZ6A1nNJGqZTdvlgdG5w', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiaG9sdHp5YW4iLCJhIjoiY2tmczBrd3BrMGJodDJ0bXQ5aW9sZXJ6eCJ9.8zTEkfZ54u4TvDGNjNh-Cg'
}).addTo(mymap);
var marker = L.marker([40.01, -3.61]).addTo(mymap);


function off(){
    $("body").css("background-color","rgba(0,0,0,0.7)");
  }
  $("#conoceme").click(function(){
    location.href='#yo';
  });
  $("#contactame").click(function(){
    location.href='#contacto';
  });
  $( "[id|='cierra']" ).click(function(){
    $('.modal').hide();
    $("body").css("background-color","rgba(0,0,0,0)")
  })
  $( "[id|='gestion']" ).click(function(){
    $('.modal').hide();
    $("#mgestion").show();
    off();
  });
  $( "[id|='buscar']" ).click(function(){
    $('.modal').hide();
    $("#mbuscar").show();
    off();
  });
  $( "[id|='dashboard']" ).click(function(){
    $('.modal').hide();
    $("#mdash").show();
    off();
  });
  $( "[id|='ml']" ).click(function(){
    $('.modal').hide();
    $("body").css("background-color","rgba(0,0,0,0.7)")
    $("#mml").show();
    off();
  });