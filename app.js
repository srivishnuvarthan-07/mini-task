var a=document.getElementById('input');
addEventListener("click",()=>{
    var a=document.getElementById('input').value.toLowerCase();
    fetchData(a);
})
async function fetchData(a){
    try{
       const s=await fetch(`https://pokeapi.co/api/v2/pokemon/${a}`);
       if(!s.ok){
            throw new Error("helllo");
       }
       const d=await s.json();
       console.log(d);
       document.getElementById('ooo').src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${d.id}.png`;
    }
    catch(Error){
        document.getElementById("ooo").src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png`
    }
    
}
