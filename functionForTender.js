
function tenderFun(){

const pubDate = document.querySelectorAll("span.lbl-licitacao")[0].childNodes[1].children[0].innerText;
console.log('DATE OF PUBLICATION: '+pubDate); 

const obj = document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 span.field-content:nth-child(1)>p")[0].innerText;
console.log('OBJECT: '+obj);

const additional =  document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 span.field-content:nth-child(1)>p")[1].innerText;
const additional1 =  document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 span.field-content:nth-child(1)>p")[2].innerText;
console.log('ADDITIONAL INFORMATION: '+addtional+' '+additional1);

const modulty =  document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 span.field-content:nth-child(1)>span")[4].children[1].innerText;
console.log('MODALITY: '+modulty);

const situation =  document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 span.field-content:nth-child(1)>span")[5].children[1].innerText;
console.log('SITUATION: '+situation);

const biddingDate =  document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 span.field-content:nth-child(1)>span")[6].children[1].innerText;
console.log('BIDDING DATE: '+biddingDate);

const historic =  document.querySelectorAll("#block-views-block-view-noticia-pbh-block-5 span.field-content:nth-child(1)>span")[7].childNodes[0].innerText;
console.log('HISTORIC: '+historic);
}

