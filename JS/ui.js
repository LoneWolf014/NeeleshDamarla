document.addEventListener("click", (event)=>{
    const heroCard = event.target.closest("#heroCard");
    const Close = event.target.closest("#quickMenuClose");
    if(heroCard)
    {
        document.body.classList.add("menu-open");
    }
    if(Close)
    {
        document.body.classList.remove("menu-open");
    }
})