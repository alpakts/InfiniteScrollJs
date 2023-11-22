const imageContainer=document.querySelector("#image-container");
const count=10
const apiKey='PeC8uf2IiHe_ph90j8hwNXKiPGZfiQxvrTKfgb5Hx-s';
var photosArray=[];
const ApiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
const getPhotos=async ()=>{
   try {
    const response=await fetch(ApiUrl);
    photosArray=await response.json();
    displayPhotos();
   } catch (error) {
    console.log(error);
   }

}
const displayPhotos=()=>{
    photosArray.forEach(element => {
        const item=document.createElement("a");
        item.setAttribute("href",element.links.html);
        item.setAttribute("target","_blank");
        const img=document.createElement("img");
        img.setAttribute("src",element.urls.regular);
        img.setAttribute("alt",element.alt_description);
        img.setAttribute("title",element.alt_description);
        item.appendChild(img);
        imageContainer.appendChild(item)
    });
}
window.addEventListener("scroll",()=>{
    if (window.innerHeight+window.scrollY>=document.body.offsetHeight-1000) {
        getPhotos()
    }
})
getPhotos();