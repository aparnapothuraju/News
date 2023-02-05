let topic = ["indiansports", "politics", "space"];
let flag = 0;
iterator();
async function iterator()

 {
    for (let i = 0; i < topic.length; i++) {
        let val = topic[i];
        let data = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/topic/${val}.rss`).then(data=>data.json());
        console.log(data.items);
       //let data1 = JSON.parse(JSON.stringify(data));
        //console.log(typeof data1);
        let heading=["IndianSports", "Politics", "Space"];
        addacoridion(data.items, heading[i]);
        addcourosel(data.items, heading[i]);
        flag = 1;

    }
}
function addacoridion(data,val)
{
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", `${val}_card`);
    document.getElementById("accordion").appendChild(card);
    let heading = document.createElement("h2");
    heading.setAttribute("id", `${val}_heading`);
    let card_header = document.createElement("div");
    card_header.setAttribute("class", "card-header");
    card_header.setAttribute("class", "head")
    card_header.setAttribute("id", `${val}_headingOne`);
    document.getElementById(`${val}_card`).appendChild(card_header);
    document.getElementById(`${val}_headingOne`).appendChild(heading);
    let btn = document.createElement("button");
    btn.setAttribute("class", "btn category");
    btn.setAttribute("data-toggle", "collapse");
    btn.setAttribute("data-target", `#${val}_collapseOne`);
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "collapseOne");
    btn.innerHTML = `<p>${val}</p>`;
    document.getElementById(`${val}_heading`).appendChild(btn);
    let div2 = document.createElement("div");
    div2.setAttribute("id", `${val}_collapseOne`);
    //
    if (flag == 0)
        div2.setAttribute("class", "collapse show");
    else
    div2.setAttribute("class", "collapse");
    div2.setAttribute("aria-labelledby", "headingOne");
    div2.setAttribute("data-parent", "#accordion");
    document.getElementById(`${val}_card`).appendChild(div2);
    let content = document.createElement("div");
    content.setAttribute("class", "card-body");
    content.setAttribute("id",`${val}_card_body`);
    document.getElementById(`${val}_collapseOne`).appendChild(content);
}
function addcourosel(data,val)
{
    console.log(data);

    let div1 = document.createElement("div");
    div1.setAttribute("id", `${val}_carouselExampleControls`);
    div1.setAttribute("class", "carousel slide");
    div1.setAttribute("data-ride", "carousel");
    document.getElementById(`${val}_card_body`).appendChild(div1);
    let carousel_inner=document.createElement("div");
    carousel_inner.setAttribute("class", "carousel-inner");
    carousel_inner.setAttribute("id", `${val}_inner`);
    document.getElementById(`${val}_carouselExampleControls`).appendChild(carousel_inner);
   //for (let i = 0; i < data.length; i++)
    //console.log(data[i]);
    let flag = 0;
    data.forEach(element => {
        let div2 = document.createElement("div");
        let link = element.enclosure.link;
        let content = element.content;
        let weblink = element.link;
        let heading = element.title;
        let pubdate = element.pubDate;
        let author=element.author
        if(flag==0)
            div2.setAttribute("class", "carousel-item active")
        else
            div2.setAttribute("class", "carousel-item")
           div2.setAttribute("id", `${val}_div2`);
    
        div2.innerHTML = `<a href="${weblink}"><img class="d-block w-100" src="${link}" alt="First slide"></a><br>
    <h1 ><b>${heading}</b></h1> 
    <p>${author} &nbsp; &nbsp; ${pubdate}</p>
    <p>${content}</p>`;
        document.getElementById(`${val}_inner`).appendChild(div2);   
        flag = 1;
    });
    
    //let img1 = document.createElement("img");
    //img1.innerHTML = `<img class="d-block w-100" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="First slide"></img>`;
    //document.getElementById("div2").appendChild(img1);
    //let div3 = document.createElement("div");
    //document.getElementById(`${val}_inner`).appendChild(div2);
    //div3.setAttribute("class", "carousel-item");
    //div3.setAttribute("id", `${val}_div3`);
    //let img2 = document.createElement("img");
    //img2.innerHTML = `<img class="d-block w-100" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="First slide">`;
    //document.getElementById("div3").appendChild(img2);
    document.getElementById(`${val}_card_body`).appendChild(div1);
   // document.getElementById("card-body").appendChild(div2);
    let prev = document.createElement("a");
    prev.setAttribute("class", "carousel-control-prev");
    prev.setAttribute("href", `#${val}_carouselExampleControls`);
    prev.setAttribute("role", "button");
    prev.setAttribute("data-slide", "prev");
    prev.innerHTML = `<span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>`;
    document.getElementById(`${val}_carouselExampleControls`).appendChild(prev);
    let next = document.createElement("a");
    next.setAttribute("class", "carousel-control-next");
    next.setAttribute("href", `#${val}_carouselExampleControls`);
    next.setAttribute("role", "button");
    next.setAttribute("data-slide", "next");
    next.innerHTML = `<span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>`;
    document.getElementById(`${val}_carouselExampleControls`).appendChild(next);


}