var arr = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]
var img;
var counter = 0;
document.addEventListener("DOMContentLoaded", () => {
  img = document.getElementById("img");
   
})

function main(arg)
{
    if (arg==1)
    {
        if (counter == 0)
        {
            counter = 4;
        }
        else
        { counter = counter-1;}
        img.src=arr[counter];
    }
    else if (arg==2)
    {
        if (counter ==4)
        {
            counter = 0;
        }
        else
        {
            counter = counter +1;
        }
        img.src=arr[counter];
    }
}