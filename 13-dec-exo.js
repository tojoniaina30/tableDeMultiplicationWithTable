/* const table = document.createElement('div')
table.classList.add("table");
document.body.append(table); */

const table = document.createElement('table')
document.body.append(table);

    const firstTr = document.createElement('tr')
    table.append(firstTr);

    const secondTr = document.createElement('tr')
    table.append(secondTr);

    const thirdTr = document.createElement('tr')
    table.append(thirdTr);



for( var i = 2 ; i <= 10; i++){
    var multi = document.createElement('th')
    /* multi.classList.add("multi"); */
    var color = ["#F00", "#00F"]
    if(i%2 !== 0){
        multi.style.backgroundColor = "#00F"
    } else {
        multi.style.backgroundColor = "#F00"
    }
    if(i < 5) {
        firstTr.append (multi)
    } 
    if (5 <= i && i <= 7 ) {
        secondTr.append (multi)
    } 
    if (8 <= i && i <= 10) {
        thirdTr.append (multi)
    }

        var title= document.createElement('h1')
        title.textContent = "Table de " + i
        multi.append(title);
        for( var k = 2 ;k <= 10; k++){
            var chiffre = document.createElement('p')
            chiffre.textContent = i + "x" + k + "=" + i*k
            if (i*10 == i*k) {
                chiffre.style.color = "#0F0"
            }
            multi.append(chiffre);
        }
}