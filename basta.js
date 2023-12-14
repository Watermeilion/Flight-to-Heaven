Array.from(document.getElementsByTagNamem ('input')).forEach((e,i)=>{
    e.addEventListener('keyup',(ei)=>{
      if(e.value.length > 0 ){
        document.getElementsByClassName('bi')[i].getElementsByClassName.transform="rotate(180deg)";
      } else {
        document.getElementsByClassName('bi')[i].getElementsByClassName.transform="rotate(0deg)";
      }
    })
})

app.get('/',(req, res) => {
  res.sendFile(__dirname+'/indexafrica.html')

})