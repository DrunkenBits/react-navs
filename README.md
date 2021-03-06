# react-tabs-handler
Presentation-less component to build robust tabs.

## The why
This component takes inspiration from [downshift](https://github.com/paypal/downshift) (an awesome component from [Kent C. Dodds](https://github.com/kentcdodds) for dropdown / select / combobox, etc.) and tries to apply the same solution to the tabs problem presented in the ["Compound Components"](https://www.youtube.com/watch?v=hEGg-3pIHlE) talk from [Ryan Florence](https://github.com/ryanflorence) by using the "getter props" pattern instead.

Even if the frontend development experience has evolved positively in the last years, it's still hard to find a good component that does the job, it's flexible yet it's robust enough for production use. The aim of this project is to fill this gap.

## Installation
This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save @cloudwalker/react-tabs-handler
```

> This package also depends on `react` and `prop-types`. Please make sure you
> have those installed as well.

## Usage
```javascript
import React from 'react'
import TabsHandler from 'react-tabs-handler'

const Component = () => {
  return (
    <div>
      <h1>Awesome application</h1>
      <TabsHandler>
        {({getTabProps, getPanelProps}) => {
          const pizzaPanelProps = getPanelProps()
          const sushiPanelProps = getPanelProps()
          const tacosPanelProps = getPanelProps()

          return(
            <div>
              <div className="tab" {...getTabProps()}>pizza</div>
              <div className="tab" {...getTabProps()}>sushi</div>
              <div className="tab" {...getTabProps()}>tacos</div>

              <div
                className="panel"
                {...pizzaPanelProps}
                style={{
                  display: pizzaPanelProps.isActive ? 'block' : 'none',
                }}
              >
                Nothing better than pizza!
              </div>
              <div
                className="panel"
                {...sushiPanelProps}
                style={{
                  display: sushiPanelProps.isActive ? 'block' : 'none',
                }}
              >
                Sushiiii!
              </div>
              <div
                className="panel"
                {...tacosPanelProps}
                style={{
                  display: tacosPanelProps.isActive ? 'block' : 'none',
                }}
              >
                Tacos are good but they can nothing versus Pizza.
              </div>
            </div>
          )
        }}
      </TabsHandler>
    </div>
  )
}
```
