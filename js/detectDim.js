

function redimensiona ()
{
    dimXwindow = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    dimYwindow = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    
    
    
    if (dimXwindow < 768)
    {
        if (
            ((dimYwindow / dimXwindow) < 0.2) 
            || 
            ((dimYwindow / dimXwindow) > 0.7) && ((dimYwindow / dimXwindow) < 1)
            )
            {
                dimYwindow = dimXwindow * 1.618;
            }
    }
    
    //proporcion aurea
    /*
    if (dimXwindow > dimYwindow)
        {
            dimXwindow = dimYwindow * 1.618;
        }
    else dimYwindow = dimXwindow * 1.618;
   */
    
    ini(dimXwindow, dimYwindow);

}




