/**
 * Criar interface para object.
 */

interface TechObject{
    title: string;
    experience: number;
}

interface CreateUserData{
    name?: string; //name não é um dado necessário
    email: string;
    password: string;
    techs: Array<string | TechObject>; // Recebe uma string ou um objeto do tipo TechObject
}



export default function createUser({name, email, password}: CreateUserData){
    const user = {
        name,
        email,
        password,
    }
    return user;
}