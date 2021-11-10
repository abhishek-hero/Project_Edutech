import axios from "axios"

export const handleStore = (input)=>{
    console.log(input)
    if(input.length <10 || input.length > 10)
    return alert('Enter Valid Number');
    // const res = await fetch(`http://localhost:2233/storedata?mobile=${input}`);
    // const data = await res.json();
    // console.log(data)
    // if(data === true)
    // alert(`User is already registered`)
    const showdata = async()=>{
        let res = await axios.post("/users",{
        mobile:`${input}`,
        otp: Math.floor(1000 + Math. random() * 9000)
    })
    console.log(res)
    }
    showdata()
}