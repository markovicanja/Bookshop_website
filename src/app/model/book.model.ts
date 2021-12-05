import { Comment } from "./comment.model";

export class Book {
    title: string;
    author: string;
    pages: number;
    year: number;
    description: string;
    image: string;
    promotion: boolean;
    rating: number;
    comments: Comment[]
}