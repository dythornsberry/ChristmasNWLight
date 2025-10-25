import Header from '../Header';

export default function HeaderExample() {
  return <Header onGetQuote={() => console.log('Get quote clicked')} />;
}
