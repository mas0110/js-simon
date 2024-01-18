// sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// 

const termine = new Date("Jan 19, 2024 09:30:00").getTime();

const countdown = setInterval(function(){

    let today = new Date().getTime();
    let distance = countdown - today;

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / (1000))

     
    let insieme = hours + "h "+ minute + "m " + seconds + "s ";
    document.getElementById("conto").innerHTML = insieme
    console.log()
    
      
    
    if (insieme > 0) {
      clearInterval(countdown);
      document.getElementById("conto").innerHTML = "countdown scaduto";
  }
    
},1000)
