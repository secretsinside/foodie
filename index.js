import ReactDom from 'react-dom/client';

const heading = (<h1>Hello World</h1>);

const root = ReactDom.createRoot(document.getElementById('root-container'));

root.render(heading);