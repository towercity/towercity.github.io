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
    desc: "Somebody has stolen Joshua's notebook. So she sets out to find it.",
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
  }
];

export var LIST_IDS: any = {
  status: [
    "Working",
    "Drafted",
    "To-write"
  ],
  series: [
    "Tampa Stories",
    "Corn",
    "Three Sentimental Novellas"
  ]
}
