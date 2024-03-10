import './recwimg.css'


interface RectangularWImg {
  img?: string;
  p: string;
  bgColor?: string;
  width?: string;
}

const CardComponent: React.FC<RectangularWImg> = ({ img, p, bgColor, width }) => {
  const cardStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: width || 'auto',
    height: '80px',
    backgroundColor: bgColor || 'transparent',
    margin: '5px',
  };


  return (
    <a className="flex-container rectangularwimg" style={cardStyle} href='#'>
      {img && <img src={img} alt="img" />}
      <p>{p}</p>
    </a>
  );
};

export default CardComponent;
