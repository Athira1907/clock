


function displayTime(){
    let hr=document.getElementById('h')
let mn=document.getElementById('m')
let sc=document.getElementById('s')
    let date=new Date()
    let hh= date.getHours()
    let  mm=date.getMinutes()
    let ss=date.getSeconds()
    let hrotation=30*hh + mm/2;
    let mrotation =6*mm;
    let srotation=6*ss;
    hr.style.transform=`rotate(${hrotation}deg)`
    mn.style.transform=`rotate(${mrotation}deg)`
    sc.style.transform=`rotate(${srotation}deg)`
  
}

 
    setInterval("displayTime()",1000);





// setInterval(() => {
//     d = new Date(); //object of date()
//     hr = d.getHours();
//     min = d.getMinutes();
//     sec = d.getSeconds();
//     hr_rotation = 30*hr + min / 2; //converting current time
//     min_rotation = 6*min;
//     sec_rotation = 6*sec;
 
//     hr.style.transform = `rotate(${hr_rotation}deg)`;
//     mn.style.transform = `rotate(${min_rotation}deg)`;
//     sc.style.transform = `rotate(${sec_rotation}deg)`;
// }, 1000);