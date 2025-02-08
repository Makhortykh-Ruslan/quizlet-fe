import { Quiz } from '../interfaces/question.ts';

export const MOCK_EASY: Quiz[] = [
  {
    id: 1,
    level: 'easy',
    question: 'What is React?',
    options: [
      { id: '1', name: 'A backend framework' },
      { id: '2', name: 'A JavaScript library' },
      { id: '3', name: 'A CSS framework' },
      { id: '4', name: 'A database' },
    ],
    answer: { id: '2', name: 'A JavaScript library' },
  },
  {
    id: 2,
    level: 'easy',
    question: 'Which company developed React?',
    options: [
      { id: '1', name: 'Google' },
      { id: '2', name: 'Microsoft' },
      { id: '3', name: 'Facebook' },
      { id: '4', name: 'Amazon' },
    ],
    answer: { id: '3', name: 'Facebook' },
  },
  {
    id: 3,
    level: 'easy',
    question: 'How do you create a React component?',
    options: [
      { id: '1', name: 'function MyComponent() {}' },
      { id: '2', name: 'new Component()' },
      { id: '3', name: 'createComponent()' },
      { id: '4', name: 'React.create()' },
    ],
    answer: { id: '1', name: 'function MyComponent() {}' },
  },
  {
    id: 4,
    level: 'easy',
    question: 'What is JSX?',
    options: [
      { id: '1', name: 'A JavaScript syntax extension' },
      { id: '2', name: 'A CSS preprocessor' },
      { id: '3', name: 'A database' },
      { id: '4', name: 'A JavaScript framework' },
    ],
    answer: { id: '1', name: 'A JavaScript syntax extension' },
  },
  {
    id: 5,
    level: 'easy',
    question: 'Which hook is used to add state to a functional component?',
    options: [
      { id: '1', name: 'useEffect' },
      { id: '2', name: 'useState' },
      { id: '3', name: 'useRef' },
      { id: '4', name: 'useContext' },
    ],
    answer: { id: '2', name: 'useState' },
  },
  {
    id: 6,
    level: 'easy',
    question:
      'Which tag is used as a wrapper in JSX if multiple elements are returned?',
    options: [
      { id: '1', name: `<div>` },
      { id: '2', name: `<span>` },
      { id: '3', name: `<section>` },
      { id: '4', name: `<Fragment>` },
    ],
    answer: { id: '4', name: `<Fragment>` },
  },
  {
    id: 7,
    level: 'easy',
    question: 'Which method is used to render a React component to the DOM?',
    options: [
      { id: '1', name: 'ReactDOM.append()' },
      { id: '2', name: 'ReactDOM.create()' },
      { id: '3', name: 'ReactDOM.render()' },
      { id: '4', name: 'ReactDOM.init()' },
    ],
    answer: { id: '3', name: 'ReactDOM.render()' },
  },
  {
    id: 8,
    level: 'easy',
    question: 'What is the default return type of React components?',
    options: [
      { id: '1', name: 'XML' },
      { id: '2', name: 'JSX' },
      { id: '3', name: 'HTML' },
      { id: '4', name: 'JSON' },
    ],
    answer: { id: '2', name: 'JSX' },
  },
  {
    id: 9,
    level: 'easy',
    question:
      'Which hook is used for performing side effects in a functional component?',
    options: [
      { id: '1', name: 'useState' },
      { id: '2', name: 'useReducer' },
      { id: '3', name: 'useEffect' },
      { id: '4', name: 'useRef' },
    ],
    answer: { id: '3', name: 'useEffect' },
  },
  {
    id: 10,
    level: 'easy',
    question: 'What does React use to update the UI efficiently?',
    options: [
      { id: '1', name: 'Real DOM' },
      { id: '2', name: 'Shadow DOM' },
      { id: '3', name: 'Virtual DOM' },
      { id: '4', name: 'None' },
    ],
    answer: { id: '3', name: 'Virtual DOM' },
  },
];

export const MOCK_MEDIUM: Quiz[] = [
  {
    id: 11,
    level: 'medium',
    question: 'What is the primary purpose of useRef hook?',
    options: [
      { id: '1', name: 'To create local component state' },
      { id: '2', name: 'To manipulate the DOM directly' },
      { id: '3', name: 'To manage context' },
      { id: '4', name: 'To handle side effects' },
    ],
    answer: { id: '2', name: 'To manipulate the DOM directly' },
  },
  {
    id: 12,
    level: 'medium',
    question: 'Which hook is used to manage complex state logic in React?',
    options: [
      { id: '1', name: 'useState' },
      { id: '2', name: 'useEffect' },
      { id: '3', name: 'useContext' },
      { id: '4', name: 'useReducer' },
    ],
    answer: { id: '4', name: 'useReducer' },
  },
  {
    id: 13,
    level: 'medium',
    question:
      'How can you pass data from a parent component to a child component?',
    options: [
      { id: '1', name: 'Using state' },
      { id: '2', name: 'Using props' },
      { id: '3', name: 'Using context' },
      { id: '4', name: 'Using events' },
    ],
    answer: { id: '2', name: 'Using props' },
  },
  {
    id: 14,
    level: 'medium',
    question: 'What does useEffect return by default?',
    options: [
      { id: '1', name: 'Nothing' },
      { id: '2', name: 'A function' },
      { id: '3', name: 'An object' },
      { id: '4', name: 'A number' },
    ],
    answer: { id: '1', name: 'Nothing' },
  },
  {
    id: 15,
    level: 'medium',
    question: 'Which method is used to handle form submission in React?',
    options: [
      { id: '1', name: 'handleClick' },
      { id: '2', name: 'handleSubmit' },
      { id: '3', name: 'onSubmit' },
      { id: '4', name: 'handleChange' },
    ],
    answer: { id: '2', name: 'handleSubmit' },
  },
  {
    id: 16,
    level: 'medium',
    question: 'How can you conditionally render a component in React?',
    options: [
      { id: '1', name: 'Using an if statement' },
      { id: '2', name: 'Using a ternary operator' },
      { id: '3', name: 'Using logical &&' },
      { id: '4', name: 'All of the above' },
    ],
    answer: { id: '4', name: 'All of the above' },
  },
  {
    id: 17,
    level: 'medium',
    question: 'What is the purpose of the key prop in lists?',
    options: [
      { id: '1', name: 'To identify elements uniquely' },
      { id: '2', name: 'To improve performance' },
      { id: '3', name: 'To avoid rendering issues' },
      { id: '4', name: 'All of the above' },
    ],
    answer: { id: '4', name: 'All of the above' },
  },
  {
    id: 18,
    level: 'medium',
    question:
      'Which hook is used to consume context in a functional component?',
    options: [
      { id: '1', name: 'useState' },
      { id: '2', name: 'useEffect' },
      { id: '3', name: 'useContext' },
      { id: '4', name: 'useRef' },
    ],
    answer: { id: '3', name: 'useContext' },
  },
  {
    id: 19,
    level: 'medium',
    question:
      'Which lifecycle method is used to fetch data in class components?',
    options: [
      { id: '1', name: 'componentDidMount' },
      { id: '2', name: 'componentWillUnmount' },
      { id: '3', name: 'componentDidUpdate' },
      { id: '4', name: 'render' },
    ],
    answer: { id: '1', name: 'componentDidMount' },
  },
  {
    id: 20,
    level: 'medium',
    question: 'What is React.memo used for?',
    options: [
      { id: '1', name: 'To memoize components' },
      { id: '2', name: 'To optimize performance' },
      { id: '3', name: 'To prevent unnecessary re-renders' },
      { id: '4', name: 'All of the above' },
    ],
    answer: { id: '4', name: 'All of the above' },
  },
];

export const MOCK_HARD: Quiz[] = [
  {
    id: 21,
    level: 'hard',
    question: 'What is the purpose of the useCallback hook?',
    options: [
      { id: '1', name: 'To memoize a function' },
      { id: '2', name: 'To store previous state' },
      { id: '3', name: 'To manage async calls' },
      { id: '4', name: 'To modify the component tree' },
    ],
    answer: { id: '1', name: 'To memoize a function' },
  },
  {
    id: 22,
    level: 'hard',
    question: 'How does React handle reconciliation?',
    options: [
      { id: '1', name: 'By reloading the entire app' },
      { id: '2', name: 'By using keys for comparison' },
      { id: '3', name: 'By comparing previous and next Virtual DOM' },
      { id: '4', name: 'By storing the previous state' },
    ],
    answer: { id: '3', name: 'By comparing previous and next Virtual DOM' },
  },
  {
    id: 23,
    level: 'hard',
    question: 'Which hook should be used for optimizing performance in React?',
    options: [
      { id: '1', name: 'useMemo' },
      { id: '2', name: 'useEffect' },
      { id: '3', name: 'useReducer' },
      { id: '4', name: 'useState' },
    ],
    answer: { id: '1', name: 'useMemo' },
  },
  {
    id: 24,
    level: 'hard',
    question: 'What is the difference between Context API and Redux?',
    options: [
      { id: '1', name: 'Context API is built-in, Redux is external' },
      { id: '2', name: 'Redux is more complex' },
      { id: '3', name: 'Redux has more features' },
      { id: '4', name: 'All of the above' },
    ],
    answer: { id: '4', name: 'All of the above' },
  },
  {
    id: 25,
    level: 'hard',
    question: 'How does React handle rendering optimization?',
    options: [
      { id: '1', name: 'By batching state updates' },
      { id: '2', name: 'By using React.memo' },
      { id: '3', name: 'By using keys efficiently' },
      { id: '4', name: 'All of the above' },
    ],
    answer: { id: '4', name: 'All of the above' },
  },
  {
    id: 26,
    level: 'hard',
    question: 'What is the difference between useMemo and useCallback?',
    options: [
      {
        id: '1',
        name: 'useMemo returns a memoized value, useCallback returns a memoized function',
      },
      { id: '2', name: 'They are the same' },
      { id: '3', name: 'useCallback is faster' },
      { id: '4', name: 'useMemo is only for JSX' },
    ],
    answer: {
      id: '1',
      name: 'useMemo returns a memoized value, useCallback returns a memoized function',
    },
  },
  {
    id: 27,
    level: 'hard',
    question: 'What is hydration in React?',
    options: [
      { id: '1', name: 'Converting HTML into React elements' },
      { id: '2', name: 'Server-side rendering' },
      { id: '3', name: 'Merging static and interactive content' },
      { id: '4', name: 'Optimizing images' },
    ],
    answer: { id: '3', name: 'Merging static and interactive content' },
  },
  {
    id: 28,
    level: 'hard',
    question: 'How does useTransition improve performance?',
    options: [
      { id: '1', name: 'It delays updates' },
      { id: '2', name: 'It prioritizes rendering' },
      { id: '3', name: 'It reduces re-renders' },
      { id: '4', name: 'It does nothing' },
    ],
    answer: { id: '2', name: 'It prioritizes rendering' },
  },
  {
    id: 29,
    level: 'hard',
    question: 'What is React Fiber?',
    options: [
      { id: '1', name: 'A new rendering engine' },
      { id: '2', name: 'A JavaScript library' },
      { id: '3', name: 'A CSS framework' },
      { id: '4', name: 'A state management tool' },
    ],
    answer: { id: '1', name: 'A new rendering engine' },
  },
  {
    id: 30,
    level: 'hard',
    question: 'How does Suspense work in React?',
    options: [
      { id: '1', name: 'It handles async components' },
      { id: '2', name: 'It delays rendering' },
      { id: '3', name: 'It works with lazy loading' },
      { id: '4', name: 'All of the above' },
    ],
    answer: { id: '4', name: 'All of the above' },
  },
];
