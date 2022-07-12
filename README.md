<div align="center">
<h1>VALEX</h1>
<p>
<img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f355.svg" alt="Pizza emoji" width=200px/>
</p>
<br>
<p > <b>The Valex project is an API to create benefits cards for employees<b> </p>
 
 ![NODE.JS](https://camo.githubusercontent.com/2e5a624f533563052290ad30aed4ecc1092945a458c80cd753d108807e0293b5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f6465206a732532302d2532333230323332612e7376673f267374796c653d666f722d7468652d626164676526636f6c6f723d333339393333266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d666666666666)    ![EXPRESS](https://camo.githubusercontent.com/56960eb8a4e655c887ee533f3d6b29ad57255c69a3e07b0455f29af3ad4947fd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732532302d2532333230323332612e7376673f267374796c653d666f722d7468652d626164676526636f6c6f723d303030303030266c6f676f3d45787072657373266c6f676f436f6c6f723d666666666666)

 </div>
 
 ## INSTALLATION
 
 ```
# Clone this repository
$ git clone https://github.com/Rodolpho-Oliveira/projeto18-valex.git

# Go into the repository
$ cd projeto18-valex

# Install dependencies
$ npm install

 ```
 
 ## USAGE
 
 POST ```/create```<br>
 
 Need to receive through the body a parameter ```employeeId``` and a ```type``` and through the header a parameter ```x-api-key```<br>
 
 (Types: ```'groceries', 'restaurant', 'transport', 'education', 'health'```)
 ```
 {
    employeeId: 1,
    type: "groceries"
 }
 ```
 
 POST ```/active```<br>
 
 Need to receive through the body an parameter ```id```, ```securityCode``` and ```password```
 ```
 {
    id: 1,
    securityCode: "321"
    password: "4321"
 }
 ```
 
 POST ```/block```<br>
 
 Need to receive through the body an parameter ```id````
 ```
   {
      id: 1
   }
 ```
 POST ```/unlock```<br>
 
 Need to receive through the body an parameter ```id``` and ```password```
 ```
   {
      id: 1,
      password: "3241"
   }
 ```
 
  POST ```/recharge```<br>
 
 Need to receive through the body an parameter ```id``` and ```password``` and through the header a parameter ```'x-api-key'```
 ```
   {
      id: 1,
      value: 1000
   }
 ```
 
  POST ```/payment```<br>
 
 Need to receive through the body an parameter ```cardId```, ```password```, ```businessId```and ```amount```
 ```
   {
      cardId: 1,
      password: "1232",
      businessId: 2,
      amount: 2000
   }
 ```
 
   GET ```/balance```<br>
 
 Need to receive through the body an parameter ```id```
 ```
   {
      id: 1
   }
 ```
 
 
