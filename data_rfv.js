// Complete dataset from all board questions
const rfvExercisesData = [
    // Board 2023 - Dhaka & Rajshahi
    {
        id: 1,
        board: "Dhaka & Rajshahi",
        year: 2023,
        wordBox: ["obey", "ensure", "be", "expect", "refer", "require", "respect", "hamper", "reflect", "have"],
        passage: "Social value (a) ______ to customs, beliefs, special practices, and norms. It (b) ______ the culture of a nation. It (c) ______ great educative value in our life. In the past, people were very much conscious of (d) ______ social value in each and every walk of life. Earlier, each person (e) ______ very careful of social value. But at present, our social value is in great threat. Young people don't (f) ______ duly to their elders, resulting in social degradation. As a result, peace, order, and a decent life are greatly (g) ______. So, with a view to (h) ______ peace and order in society, social value is badly (i) ______. Without social value, we can't (j) ______ a decent, comfortable, happy, and peaceful life.",
        blanks: [
            { letter: "a", answer: "refers", explanation: "Present Indefinite - 'refers to' is a fixed phrase. The subject 'Social value' is singular, so we use 'refers'." },
            { letter: "b", answer: "reflects", explanation: "Present Indefinite - 'reflects' matches the singular subject 'It' and describes a general truth." },
            { letter: "c", answer: "has", explanation: "Present Indefinite - 'has' is used with the singular subject 'It' to show possession." },
            { letter: "d", answer: "obeying", explanation: "Gerund - after the preposition 'of', we use the -ing form: 'of obeying'." },
            { letter: "e", answer: "was", explanation: "Past Indefinite - 'In the past' indicates past time, so we use 'was' with the singular subject 'each person'." },
            { letter: "f", answer: "respect", explanation: "Present Indefinite (negative) - 'don't' is followed by the base form: 'don't respect'." },
            { letter: "g", answer: "hampered", explanation: "Passive Voice - 'are greatly hampered' indicates that peace, order, and decent life receive the action." },
            { letter: "h", answer: "ensuring", explanation: "Gerund - 'With a view to' is always followed by the -ing form: 'to ensuring'." },
            { letter: "i", answer: "required", explanation: "Passive Voice - 'is badly required' means social value is needed by society." },
            { letter: "j", answer: "expect", explanation: "Modal 'can't' + base form - after 'can't', we use the base form: 'can't expect'." }
        ]
    },
    // Board 2023 - Jashore
    {
        id: 2,
        board: "Jashore",
        year: 2023,
        wordBox: ["be", "bring", "neglect", "spend", "lose", "possess", "pay", "neglect", "claim", "lose"],
        passage: "Most of us (a) ______ the wrong mentality of measuring success in life. Many poor adults (b) ______ that the possession of wealth (c) ______ peace of mind in life. But it (d) ______ not always true. Many have (e) ______ their health to gain wealth, but later (f) ______ much of their wealth to regain health. Isn't that ironical? Again, there are also several people who had (g) ______ high prices for possessing their present wealth. They have (h) ______ friends and family and have (i) ______ opportunities to spend precious moments with those around them. Besides, many have (j) ______ peace within themselves by wanting more and more of everything.",
        blanks: [
            { letter: "a", answer: "possess", explanation: "Present Indefinite - 'Most of us' is plural, so we use the base form 'possess'." },
            { letter: "b", answer: "claim", explanation: "Present Indefinite - 'Many poor adults' is plural, so we use 'claim'." },
            { letter: "c", answer: "brings", explanation: "Present Indefinite - 'the possession' is singular, so we add 's': 'brings'." },
            { letter: "d", answer: "is", explanation: "Present Indefinite - 'it is not always true' - 'it' is singular, so we use 'is'." },
            { letter: "e", answer: "lost", explanation: "Present Perfect - 'have' + V3 = 'have lost'." },
            { letter: "f", answer: "spent", explanation: "Past Indefinite - 'later spent' indicates a past action." },
            { letter: "g", answer: "paid", explanation: "Past Perfect - 'had' + V3 = 'had paid'." },
            { letter: "h", answer: "neglected", explanation: "Present Perfect - 'have' + V3 = 'have neglected'." },
            { letter: "i", answer: "lost", explanation: "Present Perfect - 'have' + V3 = 'have lost'." },
            { letter: "j", answer: "lost", explanation: "Present Perfect - 'have' + V3 = 'have lost'." }
        ]
    },
    // Board 2023 - Cumilla
    {
        id: 3,
        board: "Cumilla",
        year: 2023,
        wordBox: ["reach", "lose", "follow", "have", "bring", "see", "ensure", "ensure", "know"],
        passage: "A proverb goes that a man without an aim is like a ship without a rudder. Likewise, a man without an aim (a) ______ reach his goal. He (b) ______ in his way of life. So everyone should (c) ______ a definite aim. But nothing is more difficult than the choice of a profession. Students (d) ______ it very difficult to choose a suitable profession. Choosing a profession becomes challenging because there (e) ______ many paths and courses open to them. They should (f) ______ their aim according to the abilities they are (g) ______ with. Not all (h) ______ the same abilities and aptitude. Students may (i) ______ their teachers who can (j) ______ their abilities.",
        blanks: [
            { letter: "a", answer: "fails to", explanation: "Present Indefinite - 'a man' is singular, so we use 'fails to'." },
            { letter: "b", answer: "loses", explanation: "Present Indefinite - 'He' is singular, so we add 's': 'loses'." },
            { letter: "c", answer: "have", explanation: "Modal 'should' + base form = 'should have'." },
            { letter: "d", answer: "find", explanation: "Present Indefinite - 'Students' is plural, so we use 'find'." },
            { letter: "e", answer: "are", explanation: "Present Indefinite - 'there are' with plural 'many paths'." },
            { letter: "f", answer: "choose", explanation: "Modal 'should' + base form = 'should choose'." },
            { letter: "g", answer: "endowed", explanation: "Passive - 'are endowed with' means 'are gifted with'." },
            { letter: "h", answer: "have", explanation: "Present Indefinite - 'Not all' is plural, so we use 'have'." },
            { letter: "i", answer: "consult", explanation: "Modal 'may' + base form = 'may consult'." },
            { letter: "j", answer: "assess", explanation: "Modal 'can' + base form = 'can assess'." }
        ]
    },
    // Board 2023 - Chattogram
    {
        id: 4,
        board: "Chattogram",
        year: 2023,
        wordBox: ["visit", "live", "pay", "hear", "call", "live", "think", "appear", "appear", "think"],
        passage: "Abdur Rahman is a student. He (a) ______ in the SSC exam this year. He (b) ______ in Chattogram. He (c) ______ there since his birth but he (d) ______ St. Martin's Island yet. He (e) ______ a lot about the beauty of St. Martin's Island. (f) ______ those, he becomes very eager (g) ______ a visit there. As he is free now, he thinks that he (h) ______ the island now. (i) ______ this, he becomes so excited that he (j) ______ his friends to a meeting.",
        blanks: [
            { letter: "a", answer: "will appear", explanation: "Future Indefinite - 'this year' indicates future time: 'will appear'." },
            { letter: "b", answer: "lives", explanation: "Present Indefinite - 'He lives' (general fact about his residence)." },
            { letter: "c", answer: "has been living", explanation: "Present Perfect Continuous - 'since his birth' indicates an action that started in the past and continues: 'has been living'." },
            { letter: "d", answer: "has not visited", explanation: "Present Perfect - 'yet' is used with Present Perfect in negative sentences: 'has not visited'." },
            { letter: "e", answer: "has heard", explanation: "Present Perfect - 'has heard' indicates a past action with present relevance." },
            { letter: "f", answer: "Hearing", explanation: "Present Participle - 'Hearing those' = 'When he hears those'." },
            { letter: "g", answer: "to pay", explanation: "Infinitive - 'eager to' is followed by 'to + base form': 'to pay'." },
            { letter: "h", answer: "will visit", explanation: "Future Indefinite - 'now' in this context indicates a future plan: 'will visit'." },
            { letter: "i", answer: "Thinking", explanation: "Present Participle - 'Thinking this' = 'When he thinks this'." },
            { letter: "j", answer: "calls", explanation: "Present Indefinite - 'he calls' (habitual action)." }
        ]
    },
    // Board 2023 - Sylhet
    {
        id: 5,
        board: "Sylhet",
        year: 2023,
        wordBox: ["waste", "know", "follow", "observe", "do", "make", "fall", "are", "utilize", "is"],
        passage: "We should (a) ______ the life style of the ants and bees. They (b) ______ good use of their time and store food for the rainy days. They never (c) ______ a single moment in negligence or indolence. So they never (d) ______ into extreme crisis. We (e) ______ the best creatures in creation. We (f) ______ everything good and bad. We can (g) ______ better than the others. We should all (h) ______ every moment properly. Punctuality (i) ______ the best tonic in this regard. We should all (j) ______ the footsteps of the famous persons.",
        blanks: [
            { letter: "a", answer: "observe", explanation: "Modal 'should' + base form = 'should observe'." },
            { letter: "b", answer: "make", explanation: "Present Indefinite - 'They make' (plural subject, base form)." },
            { letter: "c", answer: "waste", explanation: "Present Indefinite (negative) - 'never waste' (plural subject)." },
            { letter: "d", answer: "fall", explanation: "Present Indefinite (negative) - 'never fall' (plural subject)." },
            { letter: "e", answer: "are", explanation: "Present Indefinite - 'We are' (plural subject)." },
            { letter: "f", answer: "know", explanation: "Present Indefinite - 'We know' (plural subject)." },
            { letter: "g", answer: "do", explanation: "Modal 'can' + base form = 'can do'." },
            { letter: "h", answer: "utilize", explanation: "Modal 'should' + base form = 'should utilize'." },
            { letter: "i", answer: "is", explanation: "Present Indefinite - 'Punctuality' is singular, so we use 'is'." },
            { letter: "j", answer: "follow", explanation: "Modal 'should' + base form = 'should follow'." }
        ]
    },
    // Board 2024 - Barishal & Rajshahi
    {
        id: 6,
        board: "Barishal & Rajshahi",
        year: 2024,
        wordBox: ["make", "kill", "throw", "see", "ensure", "originate", "work", "live", "behave"],
        passage: "Rivers generally (a) ______ from a mountain or a lake. They (b) ______ very much important for our existence and economy. But unfortunately, we are (c) ______ our rivers, choking them with toxic wastes from dyeing and textile factories. Most of the industries (d) ______ waste treatment plants. This type of industry is (e) ______ releasing untreated liquid waste directly and (f) ______ the water polluted. Our unconscious people also (g) ______ different kinds of waste materials into the rivers directly. So, to keep the existence of fish and other species (h) ______ in the water is becoming impossible. It is high time the government and the conscious people (i) ______ together to save the rivers. Otherwise, a happy, prosperous, and pollution-free environment for the next generation can't be (j) ______.",
        blanks: [
            { letter: "a", answer: "originate", explanation: "Present Indefinite - 'Rivers generally originate' (general fact, plural)." },
            { letter: "b", answer: "are", explanation: "Present Indefinite - 'They are' (plural subject)." },
            { letter: "c", answer: "killing", explanation: "Present Continuous - 'are killing' (action happening now)." },
            { letter: "d", answer: "do not have", explanation: "Present Indefinite (negative) - 'most industries don't have'." },
            { letter: "e", answer: "releasing", explanation: "Present Continuous - 'is releasing' (action in progress)." },
            { letter: "f", answer: "polluting", explanation: "Present Participle - 'polluting' describes the action of making water polluted." },
            { letter: "g", answer: "throw", explanation: "Present Indefinite - 'people throw' (plural subject)." },
            { letter: "h", answer: "living", explanation: "Keep + object + V-ing = 'keep species living'." },
            { letter: "i", answer: "worked", explanation: "It is high time + S + V2 = 'it is high time the government worked'." },
            { letter: "j", answer: "ensured", explanation: "Passive - 'can't be ensured' (modal + be + V3)." }
        ]
    },
    // Board 2023 - Dinajpur
    {
        id: 7,
        board: "Dinajpur",
        year: 2023,
        wordBox: ["die", "need", "destroy", "go", "make", "cause", "keep", "cause", "get", "name"],
        passage: "There are various types of fever. Dengue is one of them. It (a) ______ by biting of mosquito (b) ______ 'Aedes'. It (c) ______ serious health hazard. Vomiting, high temperature, blood platelets etc. make the patient tormented. Many patients (d) ______ if blood platelets (e) ______ below 50. Much care and proper treatment (f) ______ to save dengue-affected patient. In order to (g) ______ ourselves free from dengue, we (h) ______ our environment clean. Living place of Aedes larva should (i) ______ with a view to (j) ______ ourselves aloof from mosquito bite. The use of curtain is also essential.",
        blanks: [
            { letter: "a", answer: "is caused", explanation: "Passive - 'is caused by' (present passive)." },
            { letter: "b", answer: "named", explanation: "Past Participle - 'mosquito named Aedes' (participle as adjective)." },
            { letter: "c", answer: "causes", explanation: "Present Indefinite - 'It causes' (singular subject)." },
            { letter: "d", answer: "die", explanation: "Present Indefinite - 'Many patients die' (general fact)." },
            { letter: "e", answer: "go", explanation: "Present Indefinite - 'if platelets go below' (condition)." },
            { letter: "f", answer: "are needed", explanation: "Passive - 'are needed to save' (present passive)." },
            { letter: "g", answer: "keep", explanation: "Infinitive - 'In order to keep' (purpose)." },
            { letter: "h", answer: "should keep", explanation: "Modal + base form - 'we should keep'." },
            { letter: "i", answer: "be destroyed", explanation: "Modal + be + V3 - 'should be destroyed' (passive with modal)." },
            { letter: "j", answer: "keeping", explanation: "Gerund - 'With a view to' + V-ing = 'to keeping'." }
        ]
    },
    // Board 2022 - Mymensingh & Cumilla
    {
        id: 8,
        board: "Mymensingh & Cumilla",
        year: 2022,
        wordBox: ["know", "hear", "call", "inspire", "bear", "hinder", "begin", "remember", "be", "join"],
        passage: "You must have (a) ______ the name of Kazi Nazrul Islam. He (b) ______ our national poet. He (c) ______ as a rebel poet as well. He (d) ______ into a poor family. But dire needs could not (e) ______ his potentiality. When the First World War broke out, he (f) ______ the army. After the war, he (g) ______ to write poems. At that time, his poems and songs (h) ______ people against oppression. He (i) ______ the Shelley of Bangla literature. We should (j) ______ him for his great deeds.",
        blanks: [
            { letter: "a", answer: "heard", explanation: "Must have + V3 = 'must have heard' (past modal)." },
            { letter: "b", answer: "is", explanation: "Present Indefinite - 'He is' (general fact)." },
            { letter: "c", answer: "is known", explanation: "Passive - 'is known as' (present passive)." },
            { letter: "d", answer: "was born", explanation: "Past Indefinite - 'was born' (past passive)." },
            { letter: "e", answer: "hinder", explanation: "Could not + base form = 'could not hinder'." },
            { letter: "f", answer: "joined", explanation: "Past Indefinite - 'joined the army' (past action)." },
            { letter: "g", answer: "began", explanation: "Past Indefinite - 'began to write' (past action)." },
            { letter: "h", answer: "inspired", explanation: "Past Indefinite - 'inspired people' (past action)." },
            { letter: "i", answer: "is called", explanation: "Passive - 'is called' (present passive)." },
            { letter: "j", answer: "remember", explanation: "Modal 'should' + base form = 'should remember'." }
        ]
    },
    // Board 2019/2022 - Rajshahi/Jashore
    {
        id: 9,
        board: "Rajshahi/Jashore",
        year: "2019/2022",
        wordBox: ["admit", "form", "take", "owe", "consider", "respect", "succeed", "acquire", "understand", "forget"],
        passage: "In an educational institution teacher-student relationship is (a) ______ to be the most important matter. It is such a relationship that is (b) ______ on the basis of mutual (c) ______. A student always (d) ______ to his teachers because he cannot but (e) ______ help from them in case of (f) ______ knowledge. The sensible students never (g) ______ their teachers. Moreover, they (h) ______ their memorable teachers' role which helps them (i) ______ in life. So, they always (j) ______ their teachers.",
        blanks: [
            { letter: "a", answer: "considered", explanation: "Passive - 'is considered to be' (present passive)." },
            { letter: "b", answer: "formed", explanation: "Passive - 'is formed on' (present passive)." },
            { letter: "c", answer: "understanding", explanation: "Gerund - 'mutual understanding' (noun form)." },
            { letter: "d", answer: "owes", explanation: "Present Indefinite - 'A student owes' (singular subject)." },
            { letter: "e", answer: "take", explanation: "Cannot but + base form = 'cannot but take'." },
            { letter: "f", answer: "acquiring", explanation: "Gerund - after preposition 'of': 'of acquiring'." },
            { letter: "g", answer: "forget", explanation: "Present Indefinite (negative) - 'never forget'." },
            { letter: "h", answer: "admit", explanation: "Present Indefinite - 'they admit' (plural subject)." },
            { letter: "i", answer: "succeed", explanation: "Infinitive - 'helps them to succeed'." },
            { letter: "j", answer: "respect", explanation: "Present Indefinite - 'they respect' (plural subject)." }
        ]
    },
    // Board 2020 - Dhaka/Sylhet (Traffic Jam)
    {
        id: 10,
        board: "Dhaka/Sylhet",
        year: 2020,
        wordBox: ["drive", "solve", "create", "suffer", "occur", "reach", "cause", "violate", "give", "carry"],
        passage: "Traffic jam is a common affair in big cities of our country. Increasing number of vehicles (a) ______ traffic jam. Mainly it (b) ______ in the congested areas. Overtaking tendency also (c) ______ traffic jam. Some drivers (d) ______ the traffic rules and (e) ______ carelessly. It (f) ______ a lot of pains to the people. Ambulances (g) ______ patients cannot (h) ______ hospital timely. Students and office-going people also (i) ______ due to traffic jam. This problem should be (j) ______ immediately.",
        blanks: [
            { letter: "a", answer: "cause", explanation: "Present Indefinite - 'Increasing number' is plural, so 'cause'." },
            { letter: "b", answer: "occurs", explanation: "Present Indefinite - 'it' is singular, so 'occurs'." },
            { letter: "c", answer: "creates", explanation: "Present Indefinite - 'tendency' is singular, so 'creates'." },
            { letter: "d", answer: "violate", explanation: "Present Indefinite - 'drivers' is plural, so 'violate'." },
            { letter: "e", answer: "drive", explanation: "Present Indefinite - 'drive carelessly' (plural subject)." },
            { letter: "f", answer: "gives", explanation: "Present Indefinite - 'it' is singular, so 'gives'." },
            { letter: "g", answer: "carrying", explanation: "Present Participle - 'ambulances carrying patients'." },
            { letter: "h", answer: "reach", explanation: "Modal 'cannot' + base form = 'cannot reach'." },
            { letter: "i", answer: "suffer", explanation: "Present Indefinite - 'people suffer' (plural subject)." },
            { letter: "j", answer: "solved", explanation: "Passive - 'should be solved' (modal + be + V3)." }
        ]
    },
    // Board 2017 - Dhaka (Edison)
    {
        id: 11,
        board: "Dhaka",
        year: 2017,
        wordBox: ["manage", "invent", "rescue", "give", "turn", "acquire", "teach", "work", "print", "go"],
        passage: "Edison never (a) ______ to school. All education that he ever got (b) ______ to him by his mother. At the age of twelve, he was put to (c) ______ on a railway. Having a great deal to do with newspapers, he (d) ______ to publish one of his own, and (e) ______ printed a newspaper of his own named 'The Weekly Herald'. One day he (f) ______ a stationmaster's child which was nearly (g) ______ over by a train. The station-master out of gratitude (h) ______ him how to use the telegraph. Young Edison soon (i) ______ great skill at the telegraph. When only twenty, Edison (j) ______ a new telegraph which was extremely useful.",
        blanks: [
            { letter: "a", answer: "went", explanation: "Past Indefinite - 'never went' (past event)." },
            { letter: "b", answer: "was given", explanation: "Passive - 'was given to him'." },
            { letter: "c", answer: "work", explanation: "Infinitive - 'put to work'." },
            { letter: "d", answer: "managed", explanation: "Past Indefinite - 'managed to publish'." },
            { letter: "e", answer: "printed", explanation: "Past Indefinite - 'printed a newspaper'." },
            { letter: "f", answer: "rescued", explanation: "Past Indefinite - 'rescued a child'." },
            { letter: "g", answer: "run", explanation: "Passive - 'nearly run over'." },
            { letter: "h", answer: "taught", explanation: "Past Indefinite - 'taught him'." },
            { letter: "i", answer: "acquired", explanation: "Past Indefinite - 'acquired skill'." },
            { letter: "j", answer: "invented", explanation: "Past Indefinite - 'invented a telegraph'." }
        ]
    },
    // Board 2016 - Dhaka
    {
        id: 12,
        board: "Dhaka",
        year: 2016,
        wordBox: ["build", "idle", "remember", "work", "lead", "reach", "depend", "follow"],
        passage: "Bangladesh is full of natural resources. The prosperity of the country (a) ______ on the proper utilization of the resources. We should not (b) ______ a lazy life. We should all (c) ______ up our country. For this reason, we have to (d) ______ hard. No nation can prosper without (e) ______ industry. It should be (f) ______ that industry is the key to success. If we (g) ______ this days away, we (h) ______ behind. The nations that (i) ______ industrialized (j) ______ the pinnacle of development. So we (k) ______ them.",
        blanks: [
            { letter: "a", answer: "depends", explanation: "Present Indefinite - 'depends on' (singular subject)." },
            { letter: "b", answer: "lead", explanation: "Modal 'should' + base form = 'should lead'." },
            { letter: "c", answer: "build", explanation: "Modal 'should' + base form = 'should build'." },
            { letter: "d", answer: "work", explanation: "Have to + base form = 'have to work'." },
            { letter: "e", answer: "remembering", explanation: "Preposition 'without' + V-ing = 'without remembering'." },
            { letter: "f", answer: "remembered", explanation: "Passive - 'should be remembered'." },
            { letter: "g", answer: "idle", explanation: "Present Indefinite - 'if we idle'." },
            { letter: "h", answer: "will lag", explanation: "Future Indefinite - 'will lag behind'." },
            { letter: "i", answer: "are", explanation: "Present Indefinite - 'nations that are'." },
            { letter: "j", answer: "reach", explanation: "Present Indefinite - 'reach the pinnacle'." },
            { letter: "k", answer: "should follow", explanation: "Modal - 'should follow'." }
        ]
    },
    // Board 2015 - Dhaka (Women)
    {
        id: 13,
        board: "Dhaka",
        year: 2015,
        wordBox: ["take", "work", "come", "dominate", "confine", "contribute", "be", "need", "keep", "continue"],
        passage: "Today women are playing an important role in all spheres of life. Once they were (a) ______ by men. They are no longer (b) ______ within the four walls of their parents' or husbands' house. They have (c) ______ out of the kitchen and are (d) ______ hand in hand with men. By (e) ______ higher education, they are becoming pilots, doctors, engineers, teachers, administrators, etc. They have (f) ______ able to prove their worth. They (g) ______ much to the economy of the country. Now it (h) ______ to the realization of the men that true development of the country is not possible (i) ______ half of population idle at home. So, (j) ______ no telling that women are playing a great role in the socio-economic condition of our country.",
        blanks: [
            { letter: "a", answer: "dominated", explanation: "Passive - 'were dominated by men'." },
            { letter: "b", answer: "confined", explanation: "Passive - 'are no longer confined'." },
            { letter: "c", answer: "come", explanation: "Present Perfect - 'have come out'." },
            { letter: "d", answer: "working", explanation: "Present Continuous - 'are working'." },
            { letter: "e", answer: "taking", explanation: "Preposition 'By' + V-ing = 'taking'." },
            { letter: "f", answer: "been", explanation: "Present Perfect - 'have been able'." },
            { letter: "g", answer: "are contributing", explanation: "Present Continuous - 'are contributing'." },
            { letter: "h", answer: "has come", explanation: "Present Perfect - 'has come'." },
            { letter: "i", answer: "keeping", explanation: "Preposition 'without' + V-ing = 'keeping'." },
            { letter: "j", answer: "needs", explanation: "Present Indefinite - 'needs no telling'." }
        ]
    },
    // Board 2017 - Chattogram (Price Hike)
    {
        id: 14,
        board: "Chattogram",
        year: 2017,
        wordBox: ["have", "think", "try", "be", "cheat", "buy", "require", "face", "cheat", "face"],
        passage: "Price hike of household products (a) ______ now a problem for us. Everyday we (b) ______ it. Most of our people (c) ______ low income are in danger. They (d) ______ of purchasing meat and fish as they (e) ______. The price of vegetables is also high. We are to (f) ______ simple product. Many times the buyers (g) ______ them. (h) ______ a fixed price for every time. Then it (i) ______ possible to make the buyer free from harassment. Government (j) ______ to fulfill its expectation.",
        blanks: [
            { letter: "a", answer: "is", explanation: "Present Indefinite - 'is now a problem' (singular)." },
            { letter: "b", answer: "face", explanation: "Present Indefinite - 'we face' (plural)." },
            { letter: "c", answer: "having", explanation: "Present Participle - 'people having low income'." },
            { letter: "d", answer: "think", explanation: "Present Indefinite - 'they think' (plural)." },
            { letter: "e", answer: "require", explanation: "Present Indefinite - 'they require' (plural)." },
            { letter: "f", answer: "buy", explanation: "Infinitive - 'are to buy'." },
            { letter: "g", answer: "are cheated", explanation: "Passive - 'buyers are cheated'." },
            { letter: "h", answer: "should be", explanation: "Modal - 'should be a fixed price'." },
            { letter: "i", answer: "will be", explanation: "Future - 'it will be possible'." },
            { letter: "j", answer: "should try", explanation: "Modal - 'should try'." }
        ]
    },
    // Board 2016 - Chattogram (Students)
    {
        id: 15,
        board: "Chattogram",
        year: 2016,
        wordBox: ["understand", "do", "answer", "prepare", "respect", "memorize", "read", "collect", "prepare", "think"],
        passage: "Many students (a) ______ their studies from the beginning of the year. When the examination (b) ______, they start (c) ______ very seriously. Sometimes they (d) ______ notes from their friends. Most of the time they get themselves (e) ______ by their talented friends. They consider this to be their success in the future. They (f) ______ realize their power of (g) ______. They don't (h) ______. If they find any new question in the examination they cannot (i) ______ it properly. As a result, many students can't do well in the examination. If they had read seriously from the very beginning of the year, they (j) ______ better result in the examinations.",
        blanks: [
            { letter: "a", answer: "neglect", explanation: "Present Indefinite - 'students neglect' (plural)." },
            { letter: "b", answer: "approaches", explanation: "Present Indefinite - 'examination approaches' (singular)." },
            { letter: "c", answer: "reading", explanation: "Start + V-ing = 'reading'." },
            { letter: "d", answer: "collect", explanation: "Present Indefinite - 'they collect' (plural)." },
            { letter: "e", answer: "prepared", explanation: "Get + object + V3 = 'get themselves prepared'." },
            { letter: "f", answer: "memorize", explanation: "Present Indefinite - 'they memorize' (plural)." },
            { letter: "g", answer: "understanding", explanation: "Gerund - 'power of understanding'." },
            { letter: "h", answer: "think", explanation: "Present Indefinite (negative) - 'don't think'." },
            { letter: "i", answer: "answer", explanation: "Modal 'cannot' + base form = 'answer'." },
            { letter: "j", answer: "would have done", explanation: "Type 3 Conditional - 'would have done'." }
        ]
    },
    // Board 2017 - Jashore (Scholar)
    {
        id: 16,
        board: "Jashore",
        year: 2017,
        wordBox: ["tremble", "say", "use", "have", "come", "cross", "drown", "begin", "know", "be"],
        passage: "One day a scholar (a) ______ a river with a boat. Suddenly a ghastly wind (b) ______ to blow. The scholar (c) ______ with fear. The boatman (d) ______ him. The (e) ______ how to swim. The answer from the scholar (f) ______ negative. Then the boatman (g) ______. Very soon you are going to (h) ______. You (i) ______ a lot of knowledge but it (j) ______ to use at this moment.",
        blanks: [
            { letter: "a", answer: "was crossing", explanation: "Past Continuous - 'was crossing' (action in progress)." },
            { letter: "b", answer: "began", explanation: "Past Indefinite - 'began to blow'." },
            { letter: "c", answer: "was trembling", explanation: "Past Continuous - 'was trembling'." },
            { letter: "d", answer: "asked", explanation: "Past Indefinite - 'asked him'." },
            { letter: "e", answer: "knew", explanation: "Past Indefinite - 'knew how to swim'." },
            { letter: "f", answer: "was", explanation: "Past Indefinite - 'was negative'." },
            { letter: "g", answer: "said", explanation: "Past Indefinite - 'said'." },
            { letter: "h", answer: "drown", explanation: "Going to + base form = 'drown'." },
            { letter: "i", answer: "have", explanation: "Present Indefinite - 'you have'." },
            { letter: "j", answer: "doesn't come", explanation: "Present Indefinite (negative) - 'doesn't come'." }
        ]
    },
    // Board 2016 - Jashore (Unemployment)
    {
        id: 17,
        board: "Jashore",
        year: 2016,
        wordBox: ["engage", "help", "do", "turn", "face", "create", "solve", "make", "try"],
        passage: "At present Bangladesh (a) ______ unemployment problem. This problem already (b) ______ an alarming dimension. The government (c) ______ to cope with this problem. But this problem cannot be (d) ______ without (e) ______ them self-skill, education (f) ______ a must. If (g) ______ a man to get a job. Job does not mean (h) ______ official work only. Self-employment is solution of this problem. It means (i) ______ oneself in economic activities. The government is giving the educated youths financial help and training with a view to (j) ______ them self-reliant.",
        blanks: [
            { letter: "a", answer: "is facing", explanation: "Present Continuous - 'is facing' (at present)." },
            { letter: "b", answer: "has turned", explanation: "Present Perfect - 'already + V3 = has turned'." },
            { letter: "c", answer: "is trying", explanation: "Present Continuous - 'is trying'." },
            { letter: "d", answer: "solved", explanation: "Passive - 'cannot be solved'." },
            { letter: "e", answer: "making", explanation: "Preposition 'without' + V-ing = 'making'." },
            { letter: "f", answer: "is", explanation: "Present Indefinite - 'education is'." },
            { letter: "g", answer: "helps", explanation: "Present Indefinite - 'helps a man'." },
            { letter: "h", answer: "doing", explanation: "Gerund - 'mean doing'." },
            { letter: "i", answer: "engaging", explanation: "Gerund - 'means engaging'." },
            { letter: "j", answer: "creating", explanation: "'With a view to' + V-ing = 'creating'." }
        ]
    },
    // Board 2015 - Jashore (Rainy Day)
    {
        id: 18,
        board: "Jashore",
        year: 2015,
        wordBox: ["stand", "become", "rain", "see", "go", "cause", "remain", "ply", "know", "take"],
        passage: "On a rainy day it (a) ______ all day long. The sky is overcast with clouds. The sky is not (b) ______. None can (c) ______ out without an umbrella. Water (d) ______ on roads. As a result, roads (e) ______ muddy and slippery. In Dhaka city, the roads and streets (f) ______ under water for hours together (g) ______ much inconvenience to pedestrians. On some roads motorized vehicles or even rickshaws can (h) ______. The sufferings of the city dwellers (i) ______ no bounds. Government has already (j) ______ some steps to solve this problem.",
        blanks: [
            { letter: "a", answer: "rains", explanation: "Present Indefinite - 'it rains' (habitual)." },
            { letter: "b", answer: "seen", explanation: "Passive - 'is not seen'." },
            { letter: "c", answer: "go", explanation: "Modal 'can' + base form = 'go'." },
            { letter: "d", answer: "stands", explanation: "Present Indefinite - 'water stands' (singular)." },
            { letter: "e", answer: "become", explanation: "Present Indefinite - 'roads become' (plural)." },
            { letter: "f", answer: "remain", explanation: "Present Indefinite - 'roads remain' (plural)." },
            { letter: "g", answer: "causing", explanation: "Present Participle - 'causing inconvenience'." },
            { letter: "h", answer: "not ply", explanation: "Modal 'can' (negative) - 'can not ply'." },
            { letter: "i", answer: "know", explanation: "Present Indefinite - 'sufferings know' (plural)." },
            { letter: "j", answer: "taken", explanation: "Present Perfect - 'already + V3 = taken'." }
        ]
    },
    // Board 2017 - Cumilla (Student Life)
    {
        id: 19,
        board: "Cumilla",
        year: 2017,
        wordBox: ["prepare", "maintain", "form", "succeed", "get", "influence", "should", "use", "be", "call"],
        passage: "Student life (a) ______ a golden season of life. This (b) ______ the time when we should (c) ______ ourselves for the future. The valuable (d) ______ in the student life (e) ______ the later phases of (f) ______ life. Right from the student life, they (g) ______ be careful in (h) ______ discipline. They should (i) ______ their time properly. If they do not use their time, they will not (j) ______ in life. They should (k) ______ punctual from the very beginning of their student life.",
        blanks: [
            { letter: "a", answer: "is", explanation: "Present Indefinite - 'is a golden season'." },
            { letter: "b", answer: "is", explanation: "Present Indefinite - 'is the time'." },
            { letter: "c", answer: "prepare", explanation: "Modal 'should' + base form = 'prepare'." },
            { letter: "d", answer: "formed", explanation: "Past Participle - 'the valuable formed'." },
            { letter: "e", answer: "influence", explanation: "Present Indefinite - 'influence' (plural subject)." },
            { letter: "f", answer: "should", explanation: "Modal - 'should be careful'." },
            { letter: "g", answer: "maintaining", explanation: "Preposition 'in' + V-ing = 'maintaining'." },
            { letter: "h", answer: "use", explanation: "Modal 'should' + base form = 'use'." },
            { letter: "i", answer: "succeed", explanation: "Future - 'will not succeed'." },
            { letter: "j", answer: "get", explanation: "Modal 'should' + base form = 'get'." }
        ]
    },
    // Board 2016 - Cumilla (Health)
    {
        id: 20,
        board: "Cumilla",
        year: 2016,
        wordBox: ["struggle", "keep", "purchase", "harm", "go", "invent", "build", "follow", "be", "borrow"],
        passage: "'Health (a) ______ wealth,' (b) ______ the proverb. We cannot (c) ______ it. We cannot (d) ______ it. We must (e) ______ our body by (f) ______ the rules of health. Health must (g) ______ against germs that (h) ______ the body since their birth. Medicines (i) ______ to kill germs, but we have to (j) ______ the body fit by ourselves through the maintenance of the rules of health.",
        blanks: [
            { letter: "a", answer: "is", explanation: "Present Indefinite - 'is wealth'." },
            { letter: "b", answer: "goes", explanation: "Present Indefinite - 'goes the proverb'." },
            { letter: "c", answer: "buy", explanation: "Modal 'cannot' + base form = 'buy'." },
            { letter: "d", answer: "purchase", explanation: "Modal 'cannot' + base form = 'purchase'." },
            { letter: "e", answer: "keep", explanation: "Modal 'must' + base form = 'keep'." },
            { letter: "f", answer: "following", explanation: "Preposition 'by' + V-ing = 'following'." },
            { letter: "g", answer: "be", explanation: "Modal 'must' + base form = 'be'." },
            { letter: "h", answer: "harm", explanation: "Present Indefinite - 'germs that harm' (plural)." },
            { letter: "i", answer: "are", explanation: "Present Indefinite - 'medicines are'." },
            { letter: "j", answer: "keep", explanation: "Have to + base form = 'keep'." }
        ]
    },
    // Board 2015 - Cumilla (Exercise)
    {
        id: 21,
        board: "Cumilla",
        year: 2015,
        wordBox: ["overcome", "rise", "be", "enjoy", "come", "suffer", "walk", "pollute", "have", "solve"],
        passage: "There (a) ______ different kinds of exercises. Walking (b) ______ one of them. We (c) ______ early in the morning for (d) ______ a morning walk. While (e) ______ in the morning, we can (f) ______ fresh air. But in towns and cities air is being (g) ______ in many ways. As a result people (h) ______ from different problems. To (i) ______ this problem, people and the government should (j) ______ forward.",
        blanks: [
            { letter: "a", answer: "are", explanation: "Present Indefinite - 'there are' (plural)." },
            { letter: "b", answer: "is", explanation: "Present Indefinite - 'walking is' (singular)." },
            { letter: "c", answer: "rise", explanation: "Present Indefinite - 'we rise' (plural)." },
            { letter: "d", answer: "having", explanation: "Preposition 'for' + V-ing = 'having'." },
            { letter: "e", answer: "walking", explanation: "While + V-ing = 'walking'." },
            { letter: "f", answer: "enjoy", explanation: "Modal 'can' + base form = 'enjoy'." },
            { letter: "g", answer: "polluted", explanation: "Present Continuous Passive - 'is being polluted'." },
            { letter: "h", answer: "suffer", explanation: "Present Indefinite - 'people suffer' (plural)." },
            { letter: "i", answer: "overcome", explanation: "Infinitive - 'to overcome'." },
            { letter: "j", answer: "come", explanation: "Modal 'should' + base form = 'come'." }
        ]
    },
    // Board 2017 - Sylhet (Walk)
    {
        id: 22,
        board: "Sylhet",
        year: 2017,
        wordBox: ["get", "be", "refresh", "enjoy", "take", "reap", "walk", "avail", "keep", "do"],
        passage: "A walk by the riverside in the evening (a) ______ very useful and pleasant. One (b) ______ not only beautiful sight but also (c) ______ fresh air if (d) ______ the mind when one (e) ______ a walk by the riverside. Bangladesh is a riverine country and you can (f) ______ yourself of this opportunity of (g) ______ by the riverside. In the cities, there are parks where you can go for walk. This will help you (h) ______ fit. But if you (i) ______ it regularly, you will not be able to (j) ______ the benefit.",
        blanks: [
            { letter: "a", answer: "is", explanation: "Present Indefinite - 'is useful' (singular)." },
            { letter: "b", answer: "enjoys", explanation: "Present Indefinite - 'one enjoys' (singular)." },
            { letter: "c", answer: "gets", explanation: "Present Indefinite - 'gets fresh air' (singular)." },
            { letter: "d", answer: "refreshes", explanation: "Present Indefinite - 'refreshes the mind' (singular)." },
            { letter: "e", answer: "takes", explanation: "Present Indefinite - 'takes a walk' (singular)." },
            { letter: "f", answer: "avail", explanation: "Modal 'can' + base form = 'avail'." },
            { letter: "g", answer: "walking", explanation: "Preposition 'of' + V-ing = 'walking'." },
            { letter: "h", answer: "keep", explanation: "Infinitive - 'help you keep'." },
            { letter: "i", answer: "do not", explanation: "Present Indefinite (negative) - 'if you don't'." },
            { letter: "j", answer: "reap", explanation: "Be able to + base form = 'reap'." }
        ]
    },
    // Board 2016 - Sylhet (Travelling)
    {
        id: 23,
        board: "Sylhet",
        year: 2016,
        wordBox: ["lose", "protect", "die", "become", "need", "provide", "make", "discover", "travel", "be"],
        passage: "Man (a) ______ ever since they first appeared on the earth. In primitive time, they did not travel for pleasure but to find new places. They (b) ______ themselves with simple weapons. Their journeys (c) ______ long, tiring and often dangerous. Being intelligent, they soon (d) ______ easier ways of travelling. They (e) ______ on the backs of their domestic animals. They (f) ______ boats and used it to travel across water. Travelling, of course, has now (g) ______ a highly organized business. There are vehicles which (h) ______ us with comfort and security. If we want to go abroad, we (i) ______ a passport and visa. If we (j) ______ any of them, our journey may be ruined.",
        blanks: [
            { letter: "a", answer: "traveled", explanation: "Past Indefinite - 'traveled' (past action)." },
            { letter: "b", answer: "protected", explanation: "Past Indefinite - 'protected themselves'." },
            { letter: "c", answer: "were", explanation: "Past Indefinite - 'were long' (plural)." },
            { letter: "d", answer: "discovered", explanation: "Past Indefinite - 'discovered easier ways'." },
            { letter: "e", answer: "rode", explanation: "Past Indefinite - 'rode on animals'." },
            { letter: "f", answer: "made", explanation: "Past Indefinite - 'made boats'." },
            { letter: "g", answer: "become", explanation: "Present Perfect - 'has become'." },
            { letter: "h", answer: "provide", explanation: "Present Indefinite - 'which provide' (plural)." },
            { letter: "i", answer: "need", explanation: "Present Indefinite - 'we need' (plural)." },
            { letter: "j", answer: "lose", explanation: "Present Indefinite - 'if we lose' (plural)." }
        ]
    },
    // Board 2017 - Barisal (Malaria)
    {
        id: 24,
        board: "Barisal",
        year: 2017,
        wordBox: ["kill", "have", "fly", "get", "carry", "put", "lay", "bite", "be", "would be"],
        passage: "Malaria (a) ______ by a kind of mosquito. If a mosquito (b) ______ a man who (c) ______ malaria, it will carry away some of the germs of this disease. If this mosquito then (d) ______ a healthy man, the germs may (e) ______ into his blood and he gets malaria. Mosquitoes (f) ______ their eggs in standing water. If there was no standing water, there would be no mosquitoes and so there (g) ______ no malaria. Sometimes people (h) ______ kerosene oil on standing water and this (i) ______ the mosquitoes before they (j) ______ big enough (k) ______ away.",
        blanks: [
            { letter: "a", answer: "is caused", explanation: "Passive - 'is caused by'." },
            { letter: "b", answer: "bites", explanation: "Present Indefinite - 'if a mosquito bites' (singular)." },
            { letter: "c", answer: "has", explanation: "Present Indefinite - 'who has malaria' (singular)." },
            { letter: "d", answer: "bites", explanation: "Present Indefinite - 'if mosquito bites' (singular)." },
            { letter: "e", answer: "fly", explanation: "Modal 'may' + base form = 'fly'." },
            { letter: "f", answer: "lay", explanation: "Present Indefinite - 'mosquitoes lay' (plural)." },
            { letter: "g", answer: "would be", explanation: "Type 2 Conditional - 'would be no malaria'." },
            { letter: "h", answer: "put", explanation: "Present Indefinite - 'people put' (plural)." },
            { letter: "i", answer: "kills", explanation: "Present Indefinite - 'this kills' (singular)." },
            { letter: "j", answer: "are", explanation: "Present Indefinite - 'they are big enough'." },
            { letter: "k", answer: "fly", explanation: "Infinitive - 'enough to fly'." }
        ]
    },
    // Board 2016 - Barisal (Water)
    {
        id: 25,
        board: "Barisal",
        year: 2016,
        wordBox: ["pollute", "suffer", "save", "think", "look", "fall", "become", "do", "use", "throw"],
        passage: "The other name of water is life. We cannot (a) ______ a single moment without it. Water is (b) ______ not only for the use of all people but also to all living creatures. Water becomes (c) ______ in many ways. They mills and factories pollute water by (d) ______ waste into it. Water (e) ______ polluted by chemicals and different elements. Sometimes people (f) ______ from many diseases. We should (g) ______ very careful about it. We must (h) ______ for safe source of drinking water. Otherwise we must (i) ______ in danger. Let us (j) ______ water from pollution.",
        blanks: [
            { letter: "a", answer: "think", explanation: "Modal 'cannot' + base form = 'think'." },
            { letter: "b", answer: "used", explanation: "Passive - 'is used'." },
            { letter: "c", answer: "polluted", explanation: "Past Participle - 'becomes polluted'." },
            { letter: "d", answer: "throwing", explanation: "Preposition 'by' + V-ing = 'throwing'." },
            { letter: "e", answer: "becomes", explanation: "Present Indefinite - 'becomes polluted'." },
            { letter: "f", answer: "suffer", explanation: "Present Indefinite - 'people suffer' (plural)." },
            { letter: "g", answer: "be", explanation: "Modal 'should' + base form = 'be'." },
            { letter: "h", answer: "look", explanation: "Modal 'must' + base form = 'look'." },
            { letter: "i", answer: "fall", explanation: "Modal 'must' + base form = 'fall'." },
            { letter: "j", answer: "save", explanation: "Let + object + base form = 'save'." }
        ]
    },
    // Board 2015 - Barisal (Traffic Jam)
    {
        id: 26,
        board: "Barisal",
        year: 2015,
        wordBox: ["cause", "suffer", "to be", "drive", "solve", "be", "obey", "occur", "carry"],
        passage: "Traffic jam (a) ______ a common affair in the big cities of our country. This problem (b) ______ the ultimate consequence of rapid growth of population and the number of vehicles. Most often this problem (c) ______ in the congested (d) ______ areas where the roads are narrow. Overtaking tendency also (e) ______ traffic jam. Some drivers (f) ______ the traffic rules. They (g) ______ the vehicles carelessly. Traffic jam (h) ______ great sufferings to the ambulance (i) ______ patients. Office goers and school going children also (j) ______ a lot due to traffic jam. However, this problem (k) ______ to an extent (l) ______ by imposing traffic rules strictly.",
        blanks: [
            { letter: "a", answer: "is", explanation: "Present Indefinite - 'is a common affair'." },
            { letter: "b", answer: "is", explanation: "Present Indefinite - 'is the consequence'." },
            { letter: "c", answer: "occurs", explanation: "Present Indefinite - 'occurs in congested areas'." },
            { letter: "d", answer: "cause", explanation: "Infinitive - 'to cause'." },
            { letter: "e", answer: "do not obey", explanation: "Present Indefinite (negative) - 'some drivers don't obey'." },
            { letter: "f", answer: "drive", explanation: "Present Indefinite - 'they drive' (plural)." },
            { letter: "g", answer: "causes", explanation: "Present Indefinite - 'causes sufferings' (singular)." },
            { letter: "h", answer: "carrying", explanation: "Present Participle - 'ambulance carrying patients'." },
            { letter: "i", answer: "suffer", explanation: "Present Indefinite - 'also suffer' (plural)." },
            { letter: "j", answer: "can be solved", explanation: "Modal + Passive - 'can be solved'." },
            { letter: "k", answer: "should be solved", explanation: "Modal + Passive - 'should be solved'." }
        ]
    },
    // Board 2017 - Dhaka (Child Labour)
    {
        id: 27,
        board: "Dhaka",
        year: 2017,
        wordBox: ["dissuade", "carry", "go", "employ", "work", "address", "forbid", "do", "be"],
        passage: "Child labour has (a) ______ internationally by the UN. To make a child (b) ______ the work that is suitable for a man is punishable. But in the third world countries, the number of child labour (c) ______ up day by day. Bangladesh (d) ______ one of these countries. Though government is committed to (e) ______ rich people to engage children in labours work, things are not so easy. Poverty (f) ______ the first instrument (g) ______ in this field. The poor parents want to get additional earning (h) ______ their children in work. Many children (i) ______ in different sectors now. But this should not be (j) ______ on. We should immediately (k) ______ this problem.",
        blanks: [
            { letter: "a", answer: "been forbidden", explanation: "Present Perfect Passive - 'has been forbidden'." },
            { letter: "b", answer: "do", explanation: "Make + object + base form = 'make a child do'." },
            { letter: "c", answer: "is going", explanation: "Present Continuous - 'is going up'." },
            { letter: "d", answer: "is", explanation: "Present Indefinite - 'Bangladesh is'." },
            { letter: "e", answer: "dissuade", explanation: "Infinitive - 'to dissuade'." },
            { letter: "f", answer: "is", explanation: "Present Indefinite - 'is the first instrument'." },
            { letter: "g", answer: "employing", explanation: "Present Participle - 'employing in this field'." },
            { letter: "h", answer: "by", explanation: "Preposition - 'by their children'." },
            { letter: "i", answer: "working", explanation: "Present Continuous - 'are working'." },
            { letter: "j", answer: "going", explanation: "Passive - 'should not be going on'." },
            { letter: "k", answer: "address", explanation: "Modal 'should' + base form = 'address'." }
        ]
    },
    // Board 2016 - Dhaka (Maldives)
    {
        id: 28,
        board: "Dhaka",
        year: 2016,
        wordBox: ["come", "rank", "be", "gift", "give", "have", "earn", "live", "contribute", "create"],
        passage: "The republic of Maldives (a) ______ a small island country in the south of Asia. It (b) ______ 1199 islands that (c) ______ into 26 major atolls. People who (d) ______ to these islands from different parts of the world (e) ______ here since 3000 years ago. The natural beauties (f) ______ by the God attract the tourists to (g) ______ them. As a result, a lot of foreign currencies (h) ______ every year from the tourism that (i) ______ a lot to the national economy. So the Maldives (j) ______ the best tourist destination. Special importance (k) ______ by the government of the Maldives for the enhancement of tourism.",
        blanks: [
            { letter: "a", answer: "is", explanation: "Present Indefinite - 'is a small country'." },
            { letter: "b", answer: "has", explanation: "Present Indefinite - 'has 1199 islands'." },
            { letter: "c", answer: "cluster", explanation: "Present Indefinite - 'that cluster' (plural)." },
            { letter: "d", answer: "came", explanation: "Past Indefinite - 'came to these islands'." },
            { letter: "e", answer: "have been living", explanation: "Present Perfect Continuous - 'since 3000 years'." },
            { letter: "f", answer: "gifted", explanation: "Passive - 'gifted by God'." },
            { letter: "g", answer: "visit", explanation: "Infinitive - 'to visit'." },
            { letter: "h", answer: "is earned", explanation: "Passive - 'is earned'." },
            { letter: "i", answer: "contributes", explanation: "Present Indefinite - 'contributes' (singular)." },
            { letter: "j", answer: "is", explanation: "Present Indefinite - 'is the best'." },
            { letter: "k", answer: "is given", explanation: "Passive - 'is given'." }
        ]
    },
    // Board 2015 - Dhaka (Fazlul Huq)
    {
        id: 29,
        board: "Dhaka",
        year: 2015,
        wordBox: ["be", "get", "know", "sit", "pass", "study", "come", "oppose", "do", "leave"],
        passage: "Abul Kalam Fazlul Huq popularly (a) ______ as Sher-e-Bangla was prominent statesman. He (b) ______ of a respectable Muslim family in 1873. He (c) ______ extraordinarily brilliant. He (d) ______ the Entrance Examination in 1890 and the EA Examination in 1892. He (e) ______ his graduation with Honours in Chemistry, Physics and Mathematics from Presidency College. Then he (f) ______ admitted in MA in English at Calcutta University. Just six months before the final examination, a friend of him (g) ______ him. He said, 'The Muslims are weak in Mathematics and that's the reason he (h) ______ English.' He (i) ______ the comment strongly. He challenged his friend that he (j) ______ for Mathematics Examination instead of English.",
        blanks: [
            { letter: "a", answer: "known", explanation: "Past Participle - 'known as'." },
            { letter: "b", answer: "came", explanation: "Past Indefinite - 'came from a family'." },
            { letter: "c", answer: "was", explanation: "Past Indefinite - 'was brilliant'." },
            { letter: "d", answer: "passed", explanation: "Past Indefinite - 'passed the exam'." },
            { letter: "e", answer: "did", explanation: "Past Indefinite - 'did his graduation'." },
            { letter: "f", answer: "got", explanation: "Past Indefinite - 'got admitted'." },
            { letter: "g", answer: "teased", explanation: "Past Indefinite - 'teased him'." },
            { letter: "h", answer: "studies", explanation: "Present Indefinite - 'he studies English'." },
            { letter: "i", answer: "opposed", explanation: "Past Indefinite - 'opposed the comment'." },
            { letter: "j", answer: "would sit", explanation: "Future in the past - 'would sit'." }
        ]
    },
    // Board 2025 - Sylhet (Prize Giving)
    {
        id: 30,
        board: "Sylhet",
        year: 2025,
        wordBox: ["deliver", "take", "start", "preside", "be", "advise", "decorate", "begin", "come", "read"],
        passage: "Our annual prize giving ceremony (a) ______ off yesterday. We (b) ______ our school campus very nicely. The ceremony (c) ______ at 3 p.m. Our Headmaster (d) ______ over the function and the Education Minister (e) ______ the chief guest. The function (f) ______ with the recitation from the Holy Quran. One of our senior teachers (g) ______ out the annual report. The honorable chief guest (h) ______ a brief encouraging speech (i) ______ us to be regular in studies and (j) ______ part in the movement against illiteracy.",
        blanks: [
            { letter: "a", answer: "came", explanation: "Past Indefinite - 'came off yesterday'." },
            { letter: "b", answer: "decorated", explanation: "Past Indefinite - 'decorated our campus'." },
            { letter: "c", answer: "started", explanation: "Past Indefinite - 'started at 3 p.m.'." },
            { letter: "d", answer: "presided", explanation: "Past Indefinite - 'presided over'." },
            { letter: "e", answer: "was", explanation: "Past Indefinite - 'was the chief guest'." },
            { letter: "f", answer: "began", explanation: "Past Indefinite - 'began with recitation'." },
            { letter: "g", answer: "read", explanation: "Past Indefinite - 'read the report'." },
            { letter: "h", answer: "delivered", explanation: "Past Indefinite - 'delivered a speech'." },
            { letter: "i", answer: "advising", explanation: "Present Participle - 'advising us'." },
            { letter: "j", answer: "take", explanation: "Infinitive - 'to take part'." }
        ]
    },
    // Board 2025 - Dhaka
    {
        id: 31,
        board: "Dhaka",
        year: 2025,
        wordBox: ["be", "concentrate", "to", "succeed", "deny", "compensation", "competence", "off", "of"],
        passage: "The present world is very competitive. Therefore, you need to be (a) ______. As a student, you should have full (b) ______ on your studies. You should not (c) ______ callous (d) ______ your studies. Nothing can (e) ______ for your loss (f) ______ wasting time. There is no (g) ______ the fact that (h) ______ depends on hard labour. Therefore, you must shake (i) ______ your idleness. Idleness brings (j) ______ ruin.",
        blanks: [
            { letter: "a", answer: "competent", explanation: "Adjective - 'need to be competent'." },
            { letter: "b", answer: "concentration", explanation: "Noun - 'full concentration'." },
            { letter: "c", answer: "be", explanation: "Modal 'should' + base form = 'be'." },
            { letter: "d", answer: "to", explanation: "Preposition - 'callous to'." },
            { letter: "e", answer: "compensate", explanation: "Modal 'can' + base form = 'compensate'." },
            { letter: "f", answer: "of", explanation: "Preposition - 'loss of wasting'." },
            { letter: "g", answer: "denying", explanation: "Gerund - 'no denying'." },
            { letter: "h", answer: "success", explanation: "Noun - 'success depends'." },
            { letter: "i", answer: "off", explanation: "Phrasal verb - 'shake off'." },
            { letter: "j", answer: "about", explanation: "Preposition - 'brings about'." }
        ]
    },
    // Board 2025 - Rajshahi (Price Hike)
    {
        id: 32,
        board: "Rajshahi",
        year: 2025,
        wordBox: ["weigh", "require", "think", "be", "face", "cheat", "bargain", "be", "take", "have", "take"],
        passage: "The price hike of household products (a) ______ now a great problem for us. Everyday we (b) ______ it. Most of the people (c) ______ low income (d) ______ in danger. They (e) ______ of purchasing meat and fish as they (f) ______. We are to (g) ______ over buying even simple products. Many times the buyers (h) ______. The sellers cheat the buyers at the time of (i) ______ something. Some steps have (j) ______ by the government to identify the culprits.",
        blanks: [
            { letter: "a", answer: "is", explanation: "Present Indefinite - 'is now a problem' (singular)." },
            { letter: "b", answer: "face", explanation: "Present Indefinite - 'we face' (plural)." },
            { letter: "c", answer: "having", explanation: "Present Participle - 'people having low income'." },
            { letter: "d", answer: "are", explanation: "Present Indefinite - 'are in danger' (plural)." },
            { letter: "e", answer: "can't think", explanation: "Present Indefinite (negative) - 'can't think'." },
            { letter: "f", answer: "require", explanation: "Present Indefinite - 'they require' (plural)." },
            { letter: "g", answer: "bargain", explanation: "Infinitive - 'are to bargain'." },
            { letter: "h", answer: "are cheated", explanation: "Passive - 'buyers are cheated'." },
            { letter: "i", answer: "weighing", explanation: "Preposition 'of' + V-ing = 'weighing'." },
            { letter: "j", answer: "been taken", explanation: "Present Perfect Passive - 'have been taken'." }
        ]
    },
    // Board 2025 - Chattogram (Exercise)
    {
        id: 33,
        board: "Chattogram",
        year: 2025,
        wordBox: ["by", "down", "but", "from", "unnecessary", "one", "physical", "health", "any", "like"],
        passage: "There are different kinds of exercises (a) ______ free hand exercises, yoga, weight lifting, gymnastics and so on. Free hand exercises help (b) ______ to get sound health. Walking is good for all. For the children running, swimming and playing ordinary games are suitable. In our country, some people do not take physical exercise. They think that it is (c) ______ and mere killing of time. (d) ______ in fact, they are wrong. (e) ______ taking physical exercise, we can remain (f) ______ and do our respective jobs properly. Without physical exercise our health breaks (g) ______ and we suffer (h) ______ various diseases and complications. We should take exercise according to our age and (i) ______ condition. Then we can be benefited easily from (j) ______ kinds of exercise.",
        blanks: [
            { letter: "a", answer: "like", explanation: "Preposition - 'like free hand exercises'." },
            { letter: "b", answer: "one", explanation: "Pronoun - 'help one'." },
            { letter: "c", answer: "unnecessary", explanation: "Adjective - 'unnecessary'." },
            { letter: "d", answer: "But", explanation: "Conjunction - 'But in fact'." },
            { letter: "e", answer: "By", explanation: "Preposition - 'By taking'." },
            { letter: "f", answer: "healthy", explanation: "Adjective - 'remain healthy'." },
            { letter: "g", answer: "down", explanation: "Phrasal verb - 'breaks down'." },
            { letter: "h", answer: "from", explanation: "Preposition - 'suffer from'." },
            { letter: "i", answer: "physical", explanation: "Adjective - 'physical condition'." },
            { letter: "j", answer: "any", explanation: "Determiner - 'any kinds'." }
        ]
    },
    // Board 2025 - Sylhet (Village Market)
    {
        id: 34,
        board: "Sylhet",
        year: 2025,
        wordBox: ["to", "useful", "of", "an", "into", "the", "in", "their", "villagers", "about"],
        passage: "A village market is (a) ______ important place (b) ______ the villagers. The (c) ______ buy and sell their daily necessities in a village market. A village market generally sits in (d) ______ open place of (e) ______ village. Usually a village market is divided (f) ______ three sections- open space, temporary shops and permanent shops. A village market is very (g) ______ and important (h) ______ the life of the villagers. Here they meet (i) ______ kith and kin and variety (j) ______ people.",
        blanks: [
            { letter: "a", answer: "an", explanation: "Article - 'an important place'." },
            { letter: "b", answer: "to", explanation: "Preposition - 'to the villagers'." },
            { letter: "c", answer: "villagers", explanation: "Noun - 'The villagers'." },
            { letter: "d", answer: "an", explanation: "Article - 'an open place'." },
            { letter: "e", answer: "the", explanation: "Article - 'the village'." },
            { letter: "f", answer: "into", explanation: "Preposition - 'divided into'." },
            { letter: "g", answer: "useful", explanation: "Adjective - 'very useful'." },
            { letter: "h", answer: "in", explanation: "Preposition - 'important in'." },
            { letter: "i", answer: "their", explanation: "Pronoun - 'their kith and kin'." },
            { letter: "j", answer: "of", explanation: "Preposition - 'variety of'." }
        ]
    },
    // Board 2025 - Barisal (E-Commerce)
    {
        id: 35,
        board: "Barisal",
        year: 2025,
        wordBox: ["require", "be", "provide", "widespread", "promote", "define", "anticipate", "direct", "remain", "stay"],
        passage: "E-Commerce is rapidly being (a) ______ in our country. It may be (b) ______ as a business process through electronic transition. Buyers and sellers are not (c) ______ to talk face to face. We may get our required product (d) ______ at home. One of the best opportunities (e) ______ that businessmen from home and abroad can (f) ______ their business using this system (g) ______ in their respective countries. It (h) ______ us with global information, resources and services. It is (i) ______ that it will (j) ______ our domestic business very soon.",
        blanks: [
            { letter: "a", answer: "promoted", explanation: "Present Continuous Passive - 'is being promoted'." },
            { letter: "b", answer: "defined", explanation: "Passive - 'may be defined'." },
            { letter: "c", answer: "required", explanation: "Passive - 'are not required'." },
            { letter: "d", answer: "staying", explanation: "Present Participle - 'staying at home'." },
            { letter: "e", answer: "is", explanation: "Present Indefinite - 'is that'." },
            { letter: "f", answer: "promote", explanation: "Modal 'can' + base form = 'promote'." },
            { letter: "g", answer: "remaining", explanation: "Present Participle - 'remaining in'." },
            { letter: "h", answer: "provides", explanation: "Present Indefinite - 'provides us'." },
            { letter: "i", answer: "anticipated", explanation: "Passive - 'is anticipated'." },
            { letter: "j", answer: "promote", explanation: "Future - 'will promote'." }
        ]
    },
    // Board 2025 - Jashore (Village Development)
    {
        id: 36,
        board: "Jashore",
        year: 2025,
        wordBox: ["without", "ignore", "for", "till", "welfare", "illuminate", "essential", "with", "flourish", "practical"],
        passage: "The development of Bangladesh depends on the (a) ______ of its villages. It is (b) ______ to keep the villages in a (c) ______ condition. A good communication is essential (d) ______ the development of the villages. (e) ______ this end in view our government has taken some (f) ______ measures. Again (g) ______ education, a nation cannot prosper. Education (h) ______ the soul and dispels the darkness of (i) ______. So our country cannot progress (j) ______ we can remove illiteracy.",
        blanks: [
            { letter: "a", answer: "welfare", explanation: "Noun - 'welfare of villages'." },
            { letter: "b", answer: "essential", explanation: "Adjective - 'is essential'." },
            { letter: "c", answer: "flourished", explanation: "Past Participle - 'flourished condition'." },
            { letter: "d", answer: "for", explanation: "Preposition - 'essential for'." },
            { letter: "e", answer: "With", explanation: "Preposition - 'With this end'." },
            { letter: "f", answer: "practical", explanation: "Adjective - 'practical measures'." },
            { letter: "g", answer: "without", explanation: "Preposition - 'without education'." },
            { letter: "h", answer: "illuminates", explanation: "Present Indefinite - 'illuminates the soul'." },
            { letter: "i", answer: "ignorance", explanation: "Noun - 'darkness of ignorance'." },
            { letter: "j", answer: "till", explanation: "Conjunction - 'till we remove'." }
        ]
    }
];
