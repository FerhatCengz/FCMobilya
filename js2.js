var sayac = 1;

function artir()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama").value = sayac;        
        var sifir2 = document.getElementById("money").value = sayac * 1599 + " TL";
        var spanid = document.getElementById("spanid").innerHTML = sifir2;
        

    }

}

function azalt()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama").value = sayac;
        var sifir2 = document.getElementById("money").value = sayac * 1599 + " TL";
        var spanid = document.getElementById("spanid").innerHTML = sifir2;

    }
}

function siparis()
{
    var adres = document.getElementById("adress").value;

        if(adres == "")
        {
           alert("Adres Kısmını Boş Bırakamazsın");
        }
        else
        {
            alert("Siparişiniz Oynalanmıştır");
            window.location.assign("Sepet.html");
            
        }    
}



function search()
{
    var txt_urun = document.getElementById("aranankelime").value;
    if(txt_urun == "001")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#Urn_Kod").hide(1000);
        $("#tableurun").show(1000);
        $("#siparistable").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }   
    
    if(txt_urun == "002")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun2").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }   
    if(txt_urun == "003")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun3").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 

    if(txt_urun == "004")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun4").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 
    if(txt_urun == "005")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun5").show(1000);
        $("#siparistable5").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";

       
    } 
    if(txt_urun == "006")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun6").show(1000);
        $("#siparistable6").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";
         
    }

    if(txt_urun == "007")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun7").show(1000);
        $("#siparistable7").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 
    if(txt_urun == "008")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun8").show(1000);
        $("#siparistable8").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 
    if(txt_urun == "009")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun9").show(1000);
        $("#siparistable9").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 
    if(txt_urun == "010")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun10").show(1000);
        $("#siparistable10").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 
    if(txt_urun == "011")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun11").show(1000);
        $("#siparistable11").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 
    if(txt_urun == "012")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun12").show(1000);
        $("#siparistable12").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }
    if(txt_urun == "013")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun13").show(1000);
        $("#siparistable13").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }  

    if(txt_urun == "014")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun14").show(1000);
        $("#siparistable14").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 
    if(txt_urun == "015")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun15").show(1000);
        $("#siparistable15").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 
    if(txt_urun == "016")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun16").show(1000);
        $("#siparistable16").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 

    if(txt_urun == "017")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun17").show(1000);
        $("#siparistable17").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
    } 
    if(txt_urun == "018")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#tableurun18").show(1000);
        $("#siparistable18").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 
    if(txt_urun == "020")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_yatak").show(1000);
        $("#siparistable20").show(1000);
        $("#tableurun20").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 

     if(txt_urun == "021")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_yatak2").show(1000);
        $("#tableurun21").show(1000);
        $("#siparistable21").show(1000);

        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 
    if(txt_urun == "022")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_yatak3 ").show(1000);
        $("#tableurun22").show(1000);
        $("#siparistable22").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    } 

    if(txt_urun == "023")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_yatak4 ").show(1000);
        $("#tableurun23").show(1000);
        $("#siparistable23").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }


    
    if(txt_urun == "024")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_yatak5 ").show(1000);
        $("#siparistable24").show(1000);
        $("#tableurun24").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }
    if(txt_urun == "025")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_yatak6 ").show(1000);
        $("#siparistable25").show(1000);
        $("#tableurun25").show(1000);
        $(".container-fluid").show(800);

         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }
    if(txt_urun == "026")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_yatak7 ").show(1000);
        $("#tableurun26").show(1000);
        $("#siparistable26").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }

    if(txt_urun == "027")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_yatak8 ").show(1000);
        $("#tableurun27").show(1000);

        $("#siparistable27").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }

    if(txt_urun == "030")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_oturma ").show(1000);
        $("#tableurun30").show(1000);
        $("#siparistable30").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }
    if(txt_urun == "031")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_oturma2 ").show(1000);
        $("#tableurun31").show(1000);
        $("#siparistable31").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }

    if(txt_urun == "032")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_oturma3 ").show(1000);
        $("#tableurun32").show(1000);
        $("#siparistable32").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }

    if(txt_urun == "033")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_oturma4 ").show(1000);
        $("#tableurun33").show(1000);
        $("#siparistable33").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }
    if(txt_urun == "034")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_oturma5 ").show(1000);
        $("#tableurun34").show(1000);
        $("#siparistable34").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }
    if(txt_urun == "035")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_oturma6 ").show(1000);
        $("#tableurun35").show(1000);
        $("#siparistable35").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }
    if(txt_urun == "036")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_oturma7 ").show(1000);
        $("#tableurun36").show(1000);
        $("#siparistable36").show(1000);
        $(".container-fluid").show(800);
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }

    if(txt_urun == "037")
    {
        sayac = 1;
        $("#searchkelime").hide(1000);
        $("#aranankelime").hide(1000);
        $("#form_oturma8 ").show(1000);
        $("#tableurun37").show(1000);
        $("#siparistable37").show(1000);
        $(".container-fluid").show(800);    
         var txt_urun = document.getElementById("aranankelime").value = "";
       
    }

}

function deleteurun()
{
    $("#searchkelime").show(1000);
    $("#aranankelime").show(1000);
    var txt_urun = document.getElementById("aranankelime").focus();
    $("#siparistable").hide(1000);
    $("#tableurun").hide(0800);
    $("#tableurun2").hide(0800);
    $("#siparisozet").hide(0800);
    $("form").hide(0800);
    $(".container-fluid").hide(0800);

}


function artir2()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama2").value = sayac;        
        var sifir2 = document.getElementById("money2").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid2").innerHTML = sifir2;
        
  
    }

}

function azalt2()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama2").value = sayac;
        var sifir2 = document.getElementById("money2").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid2").innerHTML = sifir2;

    }
   

}

function artir3()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama3").value = sayac;        
        var sifir2 = document.getElementById("money3").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid3").innerHTML = sifir2;
        

    }

}

function azalt3()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama3").value = sayac;
        var sifir2 = document.getElementById("money3").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid3").innerHTML = sifir2;

    }
   

}

function artir4()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama4").value = sayac;        
        var sifir2 = document.getElementById("money4").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid4").innerHTML = sifir2;
        

    }

}

function azalt4()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama4").value = sayac;
        var sifir2 = document.getElementById("money4").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid4").innerHTML = sifir2;

    }
   

}



function artir5()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama5").value = sayac;        
        var sifir2 = document.getElementById("money5").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid5").innerHTML = sifir2;
        

    }

}

function azalt5()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama5").value = sayac;
        var sifir2 = document.getElementById("money5").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid5").innerHTML = sifir2;

    }
   

}



function artir6()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama6").value = sayac;        
        var sifir2 = document.getElementById("money6").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid6").innerHTML = sifir2;
        

    }

}

function azalt6()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama6").value = sayac;
        var sifir2 = document.getElementById("money6").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid6").innerHTML = sifir2;

    }
   

}


function artir7()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama7").value = sayac;        
        var sifir2 = document.getElementById("money7").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid7").innerHTML = sifir2;
        

    }

}

function azalt7()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama7").value = sayac;
        var sifir2 = document.getElementById("money7").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid7").innerHTML = sifir2;

    }
   

}

function artir8()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama8").value = sayac;        
        var sifir2 = document.getElementById("money8").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid8").innerHTML = sifir2;
        

    }

}

function azalt8()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama8").value = sayac;
        var sifir2 = document.getElementById("money8").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid8").innerHTML = sifir2;

    }
   

}

function artir9()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama9").value = sayac;        
        var sifir2 = document.getElementById("money9").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid9").innerHTML = sifir2;
        

    }

}

function azalt9()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama9").value = sayac;
        var sifir2 = document.getElementById("money9").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid9").innerHTML = sifir2;

    }
   

}



function artir10()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama10").value = sayac;        
        var sifir2 = document.getElementById("money10").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid10").innerHTML = sifir2;
        

    }

}

function azalt10()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama10").value = sayac;
        var sifir2 = document.getElementById("money10").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid10").innerHTML = sifir2;

    }
   

}

function artir11()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama11").value = sayac;        
        var sifir2 = document.getElementById("money11").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid11").innerHTML = sifir2;
        

    }

}

function azalt11()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama11").value = sayac;
        var sifir2 = document.getElementById("money11").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid11").innerHTML = sifir2;

    }
   

}

function artir12()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama12").value = sayac;        
        var sifir2 = document.getElementById("money12").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid12").innerHTML = sifir2;
        

    }

}

function azalt12()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama12").value = sayac;
        var sifir2 = document.getElementById("money12").value = sayac * 1.599 + " TL";
        var spanid = document.getElementById("spanid12").innerHTML = sifir2;

    }
   

}

function artir13()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama13").value = sayac;        
        var sifir2 = document.getElementById("money13").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid13").innerHTML = sifir2;
        

    }

}

function azalt13()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama13").value = sayac;
        var sifir2 = document.getElementById("money13").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid13").innerHTML = sifir2;

    }
   

}

function artir14()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama14").value = sayac;        
        var sifir2 = document.getElementById("money14").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid14").innerHTML = sifir2;
        

    }

}

function azalt14()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama14").value = sayac;
        var sifir2 = document.getElementById("money14").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid14").innerHTML = sifir2;

    }
   

}

function artir15()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama15").value = sayac;        
        var sifir2 = document.getElementById("money15").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid15").innerHTML = sifir2;
        

    }

}

function azalt15()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama15").value = sayac;
        var sifir2 = document.getElementById("money15").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid15").innerHTML = sifir2;

    }
   

}

function artir16()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama16").value = sayac;        
        var sifir2 = document.getElementById("money16").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid16").innerHTML = sifir2;
        

    }

}

function azalt16()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama16").value = sayac;
        var sifir2 = document.getElementById("money16").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid16").innerHTML = sifir2;

    }
   

}
function artir17()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama17").value = sayac;        
        var sifir2 = document.getElementById("money17").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid17").innerHTML = sifir2;
        

    }

}

function azalt17()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama17").value = sayac;
        var sifir2 = document.getElementById("money17").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid17").innerHTML = sifir2;

    }
   

}
function artir18()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama18").value = sayac;        
        var sifir2 = document.getElementById("money18").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid18").innerHTML = sifir2;
        

    }

}

function azalt18()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama18").value = sayac;
        var sifir2 = document.getElementById("money18").value = sayac * 599 + " TL";
        var spanid = document.getElementById("spanid18").innerHTML = sifir2;

    }
   

}



function artir19()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama19").value = sayac;        
        var sifir2 = document.getElementById("money19").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid19").innerHTML = sifir2;
        

    }

}

function azalt19()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama19").value = sayac;
        var sifir2 = document.getElementById("money19").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid19").innerHTML = sifir2;

    }
   

}




function artir20()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama20").value = sayac;        
        var sifir2 = document.getElementById("money20").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid20").innerHTML = sifir2;
        

    }

}

function azalt20()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama20").value = sayac;
        var sifir2 = document.getElementById("money20").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid20").innerHTML = sifir2;

    }
   

}


function artir21()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama21").value = sayac;        
        var sifir2 = document.getElementById("money21").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid21").innerHTML = sifir2;
        

    }

}

function azalt21()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama21").value = sayac;
        var sifir2 = document.getElementById("money21").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid21").innerHTML = sifir2;

    }
   

}


function artir22()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama22").value = sayac;        
        var sifir2 = document.getElementById("money22").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid22").innerHTML = sifir2;
        

    }

}

function azalt22()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama22").value = sayac;
        var sifir2 = document.getElementById("money22").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid22").innerHTML = sifir2;

    }
   

}

function artir23()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama23").value = sayac;        
        var sifir2 = document.getElementById("money23").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid23").innerHTML = sifir2;
        

    }

}

function azalt23()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama23").value = sayac;
        var sifir2 = document.getElementById("money23").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid23").innerHTML = sifir2;

    }
   

}



function artir24()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama24").value = sayac;        
        var sifir2 = document.getElementById("money24").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid24").innerHTML = sifir2;
        

    }

}

function azalt24()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama24").value = sayac;
        var sifir2 = document.getElementById("money24").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid24").innerHTML = sifir2;

    }
   

}



function artir25()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama25").value = sayac;        
        var sifir2 = document.getElementById("money25").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid25").innerHTML = sifir2;
        

    }

}

function azalt25()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama25").value = sayac;
        var sifir2 = document.getElementById("money25").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid25").innerHTML = sifir2;

    }
   

}




function artir26()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama26").value = sayac;        
        var sifir2 = document.getElementById("money26").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid26").innerHTML = sifir2;
        

    }

}

function azalt26()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama26").value = sayac;
        var sifir2 = document.getElementById("money26").value = sayac * 11599 + " TL";
        var spanid = document.getElementById("spanid26").innerHTML = sifir2;

    }
   

}



function artir27()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama27").value = sayac;        
        var sifir2 = document.getElementById("money27").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid27").innerHTML = sifir2;
        

    }

}

function azalt27()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama27").value = sayac;
        var sifir2 = document.getElementById("money27").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid27").innerHTML = sifir2;

    }
   

}


function artir28()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama28").value = sayac;        
        var sifir2 = document.getElementById("money28").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid28").innerHTML = sifir2;
        

    }

}

function azalt28()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama28").value = sayac;
        var sifir2 = document.getElementById("money28").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid28").innerHTML = sifir2;

    }
   

}

function artir29()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama29").value = sayac;        
        var sifir2 = document.getElementById("money29").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid29").innerHTML = sifir2;
        

    }

}

function azalt29()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama29").value = sayac;
        var sifir2 = document.getElementById("money29").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid29").innerHTML = sifir2;

    }
   

}


function artir30()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama30").value = sayac;        
        var sifir2 = document.getElementById("money30").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid30").innerHTML = sifir2;
        

    }

}

function azalt30()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama30").value = sayac;
        var sifir2 = document.getElementById("money30").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid30").innerHTML = sifir2;

    }
   

}


function artir31()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama31").value = sayac;        
        var sifir2 = document.getElementById("money31").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid31").innerHTML = sifir2;
        

    }

}

function azalt31()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama31").value = sayac;
        var sifir2 = document.getElementById("money31").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid31").innerHTML = sifir2;

    }
   

}

function artir32()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama32").value = sayac;        
        var sifir2 = document.getElementById("money32").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid32").innerHTML = sifir2;
        

    }

}

function azalt32()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama32").value = sayac;
        var sifir2 = document.getElementById("money32").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid32").innerHTML = sifir2;

    }
   

}

function artir33()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama33").value = sayac;        
        var sifir2 = document.getElementById("money33").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid33").innerHTML = sifir2;
        

    }

}

function azalt33()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama33").value = sayac;
        var sifir2 = document.getElementById("money33").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid33").innerHTML = sifir2;

    }
   

}

function artir34()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama34").value = sayac;        
        var sifir2 = document.getElementById("money34").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid34").innerHTML = sifir2;
        

    }

}

function azalt34()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama34").value = sayac;
        var sifir2 = document.getElementById("money34").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid34").innerHTML = sifir2;

    }
   

}

function artir35()
{

    if (sayac >= 0)
    {
        sayac++;
        var sifir = document.getElementById("text_atama35").value = sayac;        
        var sifir2 = document.getElementById("money35").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid35").innerHTML = sifir2;
    }
}


function azalt35()
{
 
    if (sayac > 1 )
    {
        sayac--;
        var sifir = document.getElementById("text_atama35").value = sayac;
        var sifir2 = document.getElementById("money35").value = sayac * 6599 + " TL";
        var spanid = document.getElementById("spanid35").innerHTML = sifir2;
        
    }  
}
