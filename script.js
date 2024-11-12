const quotesList = [
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { quote: "With great power comes great responsibility.", author: "Voltaire" },
    { quote: "Fame is a vapor, popularity an accident, riches take wings. Only one thing endures, and that is character.", author: "Horace Greeley" },
    { quote: "Money often costs too much.", author: "Ralph Waldo Emerson" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
    { quote: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus" },
    { quote: "It is not the man who has too little, but the man who craves more, that is poor.", author: "Seneca" },
    { quote: "The greatest wealth is to live content with little.", author: "Plato" },
    { quote: "Wealth is the ability to fully experience life.", author: "Henry David Thoreau" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.", author: "Ayn Rand" },
    { quote: "The mind is everything. What you think you become.", author: "Buddha" },
    { quote: "The true measure of an individual is how he treats a person who can do him absolutely no good.", author: "Ann Landers" },
    { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama XIV" },
    { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
    { quote: "Life is short, and it's up to you to make it sweet.", author: "Sarah Louise Delany" },
    { quote: "Life is a flower of which love is the honey.", author: "Victor Hugo" },
    { quote: "Life is about making an impact, not making an income.", author: "Kevin Kruse" },
    { quote: "Life is like photography. You need the negatives to develop.", author: "Unknown" },
    { quote: "Life is a long lesson in humility.", author: "James M. Barrie" },
    { quote: "Life is not about waiting for the storm to pass, but learning to dance in the rain.", author: "Vivian Greene" },
    { quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Life is a journey that must be traveled no matter how bad the roads and accommodations.", author: "Oliver Goldsmith" },
    { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou" },
    { quote: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.", author: "Sholom Aleichem" },
    { quote: "Life is not about waiting for the storms to pass, but learning to dance in the rain.", author: "Vivian Greene" },
    { quote: "The purpose of our lives is to add value to the people of this generation and those that follow.", author: "Richard Branson" },
    { quote: "Life is not a problem to be solved, but a reality to be experienced.", author: "Soren Kierkegaard" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Life is a mirror and will reflect back to the thinker what he thinks into it.", author: "Ernest Holmes" },
    { quote: "Life is short, but it's long enough to ruin any man who wants to be ruined.", author: "Josh Billings" },
    { quote: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
    { quote: "Life is a succession of lessons which must be lived to be understood.", author: "Helen Keller" },
    { quote: "Life is either a daring adventure or nothing.", author: "Helen Keller" },
    { quote: "Life is a succession of lessons which must be lived to be understood.", author: "Helen Keller" },
    { quote: "Life is either a daring adventure or nothing.", author: "Helen Keller" },
    { quote: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.", author: "Sholom Aleichem" },
    { quote: "Life is not about waiting for the storms to pass, but learning to dance in the rain.", author: "Vivian Greene" },
    { quote: "The purpose of our lives is to add value to the people of this generation and those that follow.", author: "Richard Branson" },
    { quote: "Life is not a problem to be solved, but a reality to be experienced.", author: "Soren Kierkegaard" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Life is a mirror and will reflect back to the thinker what he thinks into it.", author: "Ernest Holmes" },
    { quote: "Life is short, but it's long enough to ruin any man who wants to be ruined.", author: "Josh Billings" },
    { quote: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },  
    { quote: "Wherever you go, go with all your heart.", author: "Confucius (Chinese)" },
    { quote: "The journey is the reward.", author: "Taoist Saying (Chinese)" },
    { quote: "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.", author: "Bil Keane (American)" },
    { quote: "The flower that blooms in adversity is the most rare and beautiful of all.", author: "Walt Disney (American)" },
    { quote: "When the heart is at ease, the body is healthy.", author: "Chinese Proverb (Chinese)" },
    { quote: "The bamboo that bends is stronger than the oak that resists.", author: "Japanese Proverb (Japanese)" },
    { quote: "A person who chases two rabbits catches neither.", author: "Chinese Proverb (Chinese)" },
    { quote: "Fall seven times, stand up eight.", author: "Japanese Proverb (Japanese)" },
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb (Chinese)" },
    { quote: "A smooth sea never made a skilled sailor.", author: "English Proverb (English)" },
    { quote: "Do not judge a tree by its bark.", author: "African Proverb (African)" },
    { quote: "A mistake is a lesson, not a loss.", author: "Unknown (American)" },
    { quote: "No one is free who has not obtained the empire of himself.", author: "Pythagoras (Greek)" },
    { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates (Greek)" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius (Chinese)" },
    { quote: "Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.", author: "Chinese Proverb (Chinese)" },
    { quote: "Do not seek to follow in the footsteps of the wise; seek what they sought.", author: "Matsuo Basho (Japanese)" },
    { quote: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb (African)" },
    { quote: "To know others is wisdom, to know yourself is enlightenment.", author: "Lao Tzu (Chinese)" },
    { quote: "A bird does not sing because it has an answer. It sings because it has a song.", author: "Chinese Proverb (Chinese)" },
    { quote: "The wise adapt themselves to circumstances, as water molds itself to the pitcher.", author: "Chinese Proverb (Chinese)" },
    { quote: "Even a clock that does not work is right twice a day.", author: "Polish Proverb (Polish)" },
    { quote: "If you want to know the road ahead, ask those coming back.", author: "Chinese Proverb (Chinese)" },
    { quote: "Do not be afraid of going slowly; be afraid only of standing still.", author: "Chinese Proverb (Chinese)" },
    { quote: "The one who asks questions doesn't lose his way.", author: "African Proverb (African)" },
    { quote: "The person who removes a mountain begins by carrying away small stones.", author: "Chinese Proverb (Chinese)" },
    { quote: "He who is outside his door has the hardest part of his journey behind him.", author: "Dutch Proverb (Dutch)" },
    { quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein (German)" },
    { quote: "The tongue is but three inches long, yet it can kill a man six feet high.", author: "Japanese Proverb (Japanese)" },
    { quote: "Do not confine your children to your own learning, for they were born in another time.", author: "Chinese Proverb (Chinese)" },
    { quote: "He who asks is a fool for five minutes, but he who does not ask remains a fool forever.", author: "Chinese Proverb (Chinese)" },
    { quote: "A good neighbor is a priceless treasure.", author: "Chinese Proverb (Chinese)" },
    { quote: "Better a diamond with a flaw than a pebble without.", author: "Chinese Proverb (Chinese)" },
    { quote: "A wise man makes his own decisions, an ignorant man follows public opinion.", author: "Chinese Proverb (Chinese)" },
    { quote: "The more you know, the less you need.", author: "Aboriginal Saying (Australian)" },
    { quote: "Fall seven times, stand up eight.", author: "Japanese Proverb (Japanese)" },
    { quote: "A smooth sea never made a skilled sailor.", author: "English Proverb (English)" },
    { quote: "Do not judge a tree by its bark.", author: "African Proverb (African)" },
    { quote: "A mistake is a lesson, not a loss.", author: "Unknown (American)" },
    { quote: "No one is free who has not obtained the empire of himself.", author: "Pythagoras (Greek)" },
    { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates (Greek)" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius (Chinese)" },
    { quote: "Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.", author: "Chinese Proverb (Chinese)" },
    { quote: "Do not seek to follow in the footsteps of the wise; seek what they sought.", author: "Matsuo Basho (Japanese)" },
    { quote: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb (African)" },
    { quote: "To know others is wisdom, to know yourself is enlightenment.", author: "Lao Tzu (Chinese)" },
    { quote: "A bird does not sing because it has an answer. It sings because it has a song.", author: "Chinese Proverb (Chinese)" },
    { quote: "The wise adapt themselves to circumstances, as water molds itself to the pitcher.", author: "Chinese Proverb (Chinese)" },
    { quote: "Even a clock that does not work is right twice a day.", author: "Polish Proverb (Polish)" },
    { quote: "If you want to know the road ahead, ask those coming back.", author: "Chinese Proverb (Chinese)" },
    { quote: "Do not be afraid of going slowly; be afraid only of standing still.", author: "Chinese Proverb (Chinese)" },
    { quote: "The one who asks questions doesn't lose his way.", author: "African Proverb (African)" },
    { quote: "The person who removes a mountain begins by carrying away small stones.", author: "Chinese Proverb (Chinese)" },
    { quote: "He who is outside his door has the hardest part of his journey behind him.", author: "Dutch Proverb (Dutch)" },
    { quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein (German)" },
    { quote: "The tongue is but three inches long, yet it can kill a man six feet high.", author: "Japanese Proverb (Japanese)" },
    { quote: "Do not confine your children to your own learning, for they were born in another time.", author: "Chinese Proverb (Chinese)" },
    { quote: "He who asks is a fool for five minutes, but he who does not ask remains a fool forever.", author: "Chinese Proverb (Chinese)" },
    { quote: "A good neighbor is a priceless treasure.", author: "Chinese Proverb (Chinese)" },
    { quote: "Better a diamond with a flaw than a pebble without.", author: "Chinese Proverb (Chinese)" },
    { quote: "A wise man makes his own decisions, an ignorant man follows public opinion.", author: "Chinese Proverb (Chinese)" },
    { quote: "The more you know, the less you need.", author: "Aboriginal Saying (Australian)" },
    { quote: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu (Chinese)" },
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi (Indian)" },
    { quote: "Even a small star shines in the darkness.", author: "Finnish Proverb (Finnish)" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama (Tibetan)" },
    { quote: "A bird sitting on a tree is never afraid of the branch breaking, because her trust is not on the branch but on its own wings. Always believe in yourself.", author: "Unknown (African)" },
    { quote: "He who learns, teaches.", author: "Ethiopian Proverb (Ethiopian)" },
    { quote: "The flower that blooms in adversity is the rarest and most beautiful of all.", author: "The Emperor (Chinese)" },
    { quote: "He who is not courageous enough to take risks will accomplish nothing in life.", author: "Muhammad Ali (Islamic)" },
    { quote: "A journey of a thousand miles begins with a single step.", author: "Confucius (Chinese)" },
    { quote: "Where there is love, there is no darkness.", author: "Burundian Proverb (African)" },
    { quote: "One can pay back the loan of gold, but one dies forever in debt to those who are kind.", author: "Malayan Proverb (Malaysian)" },
    { quote: "Unity is strength, division is weakness.", author: "Swahili Proverb (African)" },
    { quote: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden (American)" },
    { quote: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested.", author: "African Proverb (African)" },
    { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein (German)" },
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi (Indian)" },
    { quote: "Even a small star shines in the darkness.", author: "Finnish Proverb (Finnish)" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama (Tibetan)" },
    { quote: "A bird sitting on a tree is never afraid of the branch breaking, because her trust is not on the branch but on its own wings. Always believe in yourself.", author: "Unknown (African)" },
    { quote: "He who learns, teaches.", author: "Ethiopian Proverb (Ethiopian)" },
    {quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
}, {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
}, {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
}, {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt"
}, {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
}, {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
}, {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
}, {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
}, {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson"
}, {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
}, {
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison"
}, {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
}, {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
}, {
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw"
}, {
    quote: "Every child is an artist. The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso"
}, {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
}, {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
}, {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
}, {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
}, {
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar"
}, {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot"
}, {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
}, {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
}, {
    quote: "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh"
}, {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
}, {
    quote: "The only thing worse than being blind is having sight but no vision.",
    author: "Helen Keller"
}, {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
}, {
    quote: "It always seems impossible until it is done.",
    author: "Nelson Mandela"
}, {
    quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson"
}, {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama XIV"
}, {
    quote: "The only person you should try to be better than is the person you were yesterday.",
    author: "Anonymous"
}, {
    quote: "We become what we think about.",
    author: "Earl Nightingale"
}, {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
}, {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso"
}, {
    quote: "What we think, we become.",
    author: "Buddha"
}, {
    quote: "Whatever you are, be a good one.",
    author: "Abraham Lincoln"
}, {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
}, {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
}, {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
}, {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra"
}, {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson"
}, {
    quote: "The only way to predict the future is to create it.",
    author: "Abraham Lincoln"
}, {
    quote: "In order to be irreplaceable one must always be different.",
    author: "Coco Chanel"
}, {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
}, {
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke"
}, {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
}, {
    quote: "If you want to shine like the sun, first burn like the sun.",
    author: "A. P. J. Abdul Kalam"
}, {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
}, {
    quote: "It's not what you look at that matters, it's what you see.",
    author: "Henry David Thoreau"
}, {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt"
}, {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
}, {
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke"
}, {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama XIV"
}, {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot"
}, {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
}, {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
}, {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
}, {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
}, {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale"
}, {
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
}, {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
}, {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison"
}, {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
}, {
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke"
}, {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama XIV"
}, {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot"
}, {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
}, {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
}, {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
}, {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
}, {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale"
}, {
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
}, {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
}, {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison"
}, {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
}, {
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke"
}, {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama XIV"
}, {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot"
}, {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
}, {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
}, {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
}, {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
}, {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale"
}, {
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
}, {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
}, {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison"
}, // Add more quotes here...
];

let quoteElement = '';
let authorElement = '';

quoteElement = document.querySelector('.quote').innerHTML
authorElement = document.querySelector('.author')

function randomQuote() {
    let quoteChoice = quotesList[Math.floor(Math.random() * quotesList.length)]

    quoteElement = quoteChoice.quote
    authorElement = quoteChoice.author

    document.querySelector('.quote').innerHTML = quoteElement
    document.querySelector('.author').innerHTML = authorElement

}

const quoteSelector = document.querySelector('.quote')

quoteSelector.classList.add('q-mark')


// Dark mode
const toggleBtn = document.querySelector('.toggleBtn');
const slider = document.querySelector('.slider');
const body =  document.querySelector('.body-container')
const navBar = document.querySelector('.nav-bar')
const darkModeTxt = document.getElementById('light-mode')

toggleBtn.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('bg-color')
        console.log(body)
    } else if (body.classList.contains('bg-color')) {
        body.classList.remove('bg-color')
        console.log('removed')
    }
})