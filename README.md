# normalize-styled-jsx

React component with [styled-jsx](https://github.com/zeit/styled-jsx), that includes [normalize.css v8.0.0](https://github.com/necolas/normalize.css), [reset.css v2.0](https://meyerweb.com/eric/tools/css/reset/), and [sanitize.css v7.0.3](https://github.com/csstools/sanitize.css).

## Install and use
    npm install @jonasknutsen/normalize-styled-jsx

Choose which css (Normalize, Reset, Sanitize) you want to include
    import { Normalize } from '@jonasknutsen/normalize-styled-jsx'

    const Layout = (props) => (
      <div className='wrapper'>
        <Normalize />
      </div>
    )

    export default Layout

The styles are defined as globals
