function Name({name, years, Dateofbirth}){
    return(
        <>
            <p style={{color:"black"}}> Your name is: {name}</p>,
            <p style={{color:"black"}}>You are: {years}years </p>
            <p style={{color:"black"}}>You were born on: {Dateofbirth} </p>
        </>
    )
}

export default Name