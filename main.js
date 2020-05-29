$( document ).ready(function() {

  $.ajax({
  url: "getpaganti.php",
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
    var source = document.getElementById("template-lista").innerHTML;
    var template = Handlebars.compile(source);
    var ospiteID
    for (var i = 0; i < data.length; i++) {

      if (data[i]["ospite_id"] == null) {
        ospiteID = "id non presente"
      }else {
        ospiteID = data[i]["ospite_id"]
      }
      var context = {
      id: data[i]["id"],
      name: data[i]["name"],
      lastname: data[i]["lastname"],
      address: data[i]["address"],
      ospiteid: ospiteID,
    };




      var html = template(context);
      $("ul").append(html);
    }
  }



  $( "ul" ).on( "click", ".delete", function( ) {
    var id = $(this).parent().data("id");
    var questo = $(this).parent()

    console.log(id);
    $.ajax({
    url: "deletepagante.php",
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
