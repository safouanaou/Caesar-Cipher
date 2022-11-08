const select = document.querySelectorAll('.index');
const selection = document.getElementById('index');
const text = document.getElementById('text');
const cipher = document.getElementById('cipher');
const firstCircle = document.getElementById('big');
const secondCircle = document.getElementById('small');
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


const encrypt = (str, index) => {

  str = text.value;
  index = +selection.value;

    let result = "";
    for (let i = 0; i < str.length; i++) {
      
      let string = str.toLowerCase();
      if(string[i] !== " "){
        let strIndex = alphabet.indexOf(string[i])
        result += alphabet[(strIndex + index) % 26 ] ;
      }else{
        result += " ";
      }
        
    }
        return result
};

const decrypt = (str, index) => {

  str = cipher.value;
  index = +selection.value;
  
  let result = "";
  for (let i = 0; i < str.length; i++) {
    
    let string = str.toLowerCase();
    if(string[i] !== " "){
      let strIndex = alphabet.indexOf(string[i])
      result += alphabet[(((strIndex - index) % 26) + 26) % 26];

      // Note that while in most languages, ‘%’ is a remainder operator, in some (e.g. Python, Perl) it is a modulo operator. For positive values, the two are equivalent, but when the dividend and divisor are of different signs, they give different results. To obtain a modulo in JavaScript, in place of a % n , use ((a % n ) + n ) % n .
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Remainder

    }else{
      result += " ";
    }
      
  }
      return result;
};

const displayEncrypt = () => cipher.value = encrypt();
    
  
const displayDecrypt = () => text.value = decrypt();
    

  const rotate = index => {
    
    let firstCircleMove = firstCircle.style.transform = 'rotate(-83.2deg)';
    
    let secondCircleMove = secondCircle.style.transform = `rotate(${55.46 + (-13.86 * index) + 'deg'})`;
    
  };

text.addEventListener('input', (e)=>{
  if(selection.value == ""){
    alert('Click on S Icon to Choose a shifting value');
    text.value = "";
  }else{
    displayEncrypt();
  }

});

cipher.addEventListener('input', (e)=>{
  if(selection.value == ""){
    alert('Click on S Icon to Choose a shifting value');
    cipher.value = "";
  }else{
    displayDecrypt();
  }
});

select.forEach((num)=>{
  num.addEventListener('click', (e)=>{
    if(num.value !== ""){
      rotate(+e.target.value);
    }else return
  })
});


