const axios = require("axios");

const getListBooks = async function (){
	data = await axios
      .get("http://localhost:5000/")
      .then((res) => {
        // console.log(res)
        return res.data;
      })
      .catch((error) => {
        return error;
      });
    return data;
};
(async()=>{
    let listBooks= await getListBooks();
    console.log(listBooks);
})();

const getBookDetails = async function (){
	data = await axios
      .get("http://localhost:5000/isbn/2")
      .then((res) => {
        // console.log(res)
        return res.data;
      })
      .catch((error) => {
        return error;
      });
    return data;
};
(async()=>{
    let BookDetails= await getBookDetails();
    console.log(BookDetails);
})();

const getBookAuthor = async function (){
	data = await axios
      .get("http://localhost:5000/author/Dante Alighieri")
      .then((res) => {
        // console.log(res)
        return res.data;
      })
      .catch((error) => {
        return error;
      });
    return data;
};
(async()=>{
    let BookAuthor= await getBookAuthor();
    console.log(BookAuthor);
})();

const getBookTitle = async function (){
	data = await axios
      .get("http://localhost:5000/title/One Thousand and One Nights")
      .then((res) => {
        // console.log(res)
        return res.data;
      })
      .catch((error) => {
        return error;
      });
    return data;
};
(async()=>{
    let BookTitle= await getBookTitle();
    console.log(BookTitle);
})();