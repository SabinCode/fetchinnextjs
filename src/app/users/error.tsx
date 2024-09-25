"use client"

const UserError = ({error}: {error: Error}) => {
    return (
        <div>
            <h1>User ma Error aayo.. Error while fetching data</h1>  
        </div>
    )
}

export default UserError

//error component is bydefault a client component. So we must write "use client" on top.
//we can style this error page using layout header n footer ...