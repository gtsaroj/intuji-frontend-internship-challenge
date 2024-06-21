const cards = document.querySelector(".cards");
const testomonialCard = document.querySelector(".testomonialcard");
const blogsCard = document.querySelector(".blogs-container");

const cardsData = [
  {
    id: 0,
    img: "../assets/images/blue.png",
    title: "Connect wallets & companies",
    description:
      "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. ",
  },
  {
    id: 1,
    title: "Review  transactions",
    img: "../assets/images/blue.png",
    description:
      "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. ",
  },
  {
    id: 3,
    title: "Get income  insights",
    img: "../assets/images/yellow.png",
    description:
      "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. . ",
  },
];

const testomonialData = [
  {
    info: "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.",
    position: "Mike Taylor, Web Designer",
    img: "../assets/images/testomonial1.png",
  },
  {
    info: "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.",
    position: "Mike Taylor, Web Designer",
    img: "../assets/images/testomonial2.png",
  },
];

const blogData = [
  {
    content: "BEST PRACTICES",
    title: "Partiality on or continuing particular principles as. ",
    img: "../assets/images/blog1.png",
  },
  {
    content: "BEST PRACTICES",
    title: "Village did removed enjoyed explain",
    img: "../assets/images/blog2.png",
  },
  {
    content: "BEST PRACTICES",
    title: "Wise busy past both park when an ye no. Nay likely her length.",
    img: "../assets/images/blog3.png",
  },
];

cardsData.map((data, index) => {
  cards.innerHTML += `
     <div class="card">
     <p> 0${data.id + 1}</p>
     <div class="card-content" >
      <img src=${data.img} alt="images*" />
      <h1>${data.title}</h1>
      <p>${data.description}</p>
     </div>
     </div>
    `;
});

testomonialData.map((data, index) => {
  testomonialCard.innerHTML += `
  <div class="testo-card">
  <div>
    <h6>${data.info}</h6>
    <p>${data.position}</p>
  </div>
  <div>
    <img src="${data.img}" alt="Image description" />
  </div>
</div>

    `;
});

blogData.map((item, index) => {
  blogsCard.innerHTML += `
     <div class="blog-card">
       <div class="blog-content">
       <h4>${item.content} </h4>
        <h3> ${item.title} </h3>
       </div>
       <div>
       <img src=${item.img} />
       </div>

     </div>
    `;
});
