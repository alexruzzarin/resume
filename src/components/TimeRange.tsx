interface TimeRangeProps {
  start: string;
  end?: string;
}
const TimeRange: React.FC<TimeRangeProps> = ({ start, end }) => {
  const [startYear, startMonth] = start.split("-");
  const [endYear, endMonth] = end ? end.split("-") : [];
  return (
    <h6>
      <span>{`${startMonth}/${startYear}`}</span> -{" "}
      <span>{end ? `${endMonth}/${endYear}` : "Present"}</span>
    </h6>
  );
};
export default TimeRange;
