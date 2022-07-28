const ArrayBar: React.FC<ArrayBarProps> = (props: ArrayBarProps): React.ReactElement => {
  const { barHeight, barWidth, isToBeSwapped } = props;

  const classNames = isToBeSwapped ? 'array-bar-highlighted': 'array-bar';
  
  return (
      <div className={classNames} style={{ width: `${barWidth}px`, height: `${barHeight}px` }} />
    )
  }
  
  export default ArrayBar;