const Home = () => {
    return ( 
        <> 
        <body>
        
    <nav class="navbar navbar-expand-lg  bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">SALAMI RESTRAUNT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="search" aria-label="Search"></input>
              <button class="btn btn-outline-success" ><a href="./login.html">login</a></button>
            </form>
          </div>
        </div>
      </nav>
      <br></br>

       <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" height="600" class="d-block w-100" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src="https://source.unsplash.com/random/1920x700/?bike" height="600" class="d-block w-100" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src="https://source.unsplash.com/random/1920x700/?helicopter" height="600" class="d-block w-100" alt="..."></img>
              </div>
            </div>
          </div>

      <br></br>

      <div class="container">
       



        <div class="row">
            <div class=" col-md-6 col-lg-6 col-sm-12">
                <div class="card" >
                    <img src="https://plus.unsplash.com/premium_photo-1670537439541-d2eb20e1f6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q0xPQ0t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60r" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">dine in</h5>
                      <p class="card-text">OPEN FROM 9AM TO 9PM</p>
                      
                    </div>
                  </div>
            </div>
            <div class=" col-md-6 col-lg-6 col-sm-12">
                <div class="card" >
                  <img src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q0hFRnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">CHEFS</h5>
                      <p class="card-text">OUR CHEFS.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>
            
            
        </div>
        
      </div>
      
    

      </body>
        </>
    );
}
 
export default Home;