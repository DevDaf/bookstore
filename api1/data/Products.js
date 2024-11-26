const products = [
    {
 
        name: "Harry Potter",
        image: "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg",
        description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.",
        price: 40,
        countInStock: 10,
        rating: 4.8,
        numReview: 12023,
    },
    {

        name: "Lord of the Rings",
        image: "https://m.media-amazon.com/images/I/7125+5E40JL._AC_UF1000,1000_QL80_.jpg",
        description: "A ring with mysterious powers lands in the hands of a young hobbit, Frodo. Under the guidance of Gandalf, a wizard, he and his three friends set out on a journey and land in the Elvish kingdom.",
        price: 45,
        countInStock: 10,
        rating: 4.9,
        numReview: 12211,
    },
    {
        
        name: "The Book Of Azreal",
        image: "https://m.media-amazon.com/images/I/71j1ZvfaJaL._AC_UF1000,1000_QL80_.jpg",
        description: "World Ender meets Ender of Worlds... A thousand years ago, Dianna gave up her life in the deserts of Eoria to save her dying sister. She called upon anyone who would listen, not expecting a monster far worse than any nightmare to answer. Now she does what Kaden asks, even if that means securing an ancient relic from the very creatures that hunt her.",
        price: 20,
        countInStock: 10,
        rating: 4.7,
        numReview: 1412,
    },
    {

        name: "Zodiac Academy",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560277389i/46261182.jpg",
        description: "You have been selected to attend Zodiac Academy, where your star sign defines your destiny. If you're one of the Fae, elemental magic is in your blood. And apparently it's in ours. As twins born in the month of Gemini, we're a rare breed even in this academy of supernatural a-holes. Changelings were outlawed hundreds of years ago but I guess our birth parents didn't get the memo. Which means we're totally unprepared for the ruthless world of Fae.",
        price: 25,
        countInStock: 10,
        rating: 4.8,
        numReview: 9412,
    },
    {

        name: "Fourth Wing",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701980900i/61431922.jpg",
        description: "Enter the brutal and elite world of a war college for dragon riders... Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders.",
        price: 25,
        countInStock: 10,
        rating: 4.8,
        numReview: 12000,
    },
    {

        name: "The Name of the Wind",
        image: "https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg",
        description: "Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.",
        price: 20,
        countInStock: 10,
        rating: 4.8,
        numReview: 12000,
    },
    {

        name: "The Tainted Cup",
        image: "https://m.media-amazon.com/images/I/81qAWF1ZebL._AC_UF1000,1000_QL80_.jpg",
        description: "In Daretana’s most opulent mansion, a high Imperial officer lies dead—killed, to all appearances, when a tree spontaneously erupted from his body. Even in this canton at the borders of the Empire, where contagions abound and the blood of the Leviathans works strange magical changes, it’s a death at once terrifying and impossible.",
        price: 20,
        countInStock: 10,
        rating: 4.8,
        numReview: 12000,
    },
    {

        name: "How to Become the Dark Lord and Die Trying",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696399460i/198493860.jpg",
        description: "Groundhog Day meets Guardians of the Galaxy in Django Wexler’s laugh-out-loud fantasy tale about a young woman who, tired of defending humanity from the Dark Lord, decides to become the Dark Lord herself.",
        price: 20,
        countInStock: 10,
        rating: 4.8,
        numReview: 12000,
    },
    {

        name: "The Justice of Kings",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635718816i/58293284.jpg",
        description: "Action, intrigue, and magic collide in this epic fantasy following Sir Konrad Vonvalt, an Emperor's Justice, who is a detective, judge, and executioner all in one—but with rebellion and unrest building, these are dangerous times to be a Justice . . . vivid descriptions and an imaginative story line...",
        price: 20,
        countInStock: 10,
        rating: 4.8,
        numReview: 12000,
    },
    {

        name: "A Tempest of Tea",
        image: "https://m.media-amazon.com/images/I/81qK5EplImL._AC_UF1000,1000_QL80_.jpg",
        description: "Featuring viWhy save the world when you can have tea? On the streets of White Roaring, Arthie Casimir is a criminal mastermind and collector of secrets. Her prestigious tearoom transforms into an illegal bloodhouse by dark, catering to the vampires feared by society. But when her establishment is threatened, Arthie is forced to strike an unlikely deal with an alluring adversary to save it—and she can’t do the job alone.vid descriptions and an imaginative story line...",
        price: 20,
        countInStock: 10,
        rating: 4.8,
        numReview: 12000,
    },
    {

        name: "The Bright Sword",
        image: "https://m.media-amazon.com/images/I/71hShAWXIQL._AC_UF1000,1000_QL80_.jpg",
        description: "A gifted young knight named Collum arrives at Camelot to compete for a spot on the Round Table, only to find he’s too late. The king died two weeks ago at the Battle of Camlann, leaving no heir, and only a handful of the knights of the Round Table survive.",
        price: 20,
        countInStock: 10,
        rating: 4.8,
        numReview: 12000,
    },
    {

        name: "A Sorceress Comes to Call",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697733485i/195790847.jpg",
        description: "A dark retelling of the Brothers Grimm's Goose Girl, rife with secrets, murder, and forbidden magic Cordelia knows her mother is unusual. Their house doesn’t have any doors between rooms, and her mother doesn't allow Cordelia to have a single friend—unless you count Falada, her mother's beautiful white horse. The only time Cordelia feels truly free is on her daily rides with him. But more than simple eccentricity sets her mother apart. Other mothers don’t force their daughters to be silent and motionless for hours, sometimes days, on end. Other mothers aren’t sorcerers.",
        price: 20,
        countInStock: 10,
        rating: 4.8,
        numReview: 12000,
    },

];

module.exports = products;