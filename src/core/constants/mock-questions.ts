import { Question } from '../interfaces/question.ts';

export const MOCK_EASY: Question[] = [
  {
    id: 1,
    level: 'easy',
    question: 'What is React?',
    options: [
      'A backend framework',
      'A JavaScript library',
      'A CSS framework',
      'A database',
    ],
    answer: 'A JavaScript library',
  },
  {
    id: 2,
    level: 'easy',
    question: 'Which company developed React?',
    options: ['Google', 'Microsoft', 'Facebook', 'Amazon'],
    answer: 'Facebook',
  },
  {
    id: 3,
    level: 'easy',
    question: 'How do you create a React component?',
    options: [
      'function MyComponent() {}',
      'new Component()',
      'createComponent()',
      'React.create()',
    ],
    answer: 'function MyComponent() {}',
  },
  {
    id: 4,
    level: 'easy',
    question: 'What is JSX?',
    options: [
      'A JavaScript syntax extension',
      'A CSS preprocessor',
      'A database',
      'A JavaScript framework',
    ],
    answer: 'A JavaScript syntax extension',
  },
  {
    id: 5,
    level: 'easy',
    question: 'Which hook is used to add state to a functional component?',
    options: ['useEffect', 'useState', 'useRef', 'useContext'],
    answer: 'useState',
  },
  {
    id: 6,
    level: 'easy',
    question:
      'Which tag is used as a wrapper in JSX if multiple elements are returned?',
    options: ['<div>', '<span>', '<section>', '<Fragment>'],
    answer: '<Fragment>',
  },
  {
    id: 7,
    level: 'easy',
    question: 'Which method is used to render a React component to the DOM?',
    options: [
      'ReactDOM.append()',
      'ReactDOM.create()',
      'ReactDOM.render()',
      'ReactDOM.init()',
    ],
    answer: 'ReactDOM.render()',
  },
  {
    id: 8,
    level: 'easy',
    question: 'What is the default return type of React components?',
    options: ['XML', 'JSX', 'HTML', 'JSON'],
    answer: 'JSX',
  },
  {
    id: 9,
    level: 'easy',
    question:
      'Which hook is used for performing side effects in a functional component?',
    options: ['useState', 'useReducer', 'useEffect', 'useRef'],
    answer: 'useEffect',
  },
  {
    id: 10,
    level: 'easy',
    question: 'What does React use to update the UI efficiently?',
    options: ['Real DOM', 'Shadow DOM', 'Virtual DOM', 'None'],
    answer: 'Virtual DOM',
  },
];

export const MOCK_MEDIUM: Question[] = [
  {
    id: 11,
    level: 'medium',
    question: 'What is the primary purpose of useRef hook?',
    options: [
      'To create local component state',
      'To manipulate the DOM directly',
      'To manage context',
      'To handle side effects',
    ],
    answer: 'To manipulate the DOM directly',
  },
  {
    id: 12,
    level: 'medium',
    question: 'Which hook is used to manage complex state logic in React?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    answer: 'useReducer',
  },
  {
    id: 13,
    level: 'medium',
    question:
      'How can you pass data from a parent component to a child component?',
    options: ['Using state', 'Using props', 'Using context', 'Using events'],
    answer: 'Using props',
  },
  {
    id: 14,
    level: 'medium',
    question: 'What does useEffect return by default?',
    options: ['Nothing', 'A function', 'An object', 'A number'],
    answer: 'Nothing',
  },
  {
    id: 15,
    level: 'medium',
    question: 'Which method is used to handle form submission in React?',
    options: ['handleClick', 'handleSubmit', 'onSubmit', 'handleChange'],
    answer: 'handleSubmit',
  },
  {
    id: 16,
    level: 'medium',
    question: 'How can you conditionally render a component in React?',
    options: [
      'Using an if statement',
      'Using a ternary operator',
      'Using logical &&',
      'All of the above',
    ],
    answer: 'All of the above',
  },
  {
    id: 17,
    level: 'medium',
    question: 'What is the purpose of the key prop in lists?',
    options: [
      'To identify elements uniquely',
      'To improve performance',
      'To avoid rendering issues',
      'All of the above',
    ],
    answer: 'All of the above',
  },
  {
    id: 18,
    level: 'medium',
    question:
      'Which hook is used to consume context in a functional component?',
    options: ['useState', 'useEffect', 'useContext', 'useRef'],
    answer: 'useContext',
  },
  {
    id: 19,
    level: 'medium',
    question:
      'Which lifecycle method is used to fetch data in class components?',
    options: [
      'componentDidMount',
      'componentWillUnmount',
      'componentDidUpdate',
      'render',
    ],
    answer: 'componentDidMount',
  },
  {
    id: 20,
    level: 'medium',
    question: 'What is React.memo used for?',
    options: [
      'To memoize components',
      'To optimize performance',
      'To prevent unnecessary re-renders',
      'All of the above',
    ],
    answer: 'All of the above',
  },
];

export const MOCK_HARD: Question[] = [
  {
    id: 21,
    level: 'hard',
    question: 'What is the purpose of the useCallback hook?',
    options: [
      'To memoize a function',
      'To store previous state',
      'To manage async calls',
      'To modify the component tree',
    ],
    answer: 'To memoize a function',
  },
  {
    id: 22,
    level: 'hard',
    question: 'How does React handle reconciliation?',
    options: [
      'By reloading the entire app',
      'By using keys for comparison',
      'By comparing previous and next Virtual DOM',
      'By storing the previous state',
    ],
    answer: 'By comparing previous and next Virtual DOM',
  },
  {
    id: 23,
    level: 'hard',
    question: 'Which hook should be used for optimizing performance in React?',
    options: ['useMemo', 'useEffect', 'useReducer', 'useState'],
    answer: 'useMemo',
  },
  {
    id: 24,
    level: 'hard',
    question: 'What is the difference between Context API and Redux?',
    options: [
      'Context API is built-in, Redux is external',
      'Redux is more complex',
      'Redux has more features',
      'All of the above',
    ],
    answer: 'All of the above',
  },
  {
    id: 25,
    level: 'hard',
    question: 'How does React handle rendering optimization?',
    options: [
      'By batching state updates',
      'By using React.memo',
      'By using keys efficiently',
      'All of the above',
    ],
    answer: 'All of the above',
  },
  {
    id: 26,
    level: 'hard',
    question: 'What is the difference between useMemo and useCallback?',
    options: [
      'useMemo returns a memoized value, useCallback returns a memoized function',
      'They are the same',
      'useCallback is faster',
      'useMemo is only for JSX',
    ],
    answer:
      'useMemo returns a memoized value, useCallback returns a memoized function',
  },
  {
    id: 27,
    level: 'hard',
    question: 'What is hydration in React?',
    options: [
      'Converting HTML into React elements',
      'Server-side rendering',
      'Merging static and interactive content',
      'Optimizing images',
    ],
    answer: 'Merging static and interactive content',
  },
  {
    id: 28,
    level: 'hard',
    question: 'How does useTransition improve performance?',
    options: [
      'It delays updates',
      'It prioritizes rendering',
      'It reduces re-renders',
      'It does nothing',
    ],
    answer: 'It prioritizes rendering',
  },
  {
    id: 29,
    level: 'hard',
    question: 'What is React Fiber?',
    options: [
      'A new rendering engine',
      'A JavaScript library',
      'A CSS framework',
      'A state management tool',
    ],
    answer: 'A new rendering engine',
  },
  {
    id: 30,
    level: 'hard',
    question: 'How does Suspense work in React?',
    options: [
      'It handles async components',
      'It delays rendering',
      'It works with lazy loading',
      'All of the above',
    ],
    answer: 'All of the above',
  },
];
