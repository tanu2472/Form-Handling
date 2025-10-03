import {useEffect, useState} from 'react';
import './Home.css';
import bgImage from './assets/Images/bgImage.jpg';

function Home() {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    year:'',
    gender:'',
    skills:[],
    error:''
  });


  useEffect(() => {

  if(formData.name.length>0 && formData.name.length<5){
      setFormData({...formData, error: 'Enter valid name',
      });
    }
  else if(formData.phone.length>0 && (formData.phone.length<10 || formData.phone.length>10)){
    setFormData ({...formData, error: 'Enter valid phone number',
      });
  }
      else{
      setFormData({...formData, error: ''});
    }
  }, [formData.name,formData.year,formData.phone,formData.error]);
   
  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const parsedData = JSON.parse(storedData);

    if(parsedData.name == formData.name){
      return;
    } 

      console.log("Parsed data:",parsedData);
      setFormData({
        ...formData,
        name: parsedData.name || '',
        email: parsedData.email || '',
        phone: parsedData.phone || '',
       
      });
    }
    
  }, []);

  const saveName=() => {
 
    if(formData.error){
      alert(formData.error);
      return;
    }
    localStorage.setItem('userData', JSON.stringify(formData));
  };
      return (
    
        <div style={{ backgroundColor: ' #b0c4e8ff' }}>
      
       <h1>Hii,{formData.name}</h1>
       <p>
        Your email Id is {formData.email ? formData.email :"unknown"}.</p>
        <p>Your Phone Number is {formData.phone}</p>
        <p>You are {formData.year ? formData.year : "_"} year passout Student.</p>
        <p>
          Your skills are : {formData.skills.join(', ') || ' No skills selected'}.
        </p>
        
        <div>
          <input type="text"
            placeholder="Enter Your Full Name"
            className='input'
            onChange={(e)=>{
             setFormData({...formData, name: e.target.value});
     }}
      value={formData.name}
     />
     </div>
 <p className='error-text'>{formData.error}</p>
   <div>
   <input 
    type="email"
    placeholder='Enter your email address'
    className='input'
    value={formData.email}
    onChange={(e)=>{
      setFormData({...formData, email: e.target.value});
    }}
    
    />
   </div>
    <div>
          <input type="number"
            placeholder="Enter Your Phone Number "
            className='input'
            onChange={(e)=>{
             setFormData({...formData, phone: e.target.value});
     }}
      value={formData.phone}
   />
   </div>
   <div>
    <select onChange={(e)=>{
      setFormData({...formData, year: e.target.value });

    }}
    value={formData.year}
    className="input">
      <option value="Select Your Passing Year"> Please Select Your  Passing Year</option>
      <option value="2020"> 2020</option>
      <option value="2021"> 2021</option>
      <option value="2022"> 2022</option>
      <option value="2023"> 2023</option>
      <option value="2024"> 2024</option>
      <option value="2025"> 2025</option>
      <option value="2026">2026</option>
    </select>
   </div>
    <div>
      <p>Select Gender:</p>

      <input type='radio' name='gender' value='female'
      checked={formData.gender === 'female'}
      onChange={(e) => {
        setFormData({...formData, gender: e.target.value});
      }}/>{''}Female

      <input type='radio' name='gender' value='male'
      checked={formData.gender === 'male'}
      onChange={(e) => {
        setFormData({...formData, gender: e.target.value});
      }}
      />{''}Male

    </div>

    <div>
    <p> Choose Your Skills :</p>
    <input type='checkbox' name='skills' value='HTML' checked={formData.skills.includes('HTML')}
    onChange={(e)=>{
      const val =e.target.value;
      if(formData.skills.includes(val)){
      setFormData({...formData, skills: formData.skills.filter((skill) => skill !== val),
      });
    }
    else{
      setFormData({...formData, skills: [...formData.skills, val],
      });
    }
    }}/> {''}HTML
    <input type='checkbox' name='skills' value='CSS' checked={formData.skills.includes('CSS')}
    onChange={(e)=>{
      const val =e.target.value;
      if(formData.skills.includes(val)){
      setFormData({...formData, skills: formData.skills.filter((skill) => skill !== val),
      });
    }
    else{
      setFormData({...formData, skills: [...formData.skills, val],
      });
    }
    }}/> {''} CSS
    <input type='checkbox' name='skills' value='JavaScript' checked={formData.skills.includes('JavaScript')}onChange={(e)=>{
      const val =e.target.value;
      if(formData.skills.includes(val)){
      setFormData({...formData, skills: formData.skills.filter((skill) => skill !== val),
      });
    }
    else{
      setFormData({...formData, skills: [...formData.skills, val],
      });
    }
    }}/> {''}JavaScript
    <input type='checkbox' name='skills' value='ReactJS' checked={formData.skills.includes('ReactJS')}onChange={(e)=>{
      const val =e.target.value;
      if(formData.skills.includes(val)){
      setFormData({...formData, skills: formData.skills.filter((skill) => skill !== val),
      });
    }
    else{
      setFormData({...formData, skills: [...formData.skills, val],
      });
    }
    }}/> {''}ReactJS
    <input type='checkbox' name='skills' value='NodeJS' checked={formData.skills.includes('NodeJS')}onChange={(e)=>{
      const val =e.target.value;
      if(formData.skills.includes(val)){
      setFormData({...formData, skills: formData.skills.filter((skill) => skill !== val),
      });
    }
    else{
      setFormData({...formData, skills: [...formData.skills, val],
      });
    }
    }}/> {''}NodeJS
    </div>
    {formData.skills.includes("HTML"&&"CSS"&&"JavaScript")?(<p>You Have Eligible for this Internship</p>): null}
   
   <div>
   
    {formData.success && (
  <p className="text-success">Successfully filled your form!</p>
)}
<button
  className={`btn ${formData.error ? "btn-disabled" : ""}`}
  onClick={saveName}
>Save
   </button>

   <button className='btn' 
    onClick={()=>{
    localStorage.clear();
    setFormData({ name:'', email:'', year:'',phone:'', gender:'',skills:[], error:''});
   }}
   >Clear</button> 

   </div>     
   </div>
   
   
  );
}

export default Home;

