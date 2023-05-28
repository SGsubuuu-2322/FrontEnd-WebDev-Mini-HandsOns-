// variables

let alarmListArr = [];
const selectMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector("#btn-setAlarm");
let alarmCount = 0;
let alarmTime;
let ring = new Audio("/ASSETS/alarm.mp3");
let vl0, vl1, vl2;

// Script for Time and Date


function updateClock(){
  var now = new Date();
  var dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      yr = now.getFullYear(),
      hou = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "AM";

      if(hou==0){
          hou = 12;
      }

      if(hou>12){
          hou -=12;
          pe = "PM";
      }

      Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length<digits; n=0+n);
          return n;
      }

      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var week = ["Sunday", "Monday", "Tusday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var ids =["dayNames", "months", "dayNos", "year", "hours", "minutes", "seconds", "period"];
      var values = [week[dname], months[mo], dnum.pad(2),yr,hou.pad(2),min.pad(2),sec.pad(2),pe];
      
      for(var i=0; i<ids.length;i++){
          document.getElementById(ids[i]).firstChild.nodeValue = values[i];
      }

      for(let i=0; i<alarmListArr.length;i++){
          if(alarmListArr[i]==`${hou.pad(2)}:${min.pad(2)}:${sec.pad(2)} ${pe}`){
              console.log("Alarm ringing...");
              ring.loop = true;
              ring.load();
              ring.play();
              document.querySelector("#stopAlarm").style.visibility= "visible";
              let dtdp = document.getElementById("dt-Display");
              vl0 = setInterval(function(){
                dtdp.classList.add('dtDisplay');
                setTimeout(()=>{
                  dtdp.classList.remove('dtDisplay');
                }, 500);
              },1000);
              let hr1 = document.getElementById("hr1");
              let hr2 = document.getElementById("hr2");
              vl1 = setInterval(function(){
                hr1.classList.add('long-effect');
                setTimeout(()=>{
                  hr1.classList.remove('long-effect');
                }, 500);
              }, 1000);
              vl2 = setInterval(function(){
                hr2.classList.add('short-effect');
                setTimeout(()=>{
                  hr2.classList.remove('short-effect');
                }, 500);
              }, 1000);
          }
      }
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()",1000);
}

//Set Alarm section


for(let i=12; i>0;i--){
  i=i<10 ? "0"+i :i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i=59; i>=0;i--){
  i=i<10 ? "0"+i :i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i=2; i>0;i--){
  let ampm = i== 1? "AM":"PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}


//add alarm 


function setAlarm(){
  document.querySelector("#alarm-h3").style.visibility = "visible"
  let time = `${selectMenu[0].value}:${selectMenu[1].value}:00 ${selectMenu[2].value}`;
  if(time.includes("setHour") || time.includes("setMinute") || time.includes("AM/PM")){
      alert("Please, Select Valide Input");
  }else{
      alarmCount++;
      document.querySelector(".alarmList").innerHTML += `
      <div class="alarmLog" id="alarm${alarmCount}">
          <span id="span${alarmCount}">${time}</span>
          <button class="btn-delete" id="${alarmCount}" onClick="deleteAlarm(this.id)">Delete</button>
      </div>`;

      alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}:00 ${selectMenu[2].value}`;
      alarmListArr.push(alarmTime);
      console.log(document.querySelector(".btn-delete").value);
  }

}

setAlarmBtn.addEventListener("click",setAlarm);

//delete alarm

function deleteAlarm(click_id){
  var element = document.getElementById("alarm"+click_id);
  var deleteIndex = alarmListArr.indexOf(document.querySelector("#span"+click_id).innerText);
  alarmListArr.splice(deleteIndex,1);
  element.remove();
  if(alarmListArr.length == 0){
    document.querySelector("#alarm-h3").style.visibility = "hidden";
  }
}

function stopAlarm(){
  ring.pause();
  clearInterval(vl0);
  clearInterval(vl1);
  clearInterval(vl2);
  document.querySelector("#stopAlarm").style.visibility= "hidden";
}
