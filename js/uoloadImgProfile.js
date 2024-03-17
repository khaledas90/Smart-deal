document.querySelector("#imageUpload").addEventListener("change" , function(){
  
    const reader = new FileReader()
  
    reader.addEventListener("load" , () =>{
      localStorage.setItem("resent-image" , reader.result)
    })
    reader.readAsDataURL(this.files[0])
  })
  
  document.addEventListener("DOMContentLoaded"  , () =>{
    const RecentDataUrl = localStorage.getItem("resent-image" )
  
    if(RecentDataUrl){
      document.querySelector("#imgProfile").setAttribute('src' , RecentDataUrl )
    }
  })