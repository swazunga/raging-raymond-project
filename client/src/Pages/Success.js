const Success = () => {
    setTimeout(function(){
        window.location.replace("/");
    }, 3000)
    return (
        <div>
        <h1>SUCCESSFUL DONATION</h1>
        <h2>YOU WILL NOW BE REDIRECTED TO THE HOME PAGE</h2>
        </div>
    );
}

export default Success