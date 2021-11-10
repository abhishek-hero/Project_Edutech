export const handleClick = (input,change)=>{
    const matchPhoneNo = async()=>{
        if(input.length === 10){
            //check input number is registerd
            const res = await fetch("http://localhost:3001/usermobilenos");
            const data = await res.json();
            console.log(data)
            const {user} = data;
            
            let flag = 0;
            user.map(({mobile,otp})=>{
                if(input === mobile){
                    flag = 1;
                    alert(`Your one time password is ${otp}`)
                    return change(mobile); 
                }
            })
            if(flag === 0)
             alert("User is not registered")
        }
        else
        alert("Enter valid number")
    }
    matchPhoneNo();
}