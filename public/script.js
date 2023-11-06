const showFamilyMembers = async () => {
    const familyJSON = await getJSON(); 
    if (familyJSON == ""){
        return; 
    }
   
    
    let familyDiv = document.getElementById("family-list");


    familyJSON.forEach((family) => {
        let section = document.createElement("section");
        section.classList.add("family-member");
        familyDiv.append(section);


        let h6 = document.createElement("h6");
        section.append(h6);
        h6.innerHTML = family.name;

       let  img = document.createElement("img"); 
       section.append(img);
       img.src = "http://localhost:3000" + family.img;
    });
};

const getJSON = async () => {
    try{
        let response = await fetch("http://localhost:3000/api/members");
        return await response.json();
    } catch(error){
        console.log("error retrieving json");
        return "";
    }
}

window.onload = () => {
    showFamilyMembers();
};