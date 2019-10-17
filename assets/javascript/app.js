$(function () {
    $("#addburger").on("submit", function (event) {
      event.preventDefault();
      var validBurger = $("#burger").val().trim();
  
      if (validBurger.length > 0) {
        var newBurger = {
          burger: validBurger
        };
  
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function () {
            console.log("added new burger");
            location.reload();
          }
        );
      }; 
    });
  
    $(".change-burger").on("click", function (event) {
  
      var id = $(this).data("burgerid");
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
          devoured: true
        }
      }).then(
        function () {
          console.log("moved to devoured column");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function (event) {
  
      var id = $(this).data("burgerid");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
        dataType: 'text',
        error: function (e) {
          console.log('error', e)
          location.reload();
        },
        success: function (response) {
          console.log('response', response)
        }
      })
    });
  
  });