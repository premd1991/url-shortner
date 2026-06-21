const userMapToId = new Map();

export function setUser(id, user){
    let result = userMapToId.set(id, user)
    console.log(result);
    return result;
}

export function getUser(id){
    let result = userMapToId.get(id);
    console.log(result);
    return result;
}

export function clearUser(id){
    let result = userMapToId.delete(id);
    console.log(result);
    return result;
}