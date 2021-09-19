class HamburgerMenu
{
    constructor(button,navLinks,openButton,closeButton)
    {
        this.button=document.querySelector(button);        
        this.navLinks=document.querySelectorAll(navLinks); 
        this.openButton=document.getElementById(openButton);
        this.closeButton=document.getElementById(closeButton);        
        this.handleClick=this.handleClick.bind(this);        
        this.opened=false; 
        

        this.mediaQuery = window.matchMedia("(min-width: 440px)")       
        this.resetButton=this.resetButton.bind(this);
        this.init();
        
         
    }
    resetButton()
     {
        var links=this.navLinks;

        if (this.mediaQuery.matches) 
        { 
            this.openButton.style.display="block";
            this.closeButton.style.display="none";
            this.opened=false

            links.forEach((link)=>
            {
                link.style.display="inline-block";
            });
        }
        else
        {            
            if(this.opened==false)
            {
                links.forEach((link)=>
                {
                    link.style.display="none";
                });
            }
            
        }
      }
    
    handleClick()
    { 
        var links=this.navLinks;

        if(links && this.opened==false)
        {
            this.openButton.style.display="none";
            this.closeButton.style.display="block" ;    

            links.forEach((link)=>
            {
                
                link.style.display="block";
            });

            this.opened=true;
        }
        else if(links && this.opened==true)
        {  
            this.closeButton.style.display="none";
            this.openButton.style.display="block"; 
            

            links.forEach((link)=>
            {
                link.style.display="none";
            });

            this.opened=false;
        }
    }
    init()
    {
        if(this.button)
        {
            this.button.addEventListener("click",this.handleClick);
            this.closeButton.style.display="none";
            this.mediaQuery.addEventListener("change",this.resetButton);           
        }       

        return this;
    }

}

const burgerMenu=new HamburgerMenu
(
    ".menuButton",".headButton","openButton","closeButton"
);