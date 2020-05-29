$( document ).ready(function() {

  $.ajax({
  url: "getpagamenti.php",
  method: "GET",

  success: function (data,stato) {
  console.log(data);
  generaoutput(data);
 },
  error: function (richiesta,stato,errore) {
  alert("Si è verificato un errore", errore);
 }
 })




  function generaoutput(data) {

    for (var i = 0; i < data.length; i++) {
      $("ul").append("<li data-id=" + data[i]["id"] + ">" + data[i]["status"] + data[i]["price"] + "<span class='delete'>&times;</span>" + "</li>")
    }
  }



  $( "ul" ).on( "click", ".delete", function( ) {
    var id = $(this).parent().data("id");
    var questo = $(this).parent()

    console.log(id);
    $.ajax({
    url: "deletepagamento.php",
    method: "POST",
    data: {
      id: id
    },
    success: function () {
      questo.remove(); 
   },
    error: function (richiesta,stato,errore) {
    alert("Si è verificato un errore", errore);
   }
   })

  });
});
