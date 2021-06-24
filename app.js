const array = [
    {
        span: 'Playing Now',
        p: 'E 1. Content is playing',
        src:'https://allhdwallpapers.com/wp-content/uploads/2015/06/Tom-And-Jerry-9.jpg?w=144'
    },

    {
       
        p: 'E 2. Content is playing',
        src:'https://cache.desktopnexus.com/thumbseg/1226/1226509-bigthumbnail.jpg'
    }, 

    {
        
        p: 'E 3. Content is playing',
        src:'https://wallpaperaccess.com/full/215450.jpg'
    },

    {
        
        p: 'E 4. Content is playing',
        src:'https://cdn.thinglink.me/api/image/568415204405149698/1240/10/scaletowidth'
    },

    {
        
        p: 'E 5. Content is playing',
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTqZExTRjjeA6TeQQiX-PSL3Di0RRBeHEC7AL9BQrOG5y9HW97DrkOue2VSvXR0TrVZw&usqp=CAU'
    },

    {
       
        p: 'E 6. Content is playing',
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iH-MTNG-7sm5gRZSIWtCca1E9f3DO_aZGZbOYfzbCPNVtjsiM1HB8CduGFrCXOvoheI&usqp=CAU'
    },

    {
        
        p: 'E 7. Content is playing',
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsr_bqJjbDaG20p4WIa2hbjJeXKZMZw8tpBINsuXpuKjgBydcPePQq8ovvBigrR_j7ukU&usqp=CAU'
    },
    {
        
        p: 'E 8. Content is playing',
        src:'https://i.pinimg.com/originals/ff/19/ed/ff19ed06db02f5b0b639f0bb96a5ee3c.jpg'
    }

];



        

    // function myFunction() {
    //     var scrollmenu = document.createElement("DIV");
    //     scrollmenu.className = "scrollmenu";
    //     var div = document.createElement("DIV");
    //     var span = document.createElement("SPAN");
    //     span.textContent=('Palying Now')
    //     var p = document.createElement("P");
    //     p.textContent=("E1.Content is Playing")
            
    
    //     var img = document.createElement("IMG");
    //     img.setAttribute("src", "https://i.pinimg.com/originals/ff/19/ed/    ff19ed06db02f5b0b639f0bb96a5ee3c.jpg");
       
        
        
    //     scrollmenu.appendChild(div);
    //     div.appendChild(img);
    //     div.appendChild(span);
    //     div.appendChild(p)
        
    
    //    document.body.appendChild(scrollmenu);
    //    for(let i =2; i<array.length;i++)
    //    {

      
    //     var div = document.createElement("DIV");
        
    //     var p = document.createElement("P");
    //     p.textContent=(array[i].p)
            
    
    //     var img = document.createElement("IMG");
    //     img.setAttribute("src", array[i].src);
    //     img.setAttribute("width", "304");
    //     img.setAttribute("height", "228");
        
        
    //     scrollmenu.appendChild(div);
    //     div.appendChild(img);
    //     div.appendChild(p)
    //    }
    //   }



function myFunction() {

    var scrollmenu = document.createElement("DIV");
    scrollmenu.className = "scrollmenu";
    for(let i =0; i<array.length;i++){
        var div = document.createElement("DIV");
    var span = document.createElement("SPAN");
    span.textContent=(array[i].span)
    var p = document.createElement("P");
    p.textContent=(array[i].p)


    var img = document.createElement("IMG");
    img.setAttribute("src", array[i].src);
    
    
    
    scrollmenu.appendChild(div);
    div.appendChild(img);
        if(i===0)
        {
            div.appendChild(span);
        }
   
    div.appendChild(p)
    

   document.body.appendChild(scrollmenu);
    }
    
  }