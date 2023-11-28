let signatureID;
let lessons;

function drawFilledCircle(ctx, x, y, radius, percentage) {
    const startAngle = -0.5 * Math.PI; // Start from top
    const endAngle = startAngle + (2 * Math.PI * (percentage / 100));
    const strokeSize = 5; // Define the stroke size

    // Draw background circle with a stroke
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#fdf5e6';
    ctx.fill();
    ctx.lineWidth = strokeSize;
    ctx.strokeStyle = '#a9aab1';
    ctx.stroke();

    // Draw filled percentage slightly smaller than the background circle
    ctx.beginPath();
    ctx.arc(x, y, radius - strokeSize / 2, startAngle, endAngle); // Subtract half the stroke size from the radius
    ctx.lineTo(x, y); // Line back to the center
    ctx.fillStyle = '#cbdfbd';
    ctx.fill();
    // No stroke for the filled percentage
}

// Make sure to get the canvas and context after the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', (event) => {
//     const canvas = document.getElementById('percentage-circle');
//     const ctx = canvas.getContext('2d');
//     // drawFilledCircle(ctx, canvas.width / 2, canvas.height / 2, 200, 69); // Set to desired percentage
// });


// let lessons = [{"guidId":"M2ViNGQ5NmMtMWRhMi1mNjhmLWFkZjktZTZkMmM5NDBjMDgz","texts":["Matematik 3c   TE22b/23MATMAT03c","YuS","A133 23"],"timeStart":"08:00:00","timeEnd":"08:55:00","dayOfWeekNumber":1,"blockName":""},{"guidId":"OGEzZGViZDItMDVkYi1mOTcwLWJiZGQtYzYyNGZkZTBhNTIx","texts":["Konstruktion 1   TE22ab/23KOTKOS01","JMt","Aula 3 31"],"timeStart":"09:05:00","timeEnd":"10:20:00","dayOfWeekNumber":1,"blockName":""},{"guidId":"OThmYjlkYjUtZDNlYi1mMjYwLWE4ZDUtZjU0MTYyN2QwMzhj","texts":["Gränssnittsdesign   TE22ab/23GRÄGRÄ0","NoA"," Block CAD1,2","A239 15"],"timeStart":"12:25:00","timeEnd":"13:50:00","dayOfWeekNumber":1,"blockName":""},{"guidId":"NjI1MTc0MzgtYmRjMS1mNDAzLTk3Y2EtZGI2YWRjOTA3YjBk","texts":["Webbutveckling 1   TE22ab/23WEUWEB01","NoA","A239 15"],"timeStart":"09:05:00","timeEnd":"10:20:00","dayOfWeekNumber":1,"blockName":""},{"guidId":"NjczMTI0ZTUtNWRkYi1mYzRhLTg4OWQtZTIyMDZlZDM5NWFl","texts":["Cad 1   TE22ab/23CADCAD01-2","PoL","","B201 17"],"timeStart":"12:25:00","timeEnd":"13:50:00","dayOfWeekNumber":1,"blockName":""},{"guidId":"OWVjZWQ5ZjMtMjkyZC1mM2NjLWFjZDgtNjlmNDc3Y2FjNGU5","texts":["Idrott och hälsa 1   TE22b/22IDRIDR01","NiN","Odenhallen,C103 22"],"timeStart":"10:35:00","timeEnd":"11:40:00","dayOfWeekNumber":1,"blockName":""},{"guidId":"NzU2NmNlYzUtMTYxYi1mZDkzLTkxODgtOTZkYTE0MGFjYWZi","texts":["TE22b","","22"],"timeStart":"11:45:00","timeEnd":"12:20:00","dayOfWeekNumber":1,"blockName":""},{"guidId":"ODNmM2IzNTYtNTEyYi1mNmE3LWI3ZTMtMWUxZjY2MTNkNzli","texts":["Cad 1   TE22ab/23CADCAD01-1","JMt","","A134 14"],"timeStart":"12:25:00","timeEnd":"13:50:00","dayOfWeekNumber":1,"blockName":""},{"guidId":"Yzc3NGE3MDAtNWFhNS1mNTJlLTlmMDctZDE1Y2E3ZTc2ZGYx","texts":["Engelska 6   TE22b/23ENGENG06","BrM","A244 22"],"timeStart":"13:55:00","timeEnd":"14:45:00","dayOfWeekNumber":1,"blockName":""},{"guidId":"ZDhmYjIyMTktMWRhZS1mYzdiLTg1ZWUtZmE5NjliYjJmNmVh","texts":["Matematik 3c   TE22b/23MATMAT03c","YuS","A133 23"],"timeStart":"15:05:00","timeEnd":"15:55:00","dayOfWeekNumber":2,"blockName":""},{"guidId":"YzVhYzRmOTItYWMzOS1mOTczLTg1OWMtZTk5YWQ5MjE0MDgw","texts":["Programmering 1   TE22ab/23PRRPRR01","NoA","","A239 15"],"timeStart":"08:00:00","timeEnd":"10:25:00","dayOfWeekNumber":2,"blockName":""},{"guidId":"MjkyY2U2YmUtOTRjYS1mZDAxLTljNjgtZTMyZWEwNzMzY2My","texts":["TE22b","","22"],"timeStart":"11:55:00","timeEnd":"12:30:00","dayOfWeekNumber":2,"blockName":""},{"guidId":"MjkyODBmNzItOWQyMi1mZWI1LWI0MjctNTgzYTlhZGNiMjdi","texts":["Cad 1   TE22ab/23CADCAD01-1","JMt","","A239 14"],"timeStart":"10:35:00","timeEnd":"11:45:00","dayOfWeekNumber":2,"blockName":""},{"guidId":"M2MyM2IzY2ItNGE1Mi1mN2RmLTkwZDMtNDAzNmMzZGQxYzYy","texts":["Arkitektur - hus   TE22ab/23ARKARK0","PoL","","B201 17"],"timeStart":"08:00:00","timeEnd":"10:25:00","dayOfWeekNumber":2,"blockName":""},{"guidId":"ZmY2NDhkYzktMGVkZS1mNDU4LTkwMmYtZTUxYTg1NzhkZGM5","texts":["Svenska 2   TE22b/23SVESVE02","BIn","A247 19"],"timeStart":"13:25:00","timeEnd":"14:55:00","dayOfWeekNumber":2,"blockName":""},{"guidId":"NjQwMjA5ZmEtZTViMi1mNTJjLWFhNDctZDE5Yjc4NjkzYzE5","texts":["Produktionsutrustning 1   TE22ab/23PRUPRD01S","HeC,GrP,HTh","","B111 14"],"timeStart":"08:00:00","timeEnd":"10:25:00","dayOfWeekNumber":2,"blockName":""},{"guidId":"ODg0OGE4M2ItOGIyYy1mMTE2LWE2OGYtMDYzZTFkODcwOTI1","texts":["Gränssnittsdesign   TE22ab/23GRÄGRÄ0","NoA"," Block CAD1,2","A238 15"],"timeStart":"10:35:00","timeEnd":"11:45:00","dayOfWeekNumber":2,"blockName":""},{"guidId":"MzVhM2I3MDktOThhMS1mOWRjLWJiZWUtNjBjOTFlNDJmMjJm","texts":["Fysik 1a   TE22b/23FYSFYS01a","CaD","A136 22"],"timeStart":"12:30:00","timeEnd":"13:20:00","dayOfWeekNumber":2,"blockName":""},{"guidId":"YmNmNjZkMjktMGYwNi1mMDQ1LWE2ZjgtODI1ZTUxMTY2Njcz","texts":["Cad 1   TE22ab/23CADCAD01-2","PoL","","B201 17"],"timeStart":"10:35:00","timeEnd":"11:45:00","dayOfWeekNumber":2,"blockName":""},{"guidId":"YjhmMzU0ZWMtNTZjYS1mYjFlLWJlOTAtZmQ0NGQ2ZmEzNDE4","texts":["Svenska som andraspråk 2   ESNATE22/23SVASVA02","LyJ","A244 6"],"timeStart":"13:25:00","timeEnd":"14:55:00","dayOfWeekNumber":2,"blockName":""},{"guidId":"MjI1YThmOTItMDA4NS1mZjE4LTk3MjgtMzY4NzZhYjczZDIx","texts":["Fysik 1a   TE22b/23FYSFYS01a","CaD","A136 22"],"timeStart":"12:00:00","timeEnd":"12:55:00","dayOfWeekNumber":3,"blockName":""},{"guidId":"OGEwOTZhNjYtYjc1NC1mYjhjLTg5ZjktNjBkZjFmODY1YWEw","texts":["Moderna språk 4 (Franska)   Spr-22/23MODFRA04","BIn","A244 11"],"timeStart":"14:30:00","timeEnd":"15:20:00","dayOfWeekNumber":3,"blockName":""},{"guidId":"NDkwODUzNzItNzEzYy1mMmViLTlhMDUtNTBjYTA4MWNkOTc3","texts":["TE22b","","22"],"timeStart":"11:15:00","timeEnd":"11:50:00","dayOfWeekNumber":3,"blockName":""},{"guidId":"MzRlNjBmMzAtNGQ1My1mMDRhLThlNTQtZjQ4ZGM5OGJmM2Fj","texts":["Design 1   IND22/23DESDES01","JMt","A239 23"],"timeStart":"10:10:00","timeEnd":"11:15:00","dayOfWeekNumber":3,"blockName":""},{"guidId":"MDczYTIwZDctNDc0ZC1mMjQ1LTg5NmYtOWExZDdiZmU3NmJi","texts":["Mentorstid i schemat   TE22b/22MENTOR","HeC,YuS","A134 22"],"timeStart":"14:00:00","timeEnd":"14:15:00","dayOfWeekNumber":3,"blockName":""},{"guidId":"OWUyNTNhYjEtMzQwNS1mOTdkLTk2OWUtZmY5ODU5NjJjMTRj","texts":["Matematik 3c   TE22b/23MATMAT03c","YuS","A134 23"],"timeStart":"13:00:00","timeEnd":"14:00:00","dayOfWeekNumber":3,"blockName":""},{"guidId":"NzBlODUxZTMtYmZhYS1mNWE4LTlkMWItMTFjNWQyMGE1OTI0","texts":["Moderna språk 4 (Spanska)   Spr-22/23MODSPA04IND","JAn","A248 15"],"timeStart":"10:10:00","timeEnd":"11:00:00","dayOfWeekNumber":3,"blockName":""},{"guidId":"MmVlMGFmNzAtYTZkOS1mZjNkLWE5OTItNDY1ZWQ3YjI3MTRh","texts":["Engelska 6   TE22b/23ENGENG06","BrM","A239 22"],"timeStart":"08:15:00","timeEnd":"09:10:00","dayOfWeekNumber":3,"blockName":""},{"guidId":"YjdjNDBlODMtZWRlMy1mMTM5LWIwYTctM2E1N2RhMDMwY2Nl","texts":["Moderna språk 4 (Spanska)   Spr-22/23MODSPA04IND","JAn","A244 15"],"timeStart":"10:10:00","timeEnd":"11:05:00","dayOfWeekNumber":4,"blockName":""},{"guidId":"NTNmMjBhODctNjc1OS1mNzljLTg5MzctMTMwNDY1YzA2N2Q4","texts":["Moderna språk 4 (Franska)   Spr-22/23MODFRA04","BIn","A241 11"],"timeStart":"08:00:00","timeEnd":"08:50:00","dayOfWeekNumber":4,"blockName":""},{"guidId":"MDQ4NzUzMTctZDIwNy1mNWQwLWFmMzAtOGU3YmE3MjMxOTFm","texts":["TE22b","YuS,HeC","22"],"timeStart":"08:00:00","timeEnd":"17:00:00","dayOfWeekNumber":4,"blockName":""},{"guidId":"YzE2ZDU0ODMtMWM1Yi1mMTNkLWE4MzgtYmM0NmExNzA2NGYz","texts":["Webbutveckling 1   TE22ab/23WEUWEB01","NoA","A239 15"],"timeStart":"13:15:00","timeEnd":"14:30:00","dayOfWeekNumber":5,"blockName":""},{"guidId":"YTI2NDkzNjUtOTQwNS1mNWMwLWJjNmEtMDlkNDhkN2MxY2Y3","texts":["Svenska 2   TE22b/23SVESVE02","BIn","A248 19"],"timeStart":"09:10:00","timeEnd":"10:15:00","dayOfWeekNumber":5,"blockName":""},{"guidId":"NTBhYzJkYjItOTI5OC1mMGYzLWEzYmYtNjZlMWE5NWZkYzA0","texts":["Konstruktion 1   TE22ab/23KOTKOS01","JMt","Aula 3 31"],"timeStart":"13:15:00","timeEnd":"14:30:00","dayOfWeekNumber":5,"blockName":""},{"guidId":"OTc0YmI3ZDgtNjU2Mi1mZTAxLWE5NjUtNTEyNTMyZTI5ZGFh","texts":["Matematik 3c   TE22b/23MATMAT03c","YuS","A133 23"],"timeStart":"12:10:00","timeEnd":"13:05:00","dayOfWeekNumber":5,"blockName":""},{"guidId":"MTkwZmUyYzktOWE2My1mY2FmLTkzMzAtYjYzZGQ4ZmY1ZDRh","texts":["Design 1   IND22/23DESDES01","JMt","A239 23"],"timeStart":"10:25:00","timeEnd":"11:30:00","dayOfWeekNumber":5,"blockName":""},{"guidId":"ZjBiOWNjZDYtZmNmYi1mNTkyLWE1MjQtZGEyN2E5ZmZkNzIx","texts":["Svenska som andraspråk 2   ESNATE22/23SVASVA02","LyJ","A247 6"],"timeStart":"09:10:00","timeEnd":"10:15:00","dayOfWeekNumber":5,"blockName":""},{"guidId":"N2EwZjYwZDYtOWVjMi1mNjRlLWE3MTEtMjA0OGE5YjQ5Y2M4","texts":["Moderna språk 4 (Franska)   Spr-22/23MODFRA04","BIn","A136 11"],"timeStart":"08:00:00","timeEnd":"08:50:00","dayOfWeekNumber":5,"blockName":""},{"guidId":"N2VhNzdiM2UtNTBmMi1mMWIxLThmMDctMjg3ZmFhODIyZTFj","texts":["TE22b","","22"],"timeStart":"11:30:00","timeEnd":"12:05:00","dayOfWeekNumber":5,"blockName":""},{"guidId":"YzAzNzEwODgtMjhiYi1mYmJkLTgyOWEtNTU3ZTgzZTFmMmQ1","texts":["Moderna språk 4 (Spanska)   Spr-22/23MODSPA04IND","JAn","A244 15"],"timeStart":"10:25:00","timeEnd":"11:15:00","dayOfWeekNumber":5,"blockName":""}];

function getLessons(signature) {
  let url = `https://schemaapi.hokuspookus.repl.co/get/lessons/${signature}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      lessons = data;
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error);
    });

    getCurrentLesson();
}

// Sending a GET request using the fetch function
// let lessons;
// fetch(url)
//   .then(response => {
//     // Check if the response status is OK (status code 200-299)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     // Parse the JSON in the response
//     return response.json();
//   })
//   .then(data => {
//     lessons = data;
//     // Handle the JSON data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the fetch
//     console.error('Fetch error:', error);
//   });

function getCurrentLesson() {
    const canvas = document.getElementById('percentage-circle');
    const ctx = canvas.getContext('2d');
    
    const d = new Date();
    let day = d.getDay();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let currentTime = hours*60*60 + minutes*60 + seconds;

    // currentTime = 480;
    // day = 1;

    try {
        lessons.forEach(element => {
            let lessonStart = parseInt(element['timeStart'].split(':')[0]*60*60) + parseInt(element['timeStart'].split(':')[1])*60;
            let lessonEnd = parseInt(element['timeEnd'].split(':')[0]*60*60) + parseInt(element['timeEnd'].split(':')[1])*60;

            // console.log(currentTime);
            // console.log(lessonStart);
            // console.log(lessonEnd);
            

            if (element['dayOfWeekNumber'] === day) {
                if (lessonStart <= currentTime & currentTime <= lessonEnd) {
                    document.getElementById('lesson').innerHTML = element['texts'][0]

                    let percentage = ((currentTime - lessonStart) / (lessonEnd - lessonStart)) * 100;
                    console.log(percentage);
                    console.log(signatureID);
                    drawFilledCircle(ctx, canvas.width / 2, canvas.height / 2, 200, percentage);
                }
            }
        });
    }
    catch {}
}

getLessons('37by4hz7');
// getCurrentLesson();

setInterval(() => {
    getCurrentLesson();
}, 3000)

document.addEventListener('DOMContentLoaded', function () {
  var signature = document.getElementById("signature");

  document.addEventListener('click', function(event) {
    if (event.target !== signature) {
      signatureID = signature.innerHTML;
      getLessons(signatureID);
    }
  })
});