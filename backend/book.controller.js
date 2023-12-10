import Book from "./models/book.model.js"
export default class bookcontroller{
    static async   addbook(req,res){
        //console.log(req.body);
        try{
        const newbook=await Book(req.body);
        //console.log(newbook);
        //await newbook.save();
        const newbooks=await Book.create(req.body);
        res.status(200).send(newbooks);
        }
        catch(error){
            console.log("book is not added");
        }

    }
    static async getbook(req,res){
        try{
            const books=await Book.find({});
            res.status(200).json({
                count: books.length,
                book: books,
              });
            

        }
        catch(err){
            console.log("not able to get book");
        }
    }
    static async updatebook(req,res){
        try{
            const {id}=req.params;
            //console.log(id);
            const book=await Book.findByIdAndUpdate(id,req.body);
            res.status(200).send(book);

        }
        catch{

        }
    }
    static async deletebook(req,res){
        try{
            const {id}=req.params;
            const book=await Book.findByIdAndDelete(id);
            res.status(200).send(book);
        }
        catch(error){
            console.log("errpr in delete");
        }
    }

}