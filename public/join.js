
// // Event listener for the browser's back button
// window.onpopstate = function(event) {
//     window.location.href = "/"
// };

$( "#createbutton" ).click(function() {
    
    const Url ='/createroom';
    const pwd = $("#createpwd").val();
    const data={
        roomid: ROOM_ID,
        password: pwd
    }

    $.ajax({
        url:Url,
        type:"POST",
        data:data,
        success: function(result){
            alert(result);
            window.location.replace("/join");
        },
        error: function(error){
            console.log(error)
        }
    });
  });


  $( "#logininterview" ).click(function() {
    const Url = '/join';
    $.ajax({
      url: Url,
      type: "GET",
      success: function(data) {
        // Replace the contents of the page with the "join.ejs" file
        $('body').html(data);
         // Update the URL and push the state to the history
         history.pushState(null, null, Url);
      },
      error: function(error) {
        console.log(error)
      }
    });
    return false;
  });

  $( "#placementprep" ).click(function() {
    const Url = '/roadmap';
  
    $.ajax({
      url: Url,
      type: "GET",
      success: function(data) {
        $('body').html(data);
        // Update the URL and push the state to the history
        history.pushState(null, null, Url);
      },
      error: function(error) {
        console.log(error)
      }
    });
    return false; // Prevent the default behavior of the link
  });

  $( "#behaviouralprep" ).click(function() {
    const Url = '/behavioural';
  
    $.ajax({
      url: Url,
      type: "GET",
      success: function(data) {
        $('body').html(data);
         // Update the URL and push the state to the history
         history.pushState(null, null, Url);
      },
      error: function(error) {
        console.log(error)
      }
    });
    return false;
  });
  $( "#joininterviewerbutton" ).click(function() {
    
    const Url ='/joininterviewer';
    const pwd = $("#joinpwd").val();
    const roomid = $("#inputroomidi").val();
    const name =$("#interviewername").val();
    const data={
        roomid: roomid,
        password: pwd
    }
    
    $.ajax({
        url:Url,
        type:"POST",
        data:data,
        success: function(result){
            
            if(result.localeCompare("ok")==0)
            //window.location.replace("/"+roomid+"/interviewer");
            
            window.location.replace("/"+roomid+"/interviewer/"+pwd+"/"+name);
            else{alert(result);
            location.reload();
            }

        },
        error: function(error){
            console.log(error)
        }
    });
  });


  $( "#joincandidatebutton" ).click(function() {
    
    const Url ='/joincandidate';
    
    const roomid = $("#inputroomidc").val();
    
    const name =$("#candidatename").val();
    const data={
        roomid: roomid,
    }
    $.ajax({
        url:Url,
        type:"POST",
        data:data,
        success: function(result){
            
            if(result.localeCompare("ok")==0)
            window.location.replace("/"+roomid+"/candidate/"+name);
            
            else{ alert(result);
             location.reload();
            }
        },
        error: function(error){
            console.log(error)
        }
    });
  });