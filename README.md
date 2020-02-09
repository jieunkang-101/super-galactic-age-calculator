# Super Galactic Age Calculator 

#### Test Driven Development with JavaScript Independent Project, 7 February 2020
 
#### By **_Jieun Kang_**

## Description
This application translates a user's age of the earth into that of another planet in our solar system (Mercury, Venus, Mars and Jupiter). It will also determine average life expectancy on each planet to collect information from user(country of residence).

## Setup/Installation Requirements

1. Open Terminal and go to the Desktop directory `("cd desktop")`.
2. Clone this repository to your local machine `("git clone _Project-Repo-Here_")`.
3. Once the directory is clonded to your local machine, go to the root directory of this project `("cd _Project-Repo-Here_")`.
4. Type  `("npm install")` to add the correct Node modules and download necessary dependencies to the project.
5. Type `("npm run build")` to create _dist_ folder with `bundle.js` file using webpack.
6. Open cloned directory in Visual Studio Code or preferred text editor `("code .")`.
7. Open `index.html` in _dist_ folder in a preferred browser to view the project. (Google Chrome is recommended)

## Behavior Driven Development Specifications

| Behavior(Spec)<img width=800/>  | Input<img width=300/>  | Output<img width=600/>  |
| :---------------- | :-----: | :-----: |
| Application calculates user's age (round if decimal) in Mercury years. <br/>(A Mercury year is 0.24 Earth years.) | 30 | Mercury Years: 125 |
| Application calculates user's age (round if decimal) in Venus years.  <br/>(A Venus year is 0.62 Earth years.) | 30 | Venus Years: 48 |
| Application calculates user's age (round if decimal) in Mars years.  <br/>(A Mars year is 1.88 Earth years.) | 30 | Mars Years: 16 |
| Application calculates user's age (round if decimal) in Jupiter years.  <br/>(A Jupiter year is 11.86 Earth years.) | 30 | Jupiter Years: 3 |
| Application determaines user's life expectancy measured at birth | 30 | 66 years |
| Application determaines user's life expectancy measured by region | Africa | 61 years |
| Application displays either how many years they have left or how many years they have surpassed the average life expectancy on each planet | 30, <br/> Africa | Life Expectance : 61 years <br /> -Left years your life- <br /> Earth: 31 years <br/> Mercury: 129 years <br/> Venus: 50 years<br/> Mars: 16 years<br/> Jupiter: 3 years |

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery
* Git
* npm

### License

*This webpage is licensed under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license*

Copyright (c) 2020 **_Jieun Kang_**
