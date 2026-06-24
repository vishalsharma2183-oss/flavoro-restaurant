const hamburger=document.querySelector(".hamburger")
const navs=document.querySelector(".navs")
const navlinks=document.querySelectorAll(".navs a")
navlinks.forEach(a=>{
    a.addEventListener("click",()=>{
        navs.classList.toggle("show")
    })
})
hamburger.addEventListener("click",()=>{
    navs.classList.toggle("show")
    if(navs.classList.contains("show"))
    {
        hamburger.innerHTML=""
        hamburger.innerHTML="X"
    }
    else{
        hamburger.innerHTML=`<img src="hamburger.svg" alt="">`
    }
})
const whatsApp=document.querySelector(".whatsapp")
whatsApp.addEventListener("click",contactWhatsApp)
function contactWhatsApp()
{
   const  message="Hii, I want more information about your restaraunt."
   const link=`https://wa.me/918446936690?text=${encodeURIComponent(message)}`
   window.open(link)
}
const stts=document.querySelector(".status")
const hour=new Date().getHours()
if (hour<=23 && hour>=6) {
    stts.textContent="🟢 Open Now"
}
else{
    stts.textContent="🔴 Closed"
}
const form=document.querySelector(".reservation-form")
form.addEventListener("submit",e=>{
    e.preventDefault()
    alert('Table reserved successfully!');
    form.reset()
    
})

