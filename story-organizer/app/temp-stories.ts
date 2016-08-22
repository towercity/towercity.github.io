import { Story } from './story';

//setting as 'any' to avoid a mysterious error
export var STORIES: Story[] = [
  {
    id: 0,
    title: 'From the Sky',
    desc: 'Seven shorts about US bombings; can be expanded with more detail in many parts',
    status: 1,
    series: []
  },
  {
    id: 1,
    title: 'Dick Van Dyke Gets Married',
    desc: "Episode of Dick Van Dyke Show reveals the upset in the center of a woman's life",
    status: 1,
    series: []
  },
  {
    id: 2,
    title: 'Songs About Men',
    desc: 'Lost family gets caught up in racist Konig family drama; reflections on the beautiful future of Detroit',
    status: 0,
    series: [1, 2]
  },
  {
    id: 3,
    title: 'Rhesus Macaque',
    desc: 'When you die in St. Pete, you die in real life',
    status: 2,
    series: [2, 0]
  },
  {
    id: 4,
    title: 'A Sentimental Education for the New American Century',
    desc: 'George Bush, war criminal, learns to paint',
    status: 1,
    series: []
  },
  {
    id: 5,
    title: 'The Times of Plenty Are Over',
    desc: 'Jackie (Konig) tries to help her father keep an eye on her dying aunt, Mary Ellen; Gothic house story',
    status: 1,
    series: [1]
  },
  {
    id: 6,
    title: 'Uncle Konig Kills an Indian',
    desc: 'Uncle K leads a group of misfit across the Deep South on a trail of lies',
    status: 1,
    series: [1]
  },
  {
    id: 7,
    title: 'Sticks of Fire (original)',
    desc: "Weird power imbalance between angsty D-- and unstable J-- comes to a peak when she tries to burn a fountain down in Winthrop Village",
    status: 2,
    series: [0]
  },
  {
    id: 8,
    title: 'Onus of Mystery',
    desc: "Somebody has stolen Joshua's notebook. So she sets out to find it. In next draft, Mr Dracula reluctantly helps her. Mrs Doris just buys her a new one.",
    status: 1,
    series: [1]
  },
  {
    id: 9,
    title: 'Nebraska',
    desc: 'Something evil lurks in wet deserts of west Nebraska; it follows Ilana to a mysterious government compound where she (and many other) try to make their home',
    status: 0,
    series: [2]
  },
  {
    id: 10,
    title: "Ernest Hemingway's Purple Wig",
    desc: 'Man sees Hemingway dancing in a purple wig and punches him',
    status: 1,
    series: []
  },
  {
    id: 11,
    title: "'The Monster'",
    desc: "Uncle K's mother gives birth to him (in a pile of dust and ashes), then immediately walks to work at a factory. She enjoys her walk, past the water, but a monster stares at her from across the water. A stranger attempts to help her.",
    status: 2,
    series: [1]
  },
  {
    id: 12,
    title: "'Becoming the Mime'",
    desc: "After a prophecy, separatist exile mother moves her family from Miami to Tacoma, WA; after a series of Theodore Drieser style events, the family learns their separatist movement has been dead for years, and they are nothing more that Americans",
    status: 1,
    series: []
  },
  {
    id: 13,
    title: "Born Again",
    desc: "AKA the dumpster fire story: starts with description of high school boy (and pals) murdering a peer by stabing hi, throwing him into a dumpster, lighting it; middles with investigation style review of him and the victims friendship (think that one Edgar Allen Poe story), rivalry, etc; ends with his desc of how it felt--like he was born again--and theories of why he did it (tho, of course, the narrator questions whether the boy would count as a more reliable source)",
    status: 2,
    series: [0]
  },
  {
    id: 14,
    title: "The Vanishing Peninsula",
    desc: "False essay about Maria Gombr., author of the Dick Fought detective novels. Dick, a lover of words and books but not their contents (in an exageration of commercial bougie book-lovers), finds out records of missing children are being taken from the Miami records office and thrown into a canal; concerned with the loss of documents over th eloss of children, he investigates (w/ Maria's help). Eventually he (and Maria) go missing.",
    status: 2,
    series: []
  },
  {
    id: 15,
    title: "Sticks of Fire, Ch 1",
    desc: 'Selena moves home (after unclear circumstances) to Tampa suburbs, "a city of liars." Her father wants her to get a job. She moves between her past there and the present',
    status: 1,
    series: [0]
  },
  {
    id: 16,
    title: "'The Center of the Universe'",
    desc: 'In post sea rise florida, an (at first unclearly depicted) cat who sleeps on the center of the universe bridge in lithia is discovered by a parade of humans who are pulling up iron from the (new) train tracks to sell for $. One kind member cares for the cat as they take it to sunken Tampa, where it is put down "for its own good": done as a terrifying parade a la Paprika',
    status: 2,
    series: [0]
  },
  {
    id: 17,
    title: "The Revolution",
    desc: "The largest traffic jam in Tampa history, on the Gandy bridge. Jumps between many many people stuck in the traffic, but focuses on three narratives: 1) the anarchist couple (could be cut?); 2) the cops and the crying madonna at the source of the traffic; 3) the undercover lawyers for radio djs who are working on the conspiracy--this narrative should stretch back over the history of the event, detailing the dj feud, hulk hogans connection, Peter theill's financing of this over radical life extension, climaxing in the details of the Reagan revolution and its effects",
    status: 2,
    series: [0]
  },
  {
    id: 18,
    title: "'Suburbs I'",
    desc: "Scott believes that reality is a malleable concept, which is a nice way of saying he's a pathological liar. He was my best friend back in high school, and here's the many ways he lied... His lies are a way of attempting to regain strong, masculine power in the absurdist world of the Tampa housing bubble. In revision, update the stories to be both gayer and more absurd/violent. ",
    status: 1,
    series: [0]
  }
];

export var LIST_IDS: any = {
  status: [
    "Working",
    "Drafted",
    "To-write"
  ],
  series: [
    "Sticks of Fire",
    "Corn",
    "Three Sentimental Novellas"
  ]
}
