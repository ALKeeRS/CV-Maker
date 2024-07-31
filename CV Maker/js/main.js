// change navbar styles on scroll
localStorage.clear();
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('windows-scroll', window.scrollY > 25)
})


//show/hide faq answers
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open')

    //change icon to minus
    const icon = faq.querySelector('.faq__icon i')
    if(icon.className === 'uil uil-plus'){
      icon.className = "uil uil-minus"
    }else{
      icon.className = "uil uil-plus"
    }
  })
})


// show/hide nav menu
const menu = document.querySelector(".nav__menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none"
})

//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block"
}
closeBtn.addEventListener('click', closeNav)
//   CONTACT PAGE
let form__info = document.getElementById('form__info');
let  form__EDU= document.getElementById('form__EDU');
let eduT = document.getElementById('fedut');
let i =0;
function change_form(){
  switch(i){
    case 0: 
    back.remove()
      form__info.style.display = 'flex'; 
      form__EDU.style.display = 'none'; 
      eduT.style.display = 'none'; 
      exp.style.display = 'none';
      skills_form.style.display = 'none'; 
      form__info.appendChild( contanier_of_next_back);
     
      break;
    case 1:
      contanier_of_next_back.appendChild(back); 
    form__EDU.appendChild(contanier_of_next_back);
    form__info.style.display = 'none'; 
    form__EDU.style.display = 'flex'; 
    eduT.style.display = 'none'; 
    exp.style.display = 'none';
    skills_form.style.display = 'none'; 
      break;  
    case 2: 
    eduT.appendChild( contanier_of_next_back);
    form__info.style.display = 'none'; 
    form__EDU.style.display = 'none'; 
    eduT.style.display = 'flex';
    exp.style.display = 'none'; 
    skills_form.style.display = 'none'; 
    
      break;
    case 3: 
    exp.appendChild( contanier_of_next_back);
    form__info.style.display = 'none'; 
    form__EDU.style.display = 'none'; 
    eduT.style.display = 'none';
    exp.style.display = 'flex'; 
    skills_form.style.display = 'none'; 
    sessionStorage.setItem('count_td',count);
    finsh.remove();
    contanier_of_next_back.appendChild(next);
    contanier_of_next_back.appendChild(back);
      break;   
    case 4: 
      sessionStorage.setItem('coun_exp',count_Exp);
     skills_form.appendChild( contanier_of_next_back);
    form__info.style.display = 'none'; 
    form__EDU.style.display = 'none'; 
    eduT.style.display = 'none';
    exp.style.display = 'none'; 
    skills_form.style.display = 'flex';
    next.remove()
    contanier_of_next_back.appendChild(finsh);
    contanier_of_next_back.appendChild(back);
      break;   
  }
}
let next = document.createElement('input');
  next.type='button';
  next.className ="btn btn-primary";
  next.value = 'التالي';
  next.style.textAlign='center';
  let back = document.createElement('input');
  back.type='button';
  back.className ="btn btn-primary";
  back.value = 'السابق';
  back.style.textAlign='center';
  let finsh = document.createElement('input')
  finsh.type='button';
  finsh.className ="btn btn-primary";
  finsh.value = 'انشاء';
  finsh.style.textAlign='center';
  finsh.addEventListener('click',function(){
    window.location = href='/cv templit/HtmlCVAdditionalfiles-master/templeat1.html';
  })
  next.addEventListener('click',function(){
   i++; 
    change_form();
  })
  back.addEventListener('click',function(){
    i--;
    change_form();
  })
  let contanier_of_next_back=document.createElement('div');
  let cont1 = contanier_of_next_back;
  contanier_of_next_back.className='form__name';
  contanier_of_next_back.appendChild(next);
  contanier_of_next_back.appendChild(back);
  i==0? back.remove():contanier_of_next_back.appendChild(back);

  form__info.appendChild(contanier_of_next_back);
let count = 0;
let edu__T=document.getElementById('edu__T');
function addT (){
  let par=document.createElement('p')  
    par.id='par_T'+count;
     par.className='Edu';
  // -------------------
  let textT = document.createElement("input");
  let btn = document.createElement('input');
     
  btn.type ="button";
     btn.style.cssText="width:20px;text-align:center; padding:4px;border-radius:7px;"
     btn.value='X';
      btn.onclick=()=>{
      count--;  
      eduT.removeChild(textT);
      eduT.removeChild(btn);
      edu__T.removeChild(par)
    }
  textT.type="text";
   textT.addEventListener('keydown',edu_T_conacte);
   textT.addEventListener('keyup',edu_T_conacte);
  textT.id="text_td_name";
  textT.placeholder="الدورة";
      if (count<4){
        eduT.appendChild(textT);
        eduT.appendChild(btn);
        edu__T.appendChild(par);
        count++;   
    }else{
      alert("لا يمكن اضافة اكثر من 4 دورات");
    }
   
}
// ____________________________
let count_Exp = 0;
let exp = document.getElementById('expearians');
let cotainer_left_side = document.getElementById('expCuntainer');
function addExp(){
  let h2 = document.createElement('h2');
      h2.innerText="المسمى الوظيفي";
      h2.id = "expTitle "+count_Exp;
      h2.name = "expTitle"+count_Exp;
  let parTime = document.createElement('p');
      parTime.innerText ='April 2011 - Present';
      parTime.className="subDetails";
      parTime.innerText="2020 - presnt"
  let par = document.createElement('p');
      par.id = 'expAbut '+count_Exp;
  // ____________________________
  let cotainer = document.createElement('div');
      cotainer.className='form__name';
      cotainer.id='div_exp';
  let nameExp = document.createElement('input');
    nameExp.type='text';
    nameExp.placeholder='عنوان الخبرة';
    nameExp.name='expTitle';
    nameExp.addEventListener('keydown',expearians_conact);
    nameExp.addEventListener('keyup',expearians_conact);
  let strExp=document.createElement('input');
    strExp.type='text';
    strExp.placeholder='تاريخ البدء';
    strExp.name='str';
    strExp.addEventListener('keydown',expearians_conact);
    strExp.addEventListener('keyup',expearians_conact);
  let extExp=document.createElement('input')
    extExp.type='text';
    extExp.placeholder='تاريخ الأنتهاء';
    extExp.name='ext';
    extExp.addEventListener('keydown',expearians_conact);
    extExp.addEventListener('keyup',expearians_conact);
  let expAbut=document.createElement('textarea');
    expAbut.rows = "5";
    expAbut.placeholder = 'التفاصيل';
    expAbut.name='expAput';
    expAbut.addEventListener('keydown',expearians_conact);
    expAbut.addEventListener('keyup',expearians_conact);
    cotainer.appendChild(strExp);
    cotainer.appendChild(extExp);

    let btn = document.createElement('input');
      btn.type ="button";
      btn.style.cssText="width:20px;text-align:center; padding:4px;border-radius:7px;"
      btn.value='X';
      btn.onclick=()=>{
        count_Exp--;  
        exp.removeChild(nameExp);
        btn.remove();
        exp.removeChild(cotainer);
        exp.removeChild(expAbut);
        cotainer_left_side.removeChild(h2);
        cotainer_left_side.removeChild(parTime);
        cotainer_left_side.removeChild(par);
      }
    if (count_Exp<3){
       count_Exp++;
       exp.appendChild(nameExp);
       exp.appendChild(cotainer);
       exp.appendChild(expAbut);
       exp.appendChild(btn);
       cotainer_left_side.appendChild(h2);
       cotainer_left_side.appendChild(parTime);
       cotainer_left_side.appendChild(par);
    }else{
    alert("لا يمكن اضافة اكثر من 3 خبرات");
  }
  

}
let count_skills = 0;
let skills_form = document.getElementById('Skills');
let skills_ul = document.getElementById('cuntainer_left_side_skil');
function sills(){
  let skills_li = document.createElement('li');
  // -----------------------------\
  let div__skills = document.createElement('div');
      div__skills.className='form__name';
  let text_skill = document.createElement('input');
      text_skill.type='text';
      text_skill.placeholder='المهارة'
      text_skill.addEventListener('keydown',skills_conact)
      text_skill.addEventListener('keyup',skills_conact)
      let btn = document.createElement('input');
         btn.type ="button";
         btn.style.cssText="width:20px;text-align:center; padding:4px;border-radius:7px;"
    div__skills.appendChild(text_skill);
    div__skills.appendChild(btn);
         btn.value='X';
         btn.onclick=()=>{
            count_skills--;
               sessionStorage.setItem('count_skills',count_skills);
            skills_ul.removeChild(skills_li);  
            div__skills.remove();
      }
  if (count_skills<9){
    count_skills++;
     sessionStorage.setItem('count_skills',count_skills);
    skills_ul.appendChild(skills_li);
    skills_form.appendChild(div__skills);
    
  }else{
      alert("لا يمكن اضافة اكثر من 9 مهارات");
      }
      
}

function info(){
   let name_h1 = document.getElementById('name').children;
   let contact = document.getElementById('contact_left_side').children;
   let prsen = document.getElementById('presn');
     
   let text_name = document.getElementById('head_name').children;
       for(var i=0 ; i<form__info.length;i++){
      switch (form__info[i].type){
        case 'text': 
        name_h1[1].innerText=form__info[0].value
        name_h1[0].innerText=text_name[1].value;
        sessionStorage.setItem('name',form__info[1].value)
        sessionStorage.setItem('major',form__info[0].value)
        break;
        case 'email': 
       contact[0].innerText = form__info[i].value; 
       sessionStorage.setItem('email',form__info[i].value);
          break;
        case'tel':
          contact[1].innerText = form__info[i].value;
          sessionStorage.setItem('phone_number',form__info[i].value)
          break;
        case 'textarea':
          prsen.innerText = form__info[i].value;
          sessionStorage.setItem('prsen',form__info[i].value)
          break;
        default: null;
      }
    }
}
function study(){
  let div_collige = document.getElementById('div_collige').children;
  let div_collige1 = document.getElementById('div_collige1').children;
  let article_of_Edu = document.getElementById('article_of_Edu').children;
    article_of_Edu[0].innerText = div_collige[0].value
    sessionStorage.setItem('name_of_collage',div_collige[0].value);
    article_of_Edu[1].innerText = div_collige[1].value;
    sessionStorage.setItem('degrea',div_collige[1].value);
    article_of_Edu[2].innerText = div_collige1[0].value;
    sessionStorage.setItem('mejor_of_collage',div_collige1[0].value);
    article_of_Edu[3].innerText = div_collige1[1].value;
    sessionStorage.setItem('number_of_collage',div_collige1[1].value);
    article_of_Edu[4].innerText =form__EDU.children[3].value;
    sessionStorage.setItem('exit_from_collage',form__EDU.children[3].value); 
  }
  function edu_T_conacte(){
   let ss = 0;
    for(var i = 0; i<eduT.length ; i++){
      if( eduT[i].type =='text'){
        ss++;
        edu__T.children[ss].innerText=eduT[i].value; 
          sessionStorage.setItem('edu_T_'+[ss],eduT[i].value);
      }
  
    }
  }
  function expearians_conact(){
    let ss = 0;
    for(var x = 0 ; x<exp.length ; x++){
        switch(exp[x].name){
            case 'expTitle':
                cotainer_left_side.children[ss].innerText =  exp[x].value;
                sessionStorage.setItem('name_of_exp'+[count_Exp],exp[x].value);
                ss++;
                break;
                case'str':
                cotainer_left_side.children[ss].innerText =  exp[x].value;
                break;
            case 'ext':
                cotainer_left_side.children[ss].innerText += "-"+ exp[x].value;
                sessionStorage.setItem('date_of_exp'+[count_Exp],exp[x-1].value+"_"+exp[x].value);
                ss++;
                break;
            case 'expAput':
                cotainer_left_side.children[ss].innerText = exp[x].value;
                sessionStorage.setItem('detals'+[count_Exp],exp[x].value);
                ss++;
                break;
            default :null;
        }     
     }
   }
  function skills_conact(){
    let cont = 0; 
      for(var i = 0; i<skills_form.length ; i++){
        
        if(skills_form[i].type=='text'){
          skills_ul.children[cont].innerText =  skills_form[i].value;
          sessionStorage.setItem('skill_'+[cont],skills_form[i].value)
          cont++;
        }
      }
}
// _______________CV TEMPLATE____________
let name122 = document.getElementById('name122');
console.log(name122);
  console.log( sessionStorage.getItem('name'))
 