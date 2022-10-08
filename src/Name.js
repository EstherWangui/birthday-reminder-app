function Name({name, years, Dateofbirth}){
    return(
        <div className="color">
            <p style={{color:"green"}}> Your name is:{name}</p>
            <p style={{color:"green"}}>You are:{years}years</p>
            <p style={{color:"green"}}>You were born on:{Dateofbirth}</p>
        </div>
    )
}

export default Name