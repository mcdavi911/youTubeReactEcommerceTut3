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
    height: 5,
    background: 'green',
    position: 'absolute',

    bottom: 20,
    right: 20,
    left: 20
  },
  indication: props => ({
    width: '20%',
    height: 5,
    background: 'red',
    //transform: `translate(${props.position}px)`
  })
}));



const SwipeCarousel = React.memo((props) => {
  let position = 0;
  let numSlides = 0;
  const classes = useStyles();
  //let [currentPos, setCurrentPos] = React.useState(0);
  let reactSwipeEl;
  //let testPos = 0;

  // useRef vllcht?
  console.log('position', position);
  const refPos = React.useRef(0);

  // console.log('imgs here in swipeCarousl', props.imgs);

  useCountRenders();

  /*
  const handlePos = (pos, numSlides) => {
    // setCurrentPos(pos);
    //position = pos;
    refPos.current = pos;
    testPos = pos;
    console.log('pos', pos, 'numSlides', numSlides);
    console.log('prefPos', refPos.current, 'numSlides', numSlides);

    return testPos;
  };

  const testPos = pos => {
    if (pos == null) return 0;
  };
  */



  return (
    <div style={{ position: 'relative' }}>
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          continuous: false,
          callback: () => props.handlePos(reactSwipeEl.getPos())
          //callback: () => handlePos(reactSwipeEl.getPos(), reactSwipeEl.getNumSlides())
          //callback: () => testPos(reactSwipeEl.getPos())
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
        {console.log(refPos.current)}
      </ReactSwipe>
      <div className={classes.indicationBar}>
        <div style={{ position: 'relative' }}>
          <div className={classes.indication} style={{ transform: `translate(${100}px)` }}></div>
        </div>
      </div>
    </div>
  );
});

export default SwipeCarousel;


/*
{imgs && imgs.map(({ src, alt }, idx) => (
  <img
    src={src}
    alt={alt}
    key={idx}
    className={classes.imgTest}
  />
))}




({ imgs }) => {
  const classes = useStyles();
  let [currentPos, setCurrentPos] = React.useState(0);
  let reactSwipeEl;

  useCountRenders();

  const handlePos = pos => {
    setCurrentPos(pos);
  };


  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          continuous: false,
          callback: () => handlePos(reactSwipeEl.getPos())
        }}
        ref={el => (reactSwipeEl = el)}
      >
        {imgs && imgs.map(({ src, alt }, idx) => (
          <img
            src={src}
            alt={alt}
            key={idx}
            className={classes.imgTest}
          />
        ))}

        {

        }
        <div className={classes.pane}>PANE 1</div>
        <div className={classes.pane}>PANE 2</div>
        <div className={classes.pane}>PANE 3</div>
      </ReactSwipe>
    </div>
  )


*/




/*


swipe = React.useMemo((imgs) => (
    <>
      {console.log('imgs here', imgs)}
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          continuous: false,
          callback: () => handlePos(reactSwipeEl.getPos())
        }}
        ref={el => (reactSwipeEl = el)}
      >

        <div style={{ background: 'green', height: 400 }}>
          Test
          <div style={{ background: 'red' }}>123</div>

          {imgs && (
            <img src={imgs[0].src} alt={imgs[0].alt} />
          )}
        </div>

        {
          /*
            {imgs && imgs.map(({ src, alt }, idx) => (
            <img
              src={src}
              alt={alt}
              key={idx}
              className={classes.imgTest}
            />
          ))}

        }

        </ReactSwipe>
        <button onClick={() => reactSwipeEl.next()}>Next</button>
        <button onClick={() => reactSwipeEl.prev()}>Previous</button>
      </>
    ), []);

*/





