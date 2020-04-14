import Paragraph from "./Paragraph";

interface SummaryProps {
  summary: string;
}
const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <>
      {summary.split("\n").map((summaryPart, index) => (
        <Paragraph key={index}>{summaryPart}</Paragraph>
      ))}
    </>
  );
};

export default Summary;
