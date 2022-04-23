$(document).ready(function(){
    $.get("https://my-json-server.typicode.com/vladislavkovtun2003/AJAX/posts",function(data){
      console.log(data);
      for(i=0; i<data.length; i++){
        $("table tbody").append(`
          <tr>
            <td>` + lastEl + `</td>
            <td>`+data[i].ComplexName+`</td>
            <td>`+data[i].TankName+`</td>
            <td>`+data[i].Volume+`</td>
            <td>`+data[i].DrillAmount+`</td>
            <td>`+data[i].Productivity+`</td>
            <td>`+data[i].PompedGas+`</td>
            <td>`+data[i].TookenGas+`</td>
            <td>`+data[i].DateFilled+`</td>
            <td>`+data[i].Logo+`</td>
            <td><a class="delete" href="#" data-id="` + lastEl + `">Delete</a>
          </tr>
          `);
      }
    });
  });

$(document).ready (function (){
  $("#Send").bind("click", function(){
      $.ajax({
          method: "POST",
          url: "table.php",
          data: {
              complexname: $("#ComplexName").val(), 
              tankname: $("#TankName").val(), 
              volume: $("#Volume").val(), 
              drillamount: $("DrillAmount").val(), 
              productivity: $("#Productivity").val(), 
              pompedgas: $("#PompedGas").val(), 
              tookengas: $("#TookenGas").val(),
              datefilled: $("#DateFilled").val(),
              logo: $("#Logo").val(),
          },
          dataType: "html",
          beforeSend: funcBefore,
          success: funcSuccess
      });
  });
});

    $(document).on("click",".delete",function(e){
      e.preventDefault();
      id=$(this).data("id");
      $.post("https://my-json-server.typicode.com/vladislavkovtun2003/AJAX/posts",{action:"delete",id:id},function(data){
        console.log(data);
      }
    );
    });