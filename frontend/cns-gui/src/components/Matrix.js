import '../App.css'
export function Matrix(props, matrix) {


  const matrixData =props.matrix;
  return (
    <div className="matrix">
        <h1 className='heading'>Playfair matrix</h1>
      {matrixData.map((row, index) => (
        <div key={index} className="row">
          {row.map((letter, i) => (
            <div key={i} className="cell">
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
