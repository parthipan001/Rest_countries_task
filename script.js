var res = fetch('https://restcountries.com/v3.1/all')
res.then((data)=>data.json()).then((data1)=>foo(data1))

var container = document.createElement('div')
container.className = 'container'

var row = document.createElement('div')
row.className = 'row'

function foo(data1){
        
    for(i=0;i<=data1.length;i++){

                    var column = document.createElement('div')
                    column.className = 'col-lg-4'
                    column.innerHTML = `<div class="card" style="width: 18rem;">
                    <h5 class="card-title">${data1[i].name.common}</h5>
                    <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text"><span class='main'>Capital</span>: ${data1[i].capital}</p>
                      <p class="card-second-text"><span class='main'>Region</span>: ${data1[i].region}</p>
                      <p class="card-third-text"><span class='main'>Country code</span>: ${data1[i].cca2}</p>
                    </div>
                  </div>`
                    document.body.append(container)
                    container.append(row)
                    row.append(column)
                }

}
