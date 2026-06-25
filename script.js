function sortCars() {

    let container = document.getElementById("carContainer");

    let cards = Array.from(container.children);

    cards.sort((a,b)=>{
        return b.dataset.price - a.dataset.price;
    });

    cards.forEach(card=>{
        container.appendChild(card);
    });

    alert("Cars Sorted by Price!");
}
function searchCar() {
    let input = document.getElementById("search").value.toUpperCase();
    let table = document.querySelector("table");
    let tr = table.getElementsByTagName("tr");

    for(let i=1;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let txt = td.textContent || td.innerText;
            tr[i].style.display =
                txt.toUpperCase().indexOf(input) > -1 ? "" : "none";
        }
    }
}
window.onload = function(){
    alert("🚘 Welcome to Luxury Cars World! Thank you for visiting our website.");
}