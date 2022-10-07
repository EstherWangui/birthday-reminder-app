function Name({name, years, Dateofbirth}){
    return(
        <>
            <p style> Your name is: {name}</p>,
            <p style>You are: {years}years </p>
            <p style>You were born on: {Dateofbirth} </p>
        </>
    )
}

export default Name;