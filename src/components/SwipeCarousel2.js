import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ReactSwipe from 'react-swipe';
import useCountRenders from '../hooks/useCountRenders'

const useStyles = makeStyles((theme) => ({
  imgTest: {
    height: 'auto',
    mixBlendMode: 'multiply',
  },
  imgDiv: {
    overflow: 'hidden',
    background: 'rgb(246, 246, 246)',
    paddingBottom: '75%',
    position: 'relative'
  },
  imgDivInner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicationBar: {
    height: 2,
    background: 'rgb(223, 223, 223)',
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20
  },
  indication: {
    height: 2, 
    background: theme.palette.primary.dark,
    transition: 'transform 300ms ease-out'
  }
}));



export default function SwipeCarousel2(props) {
  const classes = useStyles();
  const [currentPos, setCurrentPos] = React.useState(0);
  const indicationBarEl = React.useRef(null);

  const numSlides = props.imgs.length;

  let reactSwipeEl;

  const indicationBarWidth = indicationBarEl.current;
  console.log('indicatoinBarEl', indicationBarWidth && indicationBarWidth.offsetWidth);

  const handlePos = (currentPos) => {
    setCurrentPos(currentPos);
  };

  useCountRenders();

  const carousel = React.useMemo(() => (
    <ReactSwipe
      className="carousel"
      swipeOptions={{
        continuous: false,
        callback: () => handlePos(reactSwipeEl.getPos())
      }}
      ref={el => (reactSwipeEl = el)}
    >
      {props.imgs && props.imgs.map(({ src, alt }, idx) => (
        <div key={idx}>
          <div className={classes.imgDiv}>
            <div className={classes.imgDivInner}>
              <img
                src={src}
                alt={alt}
                key={idx}
                className={classes.imgTest}
              />
            </div>
          </div>
        </div>
      ))}
    </ReactSwipe>
  ), []);
  


  return (
    <div style={{ position: 'relative' }}>
      {carousel}

      <div className={classes.indicationBar}>
        <div style={{ position: 'relative' }}>
          <div className={classes.indication} style={{ width: `${100 / numSlides}%`, transform: `translate(${currentPos * 100}%)` }}></div>
        </div>
      </div>
    </div>
  );
}
