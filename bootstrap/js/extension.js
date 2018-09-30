if(!document.getElementsByClassName){document.getElementsByClassName=function(){var tTagName="*";if(arguments.length>1){tTagName=arguments[1];}
if(arguments.length>2){var pObj=arguments[2]}else{var pObj=document;}
var objArr=pObj.getElementsByTagName(tTagName);var tRObj=new Array();for(var i=0;i<objArr.length;i++){if(objArr[i].className==arguments[0]){tRObj.push(objArr[i]);}}
return tRObj;}}
function changeDescription(tar_num,is_anim){var text;if(document.getElementById("gallery-text")){text=document.getElementById("gallery-text");}else{return;}
var title=gallery_photo_titles[tar_num];var description=gallery_photo_descriptions[tar_num];text.innerHTML=text.innerHTML.replace(/(<[Hh]1>).*(<\/[Hh]1>)/,'$1'+title+'$2');var showing=document.getElementById("gallery-description-showing");if(is_anim==false){showing.innerHTML=description;return;}
var hidden=document.getElementById("gallery-description-hidden");hidden.innerHTML=description;var mt=0;text.timer=setInterval(function(){if(mt==-30){clearInterval(text.timer);showing.innerHTML=description;showing.style.marginTop="0px";hidden.innerHTML="";}else{mt-=2;showing.style.marginTop=mt+"px";}},15);}
function startrun(obj,old_obj,is_anim){if(is_anim==false){old_obj.style.filter='Alpha(opacity=0)';obj.style.filter='Alpha(opacity=100)';return;}
var op=0;obj.timer=setInterval(function(){op=Number(obj.style.opacity);if(op>0.95){clearInterval(obj.timer);obj.style.opacity=1;old_obj.style.opacity=0;}else{op+=0.05;obj.style.opacity=String(op);old_obj.style.opacity=String(1-op);}},20);}
function changePhotoRight(){var container;if(document.getElementById("gallery-background")){container=document.getElementById("gallery-background");}else{return;}
var photos,isAnim;if(container.getElementsByClassName){photos=container.getElementsByClassName("gallery-photo");isAnim=true;}else if(document.getElementsByClassName){photos=document.getElementsByClassName("gallery-photo");isAnim=false;}else{return;}
for(var i=0;i<photos.length;i++){var current=photos[i];var target=0;if(isAnim?'1'==current.style.opacity:'Alpha(opacity=100)'==current.style.filter){target=i+1;if(target>=photos.length){target-=photos.length;}
startrun(photos[target],current,isAnim);changeDescription(target,isAnim);break;}}}
function changePhotoLeft(){var container;if(document.getElementById("gallery-background")){container=document.getElementById("gallery-background");}else{return;}
var photos,isAnim;if(container.getElementsByClassName){photos=container.getElementsByClassName("gallery-photo");isAnim=true;}else if(document.getElementsByClassName){photos=document.getElementsByClassName("gallery-photo");isAnim=false;}else{return;}
for(var i=0;i<photos.length;i++){var current=photos[i];var target=0;if(isAnim?'1'==current.style.opacity:'Alpha(opacity=100)'==photos[i].style.filter){target=i-1;if(target<0){target+=photos.length;}
startrun(photos[target],current,isAnim);changeDescription(target,isAnim);break;}}}
function changeNavState(target){var objs=document.getElementById("nav").getElementsByTagName("li");for(var i=0;i<objs.length;i++){if(objs[i].innerHTML.indexOf(target)>0){objs[i].innerHTML=objs[i].innerHTML.replace(/(<a )/,'$1style="color:#FFE800" ');}else{objs[i].innerHTML=objs[i].innerHTML.replace(/style[^ ]* /,' ');}}}

