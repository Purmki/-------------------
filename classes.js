  
  
  function Book(title,category,author,pages,cover){
        this.title=title;
        this.category= category;
        this.author=author;
        this.pages=pages;
        this.cover=cover
        this.render=function(){
            return `<div class="singleBook">
            <h1>${this.title}</h1>
            <p>${this.category}</p>
            <p>${this.author}</p>
            <p>${this.pages}</p>
            <img src="${this.cover}">
            </div>`;
        }
    }

    myArray=[]
    const book1=new Book("harry poter and the stone","fantasy","j.k.r",600,"https://static1.purebreak.com.br/articles/4/10/25/34/@/426336-teaser-de-harry-potter-20-anos-de-magia-200x200-2.jpg")
    const book2=new Book("harry poter and the room","fantasy","j.k.r",700,"https://pbs.twimg.com/profile_images/1491726620469735428/kc2_Ujzq_200x200.jpg")
    const book3=new Book("harry poter and azkaban","fantasy","j.k.r",800,"https://rlv.zcache.com/harry_potter_ron_hermione_dobby_group_shot_poster-r4c89feb9d22d40fd992cf1b2c482b01c_wu8_8byvr_200.jpg")
    myArray.push(book1,book2,book3)
    console.log(myArray[0].render())
    myArray.forEach(myArray => {
        bookContainer.innerHTML+= myArray.render()
        bookContainer.style.display ="flex"
    });

//   class basic{
//     constructor(width,height,){
//         this.width=width;
//         this.height=height
//     }
//   }
//   class player extends basic{
//     constructor(width,height,name,color,x,y,life,image){
//         super(width,height);
//         this.name=name;
//         this.color=color;
//         this.x=x;
//         this.y=y;
//         this.life=life;
//         this.image=image;
//     }
//     run(){
//             return `${this.name} is running`
//     }
//     fullHp(){
//         if(this.life==0){
//             return `${this.name} is dead`
//         }
//         return `${this.life} is 20`
        
//     }
// }



// class Product{
//     constructor(price,inSale,salePercentage,priceAfterDiscount,image,quantity){
//         this.price=price;
//         this.inSale=inSale;
//         this.salePercentage=salePercentage;
//         this.priceAfterDiscount=priceAfterDiscount;
//         this.image=price;
//         this.quantity=quantity;
//     }

//     getTotalPrice(){
//         if(this.inSale){
//             // return `${this.}`
//         }
        
//     }

// }
//  const myProduct=new Product(40,true,10,36,20)


  
