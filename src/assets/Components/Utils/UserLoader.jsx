
export const userLoader= async()=>{
  const res=await fetch("https://687de135c07d1a878c304fa7.mockapi.io/users");
  if(!res.ok){
    throw Error('unable to load User details');
  }
  const data =await res.json();
  return data;
};

export const userSingleLoader= async({params})=>{
  const{ id } = params;
  const res = await fetch ( "https://687de135c07d1a878c304fa7.mockapi.io/users/" + id );
  if(!res.ok){
    throw Error("User details not found");
  }
  const data =await res.json();

  return data;
};