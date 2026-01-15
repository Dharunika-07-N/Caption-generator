import React, { useState, useEffect } from 'react';
import { Copy, RefreshCw, Instagram, Download, Share2, Sparkles, Heart, Camera, Coffee, Plane, Hash } from 'lucide-react';

const InstagramCaptionGenerator = () => {
  const [mood, setMood] = useState('selfie');
  const [style, setStyle] = useState('funny');
  const [captions, setCaptions] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showHashtags, setShowHashtags] = useState(false);

  const captionBank = {
    selfie: {
      funny: [
        "I woke up like this... after 47 attempts 📸",
        "Felt cute, might delete in 5 minutes ✌️",
        "My camera roll: 847 photos of the same angle 🤳",
        "Professional over-thinker and selfie taker 😎",
        "Just me, myself, and all my insecurities 💁‍♀️",
        "When your phone knows your good side better than you do 📱",
        "Selfie game: strong. Life game: pending 🎮",
        "This is my 'I have my life together' face 😅",
        "Natural beauty and 15 filters later ✨",
        "Front camera is my therapist 🤳",
        "Plot twist: I'm actually a potato with good lighting 🥔",
        "Proof that I showered today 🚿",
        "My face when I realize it's Monday tomorrow 😩",
        "Serving looks and questionable life choices 💅",
        "RBF? More like resting blessed face 😇",
        "Smile because it confuses people 😊",
        "I'm not lazy, I'm on energy-saving mode 🔋",
        "This took 10 minutes and 73 photos 📷",
        "Professional procrastinator at your service 🎭",
        "My vibe attracts my tribe... or weirdos 🤷",
        "Confidence level: posting without a filter 🦄",
        "Behind every successful selfie is a ridiculous amount of failed ones 🗑️",
        "I'm not weird, I'm limited edition 🎨",
        "Current mood: existing 😐",
        "Just another paper cut survivor 💪",
        "Life status: currently holding it together with one bobby pin 📌",
        "My personality is 90% song lyrics 🎵",
        "I put the 'pro' in procrastination 🏆",
        "Messy bun and getting stuff done... eventually 🥨",
        "I'm not short, I'm concentrated awesome 🧪",
        "Caffeinated and ready to make questionable decisions ☕",
        "Professional snack enthusiast 🍿",
        "I'm not arguing, I'm just explaining why I'm right 💁",
        "My life feels like a test I didn't study for 📝",
        "Sweater weather and bad decisions ❄️",
        "I'm on a seafood diet. I see food in photos and want it 🍕",
        "My bed is a magical place where I suddenly remember everything I forgot to do 🛏️",
        "I'm not bossy, I just have better ideas 💡",
        "Currently accepting sugar daddy applications (must be made of sugar) 🍬",
        "I need a six-month vacation, twice a year 🏖️",
        "My favorite exercise is a cross between a lunge and a crunch... I call it lunch 🍔",
        "I'm not antisocial, I'm selectively social 🎯",
        "Warning: I have an attitude and I know how to use it ⚠️",
        "I'm not always right, but I'm never wrong 😏",
        "My hobbies include eating and complaining that I'm fat 🍰",
        "I don't sweat, I sparkle ✨",
        "Friday is my second favorite F word 🎉",
        "I'm not weird, you're just too normal 🌈",
        "My therapist says I need an outlet for my emotions... so here's a selfie 📸",
        "I'd agree with you but then we'd both be wrong 🤔",
        "Delete the gym from your contacts list 🗑️",
        "I'm not a morning person or a night person, I'm barely a person 🧟",
        "My alone time is for everyone's safety 🚨",
        "I'm not clumsy, the floor just hates me 🤕",
        "Running late is my cardio 🏃‍♀️",
        "I'm not stubborn, my way is just better 🛣️",
        "Professional daydreamer since birth 💭",
        "My weekend plans: exist harder than usual 💪",
        "I'm not saying I'm Batman, but have you seen us in the same room? 🦇",
        "Coffee first, schemes later ☕",
        "I'm not random, you're just too predictable 🎲",
        "My superpower is making everything about me 🦸‍♀️",
        "I'm not overdramatic, I'm theatrically enhanced 🎪",
        "Professionally awkward since day one 😬",
        "I'm not addicted to my phone, we're just in a committed relationship 💍",
        "My brain: 1% useful thoughts, 99% song lyrics 🎶",
        "I'm not ignoring you, my social battery died 🔋",
        "Life hack: be so awkward that nobody talks to you 💡",
        "I'm not weird, I'm a conversation starter 🗣️",
        "My comfort zone is a beautiful place, but nothing grows there... so I'm staying 🌱",
        "I'm not lazy, I'm just highly motivated to do nothing 😴",
        "Professional over-sharer and under-achiever 📢",
        "I don't need anger management, I need people to stop making me angry 😤",
        "My life is like a romantic comedy minus the romance and the comedy 🎬",
        "I'm not sarcastic, I'm just intelligent beyond your understanding 🧠",
        "Currently operating at 15% battery and 100% attitude 🔋",
        "I'm not being rude, you're just insignificant 🤷",
        "My patience is thinner than my phone screen 📱",
        "I'm not complicated, you're just basic 🎯",
        "Professional eye contact avoider 👀",
        "I'm not messy, I'm creatively organized 🎨",
        "My life motto: why do today what you can put off indefinitely? 📅",
        "I'm not late, everyone else is just early ⏰",
        "Professional nap enthusiast 😴",
        "I'm not judging you, I'm just observing your poor choices 👁️",
        "My vibe: chaotic good ⚡",
        "I'm not dramatic, I'm just passionate about overreacting 🎭",
        "Currently running on caffeine and chaos ☕",
        "I'm not a hot mess, I'm a spicy disaster 🌶️",
        "My aesthetic: tired but trying 😮‍💨",
        "I'm not avoiding adulting, adulting is avoiding me 🏃",
        "Professional overthinker and underwhelmer 🤔",
        "I'm not moody, I just have a diverse emotional range 🎨",
        "My defense mechanism is humor and denial 🛡️",
        "I'm not lost in life, I'm just taking the scenic route 🗺️",
        "Currently accepting applications for someone to do life for me 📋",
        "I'm not difficult, you're just not equipped to handle me 💪",
        "My spirit animal is a confused sloth 🦥",
        "I'm not antisocial, people are just anti-me 🚫",
        "Professional excuse maker since forever 📝",
        "I'm not a control freak, but you're doing it wrong 🎮"
      ],
      inspirational: [
        "Be yourself, everyone else is already taken ✨",
        "Confidence level: selfie with no filter 💫",
        "Growing through what I'm going through 🌱",
        "Self-love is the best love 💕",
        "Becoming the best version of myself, one day at a time 🦋",
        "She believed she could, so she did 💪",
        "Happiness looks gorgeous on me 😊",
        "I'm not perfect, but I'm perfectly me 🌟",
        "Embracing my journey, flaws and all 💝",
        "Radiate positivity and good vibes ☀️",
        "Create your own sunshine 🌞",
        "In a world where you can be anything, be kind 💗",
        "Strong women lift each other up 👑",
        "My vibe attracts my tribe ✨",
        "Living my best life, unapologetically 🌈",
        "Self-confidence is the best outfit 👗",
        "Be a voice, not an echo 🎤",
        "Bloom where you are planted 🌸",
        "She remembered who she was and the game changed 🎮",
        "Empowered women empower women 💪",
        "Your only limit is you 🚀",
        "Make today so awesome, yesterday gets jealous 📅",
        "I'm not lucky, I'm blessed 🙏",
        "Courage is being scared but doing it anyway 🦁",
        "Stars can't shine without darkness ⭐",
        "Be the energy you want to attract 🧲",
        "Life is tough but so are you 💎",
        "Dream big, work hard, stay focused 🎯",
        "You are capable of amazing things 🌟",
        "Believe in your inner Beyoncé 👑",
        "Choose to shine 💫",
        "Progress over perfection 📈",
        "She turned her can'ts into cans and her dreams into plans 📝",
        "Grateful for this moment 🙌",
        "Living in full bloom 🌺",
        "Confidence is silent, insecurities are loud 🔇",
        "I am enough, I have enough, I do enough ✅",
        "Making my own magic ✨",
        "Positive mind, positive vibes, positive life 🌟",
        "She walks with purpose 👠",
        "Today's goal: be better than yesterday 📊",
        "I'm not where I want to be, but thank God I'm not where I used to be 🙏",
        "Focused on my goals, not my obstacles 🎯",
        "New day, new possibilities 🌅",
        "I'm my own competition 🏆",
        "Proof that dreams do come true 💭",
        "Living intentionally 🎯",
        "She's a dreamer, a doer, a thinker 💡",
        "Mindset is everything 🧠",
        "I didn't come this far to only come this far 🚶‍♀️",
        "Trust the process and enjoy the journey 🛤️",
        "Be fearless in the pursuit of what sets your soul on fire 🔥",
        "Your story is still being written 📖",
        "Grace over grind 🕊️",
        "Becoming who I was meant to be 🦋",
        "Today I choose joy 😊",
        "She designed a life she loved 🎨",
        "Rising above the noise 📢",
        "My peace is my power 🧘",
        "Healing is not linear 💫",
        "I am the author of my own story 📚",
        "Choosing growth over comfort 🌱",
        "She found herself and the world changed 🌍",
        "Warrior in progress 🗡️",
        "Building an empire within myself 🏰",
        "My journey, my rules 🛤️",
        "Transforming pain into power 💪",
        "She is clothed in strength and dignity 👗",
        "Owning my story 📖",
        "Rising like a phoenix 🔥",
        "My worth is not up for debate 💎",
        "Creating my own opportunities 🚪",
        "She knew her worth so she added tax 💰",
        "Unstoppable energy 🚀",
        "Breaking generational curses 🔗",
        "Healing, growing, glowing 🌟",
        "Main character energy activated 🎬",
        "My comeback is always stronger than the setback 💪",
        "Choosing myself every single time 💕",
        "She stood in the storm and danced 💃",
        "Reclaiming my narrative 📝",
        "The best investment is in yourself 📈",
        "She turned her wounds into wisdom 🦉",
        "Building the life I deserve 🏗️",
        "I am the architect of my destiny 🏛️",
        "Breaking barriers one day at a time 🚧",
        "She believed in magic, so she became it ✨",
        "My power lies in my peace 🕊️",
        "Evolving and thriving 🌿",
        "She is art and poetry in motion 🎨",
        "Trusting divine timing ⏰",
        "My soul is made of stardust and resilience ⭐",
        "Creating a masterpiece called my life 🖼️",
        "She is both hellfire and holy water 🔥💧",
        "Grounded and grateful 🙏",
        "My light shines from within 💡",
        "She wore her scars as wings 🦋",
        "Living with intention and purpose 🎯",
        "My energy speaks before I do ⚡",
        "She manifested her own miracles ✨"
      ],
      sarcastic: [
        "Yes, I take myself seriously. Very seriously. 🙄",
        "Another day, another iconic selfie 💅",
        "I'm not perfect but my selfies are 📱",
        "Serving looks and attitude since birth 😏",
        "Too glam to give a damn ✨",
        "Sorry, can't hear you over my awesomeness 🎧",
        "I'm not bossy, I'm the boss 👔",
        "Humble, with just a hint of Kanye 😎",
        "I'm not special, I'm just limited edition 🎨",
        "Professional over-sharer 📢",
        "Yes, I'm always this fabulous 💁",
        "This is my 'I'm too cool for you' face 😎",
        "Warning: may cause spontaneous jealousy ⚠️",
        "I'm not weird, I'm a limited edition 🏷️",
        "Excuse me while I be awesome 🚀",
        "I know I'm a handful, that's why you got two hands ✋✋",
        "Queen of my own little world 👑",
        "I'm not conceited, I'm just convinced 💯",
        "My hobbies include being right and proving it 📚",
        "I'd rather be someone's shot of whiskey than everyone's cup of tea 🥃",
        "Allergic to mediocrity 🤧",
        "I'm not arguing, I'm simply explaining why I'm right 💁",
        "Too rad to be sad 😎",
        "I'm silently correcting your grammar 📖",
        "Sassy since birth 👶",
        "I'm not short, I'm fun-sized 🎁",
        "Professional eye-roller 🙄",
        "My life is as complicated as my coffee order ☕",
        "I'm not lazy, I'm on energy-saving mode 🔋",
        "Sarcasm is my love language 💘",
        "I'm not ignoring you, I'm just prioritizing myself 📱",
        "My level of sarcasm depends on your level of stupidity 🎭",
        "I'm not mean, I'm brutally honest 🗣️",
        "Born to stand out, not fit in 🦄",
        "Too busy being fabulous 💅",
        "I'm not antisocial, I'm selectively social 🎯",
        "My brain has too many tabs open 💻",
        "I'm not bossy, I have leadership skills 📊",
        "Professional overthinker 🤔",
        "I run on coffee and sarcasm ☕",
        "Normal is boring 🥱",
        "I'm not always sarcastic, sometimes I'm sleeping 😴",
        "My patience is as short as my attention span 📏",
        "I'm not weird, you're just too normal 🌈",
        "Confidence level: Kanye West at Kanye Fest 🎤",
        "I'm not difficult, you're just not trying hard enough 💪",
        "My vibe is immaculate, your opinion is not 💅",
        "I woke up like this: tired 😩",
        "I'm not high maintenance, you're just low effort 🎯",
        "Sarcasm: because beating people is illegal ⚖️",
        "Oh, you don't like me? Cool, I'll get over it in never seconds ⏰",
        "I'm not opinionated, you're just wrong 📣",
        "My resting face says it all 😑",
        "I'm not judgmental, I'm observational 👁️",
        "Professional mood ruiner since forever 🌧️",
        "I'm not bitter, I'm sophisticated cynical 🍷",
        "My tolerance for nonsense expired in 2010 📅",
        "I'm not dramatic, everyone else is just bland 🎪",
        "Sarcasm is just one of my talents 🏆",
        "I'm not a snack, I'm a whole meal you can't afford 🍽️",
        "My standards aren't high, yours are just embarrassingly low 📉",
        "I'm not complicated, you're just simple 🧩",
        "Professional side-eye giver 👀",
        "I'm not intimidating, you're just easily threatened 😤",
        "My personality is too big for small talk 💬",
        "I'm not negative, I'm realistic with style 🎨",
        "Too cool for your rules 🆒",
        "I'm not arrogant, I'm just aware of my worth 💎",
        "My attitude has an attitude 😏",
        "I'm not rude, I'm just done with pleasantries 🚫",
        "Professional reality checker 📋",
        "I'm not being difficult, I'm being excellent 🌟",
        "My energy is too expensive for free 💸",
        "I'm not moody, you're just boring 😒",
        "Certified vibe curator 🎨",
        "I'm not extra, I'm exactly enough 💯",
        "My sarcasm is an art form 🖼️",
        "I'm not trying to impress anyone, I'm already impressive 💅",
        "Professional boundary setter 🚧",
        "I'm not cold, I'm climate controlled 🌡️",
        "My poker face is undefeated 🃏",
        "I'm not being passive aggressive, I'm being active aggressive 🎯",
        "Too blessed to be impressed 😌",
        "I'm not high maintenance, I'm rare and valuable 💎",
        "Professional discourse destroyer 💥",
        "I'm not petty, I'm detail-oriented 🔍",
        "My energy is invite-only ⛔",
        "I'm not hard to please, you're just not pleasing 🙅",
        "Certified mood ambassador 🎭",
        "I'm not being difficult, you're being incompetent 📊",
        "My standards are legendary 👑",
        "I'm not unsociable, I'm an acquired taste 🍷",
        "Professional enthusiasm dampener 🌧️",
        "I'm not being rude, I'm being efficient 📈",
        "My patience left the chat 💬",
        "I'm not picky, I have taste 👅",
        "Certified sarcasm connoisseur 🏅",
        "I'm not negative, I'm selectively positive 🎯",
        "My tolerance level: non-existent 📉",
        "I'm not bitter, I'm refined cynical 🍸",
        "Professional opinion haver 🗣️"
      ],
      savage: [
        "I'm not everyone's cup of tea. I'm champagne, baby 🥂",
        "Throw me to the wolves and I'll come back leading the pack 🐺",
        "I'm not high maintenance, you're just low effort 💋",
        "Confidence level: Kanye West 😤",
        "I don't have an attitude problem, you have a perception problem 👑",
        "I'm the reason I smile every day 😁",
        "Born to express, not to impress 💯",
        "I'm not a backup plan, and definitely not a second choice 🚫",
        "Queens don't compete with peasants 👑",
        "I'm not sugar and spice, I'm tequila and ice 🍹",
        "I didn't come this far to only come this far 🔥",
        "Underestimate me, that'll be fun 😏",
        "I'm not like the rest of them 🦄",
        "Catch flights, not feelings ✈️",
        "Sorry, I'm already taken... by myself 💍",
        "I'm not rude, I'm honest 🎯",
        "Too glam to give a damn 💅",
        "I'm the exception to your rules 🚨",
        "I don't chase, I attract 🧲",
        "I'm not lucky, I'm blessed and highly favored 🙏",
        "Watch me glow up and glow differently 💫",
        "I'm not perfect, but I'm limited edition 🏆",
        "Silent but deadly 💣",
        "I'm not here to fit into your world, I'm here to make my own 🌍",
        "I'm not mean, you're just too sensitive 🎭",
        "Class is knowing what to say. Sass is knowing when to say it 💬",
        "I'm a vibe you can't find anywhere else 🎵",
        "I'm not trying to be different, I just am 🌟",
        "My standards are high, just like my heels 👠",
        "I'm not ignoring you, I'm just choosing to focus on better things 📱",
        "I'm my own competition 🏁",
        "I don't need your approval, I have my own 👌",
        "Built different 🏗️",
        "I'm not interested in competing with anyone. I hope we all make it 🎯",
        "I'm the storm they warned you about ⛈️",
        "Living rent-free in your head 🏠",
        "I'm not heartless, I just learned how to use my heart less 💔",
        "I'm not mean, I'm mean-ingful 💪",
        "Too busy writing my own story to read yours 📖",
        "I'm not a princess, I don't need saving 👸",
        "They told me I couldn't, so I did 🚀",
        "I'm not here to please everyone 🎪",
        "Energy vampire repellent: activated 🧛",
        "I'm not trying to be difficult, it just comes naturally 😈",
        "My circle is small because I'm in a relationship with peace 🕊️",
        "I'm not arrogant, I'm just better than you thought 💎",
        "I don't have time for part-time people 🕐",
        "I'm the upgrade you couldn't afford 💸",
        "Not everyone deserves access to me 🚪",
        "I'm too busy being a legend 🏆",
        "I'm not for everyone, and that's perfectly fine 🎯",
        "My energy is too expensive for discount people 💎",
        "I'm not cold, I'm just done warming up to people 🧊",
        "They hate me cause they ain't me 🤷",
        "I'm the main character you're just background 🎬",
        "My success is the best revenge 🏆",
        "I don't explain myself, I'm not on trial 🚫",
        "Too rare to care 💎",
        "I'm not intimidating, you're just intimidated 😤",
        "My life, my rules, my mistakes, my lessons 📚",
        "I didn't ask for your opinion 🙅",
        "I'm allergic to fake people 🤧",
        "My vibe is immaculate and untouchable 👑",
        "I'm not here to fit in your box 📦",
        "Energy protection mode: activated 🛡️",
        "I'm not moody, you're just annoying 😒",
        "My peace is priceless 🕊️",
        "I don't need validation from strangers 🚫",
        "Too busy building my empire 🏰",
        "I'm not playing your games 🎮",
        "My aura is unmatched 🌟",
        "I don't compete, I dominate 👑",
        "Not everyone can handle this level of real 💯",
        "I'm the plot twist you didn't see coming 🎭",
        "My standards scare mediocre people 📊",
        "I'm not sorry for being me 🎯",
        "Too focused to be bothered 🎯",
        "I'm the one they all want to be 👑",
        "My presence alone is a power move ⚡",
        "I don't do drama, I am the drama 🎪",
        "Living unapologetically 💪",
        "I'm not difficult, I'm specific 🎯",
        "My worth isn't up for negotiation 💎",
        "I'm the blueprint 📐",
        "Too legendary to be local 🌍",
        "I don't follow trends, I set them 🔥",
        "My level of unbothered is unmatched 😌",
        "I'm not cocky, I'm confident 💪",
        "They watch, I perform 🎭",
        "My success makes them uncomfortable 📈",
        "I'm the standard 📏",
        "Not here for your entertainment 🎪",
        "I'm writing history, not reading it 📖",
        "My energy is unmatched and exclusive ⚡",
        "Too powerful to be humble 👑",
        "I'm the moment 🌟",
        "Not everyone gets a seat at my table 🍽️",
        "I'm unbothered and flourishing 🌸",
        "My comeback game is legendary 🏆"
      ],
      romantic: [
        "Falling in love with myself, one selfie at a time 💕",
        "Self-love is the greatest love story 💝",
        "Learning to love every part of me 🌹",
        "Romance starts with self-love ❤️",
        "Date night: me, myself, and I 💑",
        "Loving me is the greatest love of all 💗",
        "My heart is full of self-love 💖",
        "Finding beauty in my own reflection 🪞",
        "The love affair with myself continues 💘",
        "Self-love isn't selfish, it's essential 🌸",
        "Falling deeper in love with who I'm becoming 🦋",
        "Love yourself first, everything else falls into place 💫",
        "My favorite love story is my own ❤️🔥",
        "Romancing the person in the mirror 💄",
        "Learning that I'm enough, just as I am 🌟",
        "Self-love club: president and only member 👑",
        "Loving myself unconditionally 💝",
        "The best relationship is with yourself 💕",
        "My heart belongs to me 💗",
        "Self-love Sunday (and every other day) ☀️",
        "Choosing myself, always 💖",
        "Love looks good on me 💄",
        "My own soulmate 👫",
        "Self-care and self-love 🛁",
        "Perfectly imperfect and loving it 💘",
        "In a committed relationship with myself 💍",
        "My love language is self-care 💆",
        "Falling in love with my journey 🛤️",
        "I am my own happy ending 📖",
        "Self-love is my superpower 💪",
        "Choosing to love myself louder 📢",
        "My soul is in love with my spirit ✨",
        "Romancing life one day at a time 🌅",
        "I'm my favorite person to be with 💕",
        "Learning to be gentle with myself 🌸",
        "My heart is my home 🏡",
        "Self-love looks good on me 💄",
        "In love with my own company 🥰",
        "My relationship status: in love with me 💖",
        "Treating myself like I deserve 👑",
        "Self-love is the best glow up ✨",
        "My heart is healing and loving 💗",
        "Choosing me every single time 💕",
        "Love starts from within 💝",
        "I'm enough, and I'm loved 🌟",
        "My own love is enough 💖",
        "Falling in love with my soul 🦋",
        "Self-love is revolutionary 🔥",
        "My heart is soft and strong 💪",
        "I'm worthy of my own love 👑",
        "Loving myself is not vanity, it's sanity 🧠",
        "My soul deserves this love 💕",
        "I'm learning to romance my life 🌹",
        "Self-love era activated 💫",
        "My heart whispers: you are enough 💗",
        "In love with becoming 🦋",
        "I choose to love myself today 💝",
        "My soul is blooming with self-love 🌸",
        "I am my forever person 💍",
        "Self-love is my religion ✨",
        "My heart is learning to be kind to itself 💖",
        "I'm building a love affair with myself 💕",
        "My soul is full of self-compassion 🌟",
        "Choosing self-love over self-doubt 💪",
        "I'm in love with my own energy ⚡",
        "My heart belongs to me first 💗",
        "Self-love is my daily practice 🧘",
        "I'm worthy of the love I give myself 👑",
        "My soul is embracing all of me 🦋",
        "I'm falling in love with my peace 🕊️",
        "Self-love is my foundation 🏗️",
        "My heart is home 🏡",
        "I'm learning to adore myself 💕",
        "My soul is my soulmate ✨",
        "Self-love is my lifestyle 💫",
        "I'm in a beautiful relationship with myself 💝",
        "My heart is healing through self-love 💗",
        "I'm choosing me, always and forever 💖",
        "Self-love is my love language 💬",
        "My soul is radiating self-love ☀️",
        "I'm becoming my own dream person 🌟"
      ],
      casual: [
        "Just vibing 🌟",
        "Living my life ✨",
        "Caught in the moment 📸",
        "Nothing special, just me 💫",
        "Another day, another selfie 🤳",
        "Just existing beautifully 🌸",
        "Casual cuteness 💕",
        "No caption needed 🤷",
        "Just me being me 😊",
        "Simple moments 🌿"
      ]
    },
    food: {
      funny: [
        "I'm on a seafood diet. I see food and I eat it 🍕",
        "This meal has more filters than my face 📸",
        "Calories don't count on Instagram, right? 🍰",
        "Will work for food... literally took 20 mins to get this shot 🍔",
        "My love language is food pics 🌮",
        "I'm in a relationship with food 💑",
        "Sorry I can't, I have dinner plans... with my fridge 🥗",
        "Food is my valentine 💝",
        "Brunch without champagne is just a sad breakfast 🥂",
        "I'm just here for the food pics 📷"
      ],
      inspirational: [
        "Good food = Good mood 🍽️",
        "Life is short, eat the dessert first 🍨",
        "Cooking is love made visible ❤️",
        "Food brings people together ✨",
        "Eating well is a form of self-respect 🥗",
        "Nourish your body, feed your soul 🌿",
        "Every meal is a chance to fuel your dreams 🚀",
        "Grateful for this delicious moment 🙏",
        "Food is not just fuel, it's information 📚",
        "Eat beautiful food and be beautiful ✨"
      ],
      sarcastic: [
        "Yes, I photographed my food. Deal with it 📷",
        "Food blogger? No, just hungry with a phone 🤳",
        "This is art. You wouldn't understand 🎨",
        "My food is prettier than your food 😏",
        "I came, I saw, I took a photo, then I ate 🍴",
        "Sorry for being annoying, but this is too good not to share 🙄",
        "Yes, I'm that person who photographs their food 📸",
        "My phone eats before I do, it's called respect 📱",
        "Food photography is my passion (aka I'm hungry and have Instagram) 😅",
        "This took longer to photograph than to make 📷"
      ],
      savage: [
        "I don't need therapy, I just need tacos 🌮",
        "My diet: see food, eat food, post food 📸",
        "Eating good, living better 🍕",
        "Food first, feelings later 🍔",
        "I'm not sharing, don't even ask 🙅‍♀️",
        "This food is fancier than your outfit 💅",
        "Eat good, feel good, look good 😎",
        "Living my best life, one meal at a time 🥘",
        "Your diet can wait, this looks too good 🍰",
        "I didn't come here to make friends, I came to eat 🍽️"
      ]
    },
    travel: {
      funny: [
        "I followed my heart and it led me to the airport ✈️",
        "My bank account: crying. Me: traveling 🌍",
        "I need a vacation from my vacation 😅",
        "Wanderlust and city dust 🗺️",
        "Travel mode: activated. Budget: forgotten 💸",
        "I'm not lost, I'm exploring... okay I'm lost 🧭",
        "Jet lag is my cardio 😴",
        "I have a PhD in spontaneous trips 🎓",
        "Professional tourist 📸",
        "I don't need therapy, I just need to travel 🌎"
      ],
      inspirational: [
        "Collect moments, not things ✨",
        "Adventure awaits 🌍",
        "Travel is the only thing that makes you richer 💎",
        "Life is short and the world is wide 🌎",
        "The journey is the destination 🛤️",
        "Find yourself in new places 🗺️",
        "Travel far, travel often ✈️",
        "Let's find some beautiful place to get lost 🌲",
        "Not all who wander are lost 🧭",
        "Take only memories, leave only footprints 👣"
      ],
      sarcastic: [
        "Yes, I travel for the Instagram 📸",
        "Professional wanderer, amateur budgeter 💸",
        "I'm not rich, I'm just bad with money 🤷",
        "Living my best vacation life (for 3 days) 🏖️",
        "I came for the views, stayed for the WiFi 📱",
        "Travel blogger? No, just someone with a camera 📷",
        "Yes, I'm that tourist 🗺️",
        "My travel style: spontaneous and broke 💰",
        "I don't plan, I just go and panic later 😅",
        "Professional vacation taker, amateur saver 💸"
      ],
      savage: [
        "Catch flights, not feelings ✈️",
        "Too busy traveling to care what you think 🌍",
        "I don't do staycations 🚫",
        "Passport full, heart fuller 💕",
        "Living my best travel life 🌎",
        "Your life vs my life 📸",
        "I'm not running away, I'm running to adventure 🏃",
        "Travel is my therapy 🧳",
        "I didn't choose the travel life, it chose me ✈️",
        "My office has a better view than yours 🏖️"
      ]
    }
  };

  const hashtagSets = {
    selfie: "#selfie #me #instagood #photooftheday #love #instadaily #beautiful #happy #picoftheday #smile",
    food: "#foodie #food #foodporn #instafood #foodphotography #yummy #delicious #foodstagram #foodlover #foodgasm",
    travel: "#travel #travelgram #instatravel #wanderlust #adventure #explore #vacation #travelphotography #traveling #traveltheworld"
  };

  useEffect(() => {
    // Initial generation
    generateCaptions();
  }, [mood, style]);

  const generateCaptions = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const moodData = captionBank[mood];
      const styleData = moodData ? moodData[style] : [];
      const selectedCaptions = styleData || ["No captions found for this combination."];

      // Shuffle and pick up to 10
      const shuffled = [...selectedCaptions].sort(() => 0.5 - Math.random());
      setCaptions(shuffled.slice(0, 10));
      setIsGenerating(false);
    }, 400);
  };

  const copyToClipboard = (text, index) => {
    const fullText = showHashtags && hashtagSets[mood] ? `${text}\n\n${hashtagSets[mood]}` : text;
    navigator.clipboard.writeText(fullText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const downloadCaptions = () => {
    const text = captions.map(c => showHashtags && hashtagSets[mood] ? `${c}\n\n${hashtagSets[mood]}` : c).join('\n\n---\n\n');
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `instagram-captions-${mood}-${style}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const shareCaptions = async () => {
    const textToShare = captions.map(c => showHashtags && hashtagSets[mood] ? `${c}\n\n${hashtagSets[mood]}` : c).join('\n\n');
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Instagram Captions',
          text: textToShare,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      copyToClipboard(textToShare, -1);
    }
  };

  const icons = {
    selfie: <Camera size={20} />,
    food: <Coffee size={20} />,
    travel: <Plane size={20} />
  };

  const availableStyles = mood ? Object.keys(captionBank[mood]) : [];

  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Header */}
        <header className="app-header">
          <div className="logo-container">
            <Instagram size={40} className="logo-icon" />
            <h1 className="app-title">
              InstaCaption
            </h1>
          </div>
          <p className="app-subtitle">
            Unlock the perfect vibe for your feed with AI-curated captions.
          </p>
        </header>

        {/* Controls */}
        <div className="controls-panel">
          <div className="selectors-container">

            {/* Mood Selector */}
            <div className="selector-group">
              <label className="selector-label">Select Mood</label>
              <div className="mood-buttons-scroll">
                {Object.keys(captionBank).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMood(m)}
                    className={`mood-btn ${mood === m ? 'active' : ''}`}
                  >
                    {icons[m]}
                    <span>{m}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Style Selector */}
            <div className="selector-group">
              <label className="selector-label">Select Vibe</label>
              <div className="style-buttons-wrap">
                {availableStyles.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={`style-btn ${style === s ? 'active' : ''}`}
                  >
                    <span>{s}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="actions-bar">
            <div className="results-count">
              Showing <strong>{captions.length}</strong> results for <span className="highlight-mood">{mood}</span> • <span className="highlight-style">{style}</span>
            </div>
            <div className="action-buttons">
              <button
                onClick={() => setShowHashtags(!showHashtags)}
                className={`style-btn ${showHashtags ? 'active' : ''}`}
                title="Toggle Hashtags"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', borderRadius: '50px', padding: '8px 16px' }}
              >
                <Hash size={16} />
                <span>{showHashtags ? 'A#' : 'No#'}</span>
              </button>
              <button onClick={downloadCaptions} className="icon-btn" title="Download All">
                <Download size={20} />
              </button>
              <button onClick={shareCaptions} className="icon-btn" title="Share">
                <Share2 size={20} />
              </button>
              <button
                onClick={generateCaptions}
                className="generate-btn"
              >
                <RefreshCw size={16} className={isGenerating ? 'spin' : ''} />
                <span>More</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="captions-grid">
          {captions.map((caption, idx) => (
            <div
              key={idx}
              className="caption-card"
              onClick={() => copyToClipboard(caption, idx)}
            >
              <div className={`copy-overlay ${copiedIndex === idx ? 'visible' : ''}`}>
                <span className="copy-label">
                  {copiedIndex === idx ? <><Sparkles size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
                </span>
              </div>

              <p className="caption-text">
                "{caption}"
              </p>

              <div className="caption-footer">
                <span className="hashtag-tag">#{mood} #{style} {showHashtags && '#hashtags'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="app-footer">
          <p>
            Made with <Heart size={14} className="heart-icon" /> for creators
          </p>
        </footer>

      </div>
    </div>
  );
};

export default InstagramCaptionGenerator;
