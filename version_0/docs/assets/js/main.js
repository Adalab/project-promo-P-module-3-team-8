"use strict";const designLegend=document.querySelector(".js__design-legend"),designColors=document.querySelector(".js__design-colors"),arrowDown1=document.querySelector(".js__arrowDown1"),fillLegend=document.querySelector(".js__fill-legend"),fillForm=document.querySelector(".js__field"),arrowDown2=document.querySelector(".js__arrowDown2"),shareLegend=document.querySelector(".js__share-legend"),sharecontent=document.querySelector(".js__share"),arrowDown3=document.querySelector(".js__arrowDown3"),allRadioButtons=document.querySelectorAll(".js-radio"),previewContainer=document.querySelector(".js-preview"),buttonCancelForm=document.querySelector(".js-btn-cancel"),reset=document.querySelector(".js-reset"),fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),inputs=document.querySelector(".js__inputs"),previewNameElement=document.querySelector(".js_name"),previewJobElement=document.querySelector(".js_job"),previewEmailElement=document.querySelector(".js_email"),previewPhoneElement=document.querySelector(".js_phone"),previewLinkedinElement=document.querySelector(".js_linkedin"),previewGithubElement=document.querySelector(".js_github"),btnShare=document.querySelector(".js-share-btn"),twitterBtn=document.querySelector(".js-twitter-button");let msg=document.querySelector(".js-message");const urlTwitter=document.querySelector(".js-url"),textCard=document.querySelector(".js-create"),inputName=document.querySelector(".js-input-name"),inputJob=document.querySelector(".js-input-job"),inputProfileImage=document.querySelector(".js-input-profile-image"),inputEmail=document.querySelector(".js-input-email"),inputPhone=document.querySelector(".js-input-phone"),inputLinkedin=document.querySelector(".js-input-linkedin"),inputGithub=document.querySelector(".js-input-github");let data={palette:1,name:"",job:"",email:"",phone:"",linkedin:"",github:"",photo:""};function handleClickRadioUnique(e){const t="palette-"+e.currentTarget.value;data.palette=e.currentTarget.value,previewContainer.classList.remove("palette-1"),previewContainer.classList.remove("palette-2"),previewContainer.classList.remove("palette-3"),previewContainer.classList.remove("palette-4"),previewContainer.classList.add(t)}designLegend.addEventListener("click",()=>{designColors.classList.toggle("collapsed"),arrowDown1.classList.toggle("rotate"),arrowDown2.classList.remove("rotate"),arrowDown3.classList.remove("rotate"),sharecontent.classList.add("collapsed"),fillForm.classList.add("collapsed"),textCard.innerHTML="",msg.classList.add("hidden"),btnShare.classList.remove("white")}),fillLegend.addEventListener("click",()=>{fillForm.classList.toggle("collapsed"),arrowDown2.classList.toggle("rotate"),arrowDown1.classList.remove("rotate"),arrowDown3.classList.remove("rotate"),designColors.classList.add("collapsed"),sharecontent.classList.add("collapsed"),textCard.innerHTML="",msg.classList.add("hidden"),btnShare.classList.remove("white")}),shareLegend.addEventListener("click",()=>{sharecontent.classList.toggle("collapsed"),arrowDown3.classList.toggle("rotate"),arrowDown1.classList.remove("rotate"),arrowDown2.classList.remove("rotate"),designColors.classList.add("collapsed"),fillForm.classList.add("collapsed")});for(const e of allRadioButtons)e.addEventListener("click",handleClickRadioUnique);function renderPreview(){previewEmailElement.href="mailto: "+data.email,previewPhoneElement.href="tel: "+data.phone,previewLinkedinElement.href=data.linkedin,previewGithubElement.href=data.github,""===data.name?previewNameElement.innerHTML="Nombre Apellido":previewNameElement.innerHTML=data.name,""===data.job?previewJobElement.innerHTML="Front-end developer":previewJobElement.innerHTML=data.job}function handleKeyupInputs(e){e.preventDefault();const t=e.target;"name"===t.name?data.name=t.value:"job"===t.name?data.job=t.value:"email"===t.name?data.email=t.value:"phone"===t.name?data.phone=t.value:"linkedin"===t.name?data.linkedin=t.value:"github"===t.name&&(data.github=t.value),renderPreview()}function handleClickCreateBtn(e){e.preventDefault(),textCard.innerHTML="",msg.classList.remove("hidden"),btnShare.classList.add("white"),fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{!1===e.success?(textCard.innerHTML="Ha habido un error. Rellena todos los campos.",urlTwitter.classList.add("hidden")):(textCard.innerHTML="La tarjeta ha sido creada",urlTwitter.innerHTML=e.cardURL,urlTwitter.href=e.cardURL,urlTwitter.classList.remove("hidden"),setLocalStorage())}),twitterBtn.addEventListener("click",e=>{e.preventDefault();let t="https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20profesional.%20¡Conóceme!%20&url="+urlTwitter.href;window.location.href=t})}function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}function fakeFileClick(){fileField.click()}function setLocalStorage(){const e=JSON.stringify(data);localStorage.setItem("localData",e)}function getLocalStorage(){let e=localStorage.getItem("localData");if(null!==e){const t=JSON.parse(e);data=t,inputName.value=data.name,inputJob.value=data.job,inputEmail.value=data.email,inputPhone.value=data.phone,inputLinkedin.value=data.linkedin,inputGithub.value=data.github,profileImage.style.backgroundImage=`url(${data.photo})`,profilePreview.style.backgroundImage=`url(${data.photo})`,previewNameElement.innerHTML=data.name,previewJobElement.innerHTML=data.job,previewEmailElement.href="mailto:"+data.email,previewPhoneElement.href="tel:"+data.phone,previewLinkedinElement.href=data.linkedin,previewGithubElement.href=data.github}}buttonCancelForm.addEventListener("click",e=>{e.preventDefault(),previewContainer.classList.add("palette-1"),previewContainer.classList.remove("palette-2"),previewContainer.classList.remove("palette-3"),previewContainer.classList.remove("palette-4");const t=document.querySelectorAll(".js-reset");for(const e of t)e.value="",previewNameElement.innerHTML="Nombre Apellido",previewJobElement.innerHTML="Front-end developer",previewEmailElement.href="mailto: ",previewPhoneElement.href="tel: ",previewLinkedinElement.href="",previewGithubElement.href="",profileImage.style.backgroundImage="",profilePreview.style.backgroundImage=""}),inputs.addEventListener("keyup",handleKeyupInputs),btnShare.addEventListener("click",handleClickCreateBtn),fileField.addEventListener("change",getImage),getLocalStorage();