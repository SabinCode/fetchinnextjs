
//route segment config: globally cache garnulai vancha
// export const fetchCache = 'default-cache' yo garda sabaima default cache huncha
//export const fetchCache = 'no-store' garda manually tala garejasto yeuta yeutama garna parena
//export const revalidate = 100
type User = {
    id: string
    name: string
    email: string
    role: string
    lastLogin: string
    status: string
    time: string
}
const Users = async() => {
    await new Promise(resolve => setTimeout(resolve, 1000)) //1 second delay loading... hernalai duplicate banako

    const response = await fetch('https://66d1dcd162816af9a4f51950.mockapi.io/users', {
        // cache: 'no-store',
        next: {revalidate: 10,}
    }) //cache: "no store" garepaxi cache hudaina

    const data = (await response.json()) as User[] //json ma data nikalera type pani yehi deko

    // console.log(data) //yo terminal ma aauhca server component vayekole

    return (
        <>
        <h1 className="text-3xl font-bold underline">All Users</h1>

        <div>{data.map((user)=> (
            <div key={user.id}>
           <h2>User:{user.name}</h2>
           <p>Email: {user.email}</p> 
           <p>Time: {user.time}</p>
           </div>))}
           </div>
        
        </>
    )
}

export default Users


//server component useEffect, useState hudaina
//json ma data nikalna parcha
//console.log garda data  terminal mai aaucha, server component vayekole

//next: {revalidate: 10,} le 10 second paxi matra new data tancha. tetinjel data cache bata tanera dekhaucha.
//Route segment config: globally cache garnulai vancha
//export cons revalidate= 100 garnale globally yo use huncha.