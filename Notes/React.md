# React
- “ReactJs is a javascript library for building user interfaces”
- Lifecycle of a component breaks down to 4 phases: Initialization, Mounting, Updating, Unmounting

![Lifecycle](../images/Lifecycle.png)

## Lifecycle Methods v16.3 and older

### Initialization
- prep component with initial state and default props
- use constructor() with super() to initialize state
- set defaultProps on component
- example:
```
class ContraMusicPlayer extends React.Component
constructor(props) {
  super(props);
  this.state = {
    volume: 70,
    status: 'pause'
  }
}
ContraMusicPlayer.defaultProps = {
  theme: 'dark'
};
```

### Mounting
- phase provides hook methods for before/after mounting to the browser DOM (document object model)
1. componentWillMount
  - executed just before the render, only used once before the first rendering
  - used to initialized state and props
2. render
  - mount components to the browser
  - pure: same output every time the same input is provided
3. componentDidMount
  - executed once after the first render from componentWillMount

### Update
- starts when component is on browser and is ready to receive updates
1. shouldComponentUpdate
  - tells React if the state is updated, should this component be re-rendered?
  - for example, only re-render IF props change
  ```  
  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = this.props.status !== nextProps.status;
    return shouldUpdate;
  }
  ```
2. componentWillUpdate
  - after shouldComponentUpdate is true, this preps for the upcoming render method.
3. render
  - render the component to the DOM
4. componentDidUpdate
  - when updated component has been updated to the DOM. Mainly used to re-trigger third-party libraries
5. IF PARENT SENDS PROPS: componentWillReceiveProps
  - triggered if props have changed after the inital render
  - example:
  ```
  componentWillReceiveProps(nextProps) {
    if (this.props.status !== nextProps.status) {
      this.setState({
        status: nextProps.status
      });
    }
  }
  ```

### Unmounting
- if component is not/ no longer needed it will unmount from the DOM
1. componentWillUnmount
  - clean up related to component. e.g. logout
  - example:
  ```
  componentWillUnmount() {
    this.chart.destroy();
    this.resetLocalStorage();
    this.clearSession();
  }
  ```  

## Lifecycle Methods v16.3+
