import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      console.log("runned");
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return (null);
}

export default withRouter(ScrollToTop);