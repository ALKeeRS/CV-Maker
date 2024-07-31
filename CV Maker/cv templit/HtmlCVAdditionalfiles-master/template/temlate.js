let header = document.getElementById('name').children;
header[0].innerText=sessionStorage.name;
header[1].innerText=sessionStorage.major;
let contact = document.getElementById('ul_header').children;
contact[0].innerText = sessionStorage.email;
contact[1].innerText = sessionStorage.phone_number;
let presn = document.getElementById('presn');
presn.innerText = sessionStorage.prsen;

let edu = document.getElementById('Edu_section').children;
  edu[0].innerText = sessionStorage.name_of_collage;
  edu[1].innerText = sessionStorage.degrea;
  edu[2].innerText = sessionStorage.mejor_of_collage;
  edu[3].innerText = sessionStorage.number_of_collage;
  edu[4].innerText = sessionStorage.exit_from_collage;
  // ------------EDU_T---------------
let eduT_sction1 = document.getElementById('eduT_section1');
for (var i = 0; i<sessionStorage.count_td; i++){
  let td_edu = document.createElement('p');
  td_edu.className = 'Edu';
  eduT_sction1.appendChild(td_edu);
  } 
  for (var i = 1; i<=sessionStorage.count_td; i++){
      eduT_sction1.children[i].innerText = sessionStorage.getItem('edu_T_'+i);
    } 
      // ------------exp---------------
      let exp_section = document.getElementById('exp_section');
      for (var i = 0; i<sessionStorage.coun_exp; i++){
        let title_exp = document.createElement('h2');
        title_exp.name = "title_exp";
        let time_exp = document.createElement('p');
        time_exp.className = 'subDetails';
        time_exp.name = "time_exp";
        let abut_exp = document.createElement('p');
        abut_exp.name = "abut_exp";
        exp_section.appendChild(title_exp);
        exp_section.appendChild(time_exp);
        exp_section.appendChild(abut_exp);
      } 
       let ss = 1;
        let ss1 = 1;
       let ss2 = 1;
      for (var i = 0; i<exp_section.children.length; i++){
      
       switch(exp_section.children[i].name){
        case 'title_exp':
          exp_section.children[i].innerText = sessionStorage.getItem('name_of_exp'+ss);
           ss++;
          break;
        case 'time_exp':
          exp_section.children[i].innerText = sessionStorage.getItem('date_of_exp'+ss1);
          ss1++;
          break;
        case 'abut_exp':
          exp_section.children[i].innerText = sessionStorage.getItem('detals'+ss2);
          ss2++;
          break;
       }
    }
    //-------------skills------------
    let skills_section = document.getElementById('ul_skill');
for (var i = 0; i<sessionStorage.count_skills; i++){
  let li_skill = document.createElement('li');
  skills_section.appendChild(li_skill)
  } 
  for (var i = 0; i<=sessionStorage.count_skills; i++){
    skills_section.children[i].innerText = sessionStorage.getItem('skill_'+i);
  } 