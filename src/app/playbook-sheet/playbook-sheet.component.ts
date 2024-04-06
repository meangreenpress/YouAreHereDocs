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
