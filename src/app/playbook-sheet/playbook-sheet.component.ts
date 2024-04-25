import {CommonModule} from "@angular/common";
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DiceRollerComponent} from "../dice-roller/dice-roller.component";
import {Title} from "@angular/platform-browser";
import {CoinFlipperComponent} from "../coin-flipper/coin-flipper.component";

@Component({
  selector: 'app-playbook-sheet',
  templateUrl: './playbook-sheet.component.html',
  styleUrls: ['./playbook-sheet.component.css'],
  imports: [CommonModule, FormsModule, DiceRollerComponent, CoinFlipperComponent],
  standalone: true
})
export class PlaybookSheetComponent {
  name: string = "";
  selectedPlaybook: any;
  checkedOptions: boolean[] = []; // Array to track checked state for each option
  carded: boolean = false;
  playbooks: Playbook[] = [];
  moves: Move[] = [];

  // these are stat variables (-1 to 3)
  savvy: number = 0;
  slick: number = 0;
  swag: number = 0;
  strong: number = 0;
  shop: number = 0;

  @ViewChild(DiceRollerComponent) diceRoller: any;


  playbookOptions = [
    // Template:
    // { move_name:'Oh Yeah, That',
    //   description:'When you encounter someone or \n' +
    //     'something absurdly strange, roll +Savvy to determine if you \n' +
    //     'have #BeenThereDoneThat. ',
    //   rolls: [
    //     { threshold: 'On a 10+',
    //       outcome: 'You have indeed seen this before! Describe \n' +
    //         'when you first encountered this strange thing and The \n' +
    //         'Mall will give you some background on it.'
    //     },
    //     { threshold: 'On a 7-9',
    //       outcome: 'You\'re not entirely sure where or when, but it \n' +
    //         'does look familiar. The Mall will provide you with a little \n' +
    //         'fun fact about it.'
    //     },
    //     { threshold: 'On a miss',
    //       outcome: 'You have no clue what this is, but it would \n' +
    //         'be totes embarr to let these humans know that. Make \n' +
    //         'something up; The Mall will secretly decide if its true.'
    //     },
    //   ],
    //   bullets: [
    //     {name:'',
    //      description:''},
    //   ],
    //   choices: [
    //     {name:'',
    //      description:''},
    //   ]
    // },
    {
      name: 'The Denizen',
      stats: {
        savvy: -1,
        slick: 1,
        swag: 1,
        strong: 0,
        shop: 0
      },
      quote: 'Ohhhhhh, THAT\'S where that priceless family heirloom that \n' +
        'said \'To my dearest son, I\'ll always love you.\' came from! Boy, he \n' +
        'must be real mad at us... I\'m gonna go talk to him about it.',
      description_header: 'Cool As A Cucumber',
      description: 'Looking to kick back and let the absurdity of The Mall wash \n' +
        'over you like a gentle wave? Like being the comic relief? If so, \n' +
        'kick up your... feet? The Denizen playbook is made just for you!\n' +
        ' As a Denizen, you can expect to exude unwarranted \n' +
        'confidence. When the going gets tough, there\'s no telling \n' +
        'whether The Denizen will "nope" the f$#% out or try to literally \n' +
        'flirt with disaster.\n' +
        ' As The Denizen, you are a sentient object created by The Mall. \n' +
        'Why? You have no clue. A perk of this is that you\'re unique and \n' +
        'have a form that is yours alone, granting you a couple of \n' +
        'advantages.\n' +
        ' So who is The Denizen? The Denizen is a cartoon character \n' +
        'made real. You can have any kind of personality you want, but \n' +
        'you simply MUST make it a big one. Don\'t be brave, be HEROIC. \n' +
        'Don\'t be dramatic, be THEATRIC. \n' +
        'The Denizen is all about asserting yourself as one-of-a-kind, \n' +
        'regardless of the situation. If you want a unique, cartoonish \n' +
        'way of playing You Are Here, The Denizen is a perfect fit!',
      move_num: "two",
      options: [
        {
          move_name: 'Oh Yeah, That',
          description: 'When you encounter someone or \n' +
            'something absurdly strange, roll +Savvy to determine if you \n' +
            'have #BeenThereDoneThat. ',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'You have indeed seen this before! Describe \n' +
                'when you first encountered this strange thing and The \n' +
                'Mall will give you some background on it.'
            },
            {
              threshold: 'On a 7-9',
              outcome: 'You\'re not entirely sure where or when, but it \n' +
                'does look familiar. The Mall will provide you with a little \n' +
                'fun fact about it.'
            },
            {
              threshold: 'On a miss',
              outcome: 'You have no clue what this is, but it would \n' +
                'be totes embarr to let these humans know that. Make \n' +
                'something up; The Mall will secretly decide if its true.'
            },
          ],
        },
        {
          move_name: 'The Brave Little Toaster',
          description: 'Both the novelty and abject \n' +
            'horror of The Mall has worn off on you. You are immune to \n' +
            'fear-based moves, and you never need to Act Natural to \n' +
            'freaking the f$#% out.',
        },
        {
          move_name: 'Good Luck With That!',
          description: 'When you try to Be The Wallflower \n' +
            'to hide from an imminent threat, you can give two +1 \n' +
            'forwards to fellow mallgoers. Hopefully, now they can deal \n' +
            'with it on their own!',
        },
        {
          move_name: 'Handy McNoHands',
          description: 'When Lending A Hand (perhaps \n' +
            'metaphorically), roll +Swag instead of +Slick.',
        },
        {
          move_name: 'I\'m The Map, I\'m The Map',
          description: '9 times out of 10, you know \n' +
            'where you\'re going. Okay, maybe like... 7 times out of 10. \n' +
            'When navigating or leading your party through The Mall, \n' +
            'roll +Savvy. ',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'You know exactly where you\'re going. '
            },
            {
              threshold: 'On a 7-9',
              outcome: 'You take a weird route, but get there \n' +
                'eventually. '
            },
            {
              threshold: 'On a miss',
              outcome: 'You realize you\'re totally lost far too late to \n' +
                'course correct. You have no clue where you are.'
            },
          ],
          choices: []
        },
        {
          move_name: 'Allow Me To Introduce Myself',
          description: 'When you introduce yourself \n' +
            'and chat up an obvious threat against the advice of your \n' +
            'party, hold 2. You may spend your holds one-for-one to:',
          bullets: [
            {
              name: null,
              description: 'Reduce someone\'s harm suffered by 1.'
            },
            {description: 'Inflict +1 Harm'},
            {description: 'Take +2 forward on an Act Natural Roll'},
          ],
        },
        {
          move_name: 'Float On',
          description: 'You float in the air (and optionally leave a pixie \n' +
            'dust, energy, or cartoon cloud trail).',
        },
      ]
    },
    {
      name: 'The Encore',
      stats: {
        savvy: 1,
        slick: 0,
        swag: -1,
        strong: 1,
        shop: 0
      },
      quote: 'I\'ve been here over and over and I can\'t remember a single \n' +
        'second of it. How many years of my life have I lost to this place? \n' +
        'That\'s it. This time, I\'m breaking The Loop!',
      description_header: 'Break The F$#@ing Loop!!!',
      description: 'Have you ever had a really important narrative moment only to \n' +
        'have it flop with a bad roll? Well, if narrative strength is as \n' +
        'important to you as impact, let me introduce you to The \n' +
        'Encore, which coalesces the two.\n' +
        ' As an Encore, you have been here before. In fact, you\'ve been \n' +
        'here many times. Hell, you\'ve even reached the Exit. You have \n' +
        'gone in and out of this Mall and learned what makes it tick, \n' +
        'and yet, your memory fails you. What a tragedy to exist in a \n' +
        'world that knows you better than those from your real life, and \n' +
        'yet, you cannot put names to familiar faces.\n' +
        ' The Encore gains tangible advantages from narrative story \n' +
        'beats. As you go around your Loop, barreling faster and faster \n' +
        'towards an awful, fated end, you gain Loop Tokens. Loop \n' +
        'Tokens are spent on a roll that breaks The Loop, as energy \n' +
        'from the resulting shatter splinters out and alters reality. This \n' +
        'guarantees a moment of turning the tides with an Encore who \n' +
        'knows when to get in and out of a Loop.\n' +
        ' So who is The Encore? They couldn\'t tell you. Something keeps \n' +
        'you coming back. What is it? Is life outside The Mall \n' +
        'lackluster? Do you struggle with habits? Whatever you decide, \n' +
        'your character will not know it. \n' +
        'Who is The Encore? The Encore is a blank slate stuck in a \n' +
        'Loop. Break The Loop. Go the F$#% Home!!!!',
      move_num: "one",
      options: [
        {
          move_name: 'Tabula Inscripta',
          description: 'You can use a Favor you don\'t have in \n' +
            'exchange for a Debt to some unknown individual you \n' +
            'wronged in a past loop. They will make themselves \n' +
            'known soon. You can use this as many times as you have \n' +
            'Debt boxes. Mark them as Debts to ???, $$$, and !!!, \n' +
            'respectively.',
        },
        {
          move_name: 'Hello, Old Friend',
          description: 'When you meet someone in the mall for \n' +
            'the "first time," roll +Slick.',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'They recognize you from a previous Loop \n' +
                'and seem to like you. Take a Favor on them; they\'re \n' +
                'willing to talk, lend a hand, or give you a place to stay.'
            },
            {
              threshold: 'On a 7-9',
              outcome: 'They don\'t recognize you, or at least, they \n' +
                'don\'t let on as much.'
            },
            {
              threshold: 'On a miss',
              outcome: 'Oh, they know alllllll about you. You have a \n' +
                'lot of nerve showing your face around here again... \n' +
                'Either take a Debt or upset them greatly.'
            },
          ],
        },
        {
          move_name: 'Wild Card',
          description: 'In your journey to finally break the loop, \n' +
            'you\'ve learned that being spontaneous is a pretty safe \n' +
            'decision. At the start of a Spree, you can replace this move \n' +
            'with any other playbook move not currently in play.',
        },
        {
          move_name: 'Safe Haven',
          description: 'Apparently, you already have a place to stay, as \n' +
            'well as fellow mallgoers if you\'ll have them. Describe \n' +
            'where and how you found it in The Mall, as well as what \n' +
            'made you realize it was yours. It\'s always around \n' +
            'somewhere...',
        },
        {
          move_name: 'Swimming Upstream',
          description: 'When you wish to move backwards \n' +
            'in the loop and return somewhere you’ve been \n' +
            'recently, roll +Shop:',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'The Loop inverts and throws you backwards \n' +
                'through space. You appear out of thin air in a previous \n' +
                'location. There\'s a queasy feeling in your stomach, but \n' +
                'you’ll manage.'
            },
            {
              threshold: 'On a 7-9',
              outcome: 'The Loop turns on its side. You blip and \n' +
                'appear somewhere unintended, but nearby. A splitting \n' +
                'headache manifests when you do.'
            },
            {
              threshold: 'On a miss',
              outcome: 'The Loop folds in on itself and swallows \n' +
                'you whole. You vanish for now, but when you eventually \n' +
                'reappear, you do so with a considerable injury… and a \n' +
                'memory from a past Loop.'
            },
          ],
        },
        {
          move_name: 'Thinking Ahead',
          description: 'You may spend a loop Token to \n' +
            'retroactively pack an item you now need, provided it isn\'t \n' +
            'rare or exceedingly heavy. This move can always be used, \n' +
            'so it may not be chosen when creating a loop.',
        },
      ]
    },
    {
      name: 'The Fashionweaver',
      stats: {
        savvy: 0,
        slick: 1,
        swag: 0,
        strong: -1,
        shop: 1
      },
      quote: 'So I know you sent me for a harpoon, BUT I saw these really \n' +
        'cute galoshes and figured I\'d rather sink stylishly than fight the \n' +
        'Fountain Serpent in fugly fishing boots. Soz?',
      description_header: 'Look Good While Doing It',
      description: 'Style isn\'t merely a choice within these mall walls; it\'s a bona- \n' +
        'fide way of life. Do you revel in the art of dressing up? Is living \n' +
        'life with a touch of superficiality your jam? If so, allow me to \n' +
        'introduce you to The Fashionweaver—our freshest sensation, \n' +
        'and they\'re slaying the scene!\n' +
        ' As a Fashionweaver, you\'re not the burly type. However, when it \n' +
        'comes to curating your personal style, you\'ve got instincts that \n' +
        'are sharp as a tack. Among your fellow mallgoers, you\'re the \n' +
        'undisputed social powerhouse. You\'ll likely be the one best \n' +
        'equipped to solve a problem with words, leveraging your \n' +
        'devotion to The Aesthetic like a finely sharpened sword.\n' +
        ' When you craft your Fashionweaver, your fashion choices \n' +
        'manifest as more than just personal flair. As you draw upon \n' +
        'one of the Four Sects of The Aesthetic, certain gifts manifest. \n' +
        'In fact, it wouldn\'t be unwise to draw a comparison between a \n' +
        'paladin devoted to a god and a Fashionweaver communing \n' +
        'with the latest Vogue.\n' +
        ' So, who is The Fashionweaver, you ask? The Fashionweaver is \n' +
        'someone who places great importance on how they\'re \n' +
        'perceived by the world. It takes a tremendous amount of \n' +
        'courage to assert your innermost self in such a public manner. \n' +
        'To do so requires a person brimming with confidence, one who \n' +
        'believes, amidst the cacophony, that they are deserving of \n' +
        'anything and everything they desire.',
      move_num: "two",
      options: [
        {
          move_name: 'Subspace Walk-In',
          description: 'Once a spree, you can summon a door \n' +
            'to your walk-in closet, either on a wall or floating in the air. \n' +
            'Past the glimmering threshold lies a treasure trove of last \n' +
            'season\'s clothes and accessories, as well as storage \n' +
            'space. You can always lock the door with your card, but it \n' +
            'is not impenetrable. You don\'t want to find out what \n' +
            'happens when it breaks with you in it...',
        },
        {
          move_name: '...Ya Lookin\'?',
          description: 'When you make an entrance or create a \n' +
            'scene, roll +Swag. On a 10+, choose two from the list \n' +
            'below. On a 7-9, The Mall chooses one for you. On a miss, \n' +
            'your cry for attention is deemed gauche, unbecoming, and \n' +
            '"not a good look":',
          bullets: [
            {description: ' You draw all eyes to you; you gain the spotlight.'},
            {description: ' You leave people in awe or stunned silence.'},
            {description: ' You elicit a strong emotion among the masses.'},
          ],
        },
        {
          move_name: 'Fashion Forward',
          description: 'At the start of a Spree, change your outfit \n' +
            'via a makeover montage. Announce what (or whom) you\'re \n' +
            'wearing. Every time this planned outfit plays a pivotal role, \n' +
            'you may take +1 forward. However, upon a failure, your  \n' +
            'clothes are tarnished, your disguise is blown, or your outfit \n' +
            'is otherwise rendered a garish fashion faux pas.',
        },
        {
          move_name: 'Are Those The Chanel Boots?',
          description: 'When you Peruse For Clues \n' +
            'about someone in view, roll +Shop instead, as you read \n' +
            'them to sh*t via their fashion choices. Additionally, \n' +
            'regardless of your roll, you notice something about their \n' +
            'outfit in addition to your questions.',
        },
        {
          move_name: 'It\'s Called Camp',
          description: 'When you roll 2 1\'s on a +Slick roll, you can \n' +
            'treat it as a success as The Aesthetic alters reality to \n' +
            'protect your image. Only fellow mallgoers see your \n' +
            'mistake for the flop it really was. ',
        },
        {
          move_name: 'Niche Internet Microcelebrity',
          description: 'You finally get your hands on \n' +
            'a smart phone! It has all the usual bells and whistles, but \n' +
            'most importantly, it can access the MallNet social media \n' +
            'platform. You may use it to gain info, compose posts, or \n' +
            'communicate. You have a small following to start off with.',
        },
        {
          move_name: 'Smart Shopper',
          description: 'You gain Deluxe Shop \'Til You Drop. If you \n' +
            'already have it, partial successes are now rounded up to a \n' +
            'success.',
        },
      ]
    },
    {
      name: 'The Mall Rat',
      stats: {
        savvy: 0,
        slick: 0,
        swag: 1,
        strong: 1,
        shop: -1
      },
      quote: 'Who cares what The Mall Sentinels think? We\'re breaking out \n' +
        'of this place anyway. Now, give me a boost, I wanna spray paint \n' +
        'a unibrow on that poster up there.',
      description_header: 'Cause Problems On Purpose',
      description: 'Looking to dive headfirst into a life of chaos and mischief? If \n' +
        'so, The Mall Rat playbook is made just for you!\n' +
        ' As a Mall Rat, you can expect a high-risk, unpredictable play \n' +
        'style. Of your fellow mallgoers, you\'ll be the one to act first and \n' +
        'think later, creating hilariously sticky situations and earning \n' +
        'Trouble Tokens in the process.\n' +
        ' Trouble Tokens can be used to keep the mayhem going, either \n' +
        'by giving you a +1 to rolls or by introducing a new way to "roll" \n' +
        'entirely: the flip of a coin. These moves have a 50/50 shot at a \n' +
        'big win—or big trouble.\n' +
        ' So who is The Mall Rat? The Mall Rat is a kid, teen, or similarly \n' +
        'immature young adult set loose upon The Mall. They\'re \n' +
        'incredibly impulsive and perhaps not the smartest, but what \n' +
        'they lack in self-moderation they make up for with bravado.\n' +
        ' The Mall Rat is all about breaking rules, causing a stir, and \n' +
        'smashing their way through a problem with the precision of a \n' +
        'bulldozer. If stories of defying authority and letting loose \n' +
        'sound like fun to you, this is just the playbook for that.',
      move_num: "two",
      options: [
        {
          move_name: 'Live Fast Die Young',
          description: 'You get your hands on some sick \n' +
            'wheels. Add a one-person vehicle to your items. \n' +
            'Additionally, you can now spend a Trouble Token to hot\n' +
            'wire golf carts, segways, and other vehicles in The Mall. To \n' +
            'do so, flip the coin. On heads, the engine roars to life. On \n' +
            'tails, there\'s a cloud of smoke. ',
        },
        {
          move_name: 'You\'re Too Slow',
          description: 'You may spend a Trouble Token to \n' +
            'attempt to dodge an attack. Flip the coin. On heads, you \n' +
            'dodge entirely and get a chance to flame your opponent. \n' +
            'On tails, you still take harm but get a good hit on them as \n' +
            'well.',
        },
        {
          move_name: 'Mash It Up',
          description: 'When you decide it\'s time to let loose and \n' +
            'break things, roll +Slick.',
          bullets: [
            {
              name: 'Scatter',
              description: 'Your display of violence and vandalism scares \n' +
                'off regular denizens nearby.'
            },
            {
              name: 'Obstacle',
              description: 'You leave behind a significant amount of \n' +
                'rubble, slowing down or stopping anyone from \n' +
                'following you.'
            },
            {
              name: 'Jackpot',
              description: 'You gain access to or find an object hidden \n' +
                'within what is now smashed up.'
            },
            {
              name: 'Attention',
              description: 'You get the attention of The Mall, whether \n' +
                'for better or for worse.'
            },
          ],
        },
        {
          move_name: 'Rats\' Cant',
          description: 'You\'re well-versed in the art of graffiti as a \n' +
            'means of sending a message. When you encounter graffiti \n' +
            'or wish to leave your own, roll +Slick.',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'You \n' +
                'decipher its meaning or craft a clear message for other \n' +
                'young people.'
            },
            {
              threshold: 'On a 7-9',
              outcome: ' you understand or convey part of \n' +
                'it, but might miss nuances.'
            },
            {
              threshold: 'On a miss',
              outcome: 'It\'s total gibberish.'
            },
          ],
        },
        {
          move_name: 'Secret Stash',
          description: 'You can hide small or medium-sized items in \n' +
            'unconventional places within The Mall, like under loose \n' +
            'floorboards or in empty trash cans. Strangely, you can also \n' +
            'retrieve these items from locations where you never \n' +
            'actually left them...',
        },
        {
          move_name: 'Party Trick',
          description: 'There’s this one cool thing that you can do \n' +
            'sort of well. Choose one from below:',
          choices: [
            {
              name: 'Hypermobility',
              description: 'You’re very flexible and can dislocate \n' +
                'parts of your body, making it easy to slip out of \n' +
                'restraints or into small spaces.'
            },
            {
              name: 'Swim Lungs',
              description: 'You can hold your breath for a Very \n' +
                'Long Time. Helpful for bad smells or hiding.'
            },
            {
              name: 'Impressionist',
              description: 'You’re good at doing impressions. \n' +
                'Well... Good enough to try fooling someone with a \n' +
                '+Slick roll.'
            },
            {
              name: 'Presto',
              description: 'You’re a novice magician and know a few \n' +
                'magic tricks of choice. Add assorted magic supplies \n' +
                'to your items.'
            },
          ]
        },
        {
          move_name: 'Scrappy',
          description: 'You\'re used to scraped knees and broken bones. \n' +
            'Choose one from below:',
          choices: [
            {name: null, description: 'Gain 1 Block'},
            {description: 'Gain 1 Return'},
          ]
        },
      ]
    },
    {
      name: 'The Mallmancer',
      stats: {
        savvy: 1,
        slick: 0,
        swag: -1,
        strong: 0,
        shop: 1
      },
      quote: 'A little bit of "Lost" here... add a dash of "Hot" right there..... \n' +
        'maybe even a smidge of "Fast?" This isn\'t a science, but I think \n' +
        'this should do the trick and revive the melted Dairy Queen.',
      description_header: 'Cooking Without A Recipe',
      description: ' Tired of structured magic systems? Yearning for a little bit of \n' +
        'chaos? If so, the tag-popping, spell-casting life of The \n' +
        'Mallmancer is just what you need.\n' +
        ' As a Mallmancer, you have the unique ability to bend reality in \n' +
        'teeny tiny ways. Your power is channeled through "tags", small \n' +
        'building blocks of magic that attach themselves to everything \n' +
        'in The Mall. By collecting, combining, and invoking these tags, \n' +
        'you can order up spells that are entirely customizable on the \n' +
        'fly.\n' +
        ' But be warned, the path of a Mallmancer is one of chaos. You \n' +
        'never really know which way your magic will land, with every \n' +
        'spell having the potential to go haywire, or worse, ERROR. Your \n' +
        'best bet is to trust your magic, choose your tags wisely, and \n' +
        'hold on tight to your Spell Catalogue at all costs.\n' +
        ' So who is The Mallmancer? The Mallmancer is someone gifted \n' +
        'with all the power of Mallcana with none of the experience to \n' +
        'wield it safely. Do you lean into the chaos, or do you fear your \n' +
        'own power? Perhaps you seek out the sacred schools of \n' +
        'Mallcana throughout The Mall, searching for answers about \n' +
        'the power taking root within you. Regardless, The Mallmancer \n' +
        'can be anything, and truth be told, that has the potential to be \n' +
        'really f$#%ing terrifying.',
      move_num: "one",
      options: [
        {
          move_name: 'Tag Team',
          description: 'Add a tiny useless trinket of your choosing to \n' +
            'your items. At the start of a Spree, pick a mallgoer and \n' +
            'give them this totem. You have +1 to cast spells on them \n' +
            'or to Step In for as long as they have it on them.',
        },
        {
          move_name: 'Reticketed',
          description: 'You can imbue the properties of a single tag \n' +
            'from your Spell Catalogue to a weapon, article of clothing, \n' +
            'or item, burning the tag in the process. Doing so takes a \n' +
            'bit of time, and depending on the spell, it may come with \n' +
            'unpredictable outcomes. Mark the change on whichever sheet holds\n' +
            ' this item.',
        },
        {
          move_name: 'Gandalf the Gallerist',
          description: 'You have a teacher of Mallcana that \n' +
            'has taken you under their wing; name them, or ask The \n' +
            'Mall for one. When you seek advice, knowledge, or aid \n' +
            'from them, roll +Savvy:',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'You get the wisdom you need.'
            },
            {
              threshold: 'On a 7-9',
              outcome: 'It isn\'t time for you to know, unless you\'re \n' +
                'willing to prove it to them with a Debt.'
            },
            {
              threshold: 'On a miss',
              outcome: 'The message doesn\'t go through, your \n' +
                'teacher is busy, or your request was simply too \n' +
                'bothersome to them.'
            },
          ],
        },
        {
          move_name: 'Zip Zap Zop',
          description: 'You can now Throw Hands with magic by \n' +
            'rolling +Shop instead of +Strong. Your magic counts as 1\n' +
            'harm, far, and obvious + one tag from your Spell \n' +
            'Catalogue, if you wish.',
        },
        {
          move_name: 'More is More',
          description: 'Your Spell Catalogue now can hold 3 tags.',
        },
        {
          move_name: 'Little Big Brother',
          description: 'You learn to conjure security cameras \n' +
            'from the interdimensional Pocket Depot. You may only \n' +
            'have one online at once, but while it\'s active, it\'s feed is \n' +
            'streamed directly to your brain. To order a security camera \n' +
            'on a nearby surface, roll +Shop:',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'You summon a shiny new Sentron Camera, \n' +
                'with 4k video/audio and night vision.'
            },
            {
              threshold: 'On a 7-9',
              outcome: 'You get a meager knockoff, with somewhat \n' +
                'fuzzy video, and no audio.'
            },
            {
              threshold: 'On a miss',
              outcome: 'You conjure up some useless kitschy \n' +
                'gadget from the 90s.'
            },
          ],
        },
        {
          move_name: 'Whispers of The Infinite',
          description: 'When you listen closely to the \n' +
            'entropic vibrations of The Mall, you may spend a favor to \n' +
            'Read The Room about something you cannot see or \n' +
            'cannot know.',
        },
      ]
    },
    {
      name: 'The Part-Timer',
      stats: {
        savvy: 1,
        slick: -1,
        swag: 0,
        strong: 1,
        shop: 0
      },
      quote: 'Welcome to Benny\'s Burger Bonanza, home of Benny\'s \n' +
        'Bonanza Burger, what would you like to order? \'A Benny\'s \n' +
        'Bonanza Burger,\' you say? Daring, aren\'t we... That\'ll be $6.49.',
      description_header: 'Working 9 to... 1',
      description: ' Like working odd jobs in TTRPG\'s? Enjoy earning Favors almost \n' +
        'as much as you like calling them in? If so, The Part-Timer is \n' +
        'the perfect playbook for getting your hands dirty.\n' +
        ' As a Part-Timer, you\'re not used to being a hero. You live a life \n' +
        'of mundane tasks and thankless work, but here, you serve a \n' +
        'unique role in the food chain of The Mall. Without people like \n' +
        'you, the world doesn\'t spin.\n' +
        ' Your power is not magic, but rather sheer willpower and \n' +
        'determination. When you take on a new job, you\'ll gain some \n' +
        'perks to help you in your current Spree, as well as a Favor \n' +
        'earned at the end of a job well-done. By choosing your new job \n' +
        'wisely and doing things by the book, you can rake in Favors for \n' +
        'you and your party, a resource in The Mall worth its weight in \n' +
        'gold.\n' +
        ' So who is The Part-Timer? The Part-Timer is a nobody. You \n' +
        'blend in just about everywhere, and the same phenomena that \n' +
        'fools people into thinking they can talk down to you also gives \n' +
        'them loose lips about things you perhaps shouldn\'t hear. \n' +
        'Welcome to The Mall, Part-Timer, we\'ve truly been needing you.',
      move_num: "two",
      options: [
        {
          move_name: 'And My Brother, Luigi',
          description: 'You can always convince your boss \n' +
            'that a task requires another hire, and you have just the \n' +
            'person in mind. You can temporarily give a willing mallgoer \n' +
            'Work The System for the same job as you.',
        },
        {
          move_name: 'The Spirit of Customer Service',
          description: 'When interacting with the \n' +
            'general public en masse, you can spend one Favor to be \n' +
            'taken over by the Spirit of Customer Service. It often says \n' +
            'the right thing, it hardly ruffles any feathers, and it leaves \n' +
            'your mouth smelling of mint. Choose one:',
          bullets: [
            {
              description: 'You make your point abundantly clear, and are \n' +
                'incredibly direct and communicative. If you aren\'t lying, \n' +
                'you are believed, and dare I say, trusted.'
            },
            {
              description: 'You come off as an authoritative voice. People listen to \n' +
                'your commands with more respect than you\'re used to, \n' +
                'and provided it doesn\'t harm them, they will do what \n' +
                'you ask.'
            },
            {
              description: 'You de-escalate a negative emotion with grace and \n' +
                'poise. Everyone involved is left calm. Violence is the \n' +
                'furthest thing in their minds (for now).'
            }
          ]
        },
        {
          move_name: 'For You, Kid, Anything',
          description: 'For the cost of two Favors, you can \n' +
            'wipe away a single Debt, no questions asked. Additionally, \n' +
            'you can take on another mallgoer’s Debt or transfer Favor\'s \n' +
            'earned from a job to somebody else.',
        },
        {
          move_name: 'Nobody, Nobody',
          description: 'People hardly pay you any mind. \n' +
            'Whenever you roll to Be The Wallflower, roll +Slick instead \n' +
            'of +Swag. Additionally, when in some kind of work uniform, \n' +
            'you get a +1 to Be The Wallflower rolls, as you blend in as a \n' +
            'fixture of The Mall.',
        },
        {
          move_name: 'Just Doing My Job',
          description: 'When rolling to do something \n' +
            'specifically within your new job description, take +1 to any \n' +
            'associated rolls. Once you miss, this move goes offline for \n' +
            'this job and you\'ll get reprimanded if your supervisor was \n' +
            'watching.',
        },
        {
          move_name: ' \'Til Debt Do Us Part',
          description: 'Add an extra box to your Debt track. \n' +
            'Collectors will now leave you alone until you have 3 Debts.',
        },
        {
          move_name: ' Uncrushable Spirit',
          description: 'It\'s hard to kill someone who\'s already \n' +
            'dead inside. You no longer croak when you hit 6 or more \n' +
            'harm, but rather, on any attack that happens afterwards.',
        },
      ]
    },
    {
      name: 'The Tethered',
      stats: {
        savvy: 1,
        slick: 1,
        swag: -1,
        strong: 0,
        shop: 0
      },
      quote: 'You guys, stop fighting! I hate it when you guys fight! it makes \n' +
        'me feel like I\'M fighting with you BOTH, which I WILL BE if you \n' +
        'don\'t CUT IT OUT!',
      description_header: 'Social Butterfly',
      description: 'If the Tethered is right for you, you\'ll likely already feel it. \n' +
        'You\'ve always had a strong connection to the people around \n' +
        'you, whether it be that one best friend you\'ve had forever or a \n' +
        'massive friend group that keeps getting bigger.\n' +
        ' As a Tethered, your kindness is infectious and reality-altering. \n' +
        'Whether or not you felt it on the outside, here you know you \n' +
        'make an impact. The social climate of The Mall is as vibrant as \n' +
        'it is dangerous, and it is up to you to bring your group of \n' +
        'mallgoers together to get through this in one piece.\n' +
        ' Your power lies in your tethers, shimmering, nearly invisible \n' +
        'threads of fate tying you and your allies together. With them, \n' +
        'you can will your friends to stay alive and be their best selves.\n' +
        ' So, who is The Tethered? The Tethered is a person that loves \n' +
        'people. They want those that they care about to be the best \n' +
        'they can be, and if that requires magical intercession, well, \n' +
        'cest la vie. You are willing to do what you can to form a bond \n' +
        'between you and these other mallgoers, and with time, you\'ll \n' +
        'find that the double-edged sword of empathy can be a weapon \n' +
        'worth using.',
      move_num: "one",
      options: [
        {
          move_name: 'Cheerleader',
          description: 'You’re excellent at giving emotional support \n' +
            'to those you are tethered to. At the start of a spree, roll \n' +
            '+Slick:',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'You get 2 +1’s to apply to a tethered \n' +
                'mallgoer’s roll after its happened. These may stack, if \n' +
                'you wish.'
            },
            {
              threshold: 'On a 7-9',
              outcome: 'You get +1 to give to a tethered mallgoer.'
            },
            {
              threshold: 'On a miss',
              outcome: 'You get nothing. Sorry.'
            },
          ],
        },
        {
          move_name: ' Jenny, Lady of the Block',
          description: 'You find or purchase an item \n' +
            'shaped like a shield (Though, not necessarily a shield). \n' +
            'This item gives you 1 Block. Additionally, when you wish to \n' +
            'Step In using the shield, you may choose exactly how \n' +
            'much harm to block on a mixed success and above.',
        },
        {
          move_name: 'Bad Vibes',
          description: 'Whenever you cross paths with someone with \n' +
            'evil intentions, you get a chill down your spine.',
        },
        {
          move_name: ' Swapsies',
          description: 'You can invoke a tether to a fellow mallgoer to \n' +
            'swap places with them. When you wish to do so, roll \n' +
            '+Shop.',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'You and your ally swap places \n' +
                'instantaneously. Any restraints that were once on them \n' +
                'are now on you.'
            },
            {
              threshold: 'On a 7-9',
              outcome: 'You and your ally briefly enter a liminal \n' +
                'dimension as you trade places. To outsiders, you are \n' +
                'both gone for 5 minutes.'
            },
            {
              threshold: 'On a miss',
              outcome: 'Choose one: Either the swap fails entirely or \n' +
                'you take 1-harm as you yank forcefully on the tether.'
            },
          ],
        },
        {
          move_name: ' Checkov\'s Chancla',
          description: 'When you use an improvised weapon to \n' +
            'Throw Hands, you roll +Savvy instead of +Strong. ',
        },
        {
          move_name: 'No Strings Attached',
          description: 'You may sever a tether, transforming \n' +
            'it into a 0-harm, far, restraining lasso. It glows the same \n' +
            'color as your aura and exists until the end of the current \n' +
            'spree. You may reattach the tether as long as the tether is \n' +
            'intact',
        },
        {
          move_name: 'Window to the Soul',
          description: 'When you wish to gleam the surface \n' +
            'level thoughts or emotions of a person, roll +Slick:',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'You experience their thoughts and emotions \n' +
                'as if they were your own. Additionally, you may peer \n' +
                'deeper into their mind, but they will feel your presence \n' +
                'and likely disapprove.'
            },
            {
              threshold: 'On a 7-9',
              outcome: 'You get vague emotions, and perhaps the \n' +
                'odd passing thought.'
            },
            {
              threshold: 'On a miss',
              outcome: 'They sense your presence immediately and \n' +
                'force you out of their mind.'
            },
          ],
        },
        {
          move_name: 'Ring Ring',
          description: 'You have tiny toy capsule gifts to give out to \n' +
            'denizens and mallgoers, like mood rings or friendship \n' +
            'bracelets. Those who hold these gifts may be spoken to \n' +
            'telepathically across long-distances, provided there isn\'t \n' +
            'any interference. You have one to start, and can trade \n' +
            'Favors one-for-one to get more.\n',
        }
      ]
    },
    {
      name: 'The Trinketeer',
      stats: {
        savvy: 1,
        slick: -1,
        swag: 0,
        strong: 1,
        shop: 0
      },
      quote: 'Gracie, your blender attachment is coming loose! Those guys \n' +
        'sure did a number on you... Here, hand me the tape and I\'ll fix \n' +
        'that for you. [Beeping] Oh, hush, that\'s what friends are for!',
      description_header: 'Besties!',
      description: 'The world can get lonely sometimes. Even in a place like The \n' +
        'Mall, companionship can be hard to come by. Luckily for The \n' +
        'Trinketeer, you have a built-in bestie... well... a built bestie.\n' +
        ' As a Trinketeer, you awake with a core in your hands, an object \n' +
        'humming with latent power, begging to be awakened with more \n' +
        'items. Take care of your Thingamajig, and it will take care of \n' +
        'you. As you build your Thingamajig and grow in your abilities, \n' +
        'you will assert yourself as a friend of the merchandise lining \n' +
        'the shelves of The Mall.\n' +
        ' The Thingamajig is bound to you, and you to it. By recruiting \n' +
        'items to join the amalgamation, your Thingamajig will change \n' +
        'slightly in the items it can produce. After all, in the \n' +
        'unpredictable cashscape of The Mall of the Infinite, you never \n' +
        'know when a toasted pop-tart can turn the tides.\n' +
        ' So who is The Trinketeer? The Trinketeer is a creative soul, \n' +
        'seeing past appearances and thinking of how things can come \n' +
        'together and sing. You can bring out the best in the things and \n' +
        'people around you, or you could make a mess out of the \n' +
        'mundane. It\'s up to you to toe the line.',
      move_num: "one",
      options: [
        {
          move_name: 'Long Distance Relationship',
          description: ' You establish a link between \n' +
            'you and The Thingamajig, whether it be psychic or through \n' +
            'the use of technology. Whichever medium you choose, you \n' +
            'can use it to see and hear everything The Thingamajig can, \n' +
            'as well as speak with it.',
        },
        {
          move_name: 'Tinker, Tailor',
          description: 'As a Trinketeer, you’re very used to finding \n' +
            'new ways to make items work together. When you attempt \n' +
            'to combine two items, roll +Savvy: ',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'It’s the best of both worlds! The resulting \n' +
                'hybrid item has all the tags of both original items, \n' +
                'except you may modify or throw out one tag.'
            },
            {
              threshold: 'On a 7-9',
              outcome: 'It kind of works! Pick two tags from each \n' +
                'item to mix into the new one.'
            },
            {
              threshold: 'On a miss',
              outcome: 'It’s like skittles and m&m’s. Pick one tag to \n' +
                'keep, The Mall will pick another.'
            },
          ],
        },
        {
          move_name: 'Itemology',
          description: 'When Reading The Room about an item, you \n' +
            'can inspect it more closely than others, or perhaps, even \n' +
            'speak with it. You can always ask these as a free bonus \n' +
            'question:',
          bullets: [
            {
              description: 'What this object has seen or experienced?'
            },
            {
              description: 'Who this object does or doesn’t belong to?'
            },
            {
              description: 'What can this object do beyond the obvious?'
            }
          ]
        },
        {
          move_name: 'Would You Kindly?',
          description: ' You can command The Thingamajig to \n' +
            'do something, whether it would like to or not. If it has to \n' +
            'roll to complete an action, it uses the stats of it’s Trinketeer.',
        },
        {
          move_name: 'Backpack of Holding',
          description: 'You have a bag that can hold an \n' +
            'incredulous amount of items without the weight. As more \n' +
            'items get tossed into its void, it gets more difficult to find \n' +
            'older items, which may require a +Swag roll to retrieve. ',
        },
        {
          move_name: 'Knight in Plastic Armor',
          description: 'Once per spree, The Thingamajig \n' +
            'can become a makeshift mech, tanking all harm to you as \n' +
            'long as it stands and granting you it’s strength. When riding/\n' +
            ' wearing The Thingamajig, you have +1 Strong. Additionally, \n' +
            'you gain an additional effect to Throw Hands on a 7+. If \n' +
            'The Thingamajig shatters, your mech is gone and you take \n' +
            '2-harm from the shattering blow.',
        },
        {
          move_name: 'Get Over Here!',
          description: 'When you wish to call a non-sentient object \n' +
            'to you that isn’t held or affixed to something, roll +Shop: ',
          rolls: [
            {
              threshold: 'On a 10+',
              outcome: 'The item flies into your hand.'
            },
            {
              threshold: 'On a 7-9',
              outcome: 'The item slowly and loudly slides towards you.'
            },
            {
              threshold: 'On a miss',
              outcome: 'The item stays still, shakes in defiance, or \n' +
                'downright flees from you.'
            },
          ],
        }
      ]
    },
    // Add more playbook options as needed
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("YAH • Playbooks");
    // Initialize the checkedOptions array
    this.playbookOptions.forEach(playbook => {
      let pb = new Playbook(playbook.name, playbook.quote, playbook.description_header, playbook.description, playbook.move_num, playbook.stats.savvy, playbook.stats.slick, playbook.stats.swag, playbook.stats.strong, playbook.stats.shop);
      playbook.options.forEach(option => {
        console.log(option.move_name);
        let mv = new Move(option.move_name, option.description)
        this.checkedOptions.push(false); // Initialize checked state for each option
        if (option?.bullets) {
          option.bullets.forEach(bullet => {
            console.log(option.move_name + " --> " + bullet.description);
            let sm = new Submove(bullet.description, bullet.name)
            mv.addBullet(sm)
          });
        }
        if (option?.rolls) {
          option.rolls.forEach(roll => {
            console.log(option.move_name + " --> " + roll.threshold + ": " + roll.outcome);
            let sm = new Submove(roll.outcome, roll.threshold)
            mv.addRoll(sm)
          });
        }
        if (option?.choices) {
          option.choices.forEach(choice => {
            console.log(option.move_name + " --> " + choice.description);
            let sm = null;
            if (choice?.name) {
              sm = new Submove(choice.description, choice.name)
            } else {
              sm = new Submove(choice.description, null)
            }
            mv.addChoice(sm)
          });
        }
        pb.addMove(mv);
      });
      this.playbooks.push(pb)
    });
  }

  selectPlaybook(playbook: any) {
    this.selectedPlaybook = playbook;
  }

  clear() {
    this.moves = [];
  }

  goBack() {
    this.carded = false;
  }

  generateCard() {
    // Logic to collect and process checkbox states
    console.log(this.checkedOptions);
    // You can perform further actions here
    console.log(this.name)
    console.log(this.moves)
    this.carded = true;
    if (this.name === ""){
      this.name = "Unnamed Mallgoer"
    }
    this.printMoves()
  }

  rollDiceWithModifier(stat: string, modifier: number) {
    // Set the modifier for the dice roller component
    this.diceRoller.statRoll(stat, modifier);
    // Optionally, you can also log or handle the stat for further processing
    console.log(`Rolled with ${stat} modifier: ${modifier}`);
  }

  toggleMoveSelection(event: any, move: any) {
    if (event.target.checked) {
      // Add the move to the list if it's checked
      this.moves.push(move);
    } else {
      // Remove the move from the list if it's unchecked
      const index = this.moves.indexOf(move);
      if (index !== -1) {
        this.moves.splice(index, 1);
      }
    }
  }

  isSelected(move: any): boolean {
    // Check if the move is already in the list
    return this.moves.includes(move);
  }

  toggleChoiceSelection(event: any, move: Move, choice: Submove) {
    const checkbox = event.target as HTMLInputElement; // Cast event.target to HTMLInputElement
    const checked = checkbox.checked; // Access the checked property
    // Find the move in the list
    const moveIndex = this.moves.findIndex(item => item.move_name === move.move_name);
    if (moveIndex !== -1) {
      // Find the choice in the move's choices array
      const choiceIndex = this.moves[moveIndex].choices.findIndex(item => item.submove_name === choice.submove_name);
      if (choiceIndex !== -1 && checked) {
        // Add the choice to the chosen list under the move
        this.moves[moveIndex].chosen.push(choice);
      } else if (choiceIndex !== -1 && !checked) {
        // Remove the choice from the chosen list under the move
        const chosenIndex = this.moves[moveIndex].chosen.findIndex(item => item.submove_name === choice.submove_name);
        if (chosenIndex !== -1) {
          this.moves[moveIndex].chosen.splice(chosenIndex, 1);
        }
      }
    }
  }

  isChoiceSelected(move: Move, choice: Submove): boolean {
    // Find the move in the list
    const moveIndex = this.moves.findIndex(item => item.move_name === move.move_name);
    if (moveIndex !== -1) {
      // Check if the choice is in the chosen list under the move
      return this.moves[moveIndex].chosen.some(item => item.desc === choice.desc);
    }
    return false;
  }


  printMoves() {
    console.log("printing moves")
    this.playbookOptions.forEach(playbook => {
      let i = 0;
      if (playbook === this.selectedPlaybook) {
        playbook.options.forEach(option => {
          if (this.checkedOptions[i]) {
            console.log(option.move_name);
          }
          i++;
          if (option?.choices) {
            option.choices.forEach(choice => {
              if (this.checkedOptions[i]) {
                console.log(option.move_name + " --> " + choice.description);
              }
              i++;
            });
          }
        });
      }
    });
  }

  getStatTagColor(statValue: number): string {
    if (statValue >= 3) {
      return 'rgba(249, 190, 68, 1)'; // Green color for value 3 or above
    } else if (statValue === 2) {
      return 'rgba(250, 201, 102, 1)'; // Light green color for value 2
    } else if (statValue === 1) {
      return 'rgba(251, 213, 136, 1)'; // Lighter green color for value 1
    } else if (statValue === 0) {
      return 'rgba(252, 223, 166, 1)'; // Even lighter green color for value 0
    } else if (statValue === -1) {
      return 'rgba(253, 236, 201, 1)'; // Very light green color for value -1
    } else {
      return 'rgba(255, 250, 240, 1)'; // Default color for any other value (red with very low opacity)
    }
  }

  updateStat(stat: string, event: any) {
    const value = parseFloat(event.target.value);
    switch (stat) {
      case 'savvy':
        this.savvy = value;
        break;
      case 'slick':
        this.slick = value;
        break;
      case 'swag':
        this.swag = value;
        break;
      case 'strong':
        this.strong = value;
        break;
      case 'shop':
        this.shop = value;
        break;
    }
  }

  protected readonly Number = Number;
}

export class Playbook {
  title: string;
  quote: string;
  desc_header: string;
  desc: string;
  moves: Move[] = []
  move_num: string;

  // these are stat variables (-1 to 3)
  savvy: number = 0;
  slick: number = 0;
  swag: number = 0;
  strong: number = 0;
  shop: number = 0;

  constructor(title: string, quote: string, desc_header: string, desc: string, move_num: string, savvy: number, slick: number, swag: number, strong: number, shop: number) {
    this.title = title;
    this.quote = quote;
    this.desc_header = desc_header;
    this.desc = desc;
    this.move_num = move_num;
    this.savvy = savvy;
    this.slick = slick;
    this.swag = swag;
    this.strong = strong;
    this.shop = shop;
  }

  addMove(move: Move) {
    this.moves.push(move);
  }

  toString = (): string => {
    let result = "";
    result += this.title + ": "
    for (const move of this.moves) {
      result += move.move_name + ", "
    }
    return result;
  }
}

export class Move {
  move_name: string;
  desc: string;
  bullets: Submove[] = [];
  rolls: Submove[] = [];
  choices: Submove[] = [];
  chosen: Submove[] = [];

  constructor(move_name: string, desc: string) {
    this.move_name = move_name;
    this.desc = desc;
  }

  addBullet(bullet: Submove) {
    this.bullets.push(bullet);
  }

  addRoll(roll: Submove) {
    this.rolls.push(roll);
  }

  addChoice(choice: Submove) {
    this.choices.push(choice);
  }
}

export class Submove {
  submove_name: any;
  desc: string;

  constructor(desc: string, submove_name?: any) {
    this.submove_name = submove_name;
    this.desc = desc;
  }

}
