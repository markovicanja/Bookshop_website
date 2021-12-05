import { Book } from "./book.model";

export class Recommendations {
    user: string;
    recommendations: Recommendation[]
}

export class Recommendation {
    book: Book
    username: string;
}