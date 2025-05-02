class Password{

    constructor() {
         this.items = {
            upperl: [...Array(26).keys()].map(i => String.fromCharCode(i + 65)), 
            lowerl: [...Array(26).keys()].map(i => String.fromCharCode(i + 97)), 
            sp_charl: [...`!@#$%^&*()_+-={}:<>?`].filter(c => c !== ''),
            numsl : [...Array(10).keys()].map(i => i.toString()),
         funnyl :[
                "ohpleasehackme","ilovepasswords","letmeinpls","trustmebro","secretpassword","notmypassword","ihaveasecret","donttellanyone","mybirthdayis","iloveyoutoo","welcomehome","monkeybusiness","footballfan","baseballrules","basketballforever","hockeyislife","soccerfanatic","mlbmaster", "nbaaddict","nhlenthusiast","gamelife","pwnedalready","hackedagain","securityfail", "password1234","qwertyui"
              ]
          };

          this.len = document.querySelector("#length")
          this.passtype = document.querySelector("#passtype")
          this.btn = document.querySelector(".btn")
          this.display = document.querySelector("#display")
          this.ok = document.querySelector(".ok")
          this.type_ok = document.querySelector(".type_ok")

          this.div = document.createElement("div")
          this.div.classList.add("type_ok")
  
          this.len = document.createElement("input")
          this.len.type="number"
          this.len.id="length"
          this.len.classList.add("items")
          this.len.placeholder = "Enter the length of password"

          this.ok1 = document.createElement("h2")
          this.ok1.innerHTML = "<b class='ok' id='ok'>✓</b>"
          this.ok1.classList.add("sec_ok")
}
      process(){
      
        this.ok.addEventListener("click",()=>{
        if(this.passtype.value == ""){
            alert("Please select the password type")
        }
        else{
            this.ok.style.color = "#00ff2a"
            let rn = Math.floor(Math.random()*25)
            
            this.str = ""
        if(this.passtype.value == "funny"){
            this.div.remove()
                 this.str = this.items.funnyl[rn]
        }
        else{
            this.div.append(this.len)
            this.div.append(this.ok1)
            this.type_ok.after(this.div)
            
            this.ok1.addEventListener("click",()=>{
            if(this.len.value == ""){
                    alert("Please enter the length of password")
                  }
                
          if(this.len.value == ""){
            alert("Please enter the length of password")
          }
          else{
            document.querySelector("#ok").style.color = "#00ff2a"

            let password = "";
        if(this.passtype.value == "strong"){

        let characters = this.items.upperl.concat(this.items.lowerl, this.items.sp_charl);
        for(let i=0;i<this.len.value;i++){
            let rm = Math.floor(Math.random()*characters.length);
            password+=characters[rm];
        }
            this.str=password
    }


    else if(this.passtype.value == "weak"){
        let characters = this.items.upperl.concat(this.items.lowerl);
        for(let i=0;i<this.len.value;i++){
            let rm = Math.floor(Math.random()*characters.length);
            password+=characters[rm];
        }
            this.str=password
    }
    else if(this.passtype.value == "ultimate"){
        let characters = this.items.upperl.concat(this.items.lowerl,this.items.sp_charl,this.items.numsl);
        for(let i=0;i<this.len.value;i++){
            let rm = Math.floor(Math.random()*characters.length);
            password+=characters[rm];
        }
            this.str = password
    }
            }
        })
        }
    }
    })



    this.btn.addEventListener("click",()=>{
        if(this.passtype.value == ""){
            alert("Please select the password type")
        }
        else{

            this.display.value = this.str
            this.ok.style.color = "darkgreen"
        document.querySelector("#ok").style.color = "darkgreen"
        }
    })
      

}

}

let ps = new Password()

ps.process()