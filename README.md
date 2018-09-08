# styled-jsx-globals

React components with [styled-jsx](https://github.com/zeit/styled-jsx), that includes global css-snippets

[![npm version](https://badge.fury.io/js/%40jonasknutsen%2Fstyled-jsx-globals.svg)](https://badge.fury.io/js/%40jonasknutsen%2Fstyled-jsx-globals)

## Install and use
    npm install @jonasknutsen/styled-jsx-globals

---

    import { Normalize } from '@jonasknutsen/styled-jsx-globals'

    const Layout = (props) => (
      <div className='wrapper'>
        <Normalize />
      </div>
    )

    export default Layout

The styles are defined as globals

## Components
### Normalize
    import { Normalize } from '@jonasknutsen/styled-jsx-globals'

Includes [normalize.css v8.0.0](https://github.com/necolas/normalize.css)

### Reset
    import { Reset } from '@jonasknutsen/styled-jsx-globals'

Includes [reset.css v2.0](https://meyerweb.com/eric/tools/css/reset/)

### Sanitize
    import { Sanitize } from '@jonasknutsen/styled-jsx-globals'

Includes [sanitize.css v7.0.3](https://github.com/csstools/sanitize.css)

### SystemFont
    import { SystemFont } from '@jonasknutsen/styled-jsx-globals'

Includes a system font stack, inspired by https://css-tricks.com/snippets/css/system-font-stack/
