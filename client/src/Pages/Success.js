import Hero from "../components/Hero";

const Success = () => {
    setTimeout(function(){
        window.location.replace("/");
    }, 3000)
    return (
        <>
        <Hero/>
        <div className="container min-height">
            <div className="row justify-content-evenly center-text">
                <div className="col">
                    <h1 className="text-center">SUCCESSFUL DONATION</h1>
                    <h2 className="text-center">YOU WILL NOW BE REDIRECTED TO THE HOME PAGE</h2>
                </div>
            </div>
        </div>
        </>
    );
}

export default Success