function leebd()
{
    
    $(document).ready(function () {
        $.getJSON("php/conexionFrontEnd.php",{tipo:"municipio"}, function (data1) {
            $('#conttxt2_filtros_f2').html('<option>'+data1[0].nombre+'</option>')
            for(i = 1; i< data1.length;i++){
                
                $('#conttxt2_filtros_f2').append('<option>'+data1[i].nombre+'</option>')
            }      
        })
        $.getJSON("php/conexionFrontEnd.php",{tipo:"tipoPiso"}, function (data2) {
            $('#conttxt2_filtros_f1').html('<option>'+data2[0].nombre+'</option>')
            for(i = 1; i< data2.length;i++){
                
                $('#conttxt2_filtros_f1').append('<option>'+data2[i].nombre+'</option>')
            }      
        })
        $.getJSON("php/conexionFrontEnd.php",{tipo:"filtrosFinca"}, function (data3) {
                console.log("*******filtrosFinca");
            for(i = 1; i< data3.length/2;i++){
                console.log(data3[i]);
            }      
        })
        $.getJSON("php/conexionFrontEnd.php",{tipo:"filtrosExterior"}, function (data4) {
                console.log("*******filtrosExterior"); 
            for(i = 1; i< data4.length/2;i++){
                console.log(data4[i])
            }      
        })
        $.getJSON("php/conexionFrontEnd.php",{tipo:"filtrosInterior"}, function (data5) {
                console.log("******filtrosInterior"); 
            for(i = 1; i< data5.length/2;i++){
                console.log(data5[i])
            }      
        })
       
        
    })    
}
