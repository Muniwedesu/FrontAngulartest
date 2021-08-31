export class Post {
  constructor(
    //id is received from backend
    //or generated there by DB for new posts
    public id?: number,
    public title: string = "",
    public content: string = "",
  ) { }
}