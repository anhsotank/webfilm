
  $(document).ready(function(){
    $(".slide_image").slick({
        slidesToShow: 4,
        slidesToScroll:1,
        dots: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1500,

    });
 });
 $(document).ready(function(){
    $(".slide_image1").slick({
        slidesToShow: 2,
        slidesToScroll:1,
        dots: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1500,

    });
});
//dark-light
var checkbox=document.getElementById('light-dark');
  checkbox.addEventListener('change',function(){
      document.querySelector('.girl').classList.toggle('dark');
  });

//chuyen trang
const movielist=[

  {
    genre:'kinh dị',
    link:'https://2embed.org/embed/movie?imdb=tt10298840',
    image:'https://image.tmdb.org/t/p/w300/jXGMJUq9zcrScs02qkQuCtmWwaI.jpg',
    episode:'108 min',
    name:'Strange World - 2022',
    year:'2022'
  },
  {
    genre:'hài hước',
    link:'https://2embed.org/embed/movie?imdb=tt7560830',
    image:'https://image.tmdb.org/t/p/w300/5lnEmN1XozTGHLLfz2Qhpgb6rOB.jpg',
    episode:'87 min',
    name:'Don\'t Fuck in the Woods 2 - 2022 ',
    year:'2022'
  },
  {
    genre:'kinh dị',
    link:'https://2embed.org/embed/movie?id=gLo7j',
    image:'https://image.tmdb.org/t/p/w300/yfrZKSNBn5hbJayAsHY2hVTqiNz.jpg',
    episode:'90 min',
    name:'The Last Heist - 2022',
    year:'2022'
  },
  {
    genre:'hài hước',
    link:'https://2embed.org/embed/movie?imdb=tt12003946',
    image:'https://image.tmdb.org/t/p/w300/1XSYOP0JjjyMz1irihvWywro82r.jpg',
    episode:'112 min',
    name:'Violent Night - 2022',
    year:'2022'
  },
  {
    genre:'phiêu lưu',
    link:'https://2embed.org/embed/movie?imdb=tt1630029',
    image:'https://image.tmdb.org/t/p/w300/94xxm5701CzOdJdUEdIuwqZaowx.jpg',
    episode:'192 min',
    name:'Avatar: The Way of Water - 2022',
    year:'2022'
  },
  {
    genre:'kinh dị',
    link:'https://2embed.org/embed/movie?imdb=tt9271672',
    image:'https://image.tmdb.org/t/p/w300/w3s6XEDNVGq5LUlghqs6VlvsvL6.jpg',
    episode:'93 min',
    name:'Prey for the Devil - 2022',
    year:'2022'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt0413300',
    image:'https://image.tmdb.org/t/p/w300/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg',
    episode:'139 min',
    name:' Spider-Man 3 ',
    year:'2017'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt1211837',
    image:'https://image.tmdb.org/t/p/w300/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg',
    episode:'115 min',
    name:'Doctor Strange: The Score-Cerer Supreme',
    year:'2016'
  },
  {
    genre:'vễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt0954968',
    image:'https://image.tmdb.org/t/p/w300/eC1XKswKSoyDyJXXZszLTuwUHli.jpg',
    episode:'174 min',
    name:'Requiem for Krypton: Making \'Superman Returns',
    year:'2006'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt7126948',
    image:'https://image.tmdb.org/t/p/w300/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
    episode:'151 min',
    name:'Wonder Woman 1984 - 2020',
    year:'2020'
  },
  {
    genre:'lãng mạn',
    link:'https://2embed.org/embed/movie?imdb=tt10168670',
    image:'https://image.tmdb.org/t/p/w300/dBQuk2LkHjrDsSjueirPQg96GCc.jpg',
    episode:'131 min',
    name:'Bones and All - 2022',
    year:'2022'
  },
  {
    genre:'lãng mạn',
    link:'https://2embed.org/embed/movie?imdb=tt22302170',
    image:'https://image.tmdb.org/t/p/w300/xCbmauk51911Sd5aSkDCYivhwDy.jpg',
    episode:'106 min',
    name:'This Is Christmas - 2022',
    year:'2022'
  },
  {
    genre:'hành động',
    link:'https://2embed.org/embed/movie?imdb=tt22394694',
    image:'https://image.tmdb.org/t/p/w300/acCIjyszhmit8k5eWVGNTustYRK.jpg',
    episode:'93 min',
    name:'Detective Knight: Redemption - 2022',
    year:'2022'
  },
  {
    genre:'kinh dị',
    link:'https://2embed.org/embed/movie?imdb=tt22042742',
    image:'https://image.tmdb.org/t/p/w300/60Dy8eA5QyUHKHBmojXUtZxWdo8.jpg',
    episode:'81 min',
    name:'Christmas Bloody Christmas - 2022',
    year:'2022'
  },
  {
    genre:'lịch sử',
    link:'https://2embed.org/embed/movie?imdb=tt7693316',
    image:'https://image.tmdb.org/t/p/w300/26yQPXymbWeCLKwcmyL8dRjAzth.jpg',
    episode:'139 min',
    name:'Devotion - 2022',
    year:'2022'
  },
  {
    genre:'hoạt hình',
    link:'https://2embed.org/embed/movie?imdb=tt23546646',
    image:'https://image.tmdb.org/t/p/w300/iMmMxF6f2OonUrXrHKBLSYAhXly.jpg',
    episode:'47 min',
    name:'The Boss Baby: Christmas Bonus - 2022',
    year:'2022'
  },
  {
    genre:'hoạt hình',
    link:'https://2embed.org/embed/movie?imdb=tt14888874',
    image:'https://image.tmdb.org/t/p/w300/wq1UG5lPCKpOJgmgpKJszKvoMUe.jpg',
    episode:'138 min',
    name:' Kimetsu no Yaiba Mt. Natagumo Arc - 2020',
    year:'2022'
  },
  {
    genre:'hoạt hình',
    link:'https://2embed.org/embed/movie?imdb=tt22899102',
    image:'https://image.tmdb.org/t/p/w300/yroznFQnEjgzgHj0vBDm4Hnppv6.jpg',
    episode:'23 min',
    name:'Mickey Saves Christmas - 2022',
    year:'2022'
  },
  {
    genre:'kinh dị',
    link:'https://2embed.org/embed/movie?imdb=tt11913348',
    image:'https://image.tmdb.org/t/p/w300/kTdwHo3kk8nQ1VV68lwEs3NiO0U.jpg',
    episode:'88 min',
    name:'Ouija Hosts - 2021',
    year:'2021'
  },
  {
    genre:'lịch sử',
    link:'https://2embed.org/embed/movie?imdb=tt12530246',
    image:'https://image.tmdb.org/t/p/w300/s9sUK1vAaOcxJfKzNTszrNkPhkH.jpg',
    episode:'100 min',
    name:'Emancipation - 2022',
    year:'2022'
  },
  {
    genre:'hài hước',
    link:'https://2embed.org/embed/movie?imdb=tt13623136',
    image:'https://image.tmdb.org/t/p/w300/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg',
    episode:'45 min',
    name:'The Guardians of the Galaxy Holiday Special',
    year:'2022'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt11116912',
    image:'https://image.tmdb.org/t/p/w300/9z4jRr43JdtU66P0iy8h18OyLql.jpg',
    episode:'104 min',
    name:'Troll - 2022',
    year:'2022'
  },
  {
    genre:'hoạt hình',
    link:'https://2embed.org/embed/movie?imdb=tt20917338',
    image:'https://image.tmdb.org/t/p/w300/nOrnzHn9SCF6JTXfX02eSPyAAXL.jpg',
    episode:'97 min',
    name:'Scrooge: A Christmas Carol - 2022',
    year:'2022'
  },
  {
    genre:'kịch',
    link:'https://2embed.org/embed/movie?imdb=tt15374214',
    image:'https://image.tmdb.org/t/p/w300/6lvUZgY23Emak4VjFy8VXiDjuVF.jpg',
    episode:'96 min',
    name:'Elesin Oba: The King\'s Horseman',
    year:'2022'
  },
  {
    genre:'kinh dị',
    link:'https://2embed.org/embed/movie?imdb=tt14138650',
    image:'https://image.tmdb.org/t/p/w300/9xkGlFRqrN8btTLU0KQvOfn2PHr.jpg',
    episode:'130 min',
    name:'The Pale Blue Eye - 2022',
    year:'2022'
  },
  {
    genre:'lãng mạn',
    link:'https://2embed.org/embed/movie?imdb=tt22247502',
    image:'https://image.tmdb.org/t/p/w300/iKWVMaaHZqaOOqzgdKdpfqJk37B.jpg',
    episode:'',
    name:' When I Think of Christmas',
    year:'2022'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt18953258',
    image:'https://image.tmdb.org/t/p/w300/qvDJbZYs2p4eOdyJ8R2dfdJp2Qq.jpg',
    episode:'106 min',
    name:'Santa vs Reyes - 2022',
    year:'2022'
  },
  {
    genre:'lãng mạn',
    link:'https://2embed.org/embed/movie?imdb=tt24806922',
    image:'https://image.tmdb.org/t/p/w300/6A8VWRvG62zuCXc2jJBA2whU4QX.jpg',
    episode:'89 min',
    name:'87 min',
    year:'2022'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt1300854',
    image:'https://image.tmdb.org/t/p/w300/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg',
    episode:'130 min',
    name:'Iron Man 3',
    year:'2013'
  },
  {
    genre:'hài hước',
    link:'https://2embed.org/embed/movie?imdb=tt6160448',
    image:'https://image.tmdb.org/t/p/w300/1a48bfLQm57ByADdw05uRMoFCZc.jpg',
    episode:'135 min',
    name:'White Noise - 2022  ',
    year:'2022'
  },
  {
    genre:'lãng mạn',
    link:'https://2embed.org/embed/movie?imdb=tt1638002',
    image:'https://image.tmdb.org/t/p/w300/rpD0t7DhzJVadnzgxSYrqljQTL2.jpg',
    episode:'102 min',
    name:'Love, Rosie ',
    year:'2022'
  },
  {
    genre:'kịch',
    link:'https://2embed.org/embed/movie?imdb=tt17677492',
    image:'https://image.tmdb.org/t/p/w300/zMxhCIqLvDpi3JpnKdMV2drI1hB.jpg',
    episode:'111 min',
    name:'The Violence Action - 2022  ',
    year:'2022'
  },
  {
    genre:'kịch',
    link:'https://2embed.org/embed/movie?imdb=tt0372784',
    image:'https://image.tmdb.org/t/p/w300/8RW2runSEc34IwKN2D1aPcJd2UL.jpg',
    episode:'140 min',
    name:'Batman Begins - 2005  ',
    year:'2005'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt3501632',
    image:'https://image.tmdb.org/t/p/w300/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    episode:'130 min',
    name:'Thor: Ragnarok - 2017 ',
    year:'2017'
  },
  {
    genre:'hoạt hình',
    link:'https://2embed.org/embed/movie?imdb=tt1241721',
    image:'https://image.tmdb.org/t/p/w300/6gs0642LLTa5Nl6vUR06ZQ3stTu.jpg',
    episode:'80 min',
    name:'Legends of Valhalla: Thor - 2011',
    year:'2011'
  },
  {
    genre:'',
    link:'https://2embed.org/embed/movie?imdb=tt4154664',
    image:'https://image.tmdb.org/t/p/w300/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    episode:'124 min',
    name:' Captain Marvel ',
    year:'2019'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt0800080',
    image:'https://image.tmdb.org/t/p/w300/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg',
    episode:'112 min',
    name:'The Incredible Hulk',
    year:'2008'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt5095030',
    image:'https://image.tmdb.org/t/p/w300/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg',
    episode:'130 min',
    name:'ANT-MAN AND THE WASP',
    year:'2018'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt0458339',
    image:'https://image.tmdb.org/t/p/w300/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg',
    episode:'124 min',
    name:'Captain America: The First Avenger',
    year:'2011'
  },
  {
    genre:'',
    link:'https://2embed.org/embed/movie?imdb=tt3480822',
    image:'https://image.tmdb.org/t/p/w300/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
    episode:'134 min',
    name:'Black Widow - 2021',
    year:'2021'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt3896198',
    image:'https://image.tmdb.org/t/p/w300/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg',
    episode:'137 min',
    name:'GUARDIANS OF THE GALAXY VOL. 2',
    year:'2017'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt10872600',
    image:'https://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    episode:'148 min',
    name:'Spider-Man: No Way Home',
    year:'2021'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt6320628',
    image:'https://image.tmdb.org/t/p/w300/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
    episode:'129 min',
    name:'Spider-Man: Far From Home',
    year:'2019'
  },
  {
    genre:'hài hước',
    link:'https://2embed.org/embed/movie?imdb=tt0104431',
    image:'https://image.tmdb.org/t/p/w300/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg',
    episode:'120 min',
    name:'Home Alone 2: Lost in New York - 1992',
    year:'2022'
  },
  {
    genre:'hài hước',
    link:'https://2embed.org/embed/movie?imdb=tt0099785',
    image:'https://image.tmdb.org/t/p/w300/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg',
    episode:'103 min',
    name:'Home Alone - 1990',
    year:'1990'
  },
  
  {
    genre:'',
    link:'https://2embed.org/embed/movie?imdb=tt0120338',
    image:'https://image.tmdb.org/t/p/w300/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    episode:'194 min',
    name:'Titanic - 1997',
    year:'1997'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt4154796',
    image:'https://image.tmdb.org/t/p/w300/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    episode:'181 min',
    name:'Avengers: Endgame',
    year:'2019'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt1825683',
    image:'https://image.tmdb.org/t/p/w300/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    episode:'134 min',
    name:'BLACK PANTHER',
    year:'2018'
  },
  {
    genre:'hoạt hình',
    link:'https://2embed.org/embed/movie?imdb=tt7387224',
    image:'https://image.tmdb.org/t/p/w300/e5h1RlnQzjgEAh4s96k50S8XkKa.jpg',
    episode:'22 min',
    name:'LEGO Marvel Super Heroes: Guardians of the Galaxy',
    year:'2019'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt0848228',
    image:'https://image.tmdb.org/t/p/w300/coS6rIaucxDzq20kiJozTgQ0Nmk.jpg',
    episode:'143 min',
    name:'Building the Dream: Assembling the Avengers',
    year:'2012'
  },
  {
    genre:'viễn tưởng',
    link:'https://2embed.org/embed/movie?imdb=tt9419884',
    image:'https://image.tmdb.org/t/p/w300/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg',
    episode:'126 min',
    name:'Doctor Strange in the Multiverse of Madnes',
    year:'2022'
  },
  {
    genre:'hài hước',
    link:'https://2embed.org/embed/movie?imdb=tt7560830',
    image:'https://image.tmdb.org/t/p/w300/5lnEmN1XozTGHLLfz2Qhpgb6rOB.jpg',
    episode:'16/25',
    name:'Don\'t Fuck in the Woods 2 - 2022 ',
    year:'2022'
  },
  {
    genre:'hài hước',
    link:'https://2embed.org/embed/movie?imdb=tt7560830',
    image:'https://image.tmdb.org/t/p/w300/5lnEmN1XozTGHLLfz2Qhpgb6rOB.jpg',
    episode:'16/25',
    name:'Don\'t Fuck in the Woods 2 - 2022 ',
    year:'2022'
  },
  {
    genre:'hài hước',
    link:'https://2embed.org/embed/movie?imdb=tt7560830',
    image:'https://image.tmdb.org/t/p/w300/5lnEmN1XozTGHLLfz2Qhpgb6rOB.jpg',
    episode:'16/25',
    name:'Don\'t Fuck in the Woods 2 - 2022 ',
    year:'2022'
  }
  
  
  
  
]
function render(){
  const htmls=movielist.map(movie =>{
    return`
          <div class="movie-item">
            <a href="#">
                <div class="">
                    <img src="${movie.image}" class="zoom" alt="">
                </div>
                <div class="episode-latest">
                    <span>${movie.episode}</span>
                </div>
                <div class="name-movie">
                ${movie.name}
                </div>
            </a>
            </div>
    `
  })
  document.querySelector('.movie-list').innerHTML=htmls.join('');
}
render();
let thispage=1
let limit=20
let list=document.querySelectorAll('.movie-list .movie-item')
function loaditem(){
  let beginpage=limit  *(thispage - 1)
  let endpage=limit * thispage - 1
  list.forEach((item,key)=>{
    if(key>=beginpage && key<=endpage){
      item.style.display='block'
    }else{
      item.style.display='none'
    }
  })
  listpage();
}
loaditem();
function listpage(){
  let cout=Math.ceil(list.length / limit);
  
  document.querySelector('.paginattion').innerHTML='<div class="page_to_page"> <div class="listpage"> </div></div>';

  if(thispage!=1){
    let first= document.createElement('div');
      first.innerText='First';
      first.setAttribute('onclick',"changepage0("+ thispage +")")
      document.querySelector('.paginattion').insertBefore(first,document.querySelector('.page_to_page'))
      let prev= document.createElement('div');
        prev.innerText='Prev';
        prev.setAttribute('onclick',"changepage1("+ (thispage-1) +")")
        document.querySelector('.paginattion').insertBefore(prev,document.querySelector('.page_to_page'))
  }    
  for(i=1;i<=cout;i++){
    let newpage = document.createElement('div')
    newpage.innerText=i;
    if(i==thispage){
      newpage.classList.add('active');

    }
    newpage.setAttribute('onclick',"changepage("+ i +")")
    document.querySelector('.listpage').appendChild(newpage)
  }
  if(thispage!=cout){
    let next= document.createElement('div');
      next.innerText='Next';
      next.setAttribute('onclick',"changepage2("+ (thispage + 1) +")")
      document.querySelector('.paginattion').appendChild(next)
      
  }
}
let positionX=0;
function changepage(i){
  thispage=i;
  loaditem();
}
function changepage0(i){
  positionX=positionX+50*(thispage-1);
  thispage=1;
  loaditem();
  document.querySelector('.listpage').style =`transform: translateX(${positionX}px)`
}
function changepage1(i){
  thispage=i;
  loaditem();
  positionX=positionX+50;
  document.querySelector('.listpage').style =`transform: translateX(${positionX}px)`
}
function changepage2(i){
  thispage=i;
  loaditem();
  positionX=positionX-50;
  document.querySelector('.listpage').style =`transform: translateX(${positionX}px)`
}
//film-play-item
function render_film(){
  movielist.forEach(function(movie,index){
    
    list[index].addEventListener('click',function(){
      document.head.innerHTML=`
      
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
          <link rel="icon" href="https://uploads.turbologo.com/uploads/design/hq_preview_image/4551835/draw_svg20211224-8647-1vc0v11.svg.png">
      
          <title>anhsotank.com</title>
          <link rel="stylesheet" href="acset/css/film-item.css">
          
      `
      document.body.innerHTML=`
      
          <div class="girl1">
              <header class="navbar">
                  <div class="navbar__logo">
                      <a href="./index.html">
                          <img src="https://uploads.turbologo.com/uploads/design/hq_preview_image/4551835/draw_svg20211224-8647-1vc0v11.svg.png" alt="">
                      </a>
                  </div>
                  <div class="navbar__seach">
                      <input type="text" id="search" onkeyup="searchfun()" onblur="document.querySelector('.menu_search').style.display='none'"
                      ondblclick="document.querySelector('.menu_search').style.display='none'"  placeholder="Tìm kiếm">
                      <div class="header_seach">
                          <i class=' bx bx-search'></i>
                      </div>
                      <ul class="menu_search">
                        
                      </ul>
      
      
                  </div>
                  
                  <ul class="navbar__item">
                      <li class="navbar__item--icon">
                          <a href="#">
                              <i class='header__icon bx bx-menu'></i>
                              
                          </a>
                      </li>
                      <li class="navbar__item--icon">
                          <a href="#">
                              <i class='header__icon bx bx-history'></i>
                              
                          </a>
                      </li>
                      <li class="navbar__item--icon">
                          <a href="#">
                              
                              <i class='header__icon bx bxs-bookmarks'></i>
                          </a>
      
                      </li>
                      <li class="navbar__item--icon">
                          <a href="#">
                              <i class='header__icon bx bx-horizontal-right'></i>
                          </a>
                      </li>
      
                  </ul>
      
                  
                  
              </header>
              <div class="container">
                  <div class="header_navbar--link">
                      Nếu một ngày nào đó bị nhà mạng chặn, hãy truy cập tên miền mới : 
                      <a href="anhlanhtranh">anhlanhtranh</a>
                  </div>
                 <h1 class="heading-movie">${movie.name}</h1>
                 <div class="review-film">
                      <div class="film-image">
                          <img src=" ${movie.image}" alt="">
                      </div>
                      <div class="intro-film">
                          <div class="list-cate">
                              <div>Thể loại</div>
                              <div>${movie.genre}</div>
      
                          </div>
                          <div class="status">
                              <div>Trạng Thái</div>
                              <div>FULL HD</div>
      
                          </div>
                          <div class="score">
                              <div>Điểm </div>
                              <div>9/10</div>
      
                          </div>
                          <div class="update-time">
                              <div>Phát Hành</div>
                              <div>${movie.year}</div>
      
                          </div>
                          <div class="duration">
                              <div>Thời Lượng</div>
                              <div>${movie.episode}</div>
      
                          </div>
                          
                      </div>
                 </div>
                 <div class="film-player ">
                      <div class="film">
                          <iframe id="iframe" src="${movie.link}" width="100%" height="100%" frameborder="0"></iframe>
                          
                          <div class="wrapper">
       
                              <input type="checkbox" class="tonggle" id="light-dark">
                          </div>
                      </div>
      
                      <div class="episode-list">
                          <h4>Danh sách tập</h4>
                          <ul>
     
                          </ul>
                      </div>
                  </div>
                
              </div>
          </div>
      <script>
          var checkbox1=document.getElementById('light-dark');
          checkbox1.addEventListener('change',function(){
              document.querySelector('.girl1').classList.toggle('dark');
              if( document.querySelector('.girl1').classList.contains('dark')){
                  document.querySelector('.episode-list').style.display ='none';
                  document.querySelector('.film-player').style.display='flex'
              }else{
                  document.querySelector('.episode-list').style.display ='block';
              }
          });
          function searchfun(){
          let search=document.querySelector('#search');
          document.querySelector('.menu_search').style.display='block';
          let itemsearch=Array.from(document.querySelectorAll('.item_search'));
          search.value=search.value.toLowerCase();
          itemsearch.forEach(function (e) {
            let text=e.innerText;
            if(text.indexOf(search.value)>-1)
            e.style.display="";
            else e.style.display="none"
          })
        }
      </script>
          
      </body>
      `
    })
  })

}
render_film();
//menu
document.querySelector('.navbar-mobile').addEventListener('click',function(event){
document.querySelector('.opacity').style.display='block'
document.querySelector('.navbar-mobile-item').style=`transform: translateX(0%);`
})
document.querySelector('.navbar-mobile--close').addEventListener('click',function(event){
document.querySelector('.opacity').style.display='none'
document.querySelector('.navbar-mobile-item').style=`transform: translateX(100%);`
})



//wifi
let alerts = document.querySelectorAll('.alert');
  alerts.forEach(item=>{
    item.addEventListener('click',function(event){
      if(event.target.classList.contains('close')){
        item.style.display ='none';
      }
    })
  })
window.addEventListener('offline',function(event){
  document.getElementById('success').style.display='none'
  document.getElementById('error').style.display='grid'
})
window.addEventListener('online',function(event){
   document.getElementById('error').style.display='none'
  document.getElementById('success').style.display='grid'
})
//search
//search
movielist.forEach(function(movie,index){
  let item_search=document.createElement('li');
  item_search.className='item_search'
item_search.innerText=movie.name
document.querySelector('.menu_search').appendChild(item_search)
})
function searchfun(){
  let search=document.querySelector('#search');
  document.querySelector('.menu_search').style.display='block';
  let itemsearch=Array.from(document.querySelectorAll('.item_search'));
  search.value=search.value.toLowerCase();
  itemsearch.forEach(function (e) {
    let text=e.innerText;
    if(text.indexOf(search.value)>-1)
    e.style.display="";
    else e.style.display="none"
  })
}
let list_item_search=document.querySelectorAll('.item_search')
function render_item_search(){
  movielist.forEach(function(movie,index){
    
    list_item_search[index].addEventListener('click',function(){
      document.head.innerHTML=`
      
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
          <link rel="icon" href="https://uploads.turbologo.com/uploads/design/hq_preview_image/4551835/draw_svg20211224-8647-1vc0v11.svg.png">
      
          <title>anhsotank.com</title>
          <link rel="stylesheet" href="acset/css/film-item.css">
          
      `
      document.body.innerHTML=`
      
          <div class="girl1">
              <header class="navbar">
                  <div class="navbar__logo">
                      <a href="./index.html">
                          <img src="https://uploads.turbologo.com/uploads/design/hq_preview_image/4551835/draw_svg20211224-8647-1vc0v11.svg.png" alt="">
                      </a>
                  </div>
                  <div class="navbar__seach">
                      <input type="text" id="search" onkeyup="searchfun()" onblur="document.querySelector('.menu_search').style.display='none'"
                      ondblclick="document.querySelector('.menu_search').style.display='none'"  placeholder="Tìm kiếm">
                      <div class="header_seach">
                          <i class=' bx bx-search'></i>
                      </div>
                      <ul class="menu_search">
                        
                      </ul>
      
      
                  </div>
                  
                  <ul class="navbar__item">
                      <li class="navbar__item--icon">
                          <a href="#">
                              <i class='header__icon bx bx-menu'></i>
                              
                          </a>
                      </li>
                      <li class="navbar__item--icon">
                          <a href="#">
                              <i class='header__icon bx bx-history'></i>
                              
                          </a>
                      </li>
                      <li class="navbar__item--icon">
                          <a href="#">
                              
                              <i class='header__icon bx bxs-bookmarks'></i>
                          </a>
      
                      </li>
                      <li class="navbar__item--icon">
                          <a href="#">
                              <i class='header__icon bx bx-horizontal-right'></i>
                          </a>
                      </li>
      
                  </ul>
      
                  
                  
              </header>
              <div class="container">
                  <div class="header_navbar--link">
                      Nếu một ngày nào đó bị nhà mạng chặn, hãy truy cập tên miền mới : 
                      <a href="anhlanhtranh">anhlanhtranh</a>
                  </div>
                 <h1 class="heading-movie">${movie.name}</h1>
                 <div class="review-film">
                      <div class="film-image">
                          <img src=" ${movie.image}" alt="">
                      </div>
                      <div class="intro-film">
                          <div class="list-cate">
                              <div>Thể loại</div>
                              <div>${movie.genre}</div>
      
                          </div>
                          <div class="status">
                              <div>Trạng Thái</div>
                              <div>FULL HD</div>
      
                          </div>
                          <div class="score">
                              <div>Điểm </div>
                              <div>9/10</div>
      
                          </div>
                          <div class="update-time">
                              <div>Phát Hành</div>
                              <div>${movie.year}</div>
      
                          </div>
                          <div class="duration">
                              <div>Thời Lượng</div>
                              <div>${movie.episode}</div>
      
                          </div>
                          
                      </div>
                 </div>
                 <div class="film-player ">
                      <div class="film">
                          <iframe id="iframe" src="${movie.link}" width="100%" height="100%" frameborder="0"></iframe>
                          
                          <div class="wrapper">
       
                              <input type="checkbox" class="tonggle" id="light-dark">
                          </div>
                      </div>
      
                      <div class="episode-list">
                          <h4>Danh sách tập</h4>
                          <ul>
     
                          </ul>
                      </div>
                  </div>
                
              </div>
          </div>
      <script  src="./ap.js"> </script>
          
      </body>
      `
    })
  })

}
render_item_search();
