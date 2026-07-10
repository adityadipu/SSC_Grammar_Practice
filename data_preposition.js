// Complete dataset from all provided Preposition exercises (Part A, B, C, D)
const prepositionExercisesData = [
    // ==========================================
    // PART A: Example Exercises (1-30)
    // ==========================================
    {
        id: 1,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["for", "of", "without", "from", "of"],
        passage: "Every student wants to do well in the examination. But it is not an easy task. A student has to work hard (a) ___ this. From the very beginning (b) ___ the year, he must be serious. He should read the text books again and again. He must not memorize answers (c) ___ understanding. He must not make note (d) ___ a common source. He should have a good command (e) ___ English. By doing all these things, a student can hope to make an excellent result.",
        blanks: [
            { letter: "a", answer: "for", explanation: "Preposition 'for' indicates purpose (work hard for a goal)." },
            { letter: "b", answer: "of", explanation: "Preposition 'of' indicates relation (beginning of the year)." },
            { letter: "c", answer: "without", explanation: "Preposition 'without' means lacking understanding." },
            { letter: "d", answer: "from", explanation: "Phrasal verb 'make note from' a source." },
            { letter: "e", answer: "of", explanation: "Noun phrase 'command of' a language." }
        ]
    },
    {
        id: 2,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["of", "of", "in", "for", "of"],
        passage: "Man is the architect (a) ___ his own fate. If he makes a proper division (b) ___ time and does his duties accordingly, he is sure to improve and prosper (c) ___ life. But if he does not do it, he is sure to repent. Then he will be bound to drag a miserable life. To spoil time is suicidal (d) ___ a person. For, our life is nothing but the sum total (e) ___ hours, days and years.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Noun phrase 'architect of' (creator of)." },
            { letter: "b", answer: "of", explanation: "Noun phrase 'division of' time." },
            { letter: "c", answer: "in", explanation: "Preposition 'in' life (context)." },
            { letter: "d", answer: "for", explanation: "Preposition 'for' a person (harmful to)." },
            { letter: "e", answer: "of", explanation: "Preposition 'of' indicating components (sum total of)." }
        ]
    },
    {
        id: 3,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["over", "with", "in", "of", "without"],
        passage: "A great number of people speak English all (a) ___ the world. Some people use it as a first language and some people take it as a second language. Many international organizations now depend on English to communicate (b) ___ offices in different countries. Their advertisements published (c) ___ different newspapers are in English. They also want people who possess a good command (d) ___ English. People seeking job can't expect to get a good one (e) ___ knowing English.",
        blanks: [
            { letter: "a", answer: "over", explanation: "Phrase 'all over the world'." },
            { letter: "b", answer: "with", explanation: "Verb 'communicate with' offices." },
            { letter: "c", answer: "in", explanation: "Preposition 'in' newspapers." },
            { letter: "d", answer: "of", explanation: "Noun phrase 'command of' English." },
            { letter: "e", answer: "without", explanation: "Preposition 'without' knowing (lack of)." }
        ]
    },
    {
        id: 4,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["after", "of", "over", "under", "by"],
        passage: "The Eiffel Tower was named (a) ___ Gustave Eiffel, a Frenchman who built the Tower. He graduated from the Central School of Engineering in Paris and went to work for a railway construction company. For years Gustave made plan after plan (b) ___ dams, factories, stations and structures of great size. All (c) ___ Europe engineers copied them. In the middle of 1880s a group of French industrialists persuaded the government to organize a World's Fair in Paris. Gustave Eiffel proposed a 989-foot tower of iron as symbol of the fair. Forty engineers and designers (d) ___ Eiffel's supervision worked for two years. It was the highest structure yet made (e) ___ man.",
        blanks: [
            { letter: "a", answer: "after", explanation: "Verb 'named after' (named in honor of)." },
            { letter: "b", answer: "of", explanation: "Preposition 'of' (plans for structures)." },
            { letter: "c", answer: "over", explanation: "Preposition 'over' (across/throughout Europe)." },
            { letter: "d", answer: "under", explanation: "Preposition 'under' supervision." },
            { letter: "e", answer: "by", explanation: "Passive voice 'made by' man." }
        ]
    },
    {
        id: 5,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["of", "for", "with", "in", "between"],
        passage: "A man (a) ___ letters is respected always even after his death (b) ___ his deeds. He is an enlightened person who devotes himself (c) ___ a view to spreading education (d) ___ the society. He always teaches people how to differentiate (e) ___ right and wrong. In fact he is the authentic person whom the world should follow.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Noun phrase 'man of letters' (scholar)." },
            { letter: "b", answer: "for", explanation: "Preposition 'for' his deeds (because of)." },
            { letter: "c", answer: "with", explanation: "Phrase 'with a view to' (purpose)." },
            { letter: "d", answer: "in", explanation: "Preposition 'in' the society (context)." },
            { letter: "e", answer: "between", explanation: "Verb 'differentiate between' two things." }
        ]
    },
    {
        id: 6,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["at", "into", "on", "on", "from"],
        passage: "Trees bear a great impact on the climate. If we destroy trees (a) ___ random, one day the country will turn (b) ___ a great desert. The country will bear the consequences of greenhouse effect. Again there will be no rain and as a result the country will face a great crisis because ours is an agricultural country and our economy is dependent (c) ___ agriculture. Again our agriculture depends on rain. So trees have a great effect (d) ___ our climate. Trees keep the soil strong. Trees save us (e) ___ flood and many other natural calamities.",
        blanks: [
            { letter: "a", answer: "at", explanation: "Phrase 'at random' (without plan)." },
            { letter: "b", answer: "into", explanation: "Verb 'turn into' (transform to)." },
            { letter: "c", answer: "on", explanation: "Adjective 'dependent on'." },
            { letter: "d", answer: "on", explanation: "Noun phrase 'effect on'." },
            { letter: "e", answer: "from", explanation: "Verb 'save from' (protect against)." }
        ]
    },
    {
        id: 7,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["in", "for", "for", "of", "to"],
        passage: "Sleep is one of the most important factors (a) ___ human life. A sound man cannot go without sleeping. Sleep is the healing medicine (b) ___ the troubled people. It relieves physical and mental pain. Night is the proper time (c) ___ sleeping. But if a man has to pass a sleepless night, he never feels well. He loses energy and peace (d) ___ mind. As a result, he becomes indifferent (e) ___ his duties and responsibilities.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition 'in' human life (context)." },
            { letter: "b", answer: "for", explanation: "Preposition 'for' people (beneficial to)." },
            { letter: "c", answer: "for", explanation: "Preposition 'time for' sleeping." },
            { letter: "d", answer: "of", explanation: "Noun phrase 'peace of mind'." },
            { letter: "e", answer: "to", explanation: "Adjective 'indifferent to'." }
        ]
    },
    {
        id: 8,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["to", "with", "with", "of", "into"],
        passage: "Trees are essential (a) ___ man in many ways. They provide us (b) ___ oxygen without which we cannot live more than a few minutes. They supply us (c) ___ vitamin and food, give us shade and help to prevent drought and flood. Unfortunately, we cannot realize the importance (d) ___ trees. We cut them indiscriminately in large numbers but it is a suicidal attempt. If we do not stop these acts, soon our country will, no doubt, turn (e) ___ a desert.",
        blanks: [
            { letter: "a", answer: "to", explanation: "Adjective 'essential to'." },
            { letter: "b", answer: "with", explanation: "Verb 'provide with'." },
            { letter: "c", answer: "with", explanation: "Verb 'supply with'." },
            { letter: "d", answer: "of", explanation: "Noun phrase 'importance of'." },
            { letter: "e", answer: "into", explanation: "Verb 'turn into' (transform to)." }
        ]
    },
    {
        id: 9,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["in", "on", "of", "by", "of"],
        passage: "Truthfulness refers to the habit of speaking the truth. It is the greatest of all virtues (a) ___ a man's life. The true peace and prosperity of man entirely depends (b) ___ it. It ennobles one's character and gives one high position in society. It may not make one rich but brings peace (c) ___ mind. A truthful person is loved and respected (d) ___ all. A truthful person cares nobody. All religions teach us to be truthful. By dint (e) ___ truthfulness all can shine in life. Truthfulness can lead the whole world to peace and prosperity.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition 'in' a man's life." },
            { letter: "b", answer: "on", explanation: "Verb 'depends on'." },
            { letter: "c", answer: "of", explanation: "Noun phrase 'peace of mind'." },
            { letter: "d", answer: "by", explanation: "Passive voice 'respected by' all." },
            { letter: "e", answer: "of", explanation: "Phrase 'by dint of' (through)." }
        ]
    },
    {
        id: 10,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["for", "in", "by", "with", "for"],
        passage: "Once a farmer had great desire (a) ___ land. One day going to the landlord, he wanted some land where he might live (b) ___ comfort. The landlord was very wise. So he told him to have as much land as he could cover (c) ___ running till sun-set. The farmer became very pleased hearing that. Next morning he started running as early as he could to cover more area. He ran till evening and the sun was about to set. He ran (d) ___ his last strength but became very tired and fell down dead. He was buried there. Then the wise man remarked a man needs just as much land as will be enough (e) ___ his grave.",
        blanks: [
            { letter: "a", answer: "for", explanation: "Noun phrase 'desire for'." },
            { letter: "b", answer: "in", explanation: "Phrase 'in comfort'." },
            { letter: "c", answer: "by", explanation: "Preposition 'by' running (means)." },
            { letter: "d", answer: "with", explanation: "Preposition 'with' his last strength (using)." },
            { letter: "e", answer: "for", explanation: "Adjective 'enough for'." }
        ]
    },
    {
        id: 11,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["of", "on", "of", "of", "for"],
        passage: "Housing is one of the greatest problems in our country. Thousands (a) ___ people in big cities like Dhaka and Chattogram live (b) ___ the footpaths. In rural areas there is also an acute crisis (c) ___ housing. The cost (d) ___ construction is increasing day by day. At present it is very difficult (e) ___ the poor people to bear the cost of construction. So, this problem needs to be solved soon.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Preposition 'of' (thousands of people)." },
            { letter: "b", answer: "on", explanation: "Preposition 'on' the footpaths." },
            { letter: "c", answer: "of", explanation: "Noun phrase 'crisis of' housing." },
            { letter: "d", answer: "of", explanation: "Noun phrase 'cost of' construction." },
            { letter: "e", answer: "for", explanation: "Adjective 'difficult for' people." }
        ]
    },
    {
        id: 12,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["in", "from", "up", "to", "of"],
        passage: "Language plays a very important role (a) ___ the life of human beings. We use language (b) ___ the moment, we wake (c) ___ in the morning until we go to bed at night. We use language for different purposes. We use language to express our ideas, thoughts and feelings, to convey our message or to pass our information (d) ___ others. In short, language is ever present in our activities. It is an inseparable part (e) ___ what we are, what we do and believe.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Noun phrase 'role in' life." },
            { letter: "b", answer: "from", explanation: "Preposition 'from' the moment (start point)." },
            { letter: "c", answer: "up", explanation: "Phrasal verb 'wake up'." },
            { letter: "d", answer: "to", explanation: "Verb 'pass to' others." },
            { letter: "e", answer: "of", explanation: "Preposition 'of' (part of what we are)." }
        ]
    },
    {
        id: 13,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["for", "by", "of", "on", "of"],
        passage: "Reading textbook is essential (a) ___ all the students. A student cannot expect to make a good result until he or she reads textbooks. In the textbooks all the topics are designed as per students' grade that ensures a complete sense. In case of not reading those texts a student will miss topics needed for him or her. Moreover, textbooks are written and edited (b) ___ highly experienced educators. Some students ignore to read textbooks rather they prefer guide books. But merely reading guide books keeps the students ignoble (c) ___ the subject-matter as they are written focusing (d) ___ exam result while a textbook covers all the details for holistic nourishment (e) ___ a student.",
        blanks: [
            { letter: "a", answer: "for", explanation: "Adjective 'essential for' students." },
            { letter: "b", answer: "by", explanation: "Passive voice 'written by' educators." },
            { letter: "c", answer: "of", explanation: "Adjective 'ignoble of' (ignorant of)." },
            { letter: "d", answer: "on", explanation: "Verb 'focus on'." },
            { letter: "e", answer: "of", explanation: "Noun phrase 'nourishment of' a student." }
        ]
    },
    {
        id: 14,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["in", "for", "on", "before", "in"],
        passage: "Road accident is a regular phenomenon in Bangladesh. Many people die (a) ___ road accidents every year. So it is considered a curse. Road accidents occur for various reasons. Many factors are responsible (b) ___ road accidents. The most common cause is reckless driving. Sometimes they drive night coach even (c) ___ the same day. The drivers do not check the engines regularly (d) ___ they start driving. The roads are two-lane roads without any dividers. These are some of the main reasons of road accidents (e) ___ Bangladesh.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition 'die in' accidents." },
            { letter: "b", answer: "for", explanation: "Adjective 'responsible for'." },
            { letter: "c", answer: "on", explanation: "Preposition 'on' the same day." },
            { letter: "d", answer: "before", explanation: "Conjunction 'before' they start." },
            { letter: "e", answer: "in", explanation: "Preposition 'in' Bangladesh." }
        ]
    },
    {
        id: 15,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["of", "for", "of", "of", "of"],
        passage: "A true friend is an asset. He stands beside his friends in time (a) ___ danger. He is not a greedy person. He always wishes (b) ___ the welfare (c) ___ his friend. But it is a matter (d) ___ regret that a true friend is very rare today. A selfish man cannot be a true friend. He always thinks (e) ___ his own interest.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Preposition 'of' (time of danger)." },
            { letter: "b", answer: "for", explanation: "Verb 'wish for'." },
            { letter: "c", answer: "of", explanation: "Preposition 'welfare of' friend." },
            { letter: "d", answer: "of", explanation: "Noun phrase 'matter of' regret." },
            { letter: "e", answer: "of", explanation: "Verb 'think of'." }
        ]
    },
    {
        id: 16,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["of", "to", "with", "for", "by"],
        passage: "Now-a-days, the young farmers (a) ___ our country are showing interest to cultivate foreign vegetables. They, with their innovative power, have added new dimensions (b) ___ the country's agricultural sector. Karim Ullah is such a farmer. Five years ago, he started his farm (c) ___ a determination and challenge. Now he owns a vegetable farm where he cultivates curry leaves, lemon grass, broccoli and other foreign vegetables. The cultivation of foreign crops in our country is very inspiring (d) ___ both the farmers and the customers as it brings diversity in our regular food and nutrition. It is also possible to export vegetables (e) ___ ensuring quality production and packaging.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Preposition 'of' (farmers of our country)." },
            { letter: "b", answer: "to", explanation: "Verb 'add to'." },
            { letter: "c", answer: "with", explanation: "Preposition 'with' determination (manner)." },
            { letter: "d", answer: "for", explanation: "Adjective 'inspiring for'." },
            { letter: "e", answer: "by", explanation: "Preposition 'by' ensuring (means)." }
        ]
    },
    {
        id: 17,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["to", "to", "for", "in", "of"],
        passage: "Scientists have recently reported that the surface ice caps are melting. This is due (a) ___ a rise in atmospheric temperature known as the greenhouse effect. According (b) ___ the scientists carbon dioxide is primarily responsible (c) ___ temperature rise in atmosphere. The carbon dioxide is high when coal and oil are burnt. The gas is accumulating in the atmosphere and causing the temperature to rise. As a result, the polar ice (d) ___ the North and South poles is melting. We should maintain the ecological balance (e) ___ the environment.",
        blanks: [
            { letter: "a", answer: "to", explanation: "Phrase 'due to' (because of)." },
            { letter: "b", answer: "to", explanation: "Phrase 'according to'." },
            { letter: "c", answer: "for", explanation: "Adjective 'responsible for'." },
            { letter: "d", answer: "in", explanation: "Preposition 'in' the poles (location)." },
            { letter: "e", answer: "of", explanation: "Noun phrase 'balance of' environment." }
        ]
    },
    {
        id: 18,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["without", "of", "to", "in", "in"],
        passage: "Modern civilization is the blessing of science. Science has worked like a magician in the world. We can't do even a single day (a) ___ the help of science. Many quick means (b) ___ communication like telephone, telex, fax, telegram, satellite etc. are the greatest wonders of science. Nowadays a message can be sent from one corner of the world (c) ___ another in the twinkle of an eye. Science has brought a revolutionary change (d) ___ all fields. In the field of medical science blind has got eyes, lame has got legs, deaf has got hearing power. The diseases which were incurable (e) ___ the past are now easily cured.",
        blanks: [
            { letter: "a", answer: "without", explanation: "Preposition 'without' help." },
            { letter: "b", answer: "of", explanation: "Noun phrase 'means of' communication." },
            { letter: "c", answer: "to", explanation: "Preposition 'from...to'." },
            { letter: "d", answer: "in", explanation: "Preposition 'in' fields." },
            { letter: "e", answer: "in", explanation: "Preposition 'in' the past." }
        ]
    },
    {
        id: 19,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["From", "of", "with", "of", "in"],
        passage: "Diligence means an effort to perform a work successfully. God has given us two hands-to work. (a) ___ the beginning (b) ___ the world, human beings have been struggling (c) ___ nature to keep hold (d) ___ their existence. If they did not struggle, they might have perished long ago. Thus we see that diligence is inevitable (e) ___ our personal, social and national life. The student who is more diligent, makes a better result than those who are not. So, to be successful everybody should be diligent.",
        blanks: [
            { letter: "a", answer: "From", explanation: "Preposition 'From' the beginning." },
            { letter: "b", answer: "of", explanation: "Preposition 'of' the world." },
            { letter: "c", answer: "with", explanation: "Verb 'struggle with' nature." },
            { letter: "d", answer: "of", explanation: "Noun phrase 'hold of' existence." },
            { letter: "e", answer: "in", explanation: "Preposition 'in' life." }
        ]
    },
    {
        id: 20,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["of", "of", "out", "with", "of"],
        passage: "People are fond (a) ___ travelling. So, travelling has been popular with man from the time immemorial. It is the romance (b) ___ seeing the unseen, knowing the unknown and unveiling the shrouds of mystery. A man hardly knows his own land completely until he has gone (c) ___ of it to travel other countries. Only a rational comparison of our country (d) ___ other countries can vividly specify the true nature of merits and demerits of our own motherland. An awareness of our defects inspires us to work hard and improve the unhappy condition (e) ___ our dear native place.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Adjective 'fond of'." },
            { letter: "b", answer: "of", explanation: "Preposition 'romance of'." },
            { letter: "c", answer: "out", explanation: "Phrasal verb 'gone out of'." },
            { letter: "d", answer: "with", explanation: "Verb 'comparison with'." },
            { letter: "e", answer: "of", explanation: "Noun phrase 'condition of'." }
        ]
    },
    {
        id: 21,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["of", "for", "in", "out", "from"],
        passage: "Education is one (a) ___ the basic needs of a human being and is essential (b) ___ every kind of development. It enables us to make right choices (c) ___ life. It enhances our ability to raise crops, store food, protect the environment and carry (d) ___ our social responsibilities. It provides us with an enlightened awareness about things. But education has to be defined. It is not merely getting degrees (e) ___ schools, colleges and universities. It is something more lasting, more humane.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Preposition 'one of'." },
            { letter: "b", answer: "for", explanation: "Adjective 'essential for'." },
            { letter: "c", answer: "in", explanation: "Preposition 'in' life." },
            { letter: "d", answer: "out", explanation: "Phrasal verb 'carry out'." },
            { letter: "e", answer: "from", explanation: "Preposition 'from' schools." }
        ]
    },
    {
        id: 22,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["for", "for", "of", "towards", "from"],
        passage: "Patriotism is an inherent quality of human being. It creates in a man a feeling of love (a) ___ his motherland. It is older than civilization. The man who loves his own country, does his first and foremost duties and works (b) ___ the welfare and development (c) ___ his country, is a patriot. Even the ancient tribes had a great love for the land where they were born and sacrificed their lives to defend it. If he does it and performs his duties honestly and sincerely in his own fields, he can be a patriot. If he does not do so, he will be a traitor. We must not have bitterness (d) ___ anyone. But narrow patriotism is very bad. All should cut off it (e) ___ their hearts.",
        blanks: [
            { letter: "a", answer: "for", explanation: "Noun phrase 'love for'." },
            { letter: "b", answer: "for", explanation: "Preposition 'for' welfare." },
            { letter: "c", answer: "of", explanation: "Noun phrase 'development of'." },
            { letter: "d", answer: "towards", explanation: "Noun 'bitterness towards'." },
            { letter: "e", answer: "from", explanation: "Phrasal verb 'cut off from'." }
        ]
    },
    {
        id: 23,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["in", "of", "of", "in", "in"],
        passage: "Adopting unfair means (a) ___ the examination is an offence. It degrades the standard of education. If the students (b) ___ our country do not acquire true education, there will be no development (c) ___ the country. An examinee should study seriously so that he can cut a good figure (d) ___ the examination. To acquire true education should be the only aim in the lives of all students. An educated man cannot support adopting any unfair means (e) ___ the examination at all.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition 'in' the examination." },
            { letter: "b", answer: "of", explanation: "Preposition 'of' our country." },
            { letter: "c", answer: "of", explanation: "Preposition 'of' the country." },
            { letter: "d", answer: "in", explanation: "Phrase 'cut a good figure in'." },
            { letter: "e", answer: "in", explanation: "Preposition 'in' the examination." }
        ]
    },
    {
        id: 24,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["for", "to", "to", "of", "of"],
        passage: "Terrorism is a great threat and major concern (a) ___ almost all the countries. Terrorists cause damage (b) ___ human lives and properties creating panic and terror. The cause of terrorism is mainly related (c) ___ the deprivation of genuine rights and also greed and exploitation (d) ___ different groups and nations. To get rid (e) ___ terrorism is very difficult but not impossible if the intellectuals and peace loving nations work unitedly.",
        blanks: [
            { letter: "a", answer: "for", explanation: "Noun 'concern for'." },
            { letter: "b", answer: "to", explanation: "Verb 'cause damage to'." },
            { letter: "c", answer: "to", explanation: "Verb 'related to'." },
            { letter: "d", answer: "of", explanation: "Noun 'exploitation of'." },
            { letter: "e", answer: "of", explanation: "Phrasal verb 'get rid of'." }
        ]
    },
    {
        id: 25,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["in", "of", "for", "for", "for"],
        passage: "December 16, our Victory Day, is a significant event (a) ___ our national history. The day is the perpetual source of our strength and energy. The day reminds us (b) ___ the supreme sacrifices of our sons for the noble cause and also inspires us to sacrifice ourselves (c) ___ our beloved country. The day is a clear warning (d) ___ the oppressors that people's right can never be prevented for long and that oppressors will always be defeated because there is nothing more powerful than people's will (e) ___ freedom. It gives us the message that 'Man can be subjugated but can never be defeated.'",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition 'in' history." },
            { letter: "b", answer: "of", explanation: "Verb 'remind of'." },
            { letter: "c", answer: "for", explanation: "Verb 'sacrifice for'." },
            { letter: "d", answer: "for", explanation: "Noun 'warning for'." },
            { letter: "e", answer: "for", explanation: "Noun 'will for' freedom." }
        ]
    },
    {
        id: 26,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["of", "by", "on", "to", "in"],
        passage: "Nowadays a good number of farmers are getting benefits from the organic cultivation (a) ___ vegetables. Vermicompost, called organic fertilizer made mainly from cow dung and earthworm is used (b) ___ the farmers. As the farmers did not use any chemical fertilizer or pesticides (c) ___ their vegetable beds, the production cost has come down. It takes about fifty thousand taka to prepare an acre of land and the harvest starts within forty-five days since planting. Due (d) ___ good yield of the crop, some temporary warehouses have been made (e) ___ surrounding area. So proper use of organic fertilizer can change the scenario of our agricultural sector.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Preposition 'of' (cultivation of vegetables)." },
            { letter: "b", answer: "by", explanation: "Passive voice 'used by'." },
            { letter: "c", answer: "on", explanation: "Preposition 'on' beds." },
            { letter: "d", answer: "to", explanation: "Phrase 'due to'." },
            { letter: "e", answer: "in", explanation: "Preposition 'in' area." }
        ]
    },
    {
        id: 27,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["between", "to", "of", "up", "of"],
        passage: "Students teachers' relationship is regarded as the relationship (a) ___ parents and children. A teacher is next (b) ___ parents. Parents bring up children. On the other hand, a teacher guides the students to materialize their dreams. A teacher spreads the light of education to remove the darkness (c) ___ ignorance. As a result, a student can see the path of prosperity. Thus a teacher helps build (d) ___ a civilized nation. So he is really called the architect (e) ___ a nation.",
        blanks: [
            { letter: "a", answer: "between", explanation: "Preposition 'between' (two entities)." },
            { letter: "b", answer: "to", explanation: "Phrase 'next to'." },
            { letter: "c", answer: "of", explanation: "Noun phrase 'darkness of' ignorance." },
            { letter: "d", answer: "up", explanation: "Phrasal verb 'build up'." },
            { letter: "e", answer: "of", explanation: "Noun phrase 'architect of'." }
        ]
    },
    {
        id: 28,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["in", "without", "by", "with", "to"],
        passage: "The Padma multi-purpose bridge has started a new era (a) ___ the history of Bangladesh. This mega project has been implemented (b) ___ any foreign aid. The southern 21 districts were cut off from the main-land (c) ___ the mighty Padma river. So, this vast area could not keep pace with the other parts considering economic development. But direct connection (d) ___ the capital by this bridge is going to expand trade and commerce. Besides, tourism is also going to speed up. All these are contributing much (e) ___ our economic growth and surely reduce the poverty of those districts. The construction of the bridge which was our long-cherished dream at last came true.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition 'in' history." },
            { letter: "b", answer: "without", explanation: "Preposition 'without' aid." },
            { letter: "c", answer: "by", explanation: "Passive voice 'cut off by'." },
            { letter: "d", answer: "with", explanation: "Noun 'connection with'." },
            { letter: "e", answer: "to", explanation: "Verb 'contribute to'." }
        ]
    },
    {
        id: 29,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["with", "into", "on", "without", "for"],
        passage: "The earth is a vast planet. It is round in shape. One third of its total area is land while the other three portions are covered (a) ___ water. The water areas are divided (b) ___ oceans, seas and rivers. The surface of the land area is full of variety. There are high hills, green forests and stretches of deserts. The land mass is divided into some continents. Under each continent, there are a number of countries. The interior of the earth is abundant in mineral resources. There is existence of life only (c) ___ the earth. But, this existence of life would be impossible (d) ___ sunlight. In fact, sunlight is the prerequisite (e) ___ the existence of all types of living beings.",
        blanks: [
            { letter: "a", answer: "with", explanation: "Passive 'covered with'." },
            { letter: "b", answer: "into", explanation: "Verb 'divided into'." },
            { letter: "c", answer: "on", explanation: "Preposition 'on' the earth." },
            { letter: "d", answer: "without", explanation: "Preposition 'without' sunlight." },
            { letter: "e", answer: "for", explanation: "Noun 'prerequisite for'." }
        ]
    },
    {
        id: 30,
        board: "Part A (Example)",
        year: 2025,
        wordBox: ["in", "of", "by", "up", "in"],
        passage: "Man is a social being. So he lives (a) ___ a society. Mutual understanding and cooperation are needed to ensure a peaceful society. To produce ideal members (b) ___ a society, an ideal family contributes a lot. A child's future behaviour is greatly influenced (c) ___ the culture of his family. If a child is born and brought (d) ___ in a rude and chaotic environment, he also becomes rude (e) ___ behaviour and creates chaos and indiscipline in the society.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition 'in' a society." },
            { letter: "b", answer: "of", explanation: "Preposition 'members of' society." },
            { letter: "c", answer: "by", explanation: "Passive voice 'influenced by'." },
            { letter: "d", answer: "up", explanation: "Phrasal verb 'brought up'." },
            { letter: "e", answer: "in", explanation: "Preposition 'rude in' behaviour." }
        ]
    },
    // ==========================================
    // PART B: Additional Practice Sets (31-37)
    // ==========================================
    {
        id: 31,
        board: "Dhaka Board (Part B)",
        year: 2026,
        wordBox: ["after", "in", "into", "of", "about"],
        passage: "The Olympic Games were named (a) ___ the town of Olympia in Greece. It was (b) ___ Olympia where the games were first held long before the Christian era began. In those days Greece was divided (c) ___ many cities and men of different cities used to fight one another most (d) ___ the time. A man named Iphitos became concerned (e) ___ such wasteful strifes.",
        blanks: [
            { letter: "a", answer: "after", explanation: "Verb 'named after'." },
            { letter: "b", answer: "in", explanation: "Preposition 'in' Olympia." },
            { letter: "c", answer: "into", explanation: "Verb 'divided into'." },
            { letter: "d", answer: "of", explanation: "Phrase 'most of the time'." },
            { letter: "e", answer: "about", explanation: "Adjective 'concerned about'." }
        ]
    },
    {
        id: 32,
        board: "Chittagong Board (Part B)",
        year: 2026,
        wordBox: ["to", "from", "of/about", "upon/on", "to"],
        passage: "Poverty was hindrance (a) ___ his success. It hindered him (b) ___ going abroad. But he did not lose heart. He was hopeful (c) ___ his success. He hit (d) ___ a plan. The plan worked well. For this, he was thankful (e) ___ Allah.",
        blanks: [
            { letter: "a", answer: "to", explanation: "Noun 'hindrance to'." },
            { letter: "b", answer: "from", explanation: "Verb 'hinder from'." },
            { letter: "c", answer: "of/about", explanation: "Adjective 'hopeful of/about'." },
            { letter: "d", answer: "upon/on", explanation: "Phrasal verb 'hit upon/on'." },
            { letter: "e", answer: "to", explanation: "Adjective 'thankful to'." }
        ]
    },
    {
        id: 33,
        board: "Sylhet Board (Part B)",
        year: 2026,
        wordBox: ["in", "for", "into", "down", "to"],
        passage: "Patriotism is inherent (a) ___ man. It is essential (b) ___ a country's progress. Patriots are noted for their zeal and different from others. Their memory doesn't sink (c) ___ oblivion. They are worthy of praise and lay (d) ___ their lives for the country. They are not indifferent (e) ___ the development of their country.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Adjective 'inherent in'." },
            { letter: "b", answer: "for", explanation: "Adjective 'essential for'." },
            { letter: "c", answer: "into", explanation: "Verb 'sink into'." },
            { letter: "d", answer: "down", explanation: "Phrasal verb 'lay down'." },
            { letter: "e", answer: "to", explanation: "Adjective 'indifferent to'." }
        ]
    },
    {
        id: 34,
        board: "Dinajpur Board (Part B)",
        year: 2026,
        wordBox: ["at", "with", "through", "up", "about"],
        passage: "Let's imagine a citizen's ordinary day (a) ___ work. The morning probably starts (b) ___ a cup of coffee/tea, followed by greeting the colleagues. Then comes the inevitable, which is log in the computer, receiving and sending dozens of emails. E-mails operate (c) ___ a network of computers linked by the internet. Many of us have already given (d) ___ the habit of writing letter by using paper. It has brought (e) ___ a great change in modern life.",
        blanks: [
            { letter: "a", answer: "at", explanation: "Preposition 'at' work (location)." },
            { letter: "b", answer: "with", explanation: "Preposition 'starts with'." },
            { letter: "c", answer: "through", explanation: "Preposition 'through' a network." },
            { letter: "d", answer: "up", explanation: "Phrasal verb 'give up'." },
            { letter: "e", answer: "about", explanation: "Phrasal verb 'bring about'." }
        ]
    },
    {
        id: 35,
        board: "Jessore Board (Part B)",
        year: 2026,
        wordBox: ["from", "of", "without", "to", "for"],
        passage: "Patriotism refers to love for one's own country. It removes all sorts of meanness (a) ___ human mind and makes it broad. Patriotism inspires a man to shed the last drop (b) ___ blood to defend the freedom of his country. A man (c) ___ this quality is no better than a beast. A true patriot always remembers 'Mother and motherland are superior (d) ___ heaven.' There are some traitors who always try to destroy the glory of the country (e) ___ self-interest.",
        blanks: [
            { letter: "a", answer: "from", explanation: "Preposition 'from' mind (removes from)." },
            { letter: "b", answer: "of", explanation: "Preposition 'drop of' blood." },
            { letter: "c", answer: "without", explanation: "Preposition 'without' this quality." },
            { letter: "d", answer: "to", explanation: "Adjective 'superior to'." },
            { letter: "e", answer: "for", explanation: "Preposition 'for' self-interest." }
        ]
    },
    {
        id: 36,
        board: "Mymensingh Board (Part B)",
        year: 2026,
        wordBox: ["to", "from", "on", "out", "up"],
        passage: "People addicted (a) ___ smoking often suffer (b) ___ various diseases, including cancer. Cancer is a fatal disease which takes a heavy toll (c) ___ human lives every year all over the world. Medical science is yet to find (d) ___ a cure for it. So all of us, young or old, should give (e) ___ this dangerous habit.",
        blanks: [
            { letter: "a", answer: "to", explanation: "Adjective 'addicted to'." },
            { letter: "b", answer: "from", explanation: "Verb 'suffer from'." },
            { letter: "c", answer: "on", explanation: "Phrase 'take a toll on'." },
            { letter: "d", answer: "out", explanation: "Phrasal verb 'find out'." },
            { letter: "e", answer: "up", explanation: "Phrasal verb 'give up'." }
        ]
    },
    {
        id: 37,
        board: "Comilla Board (Part B)",
        year: 2026,
        wordBox: ["in", "of", "to/towards", "on/upon", "around"],
        passage: "There are a lot of children (a) ___ our country who are deprived (b) ___ basic human needs. We should extend our helping hands (c) ___ them so that they can upgrade their condition. Think about the countless blessings of Almighty (d) ___ you. So, spread mercy (e) ___ you. Thus, the world will be a better place to live in.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition 'in' our country." },
            { letter: "b", answer: "of", explanation: "Adjective 'deprived of'." },
            { letter: "c", answer: "to/towards", explanation: "Verb 'extend to/towards'." },
            { letter: "d", answer: "on/upon", explanation: "Preposition 'blessings on/upon'." },
            { letter: "e", answer: "around", explanation: "Preposition 'around' you." }
        ]
    },
    // ==========================================
    // PART C: Board Questions (38-59)
    // ==========================================
    {
        id: 38,
        board: "Dhaka Board",
        year: 2019,
        wordBox: ["as", "to", "from", "of", "for", "after", "by", "with", "for", "on"],
        passage: "Mr. Reza works (a) ___ a clerk in a local school. He is poor but honest. His honesty is known (b) ___ everyone in his locality. He often suffers (c) ___ hunger. He is deprived (d) ___ comfort and many other things. Nevertheless, he does not long (e) ___ wealth. He never hankers (f) ___ name and fame. He leads his life (g) ___ honest means. He is satisfied (h) ___ what he has. But sometimes he runs into debt and poverty is responsible (i) ___ this debt. However, he does not like to depend (j) ___ others.",
        blanks: [
            { letter: "a", answer: "as", explanation: "Preposition 'works as' (role)." },
            { letter: "b", answer: "to", explanation: "Passive voice 'known to'." },
            { letter: "c", answer: "from", explanation: "Verb 'suffer from'." },
            { letter: "d", answer: "of", explanation: "Adjective 'deprived of'." },
            { letter: "e", answer: "for", explanation: "Verb 'long for'." },
            { letter: "f", answer: "after", explanation: "Verb 'hanker after'." },
            { letter: "g", answer: "by", explanation: "Preposition 'by' means." },
            { letter: "h", answer: "with", explanation: "Adjective 'satisfied with'." },
            { letter: "i", answer: "for", explanation: "Adjective 'responsible for'." },
            { letter: "j", answer: "on", explanation: "Verb 'depend on'." }
        ]
    },
    {
        id: 39,
        board: "Rajshahi Board",
        year: 2019,
        wordBox: ["behind/under/over", "to/into/inside", "for", "of", "to/at", "into", "with", "with", "in", "in"],
        passage: "When the sun was setting (a) ___ the treetops, the jailor came (b) ___ the room of Socrates to bid him prepare (c) ___ death. In those days, people were sentenced to death by giving a cup (d) ___ poison in Athens. Socrates knew this and he nodded (e) ___ the jailor. Bursting (f) ___ tears the jailor went out of the room and returned (g) ___ a cup of hemlock. Socrates lifted the cup to his lips. His pupils tried to keep back their tears but soon the room was filled (h) ___ the sound of weeping. With the cup of poison hand, Socrates said, 'What is the strange sound? I have heard that a man should die (i) ___ peace. So be silent and have patience.'",
        blanks: [
            { letter: "a", answer: "behind/under/over", explanation: "Preposition 'setting behind/under/over'." },
            { letter: "b", answer: "to/into/inside", explanation: "Preposition 'came to/into/inside'." },
            { letter: "c", answer: "for", explanation: "Verb 'prepare for'." },
            { letter: "d", answer: "of", explanation: "Preposition 'cup of' poison." },
            { letter: "e", answer: "to/at", explanation: "Verb 'nodded to/at'." },
            { letter: "f", answer: "into", explanation: "Phrasal verb 'bursting into' tears." },
            { letter: "g", answer: "with", explanation: "Preposition 'returned with'." },
            { letter: "h", answer: "with", explanation: "Passive 'filled with'." },
            { letter: "i", answer: "in", explanation: "Preposition 'in' peace." },
            { letter: "j", answer: "in", explanation: "Preposition 'in' peace." }
        ]
    },
    {
        id: 40,
        board: "Dinajpur Board",
        year: 2019,
        wordBox: ["of", "of", "at", "at", "to", "in/of", "about/of", "away", "of", "of"],
        passage: "A craftwork in an applied form (a) ___ art, a social and cultural product reflecting the inclusive nature (b) ___ folk imagination. A craftwork, which usually doesn't bear the signature of its maker, retains a personal touch. When we look (c) ___ a thirty-year-old nakshikantha, we wonder (d) ___ its motifs and designs that point (e) ___ the artistic ingenuity and the presence of the maker (f) ___ it. The fact that we don't know her name or any other details (g) ___ her doesn't take anything (h) ___ from our appreciation (i) ___ the artist.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Preposition 'form of' art." },
            { letter: "b", answer: "of", explanation: "Preposition 'nature of'." },
            { letter: "c", answer: "at", explanation: "Verb 'look at'." },
            { letter: "d", answer: "at", explanation: "Verb 'wonder at'." },
            { letter: "e", answer: "to", explanation: "Verb 'point to'." },
            { letter: "f", answer: "in/of", explanation: "Preposition 'in/of' it." },
            { letter: "g", answer: "about/of", explanation: "Preposition 'details about/of'." },
            { letter: "h", answer: "away", explanation: "Phrasal verb 'take away'." },
            { letter: "i", answer: "of", explanation: "Noun 'appreciation of'." },
            { letter: "j", answer: "of", explanation: "Preposition 'nature of'." }
        ]
    },
    {
        id: 41,
        board: "Jashore Board",
        year: 2019,
        wordBox: ["in", "to", "for", "for", "from", "into", "of", "of", "for", "upon"],
        passage: "Patriotism is the quality inherent (a) ___ a man. This is why, he feels a natural attachment (b) ___ his native land. Love (c) ___ motherland is necessary for the betterment of a nation. The people who are patriotic are noted (d) ___ their patriotism. They are different (e) ___ other people. Their contribution does not sink (f) ___ oblivion. They are worthy (g) ___ praise. They lay down their lives for the good of the country. They are not unaware (h) ___ their status in society. They are celebrated (i) ___ their patriotism. They should not be looked down (j) ___ in any way.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Adjective 'inherent in'." },
            { letter: "b", answer: "to", explanation: "Noun 'attachment to'." },
            { letter: "c", answer: "for", explanation: "Noun 'love for'." },
            { letter: "d", answer: "for", explanation: "Adjective 'noted for'." },
            { letter: "e", answer: "from", explanation: "Adjective 'different from'." },
            { letter: "f", answer: "into", explanation: "Verb 'sink into'." },
            { letter: "g", answer: "of", explanation: "Adjective 'worthy of'." },
            { letter: "h", answer: "of", explanation: "Adjective 'unaware of'." },
            { letter: "i", answer: "for", explanation: "Adjective 'celebrated for'." },
            { letter: "j", answer: "upon", explanation: "Phrasal verb 'looked down upon'." }
        ]
    },
    {
        id: 42,
        board: "Cumilla Board",
        year: 2019,
        wordBox: ["of", "to/for", "among/with", "For", "in/inside", "on", "in", "in", "about", "with/between"],
        passage: "Preposition connects all types (a) ___ words together and supports them make better sense (b) ___ the readers. They help us to understand the relationship (c) ___ objects. (d) ___ example, the book and the table (e) ___ the kitchen. This ensures you a basic understanding. If we add another preposition, it makes it even clearer. This book is (f) ___ top of the table (g) ___ the kitchen. We have a clear picture (h) ___ our mind (i) ___ the relation of those two objects and their relationship (j) ___ each other.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Preposition 'types of'." },
            { letter: "b", answer: "to/for", explanation: "Preposition 'sense to/for'." },
            { letter: "c", answer: "among/with", explanation: "Preposition 'relationship among/with'." },
            { letter: "d", answer: "For", explanation: "Phrase 'For example'." },
            { letter: "e", answer: "in/inside", explanation: "Preposition 'in/inside the kitchen'." },
            { letter: "f", answer: "on", explanation: "Preposition 'on top of'." },
            { letter: "g", answer: "in", explanation: "Preposition 'in the kitchen'." },
            { letter: "h", answer: "in", explanation: "Preposition 'in our mind'." },
            { letter: "i", answer: "about", explanation: "Preposition 'about the relation'." },
            { letter: "j", answer: "with/between", explanation: "Preposition 'relationship with/between'." }
        ]
    },
    {
        id: 43,
        board: "Chattogram Board",
        year: 2019,
        wordBox: ["to", "to", "from", "for", "for", "to", "of", "of", "to", "by"],
        passage: "What are the qualities of a good student? A good student is always attentive (a) ___ his studies. He is never indifferent (b) ___ his studies. He does not learn things (c) ___ rote. He is always curious and innovative. He does not hunt only (d) ___ traditional guide books. His thirst (e) ___ knowledge knows no bounds. He does not confine himself (f) ___ the traditional studies. He is aware (g) ___ the current affairs (h) ___ the world. He listens (i) ___ his teachers and abides (j) ___ their advice.",
        blanks: [
            { letter: "a", answer: "to", explanation: "Adjective 'attentive to'." },
            { letter: "b", answer: "to", explanation: "Adjective 'indifferent to'." },
            { letter: "c", answer: "from", explanation: "Phrase 'learn from rote'." },
            { letter: "d", answer: "for", explanation: "Verb 'hunt for'." },
            { letter: "e", answer: "for", explanation: "Noun 'thirst for'." },
            { letter: "f", answer: "to", explanation: "Verb 'confine to'." },
            { letter: "g", answer: "of", explanation: "Adjective 'aware of'." },
            { letter: "h", answer: "of", explanation: "Preposition 'affairs of'." },
            { letter: "i", answer: "to", explanation: "Verb 'listen to'." },
            { letter: "j", answer: "by", explanation: "Verb 'abide by'." }
        ]
    },
    {
        id: 44,
        board: "Sylhet Board",
        year: 2019,
        wordBox: ["for", "into", "on", "under", "out", "about", "on/under", "at/towards", "to", "without"],
        passage: "Luna's cat was missing. So she started looking around (a) ___ it. She opened her closet and looked (b) ___ Then she went to the bedroom crawling (c) ___ the floor to look (d) ___ the bed. The cat was not there. In fact, it was nowhere inside the house. Therefore, Luna decided to go (e) ___ to look for it. Just as she was (f) ___ to open the door, the doorbell rang. It was her neighbour, Mrs Haq, 'Look, Luna! Your cat is (g) ___ the sunshade!' said Mrs Haq pointing (h) ___ a tall building opposite (i) ___ her house. Luna smiled and thanked her friendly neighbour, saying that (j) ___ her help she would not be able to find out her cat.",
        blanks: [
            { letter: "a", answer: "for", explanation: "Phrasal verb 'look for'." },
            { letter: "b", answer: "into", explanation: "Phrasal verb 'look into'." },
            { letter: "c", answer: "on", explanation: "Preposition 'on the floor'." },
            { letter: "d", answer: "under", explanation: "Preposition 'under the bed'." },
            { letter: "e", answer: "out", explanation: "Phrasal verb 'go out'." },
            { letter: "f", answer: "about", explanation: "Phrase 'about to'." },
            { letter: "g", answer: "on/under", explanation: "Preposition 'on/under the sunshade'." },
            { letter: "h", answer: "at/towards", explanation: "Verb 'point at/towards'." },
            { letter: "i", answer: "to", explanation: "Preposition 'opposite to'." },
            { letter: "j", answer: "without", explanation: "Preposition 'without help'." }
        ]
    },
    {
        id: 45,
        board: "Barishal Board",
        year: 2019,
        wordBox: ["on", "outside/near/behind/by/beside/before", "past/to/towards/by", "to", "in", "about/of", "on/in", "to/towards", "until/till", "in/at"],
        passage: "The old grey-bearded sailor sat (a) ___ a stone (b) ___ the church. The sailor watched the people walking (c) ___ him. The marriage guest listened (d) ___ him. He had a strange mad look (e) ___ his eyes. The old man told him (f) ___ his last journey (g) ___ the sea. They had sailed away (h) ___ the south (i) ___ they arrived (j) ___ cold grey seas.",
        blanks: [
            { letter: "a", answer: "on", explanation: "Preposition 'on a stone'." },
            { letter: "b", answer: "outside/near/behind/by/beside/before", explanation: "Preposition for location." },
            { letter: "c", answer: "past/to/towards/by", explanation: "Preposition 'walking past/to/towards/by'." },
            { letter: "d", answer: "to", explanation: "Verb 'listen to'." },
            { letter: "e", answer: "in", explanation: "Preposition 'in his eyes'." },
            { letter: "f", answer: "about/of", explanation: "Verb 'told about/of'." },
            { letter: "g", answer: "on/in", explanation: "Preposition 'on/in the sea'." },
            { letter: "h", answer: "to/towards", explanation: "Preposition 'sailed to/towards'." },
            { letter: "i", answer: "until/till", explanation: "Conjunction 'until/till'." },
            { letter: "j", answer: "in/at", explanation: "Preposition 'arrived in/at'." }
        ]
    },
    {
        id: 46,
        board: "Board Question (Ka Set)",
        year: 2018,
        wordBox: ["to", "for", "from", "by", "by", "in", "to", "with", "in", "of"],
        passage: "Trees are very useful (a) ___ man. They are highly essential (b) ___ our existence. They protect the rich topsoil (c) ___ getting washed away (d) ___ rainwater and floods. We can see trees being grown along the mountain slopes (e) ___ the roadsides (f) ___ the parks and gardens. They add beauty (g) ___ our lives. They provide us (h) ___ food, wood, shade, shelter and so on. They take (i) ___ carbon-di-oxide and produce oxygen. So we should take care (j) ___ trees.",
        blanks: [
            { letter: "a", answer: "to", explanation: "Adjective 'useful to'." },
            { letter: "b", answer: "for", explanation: "Adjective 'essential for'." },
            { letter: "c", answer: "from", explanation: "Verb 'protect from'." },
            { letter: "d", answer: "by", explanation: "Preposition 'by rainwater'." },
            { letter: "e", answer: "by", explanation: "Preposition 'by the roadsides'." },
            { letter: "f", answer: "in", explanation: "Preposition 'in parks'." },
            { letter: "g", answer: "to", explanation: "Verb 'add to'." },
            { letter: "h", answer: "with", explanation: "Verb 'provide with'." },
            { letter: "i", answer: "in", explanation: "Phrasal verb 'take in'." },
            { letter: "j", answer: "of", explanation: "Phrasal verb 'take care of'." }
        ]
    },
    {
        id: 47,
        board: "Board Question (Kha Set)",
        year: 2018,
        wordBox: ["of/about", "with", "of", "of/with", "in/at/by/through", "with", "in/at", "with", "around/across/of/through/at", "to"],
        passage: "Do you have any idea (a) ___ a cyber cafe? It's a place teeming (b) ___ information. It's a network (c) ___ all networks. It is a place (d) ___ computers (e) ___ which customers can use the internet and send e-mails and so on. A cybercafe is closely associated (f) ___ internet communication system. A customer sitting (g) ___ the cafe can communicate (h) ___ people (i) ___ the world. In fact, a cyber cafe is not prejudicial (j) ___ our development.",
        blanks: [
            { letter: "a", answer: "of/about", explanation: "Noun 'idea of/about'." },
            { letter: "b", answer: "with", explanation: "Verb 'teeming with'." },
            { letter: "c", answer: "of", explanation: "Preposition 'network of'." },
            { letter: "d", answer: "of/with", explanation: "Preposition 'place of/with'." },
            { letter: "e", answer: "in/at/by/through", explanation: "Preposition 'which'." },
            { letter: "f", answer: "with", explanation: "Verb 'associated with'." },
            { letter: "g", answer: "in/at", explanation: "Preposition 'in/at the cafe'." },
            { letter: "h", answer: "with", explanation: "Verb 'communicate with'." },
            { letter: "i", answer: "around/across/of/through/at", explanation: "Preposition 'around the world'." },
            { letter: "j", answer: "to", explanation: "Adjective 'prejudicial to'." }
        ]
    },
    {
        id: 48,
        board: "Dhaka Board",
        year: 2017,
        wordBox: ["in", "In", "around", "of", "For", "among/of", "for", "of", "in", "of"],
        passage: "The environment plays an important role (a) ___ our life. (b) ___ short, what we have (c) ___ us including people, houses, air, water etc. is called environment. These are the main elements (d) ___ our environment. (e) ___ ensuring sound life the balance (f) ___ the natural elements is very significant. Sometimes (g) ___ lack of knowledge, we don't realise the importance (h) ___ it. As a result, we are polluting our environment unknowingly. Living (i) ___ a polluted environment is undoubtedly a matter (j) ___ great regret.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Noun 'role in'." },
            { letter: "b", answer: "In", explanation: "Phrase 'In short'." },
            { letter: "c", answer: "around", explanation: "Preposition 'around us'." },
            { letter: "d", answer: "of", explanation: "Preposition 'elements of'." },
            { letter: "e", answer: "For", explanation: "Preposition 'For ensuring'." },
            { letter: "f", answer: "among/of", explanation: "Preposition 'balance among/of'." },
            { letter: "g", answer: "for", explanation: "Preposition 'for lack of'." },
            { letter: "h", answer: "of", explanation: "Noun 'importance of'." },
            { letter: "i", answer: "in", explanation: "Preposition 'living in'." },
            { letter: "j", answer: "of", explanation: "Noun 'matter of'." }
        ]
    },
    {
        id: 49,
        board: "Rajshahi Board",
        year: 2017,
        wordBox: ["in", "in", "through", "of", "to", "around", "of", "into", "through", "with"],
        passage: "Ours is a riverine country. Rivers are everywhere (a) ___ our life-literature, economy and culture. But are the rivers (b) ___ good shape? Unfortunately, they are not. A few are already dead and several are going (c) ___ the pangs of death. The river Buriganga is an example (d) ___ a dying river. A report published in The Daily Sun describes what has happened (e) ___ the river Buriganga and why. Its water is polluted and a perpetual stench fills the air (f) ___ it. The report says that the river had a glorious past. Once it was a tributary (g) ___ the Ganges and flowed (h) ___ the Bay of Bengal (i) ___ the river Dhaleswari. Gradually, it lost its link (j) ___ the Ganges and got the name Buriganga.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition 'in life'." },
            { letter: "b", answer: "in", explanation: "Phrase 'in good shape'." },
            { letter: "c", answer: "through", explanation: "Preposition 'through pangs'." },
            { letter: "d", answer: "of", explanation: "Preposition 'example of'." },
            { letter: "e", answer: "to", explanation: "Preposition 'happened to'." },
            { letter: "f", answer: "around", explanation: "Preposition 'around it'." },
            { letter: "g", answer: "of", explanation: "Preposition 'tributary of'." },
            { letter: "h", answer: "into", explanation: "Preposition 'flowed into'." },
            { letter: "i", answer: "through", explanation: "Preposition 'through the river'." },
            { letter: "j", answer: "with", explanation: "Preposition 'link with'." }
        ]
    },
    {
        id: 50,
        board: "Dinajpur Board",
        year: 2017,
        wordBox: ["in/at", "on", "to/towards", "over", "about", "down", "of", "in", "on", "in/at"],
        passage: "Badal lived (a) ___ a village of Bangladesh. He was a schoolboy. There was a canal (b) ___ his way (c) ___ school. An old bridge was (d) ___ that canal. It was useful to one and all of the villagers. Yet none cared (e) ___ its repair. So one day it broke (f) ___ and caused a good deal (g) ___ hardship to the villagers. They were (h) ___ difficulty. They could not go to the town (i) ___ the other side of the canal to sell their fruits and vegetables profitably. They sold their production (j) ___ local market at a nominal price.",
        blanks: [
            { letter: "a", answer: "in/at", explanation: "Preposition 'lived in/at'." },
            { letter: "b", answer: "on", explanation: "Preposition 'on his way'." },
            { letter: "c", answer: "to/towards", explanation: "Preposition 'way to/towards'." },
            { letter: "d", answer: "over", explanation: "Preposition 'over the canal'." },
            { letter: "e", answer: "about", explanation: "Verb 'cared about'." },
            { letter: "f", answer: "down", explanation: "Phrasal verb 'broke down'." },
            { letter: "g", answer: "of", explanation: "Phrase 'good deal of'." },
            { letter: "h", answer: "in", explanation: "Phrase 'in difficulty'." },
            { letter: "i", answer: "on", explanation: "Preposition 'on the other side'." },
            { letter: "j", answer: "in/at", explanation: "Preposition 'in/at market'." }
        ]
    },
    {
        id: 51,
        board: "Jashore Board",
        year: 2017,
        wordBox: ["for", "in", "of/from", "like/for/with/as", "for/as", "of/about", "in/on/at", "of/about", "of/about", "of"],
        passage: "It would be impossible (a) ___ us to continue living in this world if each of us knew exactly what fate had (b) ___ store for us. So, Allah in His mercy conceals the future (c) ___ all His creatures and reveals only the present. He hides from the animals what men know, and He hides from men what the angels know. For example, if a lamb had a reason (d) ___ a man, it could not gamble happily knowing it was destined to be killed (e) ___ human food. But being quite ignorant (f) ___ its fate, it is happy to the last moment of its short life contentedly grazing (g) ___ the flowery meadow, and even in its innocence licks the hands (h) ___ the butcher who is about to slaughter it. What a blessing it is that we are ignorant (i) ___ the future! Allah, to whom the death of a sparrow is of equal importance with the death of a hero, has, in His mercy, thus limited our knowledge so that we might fulfil our duty in the sphere (j) ___ which has appointed us.",
        blanks: [
            { letter: "a", answer: "for", explanation: "Preposition 'impossible for'." },
            { letter: "b", answer: "in", explanation: "Phrase 'in store'." },
            { letter: "c", answer: "of/from", explanation: "Verb 'conceals from/of'." },
            { letter: "d", answer: "like/for/with/as", explanation: "Preposition 'reason for'." },
            { letter: "e", answer: "for/as", explanation: "Preposition 'killed for/as'." },
            { letter: "f", answer: "of/about", explanation: "Adjective 'ignorant of/about'." },
            { letter: "g", answer: "in/on/at", explanation: "Preposition 'grazing in/on/at'." },
            { letter: "h", answer: "of/about", explanation: "Preposition 'hands of/about'." },
            { letter: "i", answer: "of/about", explanation: "Adjective 'ignorant of/about'." },
            { letter: "j", answer: "of", explanation: "Preposition 'sphere of'." }
        ]
    },
    {
        id: 52,
        board: "Dhaka Board",
        year: 2016,
        wordBox: ["of", "for", "of", "of", "of", "in", "of", "with", "in", "with"],
        passage: "A good stock (a) ___ words is necessary (b) ___ anybody who wants to use a language. Vocabulary is an essential component (c) ___ successful communication. It is an integral part (d) ___ reading skill. While grammar is important, a lack (e) ___ vocabulary may result (f) ___ complete failure to convey a message. Vocabulary includes conceptual knowledge (g) ___ words that go well (h) ___ an ordinary dictionary meaning. Students' vocabulary knowledge is a building process that occurs (i) ___ time as they tend to make connections (j) ___ other words.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Noun 'stock of'." },
            { letter: "b", answer: "for", explanation: "Adjective 'necessary for'." },
            { letter: "c", answer: "of", explanation: "Noun 'component of'." },
            { letter: "d", answer: "of", explanation: "Noun 'part of'." },
            { letter: "e", answer: "of", explanation: "Noun 'lack of'." },
            { letter: "f", answer: "in", explanation: "Verb 'result in'." },
            { letter: "g", answer: "of", explanation: "Preposition 'knowledge of'." },
            { letter: "h", answer: "with", explanation: "Phrasal verb 'go with'." },
            { letter: "i", answer: "in", explanation: "Preposition 'in time'." },
            { letter: "j", answer: "with", explanation: "Verb 'connections with'." }
        ]
    },
    {
        id: 53,
        board: "Rajshahi Board",
        year: 2016,
        wordBox: ["in", "of", "down", "of", "in/for", "up", "through", "from", "to", "with"],
        passage: "Once an English and a Bengalee gentleman were travelling (a) ___ the same train and they were in the same compartment. The Englishman was very proud (b) ___ himself because he was an Englishman. He looked (c) ___ upon the Bengalee gentleman who, however, took no notice (d) ___ it and went to sleep (e) ___ peace. As soon as the Bengalee gentleman was asleep, the Englishman picked (f) ___ the gentleman's shoes and threw them (g) ___ the window and went to sleep. When the Bengalee gentleman woke up, he looked for his shoes and understood it. Then he took the Englishman's long coat (h) ___ the wall and threw it outside the window and returned (i) ___ bed laughingly. Next morning the Englishman became startled and shouted, 'Where's my coat gone?' 'Your coat has gone to fetch my shoes,' said the gentleman (j) ___ a smile. The Bengalee gentleman was Sir Ashutosh Mukherjee.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition 'in the train'." },
            { letter: "b", answer: "of", explanation: "Adjective 'proud of'." },
            { letter: "c", answer: "down", explanation: "Phrasal verb 'look down upon'." },
            { letter: "d", answer: "of", explanation: "Phrase 'take notice of'." },
            { letter: "e", answer: "in/for", explanation: "Phrase 'in/for peace'." },
            { letter: "f", answer: "up", explanation: "Phrasal verb 'picked up'." },
            { letter: "g", answer: "through", explanation: "Preposition 'through the window'." },
            { letter: "h", answer: "from", explanation: "Preposition 'from the wall'." },
            { letter: "i", answer: "to", explanation: "Preposition 'returned to bed'." },
            { letter: "j", answer: "with", explanation: "Preposition 'with a smile'." }
        ]
    },
    {
        id: 54,
        board: "Jashore Board",
        year: 2016,
        wordBox: ["of", "in/for", "of", "from", "to", "with", "under/within", "in", "in", "after"],
        passage: "A teacher is an architect (a) ___ a nation. He plays an important role (b) ___ building up an educated nation. He dispels the darkness (c) ___ ignorance (d) ___ the lot of a nation. He is an actor, so to speak. He has to suit his act according (e) ___ the need of his audience which is his class. He is a clear speaker (f) ___ good, strong and pleasing voice which is (g) ___ his control. He does not sit motionless (h) ___ his class. Everybody has something valuable (i) ___ him. A good teacher discovers the treasure hidden inside each student. He also wants the students happy and for this he keeps them busy. A good teacher never hankers (j) ___ money.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Noun 'architect of'." },
            { letter: "b", answer: "in/for", explanation: "Noun 'role in/for'." },
            { letter: "c", answer: "of", explanation: "Preposition 'darkness of'." },
            { letter: "d", answer: "from", explanation: "Preposition 'from the lot'." },
            { letter: "e", answer: "to", explanation: "Phrase 'according to'." },
            { letter: "f", answer: "with", explanation: "Preposition 'with voice'." },
            { letter: "g", answer: "under/within", explanation: "Preposition 'under/within control'." },
            { letter: "h", answer: "in", explanation: "Preposition 'in class'." },
            { letter: "i", answer: "in", explanation: "Preposition 'in him'." },
            { letter: "j", answer: "after", explanation: "Verb 'hankers after'." }
        ]
    },
    {
        id: 55,
        board: "Cumilla Board",
        year: 2016,
        wordBox: ["to", "to", "by", "for", "for", "to", "of", "in/of", "by", "down"],
        passage: "A good student is never indifferent (a) ___ his studies. He always adheres (b) ___ his studies. He does not learn things (c) ___ rote. He does not hunt (d) ___ traditional guide books. Moreover he has great thirst (e) ___ knowledge. For this he does not confine himself (f) ___ the traditional studies. He is always aware (g) ___ the current affairs (h) ___ the world. He abides (i) ___ his teachers' advice and jots (j) ___ their lessons.",
        blanks: [
            { letter: "a", answer: "to", explanation: "Adjective 'indifferent to'." },
            { letter: "b", answer: "to", explanation: "Verb 'adheres to'." },
            { letter: "c", answer: "by", explanation: "Phrase 'learn by rote'." },
            { letter: "d", answer: "for", explanation: "Verb 'hunt for'." },
            { letter: "e", answer: "for", explanation: "Noun 'thirst for'." },
            { letter: "f", answer: "to", explanation: "Verb 'confine to'." },
            { letter: "g", answer: "of", explanation: "Adjective 'aware of'." },
            { letter: "h", answer: "in/of", explanation: "Preposition 'affairs in/of'." },
            { letter: "i", answer: "by", explanation: "Verb 'abide by'." },
            { letter: "j", answer: "down", explanation: "Phrasal verb 'jot down'." }
        ]
    },
    {
        id: 56,
        board: "Chattogram Board",
        year: 2016,
        wordBox: ["on", "from", "as", "in", "of", "for", "of", "for/on", "for", "for"],
        passage: "Flowers are the excellent gift of nature. They have existed (a) ___ the earth (b) ___ prehistoric time. Since then they have been treated (c) ___ the symbol of beauty. It is an undeniable fact that flowers are used (d) ___ various spheres (e) ___ our life. It is used mostly (f) ___ decoration. People (g) ___ all walks of life use flowers usually (h) ___ national occasion and (i) ___ wedding. Everyone prefers flowers (j) ___ expressing their love and devotion.",
        blanks: [
            { letter: "a", answer: "on", explanation: "Preposition 'on the earth'." },
            { letter: "b", answer: "from", explanation: "Preposition 'from time'." },
            { letter: "c", answer: "as", explanation: "Preposition 'treated as'." },
            { letter: "d", answer: "in", explanation: "Preposition 'in spheres'." },
            { letter: "e", answer: "of", explanation: "Preposition 'of life'." },
            { letter: "f", answer: "for", explanation: "Preposition 'for decoration'." },
            { letter: "g", answer: "of", explanation: "Preposition 'of walks of life'." },
            { letter: "h", answer: "for/on", explanation: "Preposition 'for/on occasion'." },
            { letter: "i", answer: "for", explanation: "Preposition 'for wedding'." },
            { letter: "j", answer: "for", explanation: "Preposition 'for expressing'." }
        ]
    },
    {
        id: 57,
        board: "Sylhet Board",
        year: 2016,
        wordBox: ["in", "in", "with", "in", "in", "with", "to", "with", "to", "of"],
        passage: "The science fair held (a) ___ our college paved a new way for us to gather practical knowledge. Many of our friends took part (b) ___ the fair (c) ___ their projects. We showed genuine interest (d) ___ them. Most of the projects were made (e) ___ consistent (f) ___ the prevailing world situation. They were intended (g) ___ acquaint us (h) ___ the solutions (i) ___ some common problems we are facing specially in regard to the environment we live in. We were sanguine (j) ___ achieving success and we really achieved it.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition 'in college'." },
            { letter: "b", answer: "in", explanation: "Phrasal verb 'take part in'." },
            { letter: "c", answer: "with", explanation: "Preposition 'with projects'." },
            { letter: "d", answer: "in", explanation: "Noun 'interest in'." },
            { letter: "e", answer: "in", explanation: "Preposition 'in consistent'." },
            { letter: "f", answer: "with", explanation: "Adjective 'consistent with'." },
            { letter: "g", answer: "to", explanation: "Passive infinitive 'intended to'." },
            { letter: "h", answer: "with", explanation: "Verb 'acquaint with'." },
            { letter: "i", answer: "to", explanation: "Noun 'solutions to'." },
            { letter: "j", answer: "of", explanation: "Adjective 'sanguine of'." }
        ]
    },
    {
        id: 58,
        board: "Barishal Board",
        year: 2016,
        wordBox: ["at", "through/with", "in", "to", "into", "for", "to", "for", "from", "for"],
        passage: "During holidays when my mother went to sleep (a) ___ noon, we went to the railway line. There, along with other children, I watched how the trains passed (b) ___ innumerable unknown facts. My father got an appointment (c) ___ a town school and he moved (d) ___ the town immediately with all the members of the family. I was admitted (e) ___ my father's school. I felt that my school fellows had no feeling (f) ___ one another as we had in the village. However, I have gradually adjusted myself (g) ___ town life. I am happy with my new friends but my heart aches (h) ___ the happy childhood days. Childhood is free (i) ___ worries and has infinite capacity (j) ___ enjoyment.",
        blanks: [
            { letter: "a", answer: "at", explanation: "Preposition 'at noon'." },
            { letter: "b", answer: "through/with", explanation: "Preposition 'passed through/with'." },
            { letter: "c", answer: "in", explanation: "Preposition 'appointment in'." },
            { letter: "d", answer: "to", explanation: "Preposition 'moved to'." },
            { letter: "e", answer: "into", explanation: "Verb 'admitted into'." },
            { letter: "f", answer: "for", explanation: "Noun 'feeling for'." },
            { letter: "g", answer: "to", explanation: "Verb 'adjust to'." },
            { letter: "h", answer: "for", explanation: "Verb 'aches for'." },
            { letter: "i", answer: "from", explanation: "Adjective 'free from'." },
            { letter: "j", answer: "for", explanation: "Noun 'capacity for'." }
        ]
    },
    {
        id: 59,
        board: "Dinajpur Board",
        year: 2016,
        wordBox: ["of", "by", "by", "down", "by", "up", "by", "In", "up", "on"],
        passage: "Greenhouse effect is the gradual warming (a) ___ the air surrounding the earth as a result of heat being trapped (b) ___ environment pollution. This is exemplified (c) ___ the destruction and burning (d) ___ of tropical rain forests, (e) ___ traffic that clogs (f) ___ city streets, (g) ___ the rapid growth of industry, the use of chlorofluorocarbons (CFCs) (h) ___ packaging and manufacturing commercial products, the use of detergents like washing (i) ___ liquids and so (j) ___.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Noun 'warming of'." },
            { letter: "b", answer: "by", explanation: "Passive 'trapped by'." },
            { letter: "c", answer: "by", explanation: "Passive 'exemplified by'." },
            { letter: "d", answer: "down", explanation: "Phrasal verb 'burning down'." },
            { letter: "e", answer: "by", explanation: "Preposition 'by traffic'." },
            { letter: "f", answer: "up", explanation: "Phrasal verb 'clogs up'." },
            { letter: "g", answer: "by", explanation: "Preposition 'by growth'." },
            { letter: "h", answer: "In", explanation: "Preposition 'In packaging'." },
            { letter: "i", answer: "up", explanation: "Phrasal verb 'washing up'." },
            { letter: "j", answer: "on", explanation: "Phrase 'and so on'." }
        ]
    },
    // ==========================================
    // PART D: New Exercises (63-85)
    // ==========================================
    {
        id: 63,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["away", "from", "of", "of", "of"],
        passage: "Waste or rubbish is what we throw (a) ___ every day. It includes everything (b) ___ unwanted old cars to cigarette packets. But we have to get rid (c) ___ waste. We know that our garbage consists (d) ___ various kinds of things. In order to reduce our waste, we may think (e) ___ burning and recycling.",
        blanks: [
            { letter: "a", answer: "away", explanation: "Phrasal verb: 'throw away' means to discard." },
            { letter: "b", answer: "from", explanation: "Preposition 'from...to' indicates a range." },
            { letter: "c", answer: "of", explanation: "Fixed phrase: 'get rid of' means to eliminate." },
            { letter: "d", answer: "of", explanation: "Fixed phrase: 'consists of' means to be made up of." },
            { letter: "e", answer: "of", explanation: "Phrasal verb: 'think of' means to consider." }
        ]
    },
    {
        id: 64,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["for", "with", "with", "of", "in"],
        passage: "Man has an unquenchable thirst (a) ___ knowledge. He is never satisfied (b) ___ what he has known and seen. The curiosity to know more coupled (c) ___ the indomitable spirit (d) ___ adventure has inspired him to undertake and carry out dangerous tasks. It eventually resulted (e) ___ epoch making discoveries.",
        blanks: [
            { letter: "a", answer: "for", explanation: "Noun phrase: 'thirst for' (craving)." },
            { letter: "b", answer: "with", explanation: "Adjective phrase: 'satisfied with'." },
            { letter: "c", answer: "with", explanation: "Preposition: 'coupled with' means combined with." },
            { letter: "d", answer: "of", explanation: "Preposition showing possession: 'spirit of adventure'." },
            { letter: "e", answer: "in", explanation: "Phrasal verb: 'resulted in' means led to." }
        ]
    },
    {
        id: 65,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["of", "for", "with", "of", "in"],
        passage: "A greedy man is covetous (a) ___ wealth. He always craves (b) ___ money. He is not satisfied (c) ___ what he has. He is not aware (d) ___ the fact that true happiness consists (e) ___ contentment.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Adjective phrase: 'covetous of' (extremely desirous of)." },
            { letter: "b", answer: "for", explanation: "Verb phrase: 'craves for' (strongly desires)." },
            { letter: "c", answer: "with", explanation: "Adjective phrase: 'satisfied with'." },
            { letter: "d", answer: "of", explanation: "Adjective phrase: 'aware of'." },
            { letter: "e", answer: "in", explanation: "Verb phrase: 'consists in' (to be inherent in)." }
        ]
    },
    {
        id: 66,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["of", "for", "to", "of", "to"],
        passage: "Parents are desirous (a) ___ bright future of their children. They long (b) ___ their complete well being. They are ready to do anything which may be congenial (c) ___ the success of their children. Every success of their children make them happy and they become sanguine (d) ___ their bright future. But if the children do not pay heed (e) ___ the suggestions of their parents and fail to move forward as the parents want, their entire hopes end in smoke.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Adjective phrase: 'desirous of'." },
            { letter: "b", answer: "for", explanation: "Verb phrase: 'long for' (yearn for)." },
            { letter: "c", answer: "to", explanation: "Adjective phrase: 'congenial to' (suitable)." },
            { letter: "d", answer: "of", explanation: "Adjective phrase: 'sanguine of' (optimistic)." },
            { letter: "e", answer: "to", explanation: "Noun phrase: 'pay heed to' (pay attention to)." }
        ]
    },
    {
        id: 67,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["to", "at", "with", "for", "with"],
        passage: "I caught sight of him while crossing the road. I tried to talk (a) ___ him. But he was in a hurry. He was one of my best friends. Both of us studied (b) ___ the same school. I had an intimacy (c) ___ him. Both of us got separated from each other after the completion of S.S.C. Examination. Though my heart bleeds (d) ___ him, I hardly meet (e) ___ him. This is the go of the world.",
        blanks: [
            { letter: "a", answer: "to", explanation: "Verb phrase: 'talk to' someone." },
            { letter: "b", answer: "at", explanation: "Preposition for institutions: 'studied at school'." },
            { letter: "c", answer: "with", explanation: "Noun phrase: 'intimacy with' (close relationship)." },
            { letter: "d", answer: "for", explanation: "Phrasal verb: 'bleeds for' (feels deep sympathy/pain for)." },
            { letter: "e", answer: "with", explanation: "Verb phrase: 'meet with' (encounter or have a meeting)." }
        ]
    },
    {
        id: 68,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["in", "of", "for", "with", "of"],
        passage: "Newspaper is the people's parliament. It plays a vital role (a) ___ modern civilization. We must have the habit (b) ___ reading newspaper daily. It helps us in acquiring general knowledge which is essential (c) ___ our education. Nobody can keep contact (d) ___ the outside world without reading newspaper. Being ignorant (e) ___ the current topics, he/she cannot take part in the talks and discussion in enlightened society.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Noun phrase: 'role in'." },
            { letter: "b", answer: "of", explanation: "Noun phrase: 'habit of' + V-ing." },
            { letter: "c", answer: "for", explanation: "Adjective phrase: 'essential for'." },
            { letter: "d", answer: "with", explanation: "Noun phrase: 'contact with'." },
            { letter: "e", answer: "of", explanation: "Adjective phrase: 'ignorant of'." }
        ]
    },
    {
        id: 69,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["upon", "from", "in", "of", "in"],
        passage: "Iphitos hit (a) ___ a plan. He invited the best athletes (b) ___ the nearby cities to the valley of Olympia to take part (c) ___ athletic contests. Iphitos' plan worked well. For a time, the Greek warriors, instead (d) ___ fighting their neighbours, tried to outdo their rivals (e) ___ friendly games and sports.",
        blanks: [
            { letter: "a", answer: "upon", explanation: "Phrasal verb: 'hit upon' (to think of an idea)." },
            { letter: "b", answer: "from", explanation: "Preposition of origin: 'from nearby cities'." },
            { letter: "c", answer: "in", explanation: "Phrasal verb: 'take part in' (participate)." },
            { letter: "d", answer: "of", explanation: "Preposition: 'instead of' (in place of)." },
            { letter: "e", answer: "in", explanation: "Preposition: 'in friendly games' (context)." }
        ]
    },
    {
        id: 70,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["of", "in", "in", "on", "to"],
        passage: "He was proud (a) ___ his result. But none should take pride (b) ___ his talents. Pride results (c) ___ ruin. Those who have prided themselves (d) ___ their talents have been subject (e) ___ humiliation.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Adjective: 'proud of'." },
            { letter: "b", answer: "in", explanation: "Verb phrase: 'take pride in'." },
            { letter: "c", answer: "in", explanation: "Verb: 'results in' (leads to)." },
            { letter: "d", answer: "on", explanation: "Verb phrase: 'pride oneself on'." },
            { letter: "e", answer: "to", explanation: "Adjective: 'subject to' (prone to)." }
        ]
    },
    {
        id: 71,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["of", "of", "with", "on", "for"],
        passage: "Socrates was born (a) ___ poor working class parents probably in the year of 470 B.C. He had the usual education of the boys in those days. It consisted (b) ___ learning music, science, philosophy and gymnastics. He also studied the arts of public speaking and argumentation. As a young man, he served the army and fought in several battles (c) ___ great courage. When he left the army, he carried (d) ___ his search (e) ___ truth.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Preposition: 'born of' (from parents)." },
            { letter: "b", answer: "of", explanation: "Verb: 'consisted of' (made up of)." },
            { letter: "c", answer: "with", explanation: "Preposition: 'with great courage' (manner)." },
            { letter: "d", answer: "on", explanation: "Phrasal verb: 'carried on' (continued)." },
            { letter: "e", answer: "for", explanation: "Noun: 'search for'." }
        ]
    },
    {
        id: 72,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["for", "to", "for", "to", "in"],
        passage: "In the long run a sinner atones (a) ___ his sin because he knows that everyone will have to account (b) ___ God (c) ___ his/her deeds. So, when a sinner becomes really repentant, he/she is seen devoted (d) ___ God. Sometimes he/she is seen absorbed (e) ___ deep meditation.",
        blanks: [
            { letter: "a", answer: "for", explanation: "Verb: 'atones for' (makes amends for)." },
            { letter: "b", answer: "to", explanation: "Verb: 'account to' (answer to authority)." },
            { letter: "c", answer: "for", explanation: "Verb: 'account for' (explain actions)." },
            { letter: "d", answer: "to", explanation: "Adjective: 'devoted to'." },
            { letter: "e", answer: "in", explanation: "Adjective: 'absorbed in' (deeply engaged)." }
        ]
    },
    {
        id: 73,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["from", "to", "at", "in", "to"],
        passage: "As the work of the women is neglected, they are ignored (a) ___ decision making. Social prejudice and food deprivation lead (b) ___ maternal and child mortality (c) ___ high rate. Violence at home against women is prevalent (d) ___ our country. Many reasons work behind this violence. Dowry and inability to give birth (e) ___ male child are responsible.",
        blanks: [
            { letter: "a", answer: "from", explanation: "Verb: 'ignored from' (excluded from)." },
            { letter: "b", answer: "to", explanation: "Verb: 'lead to' (result in)." },
            { letter: "c", answer: "at", explanation: "Preposition: 'at high rate'." },
            { letter: "d", answer: "in", explanation: "Preposition: 'prevalent in' (common in)." },
            { letter: "e", answer: "to", explanation: "Noun phrase: 'give birth to'." }
        ]
    },
    {
        id: 74,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["from", "on", "with", "to", "to"],
        passage: "Literature reflects social values by exploring human experiences. Authors draw inspiration (a) ___ historical events to comment (b) ___ contemporary issues. Engagement (c) ___ diverse narratives promotes empathy, while access (d) ___ books empowers individuals.",
        blanks: [
            { letter: "a", answer: "from", explanation: "Verb phrase: 'draw inspiration from'." },
            { letter: "b", answer: "on", explanation: "Verb: 'comment on'." },
            { letter: "c", answer: "with", explanation: "Noun: 'engagement with'." },
            { letter: "d", answer: "to", explanation: "Noun: 'access to'." }
        ]
    },
    {
        id: 75,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["of", "by", "of", "by", "into"],
        passage: "Friendship is one of the most valuable aspects (a) ___ life. People who are honest and trustworthy are admired (b) ___ everyone. We should always be considerate (c) ___ our friends' feelings and avoid actions that are dishonest or cruel. Good friends stand (d) ___ us during difficult times and help us grow (e) ___ better human beings.",
        blanks: [
            { letter: "a", answer: "of", explanation: "Preposition showing relation: 'aspects of life'." },
            { letter: "b", answer: "by", explanation: "Passive voice: 'admired by'." },
            { letter: "c", answer: "of", explanation: "Adjective: 'considerate of'." },
            { letter: "d", answer: "by", explanation: "Phrasal verb: 'stand by' (support)." },
            { letter: "e", answer: "into", explanation: "Phrasal verb: 'grow into' (develop into)." }
        ]
    },
    {
        id: 76,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["in", "between", "in", "by", "by", "with", "in", "from", "in", "in"],
        passage: "Bangladesh is a small country situated (a) ___ South Asia. It lies (b) ___ India and Myanmar, and (c) ___ the south it is bounded (d) ___ the Bay of Bengal. The country is crisscrossed (e) ___ many rivers and covered (f) ___ fertile plains. It is rich (g) ___ natural beauty and resources. The climate of Bangladesh varies (h) ___ season to season. The people are engaged (i) ___ agriculture, trade, and industry. The geographical location of Bangladesh plays an important role (j) ___ its economy and culture.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition: 'situated in' (a region)." },
            { letter: "b", answer: "between", explanation: "Preposition: 'between' (two countries)." },
            { letter: "c", answer: "in", explanation: "Preposition: 'in the south' (direction)." },
            { letter: "d", answer: "by", explanation: "Passive: 'bounded by'." },
            { letter: "e", answer: "by", explanation: "Passive: 'crisscrossed by'." },
            { letter: "f", answer: "with", explanation: "Passive: 'covered with'." },
            { letter: "g", answer: "in", explanation: "Adjective: 'rich in'." },
            { letter: "h", answer: "from", explanation: "Verb: 'varies from'." },
            { letter: "i", answer: "in", explanation: "Verb: 'engaged in'." },
            { letter: "j", answer: "in", explanation: "Noun phrase: 'role in'." }
        ]
    },
    {
        id: 77,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["on", "about", "for", "to", "on"],
        passage: "Cadets must report (a) ___ time for morning parade. They should never complain (b) ___ hard training because it builds strength. A true leader always stands (c) ___ truth and justice. We should be thankful (d) ___ our mentors who guide us. Every success depends (e) ___ regular effort.",
        blanks: [
            { letter: "a", answer: "on", explanation: "Phrase: 'on time' (punctually)." },
            { letter: "b", answer: "about", explanation: "Verb: 'complain about'." },
            { letter: "c", answer: "for", explanation: "Phrasal verb: 'stand for' (support)." },
            { letter: "d", answer: "to", explanation: "Adjective: 'thankful to'." },
            { letter: "e", answer: "on", explanation: "Verb: 'depends on'." }
        ]
    },
    {
        id: 78,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["in", "for", "of", "to", "to"],
        passage: "Sports keep us fit (a) ___ mind and body. Regular exercise is necessary (b) ___ health. Athletes are proud (c) ___ their achievements. Children should be encouraged (d) ___ take part in games. Victory brings joy (e) ___ players and their supporters.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition: 'fit in mind'." },
            { letter: "b", answer: "for", explanation: "Adjective: 'necessary for'." },
            { letter: "c", answer: "of", explanation: "Adjective: 'proud of'." },
            { letter: "d", answer: "to", explanation: "Passive infinitive: 'encouraged to' + verb." },
            { letter: "e", answer: "to", explanation: "Preposition: 'brings joy to'." }
        ]
    },
    {
        id: 79,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["on", "from", "off", "into", "with"],
        passage: "Rupal decided (a) ___ living a lonely life. So he became detached (b) ___ his family. He cut (c) ___ all his relation and went (d) ___ a jungle. There he also found himself beset (e) ___ many problems.",
        blanks: [
            { letter: "a", answer: "on", explanation: "Verb: 'decide on' (to choose)." },
            { letter: "b", answer: "from", explanation: "Adjective: 'detached from'." },
            { letter: "c", answer: "off", explanation: "Phrasal verb: 'cut off' (sever)." },
            { letter: "d", answer: "into", explanation: "Preposition: 'went into' (entered)." },
            { letter: "e", answer: "with", explanation: "Adjective: 'beset with' (surrounded by)." }
        ]
    },
    {
        id: 80,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["in", "in", "out", "for", "of"],
        passage: "According to Fire Service and Civil Defense, 74 fire incidents take place (a) ___ the country every day. Many of them result (b) ___ deaths, severe injuries, and irreparable losses. Experts have pointed (c) ___ that poor planning and negligence are key reasons (d) ___ repeated fire incidents. To reduce these incidents and a step ahead (e) ___ precaution, we must improve technologies for using fire and prepare vertical emergencies.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition: 'place in' a country." },
            { letter: "b", answer: "in", explanation: "Verb: 'result in' (lead to)." },
            { letter: "c", answer: "out", explanation: "Phrasal verb: 'pointed out' (drew attention to)." },
            { letter: "d", answer: "for", explanation: "Noun: 'reasons for'." },
            { letter: "e", answer: "of", explanation: "Preposition: 'ahead of'." }
        ]
    },
    {
        id: 81,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["on", "over", "from", "for", "for"],
        passage: "We should muse (a) ___ our way of life. We take everything in a such way as if we triumphed (b) ___ death. We shall not be given any chance to escape (c) ___ death. We are now running after our own shadow to grasp (d) ___ it but in vain. If we waste our time beautifully violating the laws of Allah, the death will revenge (e) ___ us within a very short time.",
        blanks: [
            { letter: "a", answer: "on", explanation: "Verb: 'muse on' (think deeply)." },
            { letter: "b", answer: "over", explanation: "Verb: 'triumphed over' (defeated)." },
            { letter: "c", answer: "from", explanation: "Verb: 'escape from'." },
            { letter: "d", answer: "for", explanation: "Verb: 'grasp for' (try to hold)." },
            { letter: "e", answer: "for", explanation: "Verb: 'revenge for' (avenge oneself)." }
        ]
    },
    {
        id: 82,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["in", "on", "by", "in", "by"],
        passage: "The rehabilitation of hawkers sparked widespread unrest (a) ___ the country. The event began when cops violently tortured the hawkers living (b) ___ Green Road. Later, they refused to go preferring to make a living (c) ___ hawking. After a heated debate (d) ___ the unresolved issue, the demonstrators decided to accept a just solution. Finally, the situation was resolved (e) ___ Victory Day.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition: 'in the country'." },
            { letter: "b", answer: "on", explanation: "Preposition: 'on a road'." },
            { letter: "c", answer: "by", explanation: "Preposition: 'by hawking' (means of living)." },
            { letter: "d", answer: "in", explanation: "Preposition: 'in the issue' (context)." },
            { letter: "e", answer: "by", explanation: "Preposition: 'by Victory Day' (deadline)." }
        ]
    },
    {
        id: 83,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["behind", "for", "of", "to", "with"],
        passage: "When the sun was setting (a) ___ the treetops, the jailer came into the room of Socrates to bid him prepare (b) ___ death. In those days, people were sentenced to death by giving a cup (c) ___ poison in Athens. Socrates knew this and he nodded (d) ___ the jailer. Bursting into tears the jailer went out of the room and returned (e) ___ a cup of hemlock. Socrates lifted the cup to his lips.",
        blanks: [
            { letter: "a", answer: "behind", explanation: "Preposition: 'setting behind' (position)." },
            { letter: "b", answer: "for", explanation: "Verb: 'prepare for'." },
            { letter: "c", answer: "of", explanation: "Preposition: 'cup of poison' (content)." },
            { letter: "d", answer: "to", explanation: "Verb: 'nodded to'." },
            { letter: "e", answer: "with", explanation: "Preposition: 'returned with' (carrying)." }
        ]
    },
    {
        id: 84,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["to", "to", "about", "to", "into"],
        passage: "As time goes by, our attitude (a) ___ many things are changing due (b) ___ social, economic and political factors. People are becoming less choosy (c) ___ the nature of jobs, although some social superstitions and conventional prejudices still persist and some educated unemployed youths are reluctant (d) ___ take up certain jobs considering them as undignified. However, many educated young men and women nowadays are overcoming age-old superstitions and prejudices, and are increasingly entering (e) ___ new occupation to earn a livelihood.",
        blanks: [
            { letter: "a", answer: "to", explanation: "Noun: 'attitude to/towards'." },
            { letter: "b", answer: "to", explanation: "Phrasal verb: 'due to' (because of)." },
            { letter: "c", answer: "about", explanation: "Adjective: 'choosy about'." },
            { letter: "d", answer: "to", explanation: "Adjective: 'reluctant to' + verb." },
            { letter: "e", answer: "into", explanation: "Verb: 'entering into' (joining)." }
        ]
    },
    {
        id: 85,
        board: "Part D (New Exercises)",
        year: 2025,
        wordBox: ["in", "of", "to", "on", "from"],
        passage: "Man is a social creature. This means he cannot live alone. He lives (a) ___ society consisting not only (b) ___ his own family but also of some other families. And the peace and happiness of each individual depend (c) ___ a great extent (d) ___ what he gets (e) ___ the other members of his society.",
        blanks: [
            { letter: "a", answer: "in", explanation: "Preposition: 'lives in' society." },
            { letter: "b", answer: "of", explanation: "Phrasal verb: 'consisting of'." },
            { letter: "c", answer: "to", explanation: "Phrase: 'to a great extent'." },
            { letter: "d", answer: "on", explanation: "Verb: 'depend on'." },
            { letter: "e", answer: "from", explanation: "Preposition: 'gets from' others." }
        ]
    }
];
