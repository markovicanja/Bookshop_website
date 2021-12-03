export class Book {
    title: string;
    author: string;
    pages: number;
    year: number;
    description: string;
    picture: string;
    promotion: boolean;
    rating: number;
    comments: [
        {
            name: string;
            comment: string;
        }
    ]
}