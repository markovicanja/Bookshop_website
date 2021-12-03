import {User} from '../model/user.model';

export var allUsers: User[] = [
    {
        username: "anjamarkovic", 
        password: "123", 
        type: "kupac", 
        firstName: "Anja",
        lastName: "Marković",
        phone: "123-456-789",
        address: "Francuska 11"
    },
    {
        username: "natalijadjuric", 
        password: "123", 
        type: "prodavac",
        firstName: "Natalija",
        lastName: "Đurić",
        phone: "123-123-123",
        address: "Kumodraška 22"
    } 
]