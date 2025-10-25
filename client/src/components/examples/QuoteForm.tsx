import QuoteForm from '../QuoteForm';

export default function QuoteFormExample() {
  return <QuoteForm onSubmit={(data) => console.log('Form submitted:', data)} />;
}
