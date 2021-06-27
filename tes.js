var button=document.getElementById("tombol");
button.addEventListener('click', quote)
function quote(){ 
  document.getElementById("home").innerHTML="";
    console.log(' ');
    var input=document.getElementById("input").value;
    fetch('https://the-lazy-media-api.vercel.app/api/search?search='+input).then(response => response.json())
      .then((data) => {
        if (data.length === 0){
          Swal.fire('Berita Tidak Ada')
        }
        else{
          for(var i=0; i<8;i++){
            document.getElementById("home").innerHTML+=`
              <div class="col-md-4 mb-5">  
                <div class="card" style="width: 10rem;">
                  <img src="${data[i].thumb}" class="card-img-top" alt="...">
                  <div class="card-body">
                  </div>
                    <h3 class="card-title">${data[i].title}</h3>
                    <p class="card-text">penulis : ${data[i].author}</p>
                    <p class="card-text">tag : ${data[i].tag}</p>
                    <p class="card-text">deskripsi : ${data[i].desc}</p>
                </div>
              </div>` 
        }
      }}); 
} 
function preview(){
  console.log(' ');
  fetch('https://the-lazy-media-api.vercel.app/api/tech/recommend?page=1').then(response => response.json())
    .then((data) => { 
      for(var i=0; i<8;i++){
        document.getElementById("home").innerHTML+=`
          <div class="col-md-3 mb-4">
            <div class="card" style="width: 15rem;">
              <img src="${data[i].thumb}" class="card-img-top" alt="...">
              <div class="card-body">
              </div>
              <h3 class="card-title">${data[i].title}</h3>
              <p class="card-text">Penulis : ${data[i].author}</p>
              <p class="card-text">Tag : ${data[i].tag}</p>
              <p class="card-text">  ${data[i].desc}</p>
          </div>
        </div>`  
      }
    }); 
} 