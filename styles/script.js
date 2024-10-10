function countDown(){
    let input=parseInt(document.getElementById('number1').value);
    
    //check if the user didnt input a number
    if(isNaN(input)){
        alert('sorry this is not a number')
    }
    else{
        input
        }
        //check if the input is empty
    if(input==""){
        alert('sorry please add a timmer, in seconds')
    }
    else{
        input
    }

     const countDown= setInterval(function(){
        input = input - 1;
        document.getElementById('timmer').innerText = input
        if(input=="0"){
             clearInterval(countDown)
             alert('TIME UP')
        }
    },1000)
}

    function increment(){
        let count=0
        const countDown= setInterval(function(){
            count= count +1
            document.getElementById('result').innerText= count
            if(count=='4'){
                clearInterval(countDown)
                alert('maximum reached, exeeded')
            }
    },1000)
    }

    function date(){
        let date=document.getElementById('date');
        setInterval(function(){
            const dateBtn= new Date();
            let time=dateBtn.getHours();
            let minute=dateBtn.getMinutes();
            let seconds=dateBtn.getSeconds();
            let year=dateBtn.getYear();
            date.innerHTML= ` ${time}: ${minute}: ${seconds} <br>${year}`
        },1000) 
    }