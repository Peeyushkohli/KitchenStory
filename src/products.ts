


export interface Product{
  Id: number;
    productname: string;
    category :string;
    availablequantity :number;
    price: number;
    imageUrl: string;
  }
  

  export const products = [{Id:1 ,
  productname : "Spoon ",
category : "Cutlery",
availablequantity : 40,
price: 200,
imageUrl:  "https://www.istockphoto.com/photo/old-silver-spoon-gm519939025-49758394?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fspoon&utm_term=spoon%3A%3A%3A"},

{ Id:2 ,
  productname : "Bread ",
category : "Bakery",
availablequantity : 300,
price: 50,
imageUrl: " "},

{ Id:3 ,
  productname : "Eggs",
category : "Poultry",
availablequantity : 300,
price: 110,
imageUrl:  "https://media.istockphoto.com/photos/egg-carton-isolated-clipping-path-picture-id171206679?b=1&k=20&m=171206679&s=170667a&w=0&h=L9EUgBIb7dWHrF1gQVfq7tckaLGBOinY_XqfCy28RQs="

},

{Id:4,
  productname : "Sauce",
category : "Ketchup",
availablequantity : 60,
price: 67,
imageUrl: ""},];
