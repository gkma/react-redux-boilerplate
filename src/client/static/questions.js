const questions = [
  {
    page: 1,
    prompts: [
      {
        ask: 'How many days will you be Los Angeles?',
        options: ['1', '2', '3', '4', '5', '6+']
      },
      {
        ask: 'Are you coming with family or friends?',
        options: ['Family', 'Friends', 'Family & Friends']
      },
      {
        ask: 'Do you prefer activities all-day or half-day?',
        options: ['All Day', 'Half Day']
      }
    ]
  },
  {
    page: 2,
    prompts: [
      'How many wah will you be Los Angeles?',
      'Are you coming with family or friends?',
      'Do you prefer activities all-day or half-day?'
    ]
  },
  {
    page: 3,
    prompts: [
      'How many woo will you be Los Angeles?',
      'Are you coming with family or friends?',
      'Do you prefer activities all-day or half-day?'
    ]
  }
];

export default questions;
